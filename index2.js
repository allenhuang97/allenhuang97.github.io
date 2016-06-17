var counter = 0;
var hoverAnimate = [];
$(document).ready(function() {
    "use strict";
    $('#About_Me_Block').mouseenter(function() {
        /*hoverAnimate[0] = true;
        counter = 0;
        changeImg();*/
        $(this).attr("style", "background-image: url(play.gif);");
    });
    $('#About_Me_Block').mouseleave(function() {
       // hoverAnimate[0] = false;
        $(this).attr("style", "background-image: url(play.jpeg);");
     });
 });
/*
function changeImg() {
    $('#About_Me_Block').attr("style", "background-image: url(playGif/frame" + counter + ".gif);");
    counter++;
    if (counter < 32 && hoverAnimate[0]) {
        setTimeout(changeImg, 100);
    } else {
        hoverAnimate[0] = false;
    }
}   */