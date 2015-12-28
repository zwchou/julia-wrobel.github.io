function addLatLng(event) {
  var path = poly.getPath();
  path.push(event.latLng);

  var marker = new google.maps.Marker({
    position: event.latLng,
    map: map,
  });
}
