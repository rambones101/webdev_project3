function initMap() {
  var options = {
    zoom: 10,
    center: { lat: 41.8781, lng: -87.6298 },
    styles: [
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [{ color: "#ffffff" }, { lightness: 17 }],
      },
    ],
  };

  var map = new google.maps.Map(document.getElementById("map"), options);


  var marker = new google.maps.Marker({
    position: { lat: 41.8781, lng: -87.6298 },
    map: map,
    title: "Chicago, IL",
  });

  var infoWindow = new google.maps.InfoWindow({
    content: "<h3>Chicago, IL</h3><p>The Windy City</p>",
  });

  marker.addListener("click", function () {
    infoWindow.open(map, marker);
  });
}
