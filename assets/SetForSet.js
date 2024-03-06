var activityEvents=["mousedown","mousemove","keydown","scroll","touchstart","click","keypress","touchmove"];
    activityEvents.forEach(function(e){window.addEventListener(e,functionCustomJS,!1)});
let flag = false;
function functionCustomJS(){
if (flag == false) {
    flag = true;
!function(e){window.jdgm=window.jdgm||{},jdgm.CDN_HOST="https://cdn.judge.me/",
jdgm.docReady=function(d){(e.attachEvent?"complete"===e.readyState:"loading"!==e.readyState)?
setTimeout(d,0):e.addEventListener("DOMContentLoaded",d)},jdgm.loadCSS=function(d,t,o,s){
!o&&jdgm.loadCSS.requestedUrls.indexOf(d)>=0||(jdgm.loadCSS.requestedUrls.push(d),
(s=e.createElement("link")).rel="stylesheet",s.class="jdgm-stylesheet",s.media="nope!",
s.href=d,s.onload=function(){this.media="all",t&&setTimeout(t)},e.body.appendChild(s))},
jdgm.loadCSS.requestedUrls=[],jdgm.loadJS=function(e,d){var t=new XMLHttpRequest;
t.onreadystatechange=function(){4===t.readyState&&(Function(t.response)(),d&&d(t.response))},
t.open("GET",e),t.send()},jdgm.docReady((function(){(window.jdgmLoadCSS||e.querySelectorAll(
".jdgm-widget, .jdgm-all-reviews-page").length>0)&&(jdgmSettings.widget_load_with_code_splitting?
parseFloat(jdgmSettings.widget_version)>=3?jdgm.loadCSS(jdgm.CDN_HOST+"widget_v3/base.css"):
jdgm.loadCSS(jdgm.CDN_HOST+"widget/base.css"):jdgm.loadCSS(jdgm.CDN_HOST+"shopify_v2.css"),
jdgm.loadJS(jdgm.CDN_HOST+"loader.js"))}))}(document);

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5HRXJLQ');
var script_loaded=!1;function loadJSscripts(){setTimeout(function(){if(!script_loaded){script_loaded=!0;var t=document.getElementsByTagName("script");for(i=0;i<t.length;i++)null!==t[i].getAttribute("data-src")&&(t[i].setAttribute("src",t[i].getAttribute("data-src")),delete t[i].dataset.src);var e=document.getElementsByTagName("link");for(i=0;i<e.length;i++)null!==e[i].getAttribute("data-href")&&(e[i].setAttribute("href",e[i].getAttribute("data-href")),delete e[i].dataset.href);setTimeout(function(){document.dispatchEvent(new CustomEvent("StartAsyncLoading")),document.dispatchEvent(new CustomEvent("StartKernelLoading"))},400)}},9e3)}function loadJSscriptsNow(){if(!script_loaded){script_loaded=!0;var t=document.getElementsByTagName("script");for(i=0;i<t.length;i++)null!==t[i].getAttribute("data-src")&&(t[i].setAttribute("src",t[i].getAttribute("data-src")),delete t[i].dataset.src);var e=document.getElementsByTagName("link");for(i=0;i<e.length;i++)null!==e[i].getAttribute("data-href")&&(e[i].setAttribute("href",e[i].getAttribute("data-href")),delete e[i].dataset.href);setTimeout(function(){document.dispatchEvent(new CustomEvent("StartAsyncLoading")),document.dispatchEvent(new CustomEvent("StartKernelLoading"))},400)}}var activityEvents=["mousedown","mousemove","keydown","scroll","touchstart","click","keypress","touchmove"];activityEvents.forEach(function(t){window.addEventListener(t,loadJSscriptsNow,!1)}),document.addEventListener("load",loadJSscripts,!1),document.addEventListener("onload",loadJSscripts,!1),null!=window.addEventListener?window.addEventListener("load",loadJSscripts,!1):null!=window.attachEvent?window.attachEvent("onload",loadJSscripts):window.onload=loadJSscripts;}}
function removeLazy(){var myStringArray = document.querySelectorAll('img.removelazyload');var arrayLength = myStringArray.length;if(arrayLength>0){for (var i = 0; i < arrayLength; i++) {myStringArray[i].removeAttribute('loading');}}}removeLazy();window.addEventListener('DOMContentLoaded', (event) => {removeLazy();setTimeout(removeLazy, 1000);setTimeout(removeLazy, 2000);});