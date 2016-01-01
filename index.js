var main = function(){
	"use strict";
	$('#IDAboutMe').fadeTo(1, 0.5);
	$('#IDProjects').fadeTo(1, 0.5);
   $('#IDAboutMe').mouseover(function(){
	    $('#IDAboutMe').fadeTo(1, 1);
   });
   $('#IDAboutMe').mouseleave(function(){
        $('#IDAboutMe').fadeTo(1, 0.5);
    });
   $('#IDProjects').mouseover(function(){
	    $('#IDProjects').fadeTo(1, 1);
   });
   $('#IDProjects').mouseleave(function(){
        $('#IDProjects').fadeTo(1, 0.5);
    });
};
$(document).ready(main);