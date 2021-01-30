$(document).ready(function () {
    $('.collections-visible').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: false,
        slidesToShow: 3,
        speed: 800,
        easing: 'linear',
        infinite: true,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        draggable: false,
        swipe: true,
        touchThreshold: 10,
        touchMove: false,
        waitForAnimate: true,
        centerMode:false,
    });
    
});