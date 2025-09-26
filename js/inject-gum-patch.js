(function InjectGUMPatch(global){
    "use strict"

    try {
        var s = document.createElement("script");
        s.src = (typeof chrome != "undefined" && chrome.runtime && chrome.runtime.getURL) ? chrome.runtime.getURL("js/patch-gum.js") : (browser && browser.runtime.getURL("js/patch-gum.js"));
        var target = document.head || document.documentElement;
        target.prepend(s);
    }
    catch (err) {
        // best-effort; ignore
    }
})();
