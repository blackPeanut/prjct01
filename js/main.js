/*global window */
/* 
LINE 73! HOGAN Compiles
*/

window.onload = function () {
    "use strict";

    function showInvisibles() {
        var 
            arr = Array.apply(null, arguments);
            
        arr.forEach(function (element) {
          var
              el = getEl(element),
              style = window.getComputedStyle(el, null);

          if (style.visibility === "hidden") {
              el.style.visibility = "visible";
          } else if (style.display === "none") {
              el.style.display = "block";
              console.log(el + " display value changed to 'block'");
          }
        });
    }

    function printQuote() {
        var
            quoteText = getEl(".quoteText");

        quoteText.innerHTML = _wrapStringInSpan(quoteText.innerHTML);
        _showLetterByLetter();

        // _internalFunctions
        function _showLetterByLetter() {
            var
                spans = document.querySelectorAll(".quoteText > span"),
                intervalSpeed = _calcIntervalSpeed(spans),
                currentSpan = 0,
                interval;

            interval = window.setInterval(function () {
                spans[currentSpan].style.color = "white";
                currentSpan += 1;
                if (currentSpan >= spans.length) {
                    clearInterval(interval);
		  //          createMenuFromTmpl()
                    fadeIn(".quoteAuthor", 1000, closeHeaderDisabler);
                }
            }, intervalSpeed);
        }

        function _wrapStringInSpan(string) {
            var
                arr = string.split(""),
                wrappedInSpan = "<span>" + arr.join("</span><span>") + "</span>";
            return wrappedInSpan;
        }

        function _calcIntervalSpeed(elements) {
            var
                length = elements.length;

            if (length <= 80) {
                return 80;
            }
            return 30;
        }
    }

    function closeHeaderDisabler() {
        slideUp(".disabler", function () {
            showInvisibles(".main", ".footer", ".menu");
            fadeIn(".menu", 1000);
        }, 100);
    }

    /*------------------------------------------------------
    REUSABLE FUNCTIONS
    ------------------------------------------------------*/

    function slideUp(element, callback, callbackTimeout) {
        var
            elem = document.querySelector(element),
            elemHeight = parseInt(window.getComputedStyle(elem, null).height),
            cbTimeout = callbackTimeout ? callbackTimeout : 1,
            interval;

        interval = window.setInterval(function () {
            elemHeight = elemHeight - 3; elem.style.height = elemHeight + "px";
            if (elemHeight <= 4) {
                elem.style.height = 0 + "px";
                clearInterval(interval);
                if (callback) {
                  setTimeout(callback, cbTimeout); 
                }
            }
        }, 1);
    }


    function fadeIn(element, speed, callback, cbTimeout) {
        var
            el = getEl(element),
            opacityValue = 0,
            interval;
    
        interval = window.setInterval(function () {
            opacityValue += 0.02;
            el.style.opacity = opacityValue;

            if (el.style.opacity >= 1) {
                clearInterval(interval);

                if (callback) {
                    setTimeout(callback, cbTimeout);
                }
            }
        }, speed / 50);
    }

    function convertFontToEm(el) {
        var
            elFont = parseInt(window.getComputedStyle(getEl(el), null).fontSize),//, 10),
            rootFont = parseInt(window.getComputedStyle(body, null).fontSize)//, 10);
            var fontSize = elFont / rootFont;

        return elFont / rootFont;
    }
   
    function getEl(el) {
        if (typeof el === "string") {
            return document.querySelector(el);
        }
        return el;
    }
   



   // START HERE ============================================================

   /*
    1.Render random quote and menu
    2.Adjust font size for display
    3.Fade disabler in (rewrite this function in css)
    4.Type text in
    5. 
    4.Slide up disabler
   */

    //rendering random quote & menu
    var
        body = getEl("body"), 


        quote_tmpl = Hogan.compile(document.querySelector("#quote_tmpl").innerHTML),
        menu_tmpl = Hogan.compile(document.querySelector("#menu_tmpl").innerHTML),

        quoteTmplOutput = quote_tmpl.render(data.quotes[Math.floor(Math.random() * data.quotes.length)]),
        menuTmplOutput = menu_tmpl.render(data);

    getEl(".blockquote").innerHTML = quoteTmplOutput;
    getEl(".menu").innerHTML = menuTmplOutput;
    
        //adjust screen
    var
        blockquote = getEl(".blockquote"),
        quoteText = getEl(".quoteText"),
        quoteAuthor = getEl(".quoteAuthor"),

        quoteTextFontEm = convertFontToEm(quoteText),
        quoteAuthorFontEm = convertFontToEm(quoteAuthor),
        fontProportion = quoteAuthorFontEm / quoteTextFontEm.toFixed(3);

    while (blockquote.clientHeight < blockquote.scrollHeight) {
      quoteTextFontEm -= 0.1;
      quoteText.style.fontSize = quoteTextFontEm + "em";
      quoteAuthor.style.fontSize = (quoteTextFontEm * fontProportion) + "em";
    }
      
    //save body innerHTML as template; 
    var homepage_tmpl = body.innerHTML; 
    
    /*КОЛЛБЭКИ, КОТОРЫЕ БЫЛИ В ФЕЙДИНЕ 
    */
    //debugger;
    fadeIn(".disabler", 1000, function () {
      showInvisibles(".main-page"); //ok 
      printQuote();
    }, 300);

// mobile menu handler;
var flag = true;
document.querySelector(".mobile-menu-btn").addEventListener("click", function () {
        var mainPage = document.querySelector(".main-page");

        if (flag) {
            mainPage.className += " off-canvas";
            flag = false;
        }
        else {
            mainPage.className = "main-page";
            flag = true;
        }

}, false);


/* ==========================================================
ROUTER PART  
============================================================*/

function renderPageTemplate(authorId) { 
  //render page_tmpl (includes off canvas and desktop menu)
  var 
      page_tmpl = Hogan.compile(getEl("#page_tmpl").innerHTML), 
      pageTmplOutput = page_tmpl.render(data);
  body.innerHTML = pageTmplOutput;

  //render content
  var 
      content_tmpl = Hogan.compile(getEl("#page_tmpl_content").innerHTML), 
      contentTmplOutput = content_tmpl.render(data.authors[authorId]);
  getEl(".main-tmpl").innerHTML = contentTmplOutput;
};

function renderHomePage () {
  body.innerHTML = homepage_tmpl;
  showInvisibles(".footer", ".main-page", ".main");
  getEl(".quoteText").style.color = "white";
  getEl(".quoteAuthor").style.opacity = "1";
  getEl(".menu").style.opacity = "1";
};

var routes = {
              "author/:authorId": function (authorId) {renderPageTemplate(authorId)},
              "/": function () {renderHomePage()}
};

var options = {html5history: true, convert_hash_in_init: true};
var router = Router(routes)//.configure(options);
router.init();//("/foo");

// можно создать once для запуска мейна на определенной локации, потому что при прописывании init("/") получается, что у меня при старте индекса сразу в хеш добавляет #/ и запускает триггер на данный рут. Что есть фигня, и этот триггер должен срабатывать только при возврате на главную стараницу. 
//off canvas menu slider

}; // ONLOAD 
