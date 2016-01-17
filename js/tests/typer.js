prepareText();
adjustScreen();

function getEl(el) {
  if (typeof el === "string") {
      return document.querySelector(el);
  }
  return el;
}

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

      console.log("clientHeight: " + el.clientHeight + ", scrollHeight: " + el.scrollHeight);

  while (el.clientHeight < el.scrollHeight) {
      quoteTextFontEm -= 0.1;
      quoteText.style.fontSize = quoteTextFontEm + "em";
      quoteAuthor.style.fontSize = (quoteTextFontEm * fontProportion) + "em";
  }
}

function convertFontToEm(el) {
  var
      elFont = parseInt(window.getComputedStyle(getEl(el), null).fontSize),//, 10),
      rootFont = parseInt(window.getComputedStyle(getEl("body"), null).fontSize)//, 10);
      var fontSize = elFont / rootFont;
      console.log(elFont / rootFont + "in em");

  return elFont / rootFont;
}
