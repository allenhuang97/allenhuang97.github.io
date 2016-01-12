var PacmanAnimate = 0;
var TowerAnimate = 0;

$(document).ready(function() {
    "use strict";
    $('.Project_Page').animate({
        opacity: 1
    }, 1000);
    $('#Pacman-Block').mouseenter(function() {
        if ($('#Pacman-Block').is(':animated')) {} else {
            PacmanAnimate = 0;
            $(this).animate({
                width: '+=10px'
            });
        }
    });
    $('#Pacman-Block').mouseleave(function() {
        console.log(PacmanAnimate);

        if (PacmanAnimate === 0) {
            console.log("Run");
            PacmanAnimate = 1;
            console.log("After: " + PacmanAnimate);
            $(this).animate({
                width: '-=10px',
            });

        }
    });
    $('#Tower-Defense-Block').mouseenter(function() {
        if ($('#Tower-Defense-Block').is(':animated')) {} else {
            TowerAnimate = 0;
            $(this).animate({
                width: '+=10px'
            });
        }
    });
    $('#Tower-Defense-Block').mouseleave(function() {
        if (TowerAnimate === 0) {
            TowerAnimate = 1;
            $(this).animate({
                width: '-=10px'
            });
        }
    });
});