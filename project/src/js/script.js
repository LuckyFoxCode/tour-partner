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