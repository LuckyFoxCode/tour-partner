window.onscroll = () => {
	if (window.pageYOffset >= 1) {
		$(".header").addClass("scroll_head");
	} else {
		$(".header").removeClass("scroll_head");
	}
};

$(document).ready(function () {

	//Counter About-us
	$('.about-us__card-number').each(function () {
		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		}, {
				duration: 2000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
	});

	// Owl carousel
	$(".slider-team").owlCarousel({
		items: 4,
		margin: 30,
		autoplay: true,
		autoplaySpeed: 600,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: true,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 4,
			},
		}
	});
});

$(document).ready(function() {
	if ($(window).width() > 767) {
		$(".head_nav, .head_tel").css("display", "flex");
	}
	else $(".head_nav, .head_tel").css("display", "none");

	$(".menu_bar").click(function() {
		if ($(".head_nav").css("display") == "none") {
			$(".head_nav").css("display", "flex");
			if (($(".head_tel").css("display") == "flex") || ($(".head_nav").css("display") == "flex")) {
				$(".header").addClass("scroll_head");
			}
		}
		else {
			$(".head_nav").css("display", "none");
			if (($(".head_tel").css("display") == "none") && ($(".head_nav").css("display") == "none") && window.pageYOffset == 0) {
				$(".header").removeClass("scroll_head");
			}
		}
	});

	$(window).resize(function(){
		if ($(window).width() > 767) {
			$(".head_nav, .head_tel").css("display", "flex");
		}
	});
	$(window).resize(function(){
		if ($(window).width() < 768) {
			$(".head_nav, .head_tel").css("display", "none");
		}
	});


	$(".tel_svg").click(function() {
		if ($(".head_tel").css("display") == "none") {
			$(".head_tel").css("display", "flex");
			if (($(".head_tel").css("display") == "flex") || ($(".head_nav").css("display") == "flex")) {
				$(".header").addClass("scroll_head");
			}
		}
		else {
			$(".head_tel").css("display", "none");
			if (($(".head_tel").css("display") == "none") && ($(".head_nav").css("display") == "none") && window.pageYOffset == 0) {
				$(".header").removeClass("scroll_head");
			}
		}
	});
});

$(".head__items_linked").hover(function(){
	$(".this").removeClass("active");
	$(this).addClass("active");
}, function(){
	$(this).removeClass("active");
	$(".this").addClass("active");
});

window.onscroll = () => {
	if (window.pageYOffset >= 1){
		$(".header").addClass("scroll_head");
	} else if ((($(".head_tel").css("display") == "none") && ($(".head_nav").css("display") == "none") && window.pageYOffset == 0) || ($(window).width() > 767)){
		$(".header").removeClass("scroll_head");
	}
}
