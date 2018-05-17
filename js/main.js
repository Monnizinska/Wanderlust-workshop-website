'use strict';

$(function(){
    
    let mainNav = $('#main-nav');
   $(window).scroll(function(){
       
       if (window.scrollY > ($('#main-header').height()/10)) {
           mainNav.addClass('navScroll');
       }
       
       if (window.scrollY < ($('#main-header').height()/10)) {
           mainNav.removeClass('navScroll');
       }
       
   });
    
});

$(".scrollowanie").each(function() {
            
            $($(this)).click(function() {
                $("html, body").animate({
                    scrollTop: $($(this).attr('href')).offset().top - 55
                }, 2000);
            });
        });