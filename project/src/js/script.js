;
(function () {
	'use strict'

	$(document).ready(function () {

		// Fixed header__top
		const headerTop = $('.header__top');

		$(window).scroll(function () {
			if ($(this).scrollTop() > 0) {
				headerTop.addClass('fixed');
			} else {
				headerTop.removeClass('fixed');
			}
		});

		// add/remove active class in .header__top-nav-item
		$('.header__top-nav-item').click(function() {
			$('.header__top-nav-item').removeClass('active');
			$(this).addClass('active');
		});

	});

})();