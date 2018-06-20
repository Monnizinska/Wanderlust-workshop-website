$(".scroll").each(function() {
            
  $($(this)).click(function() {
      
      $("html, body").animate({
          scrollTop: $($(this).attr('href')).offset().top
      }, 1500);
  });
});
