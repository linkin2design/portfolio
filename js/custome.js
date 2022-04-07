// project slider js
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: "cube",
    slideShadows: true,
    speed: 1000,


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // autoplay
    autoplay:
    {
        delay: 2000,
    },
});


$(document).ready(function () {
    'use strick'

    $('.test-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            }
        },],
    })

    // smooth scrool 
    $('nav a').smoothScroll();
})

// type js 

var typed = new Typed('.auto-input', {
    strings: [
        'Front-End Devoloper',
        'UI Designer',
        'Freelancer',
    ],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    smartBackspace: true // Default value
});



// preloder

$(document).ready(function () {
    $('.preloder').delay(3000).fadeOut();

});




$(document).ready(function () {
    $('.preloder').delay(3000).fadeOut();

});

// back to top button


$(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    // back to top
    if (scrolling > 500) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
});

$('.back-to-top').click(function () {
    $('html,body').animate({
        scrollTop: '0px',
    }, 2000);
})



// scroll 

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1000,
    delay: 200

});
ScrollReveal().reveal('.section-title, options', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.section-title-sub, options', { delay: 200, origin: 'top' });
ScrollReveal().reveal('.help-m, options', { delay: 200, origin: 'bottom' });




// counter up 
$('.counter').counterUp({
    delay: 10,
    time: 2000
});

