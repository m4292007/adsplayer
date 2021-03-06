var hasImpression = false;
var VpaidVideoPlayer = function() {
    this.slot_ = null;
    this.videoSlotCanAutoPlay_ = null;
    this.transcodeMute_ = false;
    this.canAutoPlay_ = null;
    this.eventsCallbacks_ = {};
    this.attributes_ = {
        companions: "",
        desiredBitrate: 256,
        duration: 30,
        xmlDuration: 15,
        expanded: false,
        height: 0,
        icons: false,
        linear: true,
        remainingTime: 15,
        skippableState: false,
        viewMode: "normal",
        width: 0,
        volume: 1
    };
    this.intervalId_ = null;
    this.quartileEvents_ = [{
        event: "AdVideoStart",
        value: 0
    }, {
        event: "AdVideoFirstQuartile",
        value: 25
    }, {
        event: "AdVideoMidpoint",
        value: 50
    }, {
        event: "AdVideoThirdQuartile",
        value: 75
    }, {
        event: "AdVideoComplete",
        value: 100
    }];
    this.lastQuartileIndex_ = 0;
    this.parameters_ = {}
};
VpaidVideoPlayer.prototype.initAd = function(t, e, i, o, a, s) {
    this.attributes_["width"] = t;
    this.attributes_["height"] = e;
    this.attributes_["viewMode"] = i;
    this.attributes_["desiredBitrate"] = o;
    this.slot_ = s.slot;
    this.videoSlot_ = s.videoSlot;
    this.videoSlotCanAutoPlay_ = s.videoSlotCanAutoPlay;
    this.parameters_ = a["AdParameters"];
    this.attributes_["xmlDuration"] = this.parameters_.xmlDuration;
    this.transcodeMute_ = a["transcodeMute"];
    this.updateVideoSlot_();
    this.videoSlot_.addEventListener("timeupdate", this.timeUpdateHandler_.bind(this), false);
    this.videoSlot_.addEventListener("ended", this.stopAd.bind(this), false)
};
VpaidVideoPlayer.prototype.onClick_ = function() {
    if ("AdClickThru" in this.eventsCallbacks_) {
        this.eventsCallbacks_["AdClickThru"](this.parameters_.clickThru, 0, true)
    }
};
VpaidVideoPlayer.prototype.onCanPlay_ = function() {
    this.videoSlot_.removeEventListener("canplay", this.onCanPlay_);
    this.videoSlot_.removeEventListener("canplaythrough", this.onCanPlay_);
    this.callEvent_("AdLoaded")
};
VpaidVideoPlayer.prototype.onPlaying_ = function() {
    hasImpression = true;
    this.callEvent_("AdStarted");
    this.callEvent_("AdVideoStart");
    this.callEvent_("AdImpression");
    this.videoSlot_.removeEventListener("playing", this.onPlaying_)
};
VpaidVideoPlayer.prototype.onError_ = function() {
    if (this.videoSlot_.fallBackVideoUrl && hasImpression == false) {
        this.videoSlot_.setAttribute("src", this.videoSlot_.fallBackVideoUrl);
        this.videoSlot_.fallBackVideoUrl = "";
        this.videoSlot_.load()
    } else {
        this.videoSlot_.removeEventListener("error", this.onError_);
        var t = {};
        var e = "";
        var i = "";
        try {
            e = this.videoSlot_.error.code
        } catch (t) {
            e = ""
        }
        try {
            i = this.videoSlot_.error.message
        } catch (t) {
            i = ""
        }
        t.code = e;
        t.message = i;
        var o = "";
        try {
            if (JSON && JSON.stringify) {
                o = JSON.stringify(t)
            }
        } catch (t) {
            o = ""
        }
        this.callEvent_("AdError", o)
    }
};
VpaidVideoPlayer.prototype.timeUpdateHandler_ = function() {
    var t = this.videoSlot_.duration;
    try {
        if (!isNaN(parseFloat(t)) && isFinite(t)) {} else {
            t = this.attributes_["xmlDuration"]
        }
    } catch (e) {
        t = this.attributes_["xmlDuration"]
    }
    this.attributes_["remainingTime"] = t - this.videoSlot_.currentTime;
    if (this.lastQuartileIndex_ >= this.quartileEvents_.length) {
        return
    }
    var e = Math.round(this.videoSlot_.currentTime * 100 / t);
    if (e >= this.quartileEvents_[this.lastQuartileIndex_].value) {
        var i = this.quartileEvents_[this.lastQuartileIndex_].event;
        this.eventsCallbacks_[i]();
        this.lastQuartileIndex_ += 1
    }
    if (this.attributes_["duration"] != t) {
        this.attributes_["duration"] = t;
        this.callEvent_("AdDurationChange")
    }
};
VpaidVideoPlayer.prototype.updateVideoSlot_ = function() {
    if (this.videoSlot_ == null) {
        this.callEvent_("AdError")
    } else {
        this.videoSlot_.addEventListener("canplay", this.onCanPlay_.bind(this), false);
        this.videoSlot_.addEventListener("canplaythrough", this.onCanPlay_.bind(this), false);
        var t = this.parameters_.videoSelected;
        if (!t || !t.url || !t.mimeType) {
            this.callEvent_("AdError")
        } else {
            var e = t.url;
            if (!this.videoSlotCanAutoPlay_) {} else if (t.mimeType == "video/3gpp" || this.transcodeMute_) {
                e = "https://m.lkqd.net/media?format=mp4&vrs=20&url=" + encodeURIComponent(e);
                if (this.transcodeMute_) {
                    e += "&audio=0"
                }
                this.videoSlot_.addEventListener("error", this.onError_.bind(this), false)
            } else {
                this.videoSlot_.addEventListener("error", this.onError_.bind(this), false);
                this.videoSlot_.fallBackVideoUrl = "https://m.lkqd.net/media?format=mp4&vrs=20&url=" + encodeURIComponent(t.url)
            }
            this.videoSlot_.addEventListener("click", this.onClick_.bind(this), false);
            this.videoSlot_.addEventListener("playing", this.onPlaying_.bind(this), false);
            this.videoSlot_.setAttribute("src", e);
            this.videoSlot_.load();
            if (this.videoSlot_.readyState > 3) {
                this.onCanPlay_()
            }
            if (!this.videoSlotCanAutoPlay_) {
                var i = 16 / 9;
                try {
                    if (t.width && t.height && t.width > 10 && t.height > 10) {
                        i = t.width / t.height
                    }
                } catch (t) {}
                this.callEvent_("AdReady", i)
            }
            if (this.videoSlotCanAutoPlay_) {
                setTimeout(function() {
                    try {
                        this.videoSlot_.play()
                    } catch (t) {}
                }, 1e3)
            }
        }
    }
};
VpaidVideoPlayer.prototype.handshakeVersion = function(t) {
    return "2.0"
};
VpaidVideoPlayer.prototype.startAd = function() {
    var t = this.videoSlot_;
    if (!this.videoSlotCanAutoPlay_) {} else {
        if (window.Promise) {
            var e = this.videoSlot_.play();
            if (e !== undefined) {
                e.then(function() {}).catch(function(e) {
                    t.muted = true;
                    t.volume = 0;
                    t.play()
                })
            }
        } else {
            try {
                this.videoSlot_.play()
            } catch (t) {}
        }
    }
    this.callEvent_("AdStarted")
};
VpaidVideoPlayer.prototype.stopAd = function() {
    if (this.intervalId_) {
        clearInterval(this.intervalId_)
    }
    this.videoSlot_.removeEventListener("click", this.onClick_);
    this.callEvent_("AdStopped")
};
VpaidVideoPlayer.prototype.setAdVolume = function(t) {
    this.attributes_["volume"] = t;
    this.videoSlot_.volume = t;
    this.callEvent_("AdVolumeChange")
};
VpaidVideoPlayer.prototype.getAdVolume = function() {
    return this.attributes_["volume"]
};
VpaidVideoPlayer.prototype.resizeAd = function(t, e, i) {
    this.attributes_["width"] = t;
    this.attributes_["height"] = e;
    this.attributes_["viewMode"] = i;
    try {
        this.videoSlot_.setAttribute("width", this.attributes_["width"]);
        this.videoSlot_.setAttribute("height", this.attributes_["height"]);
        this.videoSlot_.style.width = this.attributes_["width"] + "px";
        this.videoSlot_.style.height = this.attributes_["height"] + "px";
        if (typeof i != "undefined" && i.toLowerCase() == "fullscreen") {
            if (this.videoSlot_.webkitEnterFullscreen) {
                this.videoSlot_.webkitEnterFullscreen()
            } else if (this.videoSlot_.enterFullScreen) {
                this.videoSlot_.enterFullScreen()
            } else if (this.videoSlot_.requestFullScreen) {
                this.videoSlot_.requestFullScreen()
            } else if (this.videoSlot_.msRequestFullscreen) {
                this.videoSlot_.msRequestFullscreen()
            } else if (this.videoSlot_.mozRequestFullScreen) {
                this.videoSlot_.mozRequestFullScreen()
            } else if (this.videoSlot_.webkitRequestFullScreen) {
                this.videoSlot_.webkitRequestFullScreen()
            }
        }
    } catch (t) {}
    this.callEvent_("AdSizeChange")
};
VpaidVideoPlayer.prototype.pauseAd = function() {
    this.videoSlot_.pause();
    this.callEvent_("AdPaused");
    if (this.intervalId_) {
        clearInterval(this.intervalId_)
    }
};
VpaidVideoPlayer.prototype.resumeAd = function() {
    if (!this.videoSlotCanAutoPlay_) {} else {
        try {
            this.videoSlot_.play()
        } catch (t) {}
    }
    this.callEvent_("AdPlaying");
    var t = function() {
        this.attributes_["remainingTime"] -= .25;
        this.callEvent_("AdRemainingTimeChange")
    }.bind(this);
    this.intervalId_ = setInterval(t, 250)
};
VpaidVideoPlayer.prototype.expandAd = function() {
    this.attributes_["expanded"] = true;
    if (elem.requestFullscreen) {
        elem.requestFullscreen()
    }
    this.callEvent_("AdExpanded")
};
VpaidVideoPlayer.prototype.getAdExpanded = function() {
    return this.attributes_["expanded"]
};
VpaidVideoPlayer.prototype.getAdSkippableState = function() {
    return this.attributes_["skippableState"]
};
VpaidVideoPlayer.prototype.collapseAd = function() {
    this.attributes_["expanded"] = false
};
VpaidVideoPlayer.prototype.skipAd = function() {
    var t = this.attributes_["skippableState"];
    if (t) {
        this.callEvent_("AdSkipped")
    }
};
VpaidVideoPlayer.prototype.subscribe = function(t, e, i) {
    var o = t.bind(i);
    this.eventsCallbacks_[e] = o
};
VpaidVideoPlayer.prototype.unsubscribe = function(t) {
    this.eventsCallbacks_[t] = null
};
VpaidVideoPlayer.prototype.getAdWidth = function() {
    return this.attributes_["width"]
};
VpaidVideoPlayer.prototype.getAdHeight = function() {
    return this.attributes_["height"]
};
VpaidVideoPlayer.prototype.getAdRemainingTime = function() {
    return this.attributes_["remainingTime"]
};
VpaidVideoPlayer.prototype.getAdDuration = function() {
    return this.attributes_["duration"]
};
VpaidVideoPlayer.prototype.getAdCompanions = function() {
    return this.attributes_["companions"]
};
VpaidVideoPlayer.prototype.getAdIcons = function() {
    return this.attributes_["icons"]
};
VpaidVideoPlayer.prototype.getAdLinear = function() {
    return true
};
VpaidVideoPlayer.prototype.log = function(t) {};
VpaidVideoPlayer.prototype.callEvent_ = function(t, e) {
    if (t in this.eventsCallbacks_) {
        this.eventsCallbacks_[t](e)
    }
};
VpaidVideoPlayer.prototype.muteButtonOnClick_ = function() {
    if (this.attributes_["volume"] == 0) {
        this.attributes_["volume"] = 1
    } else {
        this.attributes_["volume"] = 0
    }
    this.videoSlot_.volume = this.attributes_["volume"];
    this.callEvent_("AdVolumeChange")
};
var getVPAIDAd = function() {
    return new VpaidVideoPlayer
};
