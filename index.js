$(document).ready(function() {
    "use strict";
    $('.Home_About_Me').mouseenter(function() {
        $(this).attr("style", "background-image: url(resources/about_me.gif);");
    });
    $('.Home_About_Me').mouseleave(function() {
        $(this).attr("style", "background-image: url(resources/about_me.png);");
    });
    $('.Home_My_Projects').mouseenter(function() {
        $(this).attr("style", "background-image: url(resources/project.gif);");
    });
    $('.Home_My_Projects').mouseleave(function() {
        $(this).attr("style", "background-image: url(resources/project.png);");
    });
    $('.Home_Github').mouseenter(function() {
        $(this).attr("style", "background-image: url(resources/githubBlock.gif);");
    });
    $('.Home_Github').mouseleave(function() {
        $(this).attr("style", "background-image: url(resources/github1.png);");
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