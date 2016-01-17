/*global window */
/* 
LINE 73! HOGAN Compiles
*/
window.onload = function () {
    "use strict";

    function prepareText() {
        var
            quoteText = getEl(".quoteText"),
            quoteAuthor = getEl(".quoteAuthor"),
            quoteObject = famousQuotes.getRandom();

        quoteText.innerHTML = quoteObject.text;
        quoteAuthor.innerHTML = quoteObject.author;
    }

    function adjustScreen() {
        var
            el = getEl(".blockquote"),
            quoteText = getEl(".quoteText"),
            quoteAuthor = getEl(".quoteAuthor"),

            quoteTextFontEm = convertFontToEm(quoteText),
            quoteAuthorFontEm = convertFontToEm(quoteAuthor),
            fontProportion = quoteAuthorFontEm / quoteTextFontEm.toFixed(3);

            console.log(el.clientHeight + "scrollHeight " + el.scrollHeight);

        while (el.clientHeight < el.scrollHeight) {
            quoteTextFontEm -= 0.1;
            quoteText.style.fontSize = quoteTextFontEm + "em";
            quoteAuthor.style.fontSize = (quoteTextFontEm * fontProportion) + "em";
        }
    }

    function showInvisibles(element) {
        var
            el = getEl(element),
            style = window.getComputedStyle(el, null);

            console.log(el);

        if (style.visibility === "hidden") {
            el.style.visibility = "visible";
        } else if (style.display === "none") {
            el.style.display = "block";
            console.log(el + " display value changed to 'block'");
        }
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

            interval = setInterval(function () {
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
            showInvisibles(".main");
            showInvisibles(".footer");
        }, 100);
    }

    /*------------------------------------------------------
    SERVICE FUNCTIONS
    ------------------------------------------------------*/

    function slideUp(element, callback, callbackTimeout) {
        var
            elem = document.querySelector(element),
            elemHeight = parseInt(window.getComputedStyle(elem, null).height),
            cbTimeout = callbackTimeout ? callbackTimeout : 1,
            interval;

        interval = setInterval(function () {
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

        interval = setInterval(function () {
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

    function getEl(el) {
        if (typeof el === "string") {
            return document.querySelector(el);
        }
        return el;
    }

    function convertFontToEm(el) {
        var
            elFont = parseInt(window.getComputedStyle(getEl(el), null).fontSize),//, 10),
            rootFont = parseInt(window.getComputedStyle(getEl("body"), null).fontSize)//, 10);
            var fontSize = elFont / rootFont;
            console.log(elFont / rootFont + "in em");

        return elFont / rootFont;
    }
   
   // START DIS !!!11111
   
    prepareText();
    adjustScreen();
    fadeIn(".disabler", 1000, function () {
      showInvisibles(".main-page");//ok 
      printQuote();
    }, 300);
    //split on parts?????
// TEMPLATING, DISABLED 17.01.2015   
/*
   function createMenuFromTmpl() {
      var desktopTemplate = Hogan.compile(document.querySelector("#menuTemplate").innerHTML);
      var mobileTemplate = Hogan.compile(document.querySelector("#mobileMenuTemplate").innerHTML);
      var outputDesktop = desktopTemplate.render(menuData);
      var outputMobile = mobileTemplate.render(menuData);
      document.querySelector(".desktop-menu-column").innerHTML = outputDesktop;
      document.querySelector("menu").innerHTML = outputMobile;
  }
*/
/*
    setTimeout(function () {
	//renderTemplatesInDom - test feature, should be somewhere else, but now import doesn't load on time;
      renderTemplatesInDOM();
      var data = menuData;
      var template = Hogan.compile(document.querySelector("#menuTemplate").innerHTML);
      var output = template.render(data);
      document.querySelector(".mainNav").innerHTML = output;
    }, 10000);
*/
/*
var flag = false;
var toggle = document.querySelector(".mobile-menu-btn").addEventListener("click", function () {
        var container = document.querySelector(".header-container");
        var menu = document.querySelector("menu");

        if (flag) {
            menu.style.visibility = "hidden";
            container.style.left = "0";
            flag = false;
        }
        else {
            container.style.position = "relative";
            menu.style.visibility = "visible";
            container.style.left = "70%";
            flag = true;
        }

}, false);
*/
};
