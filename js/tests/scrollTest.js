window.onload = function() {

    console.log("hello");
    var el = document.querySelector(".header"),
        quote = document.querySelector(".quoteText"),
        quoteFont = parseInt(window.getComputedStyle(quote, null).fontSize);

    
    while(el.clientHeight < el.scrollHeight) {
        quoteFont -= 0.01;
        quote.style.fontSize = quoteFont + "em";
    };
    
    // if (el.clientHeight < el.scrollHeight) {
    //     debugger;
    //     quoteFont -= 15;
    //     quote.style.fontSize = quoteFont + "px"; 
    //     continue;
    // }

    console.log(quoteFont);

    function c(element) {
        console.log(element);
    }

    c(el.scrollHeight);
    console.log("client height");
    c(el.clientHeight);

    setTimeout(function() {
        console.log("scrolHeight");
        c(el.scrollHeight);
        console.log("client height");
        c(el.clientHeight);        
    }, 5000)
}
