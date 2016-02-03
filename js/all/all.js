var data = {
quotes: [{
            text: "To infinity and beyond!",
            author: "Buzz Lightyear"
         },
         {
            text: "I don't do fear.",
            author: "Raven"
         },
         {
            text: "Just keep swimming.",
            author: "Dory"
         },
         {
            text: "I'm ready, I'm ready, I'm ready.",
            author: "Spoungebob SquarePants"
         },
         {
            text: "Was justice improve age article between. No projection as up preference reasonably delightful celebrated. Preserved and abilities assurance tolerably breakfast use saw. And painted letters forming far village elderly compact. Her rest west each spot his and you knew. Estate gay wooded depart six far her. Of we be have it lose gate bred. Do separate removing or expenses in. Had covered but evident chapter matters anxious.",
            author: "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch"
         },
         {
            text: "Ipsum at sed vel interdum mi. Neque elit erat feugiat etiam vel ac id pede arcu massa vestibulum eget nulla condimentum magnis vitae ut. Nullam erat sed tempus euismod mattis in erat in proin.",
            author: "Letter count: 156"
         },
         {
            text: "Sed ante dignissimos dui turpis deserunt nunc diam diam orci eget donec. Luctus fermentum et faucibus in sit nibh duis sed sollicitudin penatibus vel. Nonummy duis nostra turpis mus bibendum arcu vitae nullam commodo.",
            author: "Letter count: 181"
         },
         {
            text: "Lorem nascetur arcu assumenda iaculis fermentum. Pellentesque lacus erat hic massa augue lacinia et conubia turpis vel quisque vestibulum id maecenas quis vel blandit. Varius etiam fusce neque in volutpat sollicitudin magna quis aenean.",
            author: "Letter count: 200"
         }
],
menuData: [
    {
      "route": "page/1", 
      "authorName": "Page1"
    },
    {
      "route": "page/2", 
      "authorName": "Page2"
    }, 
    {
      "route": "page/3", 
      "authorName": "Page3"
    }, 
    {
      "route": "/", 
      "class": "logo", 
      "authorName": "Home"
    }, 
    {
      "route": "page/4", 
      "authorName": "Page4"
    }, 
    {
      "route": "page/5", 
      "authorName": "Page5"
    }, 
    {
      "route": "page/6", 
      "authorName": "Page6"
    }
  ]
,

authors: {
home: {
  quote: ""
},

1: {
name: "Jack London",
lead: "American novelist, journalist, and social activist. A pioneer in the then-burgeoning world of commercial magazine fiction",
photo: "jacklondon",
books: [
{header: "JLFirstHeader",
text: "JLFirstText"},
{header: "JLSecondHeader",
text: "JLSecondText"},
{header: "JLthirdHeader",
text: "JLThirdText"}
]
},

2: {
name: "Frank Baum",
lead: "American author chiefly known for his children's books, particularly The Wonderful Wizard of Oz",
photo: "frankbaum",
books: [
{header: "FBFirstHeader",
text: "FBFirstText"},
{header: "FBSecondHeader",
text: "FBSecondText"},
{header: "FBthirdHeader",
text: "FBThirdText"}
]
},

3: {
name: "Lewis Carrol",
lead: "English writer, mathematician, logician, Anglican deacon, and photographer.",
photo: "lewiscarroll",
books: [
{header: "LCFirstHeader",
text: "LCFirstText"},
{header: "LCSecondHeader",
text: "LCSecondText"},
{header: "LCThirdHeader",
text: "LCThirdText"}
]
},

4: {
name: "Jules Verne",
lead: "French novelist, poet, and playwright best known for his adventure novels and his profound influence on the literary genre of science fiction.",
photo: "julesverne",
books: [
{header: "JVFirstHeader",
text: "JVFirstText"},
{header: "JVSecondHeader",
text: "JVSecondText"},
{header: "JLthirdHeader",
text: "JVThirdText"}
]
},

5: {
name: "H.G.Wells",
lead: "English writer in many genres, including the novel, history, politics, and social commentary, and textbooks and rules for war games.",
photo: "herbertwells",
books: [
{header: "HGFirstHeader",
text: "HGFirstText"},
{header: "HGSecondHeader",
text: "HGSecondText"},
{header: "HGthirdHeader",
text: "HGThirdText"}
]
},

6: {
name: "Herman Melville",
lead: "American novelist, short story writer, and poet from the American Renaissance period.",
photo: "hermanmelville",
books: [
{header: "HMFirstHeader",
text: "HMFirstText"},
{header: "HMSecondHeader",
text: "HMSecondText"},
{header: "HMThirdHeader",
text: "HMThirdText"}
]
}
}
};


/*global window */
function cacheImage(imgs) {
    "use strict";
    var images = imgs,
        arrayLength = images.length,
        img,
        i;

    for (i = 0; i < arrayLength; i += 1) {
        img = new Image();
        img.src = images[i];
    }
}

if (window.screen.width < 1000) {
    cacheImage(["./img/mobile_background.jpg"]);
} else {
    cacheImage(["./img/desktop_background.jpg"]);
}

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


// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
