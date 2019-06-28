;
(function () {
	'use strict'

	// Fixed header__top
	window.onscroll = function () {
		if (window.pageYOffset >= 1) {
			$(".header__top").addClass("fixed__top");
		} else {
			$(".header__top").removeClass("fixed__top");
		}
	}

})();