window.onload=function(){"use strict";function t(){var t=u(".quoteText"),e=u(".quoteAuthor"),n=famousQuotes.getRandom();t.innerHTML=n.text,e.innerHTML=n.author}function e(){var t=u(".blockquote"),e=u(".quoteText"),n=u(".quoteAuthor"),o=c(e),i=c(n),l=i/o.toFixed(3);for(console.log(t.clientHeight+"scrollHeight "+t.scrollHeight);t.clientHeight<t.scrollHeight;)o-=.1,e.style.fontSize=o+"em",n.style.fontSize=o*l+"em"}function n(t){var e=u(t),n=window.getComputedStyle(e,null);console.log(e),"hidden"===n.visibility?e.style.visibility="visible":"none"===n.display&&(e.style.display="block",console.log(e+" display value changed to 'block'"))}function o(){function t(){var t=document.querySelectorAll(".quoteText > span"),e=n(t),o=0,l;l=setInterval(function(){t[o].style.color="white",o+=1,o>=t.length&&(clearInterval(l),r(".quoteAuthor",1e3,i))},e)}function e(t){var e=t.split(""),n="<span>"+e.join("</span><span>")+"</span>";return n}function n(t){var e=t.length;return 80>=e?80:30}var o=u(".quoteText");o.innerHTML=e(o.innerHTML),t()}function i(){l(".disabler",function(){n(".main"),n(".footer")},100)}function l(t,e,n){var o=document.querySelector(t),i=parseInt(window.getComputedStyle(o,null).height),l=n?n:1,r;r=setInterval(function(){i-=3,o.style.height=i+"px",4>=i&&(o.style.height="0px",clearInterval(r),e&&setTimeout(e,l))},1)}function r(t,e,n,o){var i=u(t),l=0,r;r=setInterval(function(){l+=.02,i.style.opacity=l,i.style.opacity>=1&&(clearInterval(r),n&&setTimeout(n,o))},e/50)}function u(t){return"string"==typeof t?document.querySelector(t):t}function c(t){var e=parseInt(window.getComputedStyle(u(t),null).fontSize),n=parseInt(window.getComputedStyle(u("body"),null).fontSize),o=e/n;return console.log(e/n+"in em"),e/n}t(),e(),r(".disabler",1e3,function(){n(".main-page"),o()},300)};