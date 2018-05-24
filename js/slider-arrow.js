const slideShow = $(".slide-show")
const slideCount = $(".single-slide").length; 
const slideWidth = $(".single-slide").width; 
    
let slideNumber = 0; 

slideShow.css("width", slideCount *  100 + "%");
    
slideShow.find(".single-slide").each(function(index, element){
    $(this).css({
        "width": slideWidth +"%",
        "margin-left": slideWidth 
    })
});


$(".prev-slide").click(function(){
    slide(slideNumber - 1);
});

$(".next-slide").click(function(){
    slide(slideNumber + 1);

});


function slide(newSlideNumber){
    if(newSlideNumber < 0) {
        newSlideNumber = 4;
    }
    
    if(newSlideNumber >= slideCount -4) {
        newSlideNumber = 0;
    }
    
    let slideCaption = $('.slide-caption').eq(newSlideNumber);
    
    let marginLeft = newSlideNumber * (-20.6) + '%';
    
    slideCaption.hide();
    
    slideShow.animate({
        'margin-left': marginLeft,
    }, function() {
        slideNumber = newSlideNumber;
        slideCaption.fadeIn();
    });
}


