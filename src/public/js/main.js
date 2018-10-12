var map = L.map('map-template').setView([41.657858, -4.716349], 13);


L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png').addTo(map);

var cords = [41.657858, -4.716349];
var marker = L.marker(cords);
marker.bindPopup('Este es el primer piso');
map.addLayer(marker);

var cords2 = [41.657000, -4.716349];
var marker2 = L.marker(cords2);
marker2.bindPopup('Este es el segundo piso');
map.addLayer(marker2);