function renderPageTemplate(authorId) { 

  //document.querySelector("body").innerHTML = document.querySelector("#page_tmpl").innerHTML; 
  var page_tmpl = Hogan.compile(document.querySelector("#page_tmpl").innerHTML); 
  var pageTmplOutput = page_tmpl.render(data);
  document.querySelector("body").innerHTML = pageTmplOutput;

  //render menu 
  /*
  var menu_tmpl = Hogan.compile(document.querySelector("#menu_tmpl").innerHTML);
  var menuTmplOutput = menu_tmpl.render(data);
  document.querySelector(".off-canvas-menu").innerHTML = menuTmplOutput;
  document.querySelector(".menu-dsk-tmpl").innerHTML = menuTmplOutput;
  */ 
  //render content
  var content_tmpl = Hogan.compile(document.querySelector("#page_tmpl_content").innerHTML); 
  var contentTmplOutput = content_tmpl.render(data.authors[authorId]);
  document.querySelector(".main-tmpl").innerHTML = contentTmplOutput;
};

function renderHomePage () {
/*
  var homepage_tmpl = Hogan.compile(document.querySelector("#homepage_tmpl").innerHTML);
  var homepageTmplOutput = homepage_tmpl.render(data); 
  document.querySelector("body").innerHTML = homepageTmplOutput;
  showInvisibles(".main");
  showInvisibles(".footer");
  showInvisibles(".menu");
  showInvisibles(".main-page");
  document.querySelector(".quoteText").style.color = "white";
  document.querySelector(".quoteAuthor").style.opacity = "1";
*/
  document.querySelector("body").innerHTML = document.querySelector("#homepage_tmpl").innerHTML
  showInvisibles(".main");
  showInvisibles(".footer");
  showInvisibles(".main-page");
  document.querySelector(".quoteText").style.color = "white";
  document.querySelector(".quoteAuthor").style.opacity = "1";
  document.querySelector(".menu").style.opacity = "1";
};


function showInvisibles(element) {
  var
      el = document.querySelector(element),
      style = window.getComputedStyle(el, null);

  if (style.visibility === "hidden") {
      el.style.visibility = "visible";
  } else if (style.display === "none") {
      el.style.display = "block";
      console.log(el + " display value changed to 'block'");
  }
}
        
var routes = {
  "author/:authorId": function (authorId) {renderPageTemplate(authorId)},
  "/": function () {renderHomePage()}
};
var options = {html5history: true, convert_hash_in_init: true};

var router = Router(routes)//.configure(options);
router.init();//("/foo");
//router.setRoute("/");

// можно создать once для запуска мейна на определенной локации, потому что при прописывании init("/") получается, что у меня при старте индекса сразу в хеш добавляет #/ и запускает триггер на данный рут. Что есть фигня, и этот триггер должен срабатывать только при возврате на главную стараницу. 

/*
test feature
var link = document.getElementsByTagName("li")[0];
console.log(link.innerHTML);
link.addEventListener("click", function (ev) {
  console.log(arguments);
  debugger;
  ev.preventDefault();
  router.setRoute("/author/jacklondon");
}, false);
*/
