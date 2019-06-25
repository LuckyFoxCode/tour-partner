$(window).scroll(function() {
    if ($(this).scrollTop() > 1) $('head').addClass("scroll_head");
    else $('head').removeClass("scroll_head");
});