window.onscroll = () => {
	if (window.pageYOffset >= 1) {
		$(".header").addClass("scroll_head");
	} else {
		$(".header").removeClass("scroll_head");
	}
};

$(document).ready(function () {

	//Counter About-us
	$('.about-us__card-number').counterUp({
		delay: 1,
		time: 100
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