;(function($){
	"use strict";

/////////WORKS SLIDER//////////
$(function () {
	const owlPageTour = $(".tkachova-page-tour__slider");
	owlPageTour.owlCarousel({
		items: 1,
		loop: true,
		autoplay:true,
		nav: true,
		dots: true,
		navText: [
		'<span class="arrow-owl arrow-left"></span>',
		'<span class="arrow-owl arrow-right"></span>'
		],
		responsive: {
			0: {
				nav: false,
				dots: false
			},
			768: {
				nav: false
			},
			992: {
				nav: true
			}
		}
	});
});

})(jQuery);


//////MAP/////////
function initMap() {

	var map;
	map = new google.maps.Map(document.getElementById('PageTourMap'), {
		center: {lat: -8.7809791, lng: 115.2228203},
		zoom: 12,
		disableDefaultUI: true,
		styles:[
		{
			"featureType": "all",
			"elementType": "all",
			"stylers": [
			{
				"saturation": -100
			},
			{
				"gamma": 0.5
			}
			]
		},
		{
			"featureType": "poi",
			"elementType": "all",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		}
		]
	});

	var marker = new google.maps.Marker({
		position: {lat: -8.7809791, lng: 115.2228203},
		map: map,
		title: 'Conrad Bali 5*'
	});
};

$(document).ready(function() {
	if ($(".menu_bar").css("display") == "none") {
		$(".head__items_link").show();
	}
	$(".menu_bar").click(function() {
		if ($(".head__items_link").css("display") == "none") {
			$(".head__items_link").show();
		}
		else {
			$(".head__items_link").hide();
		}
	});
});

window.onscroll = () => {
	if (window.pageYOffset >= 1){
		$(".header").addClass("scroll_head");
	} else {
		$(".header").removeClass("scroll_head");
	}
}