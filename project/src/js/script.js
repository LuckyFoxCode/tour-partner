 $(".slider-team").owlCarousel({
    items: 4,
    margin: 30,
    autoplay: true,
    autoplaySpeed: 600,
    autoplayTimeout : 3000,
    autoplayHoverPause: true,
    loop: true,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        992:{
            items:3,
        },
        1200:{
            items:4,
        },
    }
});