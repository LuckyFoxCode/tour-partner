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