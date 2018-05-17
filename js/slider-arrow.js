const slideShow = $(".slide-show")
const slideCount = $(".single-slide").length; 
const slideWidth = $(".single-slide").width; 
    
let slideNumber = 0; 

slideShow.css("width", slideCount * 23 + "%");
    
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
        newSlideNumber = 1;
    }
    
    if(newSlideNumber >= slideCount -4) {
        newSlideNumber = 1;
    }
    
    var slideCaption = $('.slide-caption').eq(newSlideNumber);
    
    var marginLeft = newSlideNumber * (-51) + '%';
    
    slideCaption.hide();
    
    slideShow.animate({
        'margin-left': marginLeft,
    }, 500, function() {
        slideNumber = newSlideNumber;
        slideCaption.fadeIn();
    })
}


