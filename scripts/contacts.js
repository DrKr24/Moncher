var myLatLng1 = { lat: 50.447680991671916, lng: 30.522447033295474 };
var myLatLng2 = { lat: 50.45601832008504, lng: 30.612963745379915 };
var myLatLng3 = { lat: 50.44506210707964, lng: 30.519030002769103 };

function initMap() {
  new google.maps.Map(document.getElementById("map1"), {
    center: myLatLng1,
    zoom: 18,
  });

  new google.maps.Marker({
    position: myLatLng1,
    map: map1,
  });

  new google.maps.Map(document.getElementById("map2"), {
    center: myLatLng2,
    zoom: 18,
  });

  new google.maps.Marker({
    position: myLatLng2,
    map: map2,
  });

  new google.maps.Map(document.getElementById("map3"), {
    center: myLatLng3,
    zoom: 18,
  });

  new google.maps.Marker({
    position: myLatLng3,
    map: map3,
  });
}

initMap();
