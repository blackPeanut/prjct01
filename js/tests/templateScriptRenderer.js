//(function renderTemplatesInDOM() {
//debugger;
function renderTemplatesInDOM() {
    var
        templates = document.querySelectorAll('link[rel=import]'),
        tempLength = templates.length,
        script,
        i;

    for (i = 0; i < tempLength; i += 1) {
        script = templates[i].import.getElementsByTagName("script")[0];
        document.body.appendChild(script.cloneNode(true));
    }

};//)();

