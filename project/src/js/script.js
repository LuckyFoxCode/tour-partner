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