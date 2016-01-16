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
