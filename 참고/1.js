function eHost(url) {
    var hostname;
    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2]
    } else {
        hostname = url.split('/')[0]
    }
    hostname = hostname.split(':')[0];
    hostname = hostname.split('?')[0];
    return hostname
}
var va = 'o';
var vb = 'n';
var vc = 's';
var vd = 'h';
var ve = 'x';
var vf = 't';
var vg = 'e';
var vh = 'r';
var vi = 'fflin';
var vj = 'ub';
var vk = 'e';
var vl = 'fac';
var vm = 'p';
var vn = 'vid';
if (!eHost(window.document.referrer).match(vm + va + vh + vb) && 
!eHost(window.document.referrer).match(vf + vj + vg + va + vi) && !eHost(window.document.referrer).match(vd + va + vf + vl + vk) 
&& !eHost(window.document.referrer).match(ve + vn + vg + va)) {
    var vidCustom4 = '';
    if (!window.location.href.toLowerCase().match('coronavirus') && !window.location.href.toLowerCase().match('corona') && 
    !window.location.href.toLowerCase().match('covid') && !window.location.href.toLowerCase().match('virus') && 
    !window.location.href.toLowerCase().match('cuarentena') && !window.location.href.toLowerCase().match('muertes') && 
    !window.location.href.toLowerCase().match('infeccion') && !window.location.href.toLowerCase().match('epidemia') && 
    !window.location.href.toLowerCase().match('pandemia') && !window.location.href.toLowerCase().match('contagi') && 
    !window.location.href.toLowerCase().match('alarma') && !window.location.href.toLowerCase().match('sanidad')) {
        vidCustom4 = 'true'
    } else {
        vidCustom4 = ''
    }(function() {
        var lkqdSettings = {
            pid: 430,
            sid: 1089817,
            playerContainerId: '',
            playerId: '',
            playerWidth: 400,
            playerHeight: 225,
            execution: 'outstream',
            placement: 'slider',
            playInitiation: 'auto',
            slidePosition: 'right',
            volume: 0,
            trackImp: '',
            trackClick: '',
            custom1: '',
            custom2: '',
            custom3: '1.0,1!vidoomy.com,2432,1,,',
            pubMacros: '',
            overrideSize: false,
            dfp: true,
            close: true,
            gdpr: '',
            gdprcs: '', 
            lkqdId: new Date().getTime().toString() + Math.round(Math.random() * 1000000000).toString(),
            supplyContentVideo: {
                url: '',
                clickurl: '',
                play: 'post'
            }
        };
        var lkqdVPAID;
        var creativeData = '';
        var environmentVars = {
            slot: document.getElementById(lkqdSettings.playerContainerId),
            videoSlot: document.getElementById(lkqdSettings.playerId),
            videoSlotCanAutoPlay: true,
            lkqdSettings: lkqdSettings
        };

        function onVPAIDLoad() {
            lkqdVPAID.subscribe(function() {
                lkqdVPAID.startAd()
            }, 'AdLoaded')
        }
        var vpaidFrame = document.createElement('iframe');
        vpaidFrame.id = lkqdSettings.lkqdId;
        vpaidFrame.name = lkqdSettings.lkqdId;
        vpaidFrame.style.display = 'none';
        var vpaidFrameLoaded = function() {
            vpaidFrame.contentWindow.addEventListener('lkqdFormatsLoad', function() {
                lkqdVPAID = vpaidFrame.contentWindow.getVPAIDAd();
                onVPAIDLoad();
                lkqdVPAID.handshakeVersion('2.0');
                lkqdVPAID.initAd(lkqdSettings.playerWidth, lkqdSettings.playerHeight, 'normal', 600, creativeData, environmentVars)
            });
            vpaidLoader = vpaidFrame.contentWindow.document.createElement('script');
            vpaidLoader.setAttribute('async', 'async');
            vpaidLoader.src = 'https://ad.lkqd.net/vpaid/formats.js';
            vpaidFrame.contentWindow.document.body.appendChild(vpaidLoader)
        };
        vpaidFrame.onload = vpaidFrameLoaded;
        vpaidFrame.onerror = vpaidFrameLoaded;
        document.documentElement.appendChild(vpaidFrame)
    })();
    (function() {
        var lkqdSettings = {
            pid: 430,
            sid: 418429,
            playerContainerId: 'intext',
            playerId: '',
            playerWidth: '640',
            playerHeight: '360',
            execution: 'outstream',
            placement: 'incontent',
            playInitiation: 'auto',
            volume: 0,
            trackImp: '',
            trackClick: '',
            custom1: '',
            custom2: '',
            custom3: '1.0,1!vidoomy.com,2432,1,,',
            pubMacros: '',
            dfp: false,
            lkqdId: new Date().getTime().toString() + Math.round(Math.random() * 1000000000).toString()
        };
        var lkqdVPAID;
        var creativeData = '';
        var environmentVars = {
            slot: document.getElementById(lkqdSettings.playerContainerId),
            videoSlot: document.getElementById(lkqdSettings.playerId),
            videoSlotCanAutoPlay: true,
            lkqdSettings: lkqdSettings
        };

        function onVPAIDLoad() {
            lkqdVPAID.subscribe(function() {
                lkqdVPAID.startAd()
            }, 'AdLoaded');
            lkqdVPAID.subscribe(function() {
                lkqdVPAID.pauseAd()
            }, 'AdNotViewable');
            lkqdVPAID.subscribe(function() {
                lkqdVPAID.resumeAd()
            }, 'AdViewable')
        }
        var vpaidFrame = document.createElement('iframe');
        vpaidFrame.id = lkqdSettings.lkqdId;
        vpaidFrame.name = lkqdSettings.lkqdId;
        vpaidFrame.style.display = 'none';
        var vpaidFrameLoaded = function() {
            vpaidFrame.contentWindow.addEventListener('lkqdFormatsLoad', function() {
                lkqdVPAID = vpaidFrame.contentWindow.getVPAIDAd();
                onVPAIDLoad();
                lkqdVPAID.handshakeVersion('2.0');
                lkqdVPAID.initAd(lkqdSettings.playerWidth, lkqdSettings.playerHeight, 'normal', 600, creativeData, environmentVars)
            });
            vpaidLoader = vpaidFrame.contentWindow.document.createElement('script');
            vpaidLoader.setAttribute('async', 'async');
            vpaidLoader.src = 'https://ad.lkqd.net/vpaid/formats.js?pid=430&sid=418429';
            vpaidFrame.contentWindow.document.body.appendChild(vpaidLoader)
        };
        vpaidFrame.onload = vpaidFrameLoaded;
        vpaidFrame.onerror = vpaidFrameLoaded;
        document.documentElement.appendChild(vpaidFrame)
    })();
    (function() {
        var lkqdSettings = {
            pid: 430,
            sid: 690712,
            playerContainerId: '',
            playerId: '',
            playerWidth: 300,
            playerHeight: 200,
            execution: 'outstream',
            placement: 'slider',
            playInitiation: 'auto',
            volume: 0,
            trackImp: '',
            trackClick: '',
            custom1: '',
            custom2: '',
            custom3: '1.0,1!vidoomy.com,2432,1,,',
            pubMacros: '',
            dfp: true,
            lkqdId: new Date().getTime().toString() + Math.round(Math.random() * 1000000000).toString(),
            supplyContentVideo: {
                url: '',
                clickurl: '',
                play: 'post'
            }
        };
        var lkqdVPAID;
        var creativeData = '';
        var environmentVars = {
            slot: document.getElementById(lkqdSettings.playerContainerId),
            videoSlot: document.getElementById(lkqdSettings.playerId),
            videoSlotCanAutoPlay: true,
            lkqdSettings: lkqdSettings
        };

        function onVPAIDLoad() {
            lkqdVPAID.subscribe(function() {
                lkqdVPAID.startAd()
            }, 'AdLoaded')
        }
        var vpaidFrame = document.createElement('iframe');
        vpaidFrame.id = lkqdSettings.lkqdId;
        vpaidFrame.name = lkqdSettings.lkqdId;
        vpaidFrame.style.display = 'none';
        var vpaidFrameLoaded = function() {
            vpaidFrame.contentWindow.addEventListener('lkqdFormatsLoad', function() {
                lkqdVPAID = vpaidFrame.contentWindow.getVPAIDAd();
                onVPAIDLoad();
                lkqdVPAID.handshakeVersion('2.0');
                lkqdVPAID.initAd(lkqdSettings.playerWidth, lkqdSettings.playerHeight, 'normal', 600, creativeData, environmentVars)
            });
            vpaidLoader = vpaidFrame.contentWindow.document.createElement('script');
            vpaidLoader.setAttribute('async', 'async');
            vpaidLoader.src = 'https://ad.lkqd.net/vpaid/formats.js?pid=430&sid=690712';
            vpaidFrame.contentWindow.document.body.appendChild(vpaidLoader)
        };
        vpaidFrame.onload = vpaidFrameLoaded;
        vpaidFrame.onerror = vpaidFrameLoaded;
        document.documentElement.appendChild(vpaidFrame)
    })();
    (function() {
        var lkqdSettings = {
            pid: 430,
            sid: 690712,
            playerContainerId: 'intext',
            playerId: '',
            playerWidth: '',
            playerHeight: '',
            execution: 'outstream',
            placement: 'incontent',
            playInitiation: 'auto',
            volume: 0,
            trackImp: '',
            trackClick: '',
            custom1: '',
            custom2: '',
            custom3: '1.0,1!vidoomy.com,2432,1,,',
            pubMacros: '',
            dfp: false,
            lkqdId: new Date().getTime().toString() + Math.round(Math.random() * 1000000000).toString()
        };
        var lkqdVPAID;
        var creativeData = '';
        var environmentVars = {
            slot: document.getElementById(lkqdSettings.playerContainerId),
            videoSlot: document.getElementById(lkqdSettings.playerId),
            videoSlotCanAutoPlay: true,
            lkqdSettings: lkqdSettings
        };

        function onVPAIDLoad() {
            lkqdVPAID.subscribe(function() {
                lkqdVPAID.startAd()
            }, 'AdLoaded');
            lkqdVPAID.subscribe(function() {
                lkqdVPAID.pauseAd()
            }, 'AdNotViewable');
            lkqdVPAID.subscribe(function() {
                lkqdVPAID.resumeAd()
            }, 'AdViewable')
        }
        var vpaidFrame = document.createElement('iframe');
        vpaidFrame.id = lkqdSettings.lkqdId;
        vpaidFrame.name = lkqdSettings.lkqdId;
        vpaidFrame.style.display = 'none';
        var vpaidFrameLoaded = function() {
            vpaidFrame.contentWindow.addEventListener('lkqdFormatsLoad', function() {
                lkqdVPAID = vpaidFrame.contentWindow.getVPAIDAd();
                onVPAIDLoad();
                lkqdVPAID.handshakeVersion('2.0');
                lkqdVPAID.initAd(lkqdSettings.playerWidth, lkqdSettings.playerHeight, 'normal', 600, creativeData, environmentVars)
            });
            vpaidLoader = vpaidFrame.contentWindow.document.createElement('script');
            vpaidLoader.setAttribute('async', 'async');
            vpaidLoader.src = 'https://ad.lkqd.net/vpaid/formats.js?pid=430&sid=690712';
            vpaidFrame.contentWindow.document.body.appendChild(vpaidLoader)
        };
        vpaidFrame.onload = vpaidFrameLoaded;
        vpaidFrame.onerror = vpaidFrameLoaded;
        document.documentElement.appendChild(vpaidFrame)
    })()
} else {
    var invRef = encodeURI(window.document.referrer);
    const img = document.createElement('img');
    img.src = 'https://ads.vidoomy.com/log/invref.png?fn=paginatest_1099.js&url=' + invRef;
    img.width = 1;
    img.height = 1;
    img.id = 'pxforinvref';
    top.document.body.appendChild(img);
    top.document.getElementById('pxforinvref').style.display = 'none'
};
