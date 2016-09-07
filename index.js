$(document).ready(function() {
    "use strict";
    $('#About_Me_Block').mouseenter(function() {
        $(this).attr("style", "background-image: url(resources/about_me.gif);");
    });
    $('#About_Me_Block').mouseleave(function() {
        $(this).attr("style", "background-image: url(resources/about_me.png);");
    });
    $('#My_Projects_Block').mouseenter(function() {
        $(this).attr("style", "background-image: url(resources/project.gif);");
    });
    $('#My_Projects_Block').mouseleave(function() {
        $(this).attr("style", "background-image: url(resources/project.png);");
    });
                  $('#Github_Block').mouseenter(function() {
                                                     $(this).attr("style", "background-image: url(resources/githubBlock.gif);");
                                                     });
                  $('#Github_Block').mouseleave(function() {
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