'use strict';

$(function(){
    
    let navbar = $('#navbar');
   $(window).scroll(function(){
       
       if (window.scrollY > ($('#main-header').height()/10)) {
        navbar.addClass('shadow');
       }
       
       if (window.scrollY < ($('#main-header').height()/10)) {
        navbar.removeClass('shadow');
       }
       
   });
    
});



