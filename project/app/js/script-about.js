"use strict";
window.onscroll = function() {
    1 <= window.pageYOffset ? $(".header").addClass("scroll_head") : $(".header").removeClass("scroll_head")
}, $(document).ready(function() {
    $(".about-us__card-number").each(function() {
        $(this).prop("Counter", 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2e3,
            easing: "swing",
            step: function(e) {
                $(this).text(Math.ceil(e))
            }
        })
    }), $(".slider-team").owlCarousel({
        items: 4,
        margin: 30,
        autoplay: !0,
        autoplaySpeed: 600,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        loop: !0,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })
}), $(document).ready(function() {
    767 < $(window).width() ? $(".head_nav, .head_tel").css("display", "flex") : $(".head_nav, .head_tel").css("display", "none"), $(".menu_bar").click(function() {
        "none" == $(".head_nav").css("display") ? ($(".head_nav").css("display", "flex"), "flex" != $(".head_tel").css("display") && "flex" != $(".head_nav").css("display") || $(".header").addClass("scroll_head")) : ($(".head_nav").css("display", "none"), "none" == $(".head_tel").css("display") && "none" == $(".head_nav").css("display") && 0 == window.pageYOffset && $(".header").removeClass("scroll_head"))
    }), $(window).resize(function() {
        767 < $(window).width() && $(".head_nav, .head_tel").css("display", "flex")
    }), $(window).resize(function() {
        $(window).width() < 768 && $(".head_nav, .head_tel").css("display", "none")
    }), $(".tel_svg").click(function() {
        "none" == $(".head_tel").css("display") ? ($(".head_tel").css("display", "flex"), "flex" != $(".head_tel").css("display") && "flex" != $(".head_nav").css("display") || $(".header").addClass("scroll_head")) : ($(".head_tel").css("display", "none"), "none" == $(".head_tel").css("display") && "none" == $(".head_nav").css("display") && 0 == window.pageYOffset && $(".header").removeClass("scroll_head"))
    })
}), $(".head__items_linked").hover(function() {
    $(".this").removeClass("active"), $(this).addClass("active")
}, function() {
    $(this).removeClass("active"), $(".this").addClass("active")
}), window.onscroll = function() {
    1 <= window.pageYOffset ? $(".header").addClass("scroll_head") : ("none" == $(".head_tel").css("display") && "none" == $(".head_nav").css("display") && 0 == window.pageYOffset || 767 < $(window).width()) && $(".header").removeClass("scroll_head")
};