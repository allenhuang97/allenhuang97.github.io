var WhatBrokeAnimate = 0;
var PacmanAnimate = 0;
var rspatiotempAnimate = 0;
var charRecogAnimate = 0;
var TowerAnimate = 0;

$(document).ready(function() {
    "use strict";
    $('#Pacman-Block').mouseenter(function() {
        if ($('#Pacman-Block').is(':animated')) {} else {
            PacmanAnimate = 0;
            $(this).animate({
                width: '+=10px'
            });
        }
    });
    $('#Pacman-Block').mouseleave(function() {
        if (PacmanAnimate === 0) {
            PacmanAnimate = 1;
            $(this).animate({
                width: '-=10px',
            });
        }
    });
    $('#WhatBroke-Block').mouseenter(function() {
        if ($('#WhatBroke-Block').is(':animated')) {} else {
            WhatBrokeAnimate = 0;
            $(this).animate({
                width: '+=10px'
            });
        }
    });
    $('#WhatBroke-Block').mouseleave(function() {
        if (WhatBrokeAnimate === 0) {
            WhatBrokeAnimate = 1;
            $(this).animate({
                width: '-=10px',
            });
        }
    });
    $('#rspatiotemp-Block').mouseenter(function() {
        if ($('#rspatiotemp-Block').is(':animated')) {} else {
            rspatiotempAnimate = 0;
            $(this).animate({
                width: '+=10px'
            });
        }
    });
    $('#rspatiotemp-Block').mouseleave(function() {
        if (rspatiotempAnimate === 0) {
            rspatiotempAnimate = 1;
            $(this).animate({
                width: '-=10px'
            });
        }
    });
    $('#charRecog-Block').mouseenter(function() {
        if ($('#charRecog-Block').is(':animated')) {} else {
            charRecogAnimate = 0;
            $(this).animate({
                width: '+=10px'
            });
        }
    });
    $('#charRecog-Block').mouseleave(function() {
        if (charRecogAnimate === 0) {
            charRecogAnimate = 1;
            $(this).animate({
                width: '-=10px'
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