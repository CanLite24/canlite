(function() {
    var adsenseScript = document.createElement('script');
    adsenseScript.async = true;
    adsenseScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1655414789495559';
    adsenseScript.crossOrigin = 'anonymous';
    document.head.appendChild(adsenseScript);

    adsenseScript.onload = function() {
        var adContainer = document.createElement('ins');
        adContainer.className = 'adsbygoogle';
        adContainer.style.display = 'block';
        adContainer.style.width = '18.2vw';
        adContainer.style.height = '18.2vw';
        adContainer.setAttribute('data-ad-client', 'ca-pub-1655414789495559');
        adContainer.setAttribute('data-ad-slot', '8885226602');

        var scriptContainer = document.querySelector('.script-container');
        if (scriptContainer) {
            scriptContainer.appendChild(adContainer);
            (adsbygoogle = window.adsbygoogle || []).push({});
        }
    };
})();

