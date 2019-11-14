// SMOOTH SCROLL
$(function () {
    $(".smooth-scroll").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 70
        }, 1250);
    });
}); 

// START LOAD MORE PORTFOLIO ITEMS
$(".loadmore").click(function(){
    $('#portfolio-html').find('.theitem').removeClass('d-none');
    $(this).addClass('d-none');
});
$(".closex").click(function () {
    $(".hamb").toggleClass("ac");
});


// CLOSE NAVBAR ON MOBILE
$('.navbar-collapse ul li a:not(.dropdown-toggler)').click(function() {
    $('.navbar-toggler:visible').click();
});

// ACTIVATE HAMBURGER
$(".nav-link").click(function () {
    $(".hamb").toggleClass("ac");
});
$(".navbar-toggler").click(function () {
    $(".hamb").toggleClass("ac");
});
 
// SCROLL ANIMATION 
AOS.init();

// HEADER
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 30) {

            $('header').addClass('active');
        }
        if ($(window).scrollTop() < 31) {

            $('header').removeClass('active');
        }
    });
}); 

   

 

