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
            
            // event click dla każdego elementu pętli
            $($(this)).click(function() {
                
                //animacja skrolowania z przesunięciem o 60 pikseli aby pasek nawigacji nie zasłaniał tytułu sekcji
                $("html, body").animate({
                    scrollTop: $($(this).attr('href')).offset().top - 55
                }, 2000);
            });
        });