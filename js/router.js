/*
function renderPageTemplate(authorId) { 
  
  //render page_tmpl (includes off canvas and desktop menu)
  var page_tmpl = Hogan.compile(document.querySelector("#page_tmpl").innerHTML); 
  var pageTmplOutput = page_tmpl.render(data);
  document.querySelector("body").innerHTML = pageTmplOutput;

  //render content
  var content_tmpl = Hogan.compile(document.querySelector("#page_tmpl_content").innerHTML); 
  var contentTmplOutput = content_tmpl.render(data.authors[authorId]);
  document.querySelector(".main-tmpl").innerHTML = contentTmplOutput;
};

function renderHomePage () {
  document.querySelector("body").innerHTML = document.querySelector("#homepage_tmpl").innerHTML
  showInvisibles(".main");
  showInvisibles(".footer");
  showInvisibles(".main-page");
  document.querySelector(".quoteText").style.color = "white";
  document.querySelector(".quoteAuthor").style.opacity = "1";
  document.querySelector(".menu").style.opacity = "1";
};
        
var routes = {
              "author/:authorId": function (authorId) {renderPageTemplate(authorId)},
              "/": function () {renderHomePage()}
};

var options = {html5history: true, convert_hash_in_init: true};
var router = Router(routes)//.configure(options);
router.init();//("/foo");
*/
// можно создать once для запуска мейна на определенной локации, потому что при прописывании init("/") получается, что у меня при старте индекса сразу в хеш добавляет #/ и запускает триггер на данный рут. Что есть фигня, и этот триггер должен срабатывать только при возврате на главную стараницу. 
