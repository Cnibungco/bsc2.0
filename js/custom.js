/* 
 * Theme: Codeon - one page responsive template built for humans.
 * Version: v1.0
 * Author:  Design_mylife
 * Created on : May 31, 2014, 10:42:39 AM(india)
 * file: custome js(editable)
 */

/* ==============================================
main flex slider
=============================================== */
$(window).load(function() {
    $('.main-flex-slider').flexslider({
        slideshowSpeed: 5000,
        directionNav: false,
        animation: "fade",
        controlNav:false
    });
});

/* ==============================================
portfolio gallery slide
=============================================== */
$(window).load(function() {
    $('.portfolio-slide').flexslider({
        slideshowSpeed: 5000,
        directionNav: false,
        animation: "fade",
        controlNav:true
    });
});




/* ==============================================
Sticky Navbar
=============================================== */

$(document).ready(function(){
    $(".navbar").sticky({topSpacing:0});
});




/* ==============================================
Auto Close Responsive Navbar on Click
=============================================== */

function close_toggle() {
if ($(window).width() <= 768) {
  $('.navbar-collapse a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });
}
else {
 $('.navbar .navbar-default a').off('click');
}
}
close_toggle();

$(window).resize(close_toggle); 


    
/* ==============================================
Smooth Scroll To Anchor
=============================================== */

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.navbar a,.btn').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
    


/*=========================*/
     /*========portfolio mix====*/
     /*==========================*/
    $('#grid').mixitup();
    
       /*=========================*/
     /*========tooltip and popovers====*/
     /*==========================*/
    $("[data-toggle=popover]").popover();
    
    $("[data-toggle=tooltip]").tooltip();


/*=========================*/
     /*========Animation on scroll with wow.js====*/
     /*==========================*/
     
   wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        mobile:       true
      }
    );
    wow.init();
    
    
    /*=========================*/
     /*========on hover dropdown navigation====*/
     /*==========================*/
     
     
     $(document).ready(function() {

    $('.js-activated').dropdownHover({
        instantlyCloseOthers: false,
        delay: 0
    }).dropdown();

});

/************parallax*********************/








