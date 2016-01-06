$(document).ready(function() {
    "use strict";
	$('.Project_Page').animate({
		opacity: 1
	},1000);
    $('#Pacman-Block').mouseenter(function() {
        if (this.clientHeight === 333) {
            $(this).animate({
                height: '+=10px'
            });
        }
    });
    $('#Pacman-Block').mouseleave(function() {
        if (this.clientHeight > 333) {
            var changeInHeight = this.clientHeight - 333;
            $(this).animate({
                height: 'changeInHeight'
            });
        }
    });
	$('#Tower-Defense-Block').mouseenter(function() {
        if (this.clientHeight === 333) {
            $(this).animate({
                height: '+=10px'
            });
        }
    });
    $('#Tower-Defense-Block').mouseleave(function() {
        if (this.clientHeight > 333) {
            var changeInHeight = this.clientHeight - 333;
            $(this).animate({
                height: 'changeInHeight'
            });
        }
    });
});