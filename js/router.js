/* First function for page rendering
var renderMyPrettyAuthor = function (authorId) {
  var template = Hogan.compile(document.querySelector("#paragraphTemplate").innerHTML); //creating template
  var objectNumber = parseInt(authorId.replace(/\D/g, "")) - 1; //make start author ID from #1
  var output = template.render(templateData["authors"][objectNumber][authorId]);
  document.querySelector(".content").innerHTML = output; //input area
};
*/

function renderPageTmpl(authorId) {
  //debugger;
  var page_tmpl = Hogan.compile(document.querySelector("#page_tmpl").innerHTML); 
  var objectNumber = parseInt(authorId.replace(/\D/g, "")) - 1; //make start author ID from #1
  var pageTmplOutput = page_tmpl.render(templateData["authors"][objectNumber][authorId]);
  document.querySelector("body").innerHTML = pageTmplOutput;
  
  var menu_tmpl = Hogan.compile(document.querySelector("#menu_tmpl").innerHTML);
  var menuTmplOutput = menu_tmpl.render(menuData);
  document.querySelector(".off-canvas-menu").innerHTML = menuTmplOutput;
  document.querySelector(".menu-dsk-tmpl").innerHTML = menuTmplOutput;
}

var routes = {
  "/jacklondon": function() {renderPageTmpl("id1")},
  "/frankbaum": function() {renderPageTmpl("id2")},
  "/lewiscarroll": function() {renderPageTmpl("id3")},
  //"/home": renderMyHomepage("id0"),
  "/julesverne": function() {renderPageTmpl("id4")},
  "/hgwells": function() {renderPageTmpl("id5")},
  "/hermanmelville": function () {renderPageTmpl("id6")}
};

var router = Router(routes);
router.init();
