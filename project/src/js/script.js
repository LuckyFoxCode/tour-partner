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

let map;
let marker;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 49.0649202, lng: 33.4101731},
    zoom: 15,
    disableDefaultUI: true
  }),

  marker = new google.maps.Marker({
      position: {lat: 49.0666141, lng: 33.4136125},
      map: map,
      // animation: google.maps.Animation.BOUNCE,
  });
}