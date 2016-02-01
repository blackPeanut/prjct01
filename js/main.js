/*global window */
"use strict";
/*
 START HERE ============================================================

1. Render random quote and menu with Hogan from data.js
2. Adjust font size for display according to the filled in text parameters
3. Save body content for template
3. Fade disabler in (need to rewrite this function in css)
4. Wrap quote letters in span iterate thorugh letters array showing each letter 
5. Slide up disabler (need to rewrite in css).
6. Fade in menu
7. Set display: block for main content area
*/

var 
    homepage;
    
window.addEventListener("click", function (event) {
  var
      e = event || window.event;

  if (e.target.className === "mobile-menu-btn") {   
      var element = getEl(".offside-section-tmpl") || getEl(".main-page"); 
      //toggleClass(element, "off-canvas");
      toggleClass(element, "off-canvas");
  }
}, false);


function toggleClass(el, classToToggle) {
  var 
      pattern = new RegExp("(?:^|\\s)" + classToToggle + "(?!\\S)");
      //globalPattern = new RegExp("(?:^|\s)" + classToToggle + "(?!\S)", "g");

  if (el.className.match(pattern)) {
    el.className = el.className.replace(pattern, ""); 
  }
  else {
    el.className += " " + classToToggle; 
  }
}

function getEl(el) {
  if (typeof el === "string") {
      return document.querySelector(el);
  }
  return el;
}

function mainFunction() {
//  flag = false; // fired once

  var
    body = getEl("body"), 
    //save body innerHTML as template; 
    homepage_tmpl = Hogan.compile(document.querySelector("#homepage_tmpl").innerHTML),
    quote_tmpl = Hogan.compile(document.querySelector("#quote_tmpl").innerHTML),
    menu_tmpl = Hogan.compile(document.querySelector("#menu_tmpl").innerHTML);

  body.innerHTML = homepage_tmpl.render();
  getEl(".blockquote").innerHTML = quote_tmpl.render(data.quotes[Math.floor(Math.random() * data.quotes.length)]);
  getEl(".menu").innerHTML = menu_tmpl.render(data);

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

  fadeIn(".disabler", 1000, function () {
    showInvisibles(".main-page"); //ok 
    printQuote();
  }, 300);




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
    
    //wrap quote in span
    quoteText.innerHTML = "<span>" + quoteText.innerHTML.split("").join("</span><span>") + "</span>";
    _showLetterByLetter();

    // _internalFunctions
    function _showLetterByLetter() {
      var
          spans = document.querySelectorAll(".quoteText > span"),
          intervalSpeed = spans.length <= 80 ? 80 : 30,
          currentSpan = 0,
          interval;

      interval = window.setInterval(function () {
          spans[currentSpan].style.color = "white";
          currentSpan += 1;

          if (currentSpan >= spans.length) {
              clearInterval(interval);
              fadeIn(".quoteAuthor", 1000, closeHeaderDisabler);
          }
      }, intervalSpeed);
    }
  }

  function closeHeaderDisabler() {
      slideUp(".disabler", function () {
          showInvisibles(".main", ".footer", ".menu", ".footer");
          fadeIn(".menu", 500, function() {
            homepage = body.innerHTML; 
          });
      }, 100);
  }

  /*
  REUSABLE FUNCTIONS
  ============================================================*/
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

}; //mainFunction


/*
ROUTER
============================================================*/


function renderPageTemplate(pageId) { 
  //render page_tmpl (includes off canvas and desktop menu)
  var 
    page_tmpl = Hogan.compile(getEl("#page_tmpl").innerHTML), 
    pageTmplOutput = page_tmpl.render(data);
  getEl("body").innerHTML = pageTmplOutput;

  //render content
  var 
    content_tmpl = Hogan.compile(getEl("#page_tmpl_content").innerHTML), 
    contentTmplOutput = content_tmpl.render(data.authors[pageId]);
  //getEl(".main-tmpl").innerHTML = contentTmplOutput;
  getEl(".main-tmpl").innerHTML = getEl("#partial_" + pageId).innerHTML;
}

function renderHomepage () {
  getEl("body").innerHTML = homepage;
};

var routes = {
         "/page": {
           "/:pageId": {
             on: function (pageId) { renderPageTemplate(pageId) }
            }
          },
          
         "/": {
           once: function () { mainFunction() },
           before: function () { renderHomepage() }
         }
};

var router = Router(routes);
router.init("/");

/*
var router = Router(routes).configure(options);
var options = { html5history: true, run_handler_in_init: false};
*/

// можно создать once для запуска мейна на определенной локации, потому что при прописывании init("/") получается, что у меня при старте индекса сразу в хеш добавляет #/ и запускает триггер на данный рут. Что есть фигня, и этот триггер должен срабатывать только при возврате на главную стараницу. 
//off canvas menu slider

