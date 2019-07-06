"use strict";
$(document).ready(function() {
    767 < $(window).width() ? $(".head_nav, .head_tel").css("display", "flex") : $(".head_nav, .head_tel").css("display", "none"), $(".menu_bar").click(function() {
        "none" == $(".head_nav").css("display") ? ($(".head_nav").css("display", "flex"), "flex" != $(".head_tel").css("display") && "flex" != $(".head_nav").css("display") || $(".header").addClass("scroll_head")) : ($(".head_nav").css("display", "none"), "none" == $(".head_tel").css("display") && "none" == $(".head_nav").css("display") && 0 == window.pageYOffset && $(".header").removeClass("scroll_head"))
    }), $(window).resize(function() {
        767 < $(window).width() && $(".head_nav").css("display", "flex")
    }), $(window).resize(function() {
        $(window).width() < 768 && $(".head_nav").css("display", "none")
    }), $(".tel_svg").click(function() {
        "none" == $(".head_tel").css("display") ? ($(".head_tel").css("display", "flex"), "flex" != $(".head_tel").css("display") && "flex" != $(".head_nav").css("display") || $(".header").addClass("scroll_head")) : ($(".head_tel").css("display", "none"), "none" == $(".head_tel").css("display") && "none" == $(".head_nav").css("display") && 0 == window.pageYOffset && $(".header").removeClass("scroll_head"))
    }), $(window).resize(function() {
        767 < $(window).width() && $(".head_tel").css("display", "flex")
    }), $(window).resize(function() {
        $(window).width() < 768 && $(".head_tel").css("display", "none")
    })
}), $(".head__items_linked").hover(function() {
    $(".this").removeClass("active"), $(this).addClass("active")
}, function() {
    $(this).removeClass("active"), $(".this").addClass("active")
}), $(".testimonials__carousel").owlCarousel({
    items: 1,
    dots: !1,
    loop: !0,
    nav: !1,
    autoplay: !0,
    autoplayTimeout: 1e4
}), window.onscroll = function() {
    1 <= window.pageYOffset ? $(".header").addClass("scroll_head") : ("none" == $(".head_tel").css("display") && "none" == $(".head_nav").css("display") && 0 == window.pageYOffset || 767 < $(window).width()) && $(".header").removeClass("scroll_head")
};