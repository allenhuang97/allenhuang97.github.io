$(document).ready(function(){
	"use strict";
	$('.Project_Tower_Defense').animate({
		opacity: 1
	},1000);
	$('.carousel').slick({
  		centerPadding: '60px',
  		dots: true,
		adaptiveHeight: true,
        slidesToShow: 1,
		initialSlide: 0,
	}); 
});
