/* First function for page rendering
var renderMyPrettyAuthor = function (authorId) {
  var template = Hogan.compile(document.querySelector("#paragraphTemplate").innerHTML); //creating template
  var objectNumber = parseInt(authorId.replace(/\D/g, "")) - 1; //make start author ID from #1
  var output = template.render(templateData["authors"][objectNumber][authorId]);
  document.querySelector(".content").innerHTML = output; //input area
};
*/

function renderMyPage(authorId) {
  debugger;
  var contentTemplate = Hogan.compile(document.querySelector("#pageTemplate").innerHTML); 
  var objectNumber = parseInt(authorId.replace(/\D/g, "")) - 1; //make start author ID from #1
  var contentOutput = contentTemplate.render(templateData["authors"][objectNumber][authorId]);
  
  var menuTemplate = Hogan.compile(document.querySelector("#pageMenuTemplate").innerHTML);
  var menuOutput = menuTemplate.render(menuData);
  document.querySelector("body").innerHTML = menuOutput; //input area
  document.querySelector(".wrapper").innerHTML += contentOutput; //input area
}

var routes = {
  "/jacklondon": function() {renderMyPage("id1")},
  "/frankbaum": function() {renderMyPage("id2")},
  "/lewiscarroll": function() {renderMyPage("id3")},
  //"/home": renderMyHomepage("id0"),
  "/julesverne": function() {renderMyPrettyAuthor("id4")},
  "/hgwells": function() {renderMyPrettyAuthor("id5")},
  "/hermanmelville": function () {renderMyPrettyAuthor("id6")}
};

var router = Router(routes);
//router.init();
