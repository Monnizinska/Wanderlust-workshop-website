let navIcon = $('#nav-icon');
let mainNav = $('#main-nav');


// hamburger animation & full screen menu

$(document).ready(function () {
    $("#nav-icon").click(function () {
        $(this).toggleClass("animate-icon");
        $("#main-nav").fadeToggle();

    });
});
$(document).ready(function () {
    $("#main-nav").click(function () {
        $("#nav-icon").removeClass("animate-icon");
        $("#main-nav").toggle();
    });
});
