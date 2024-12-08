var map = L.map('map').setView([36.99, -122.06], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



L.marker([36.99817, -122.061678]).addTo(map)
.bindPopup('<div class="popupOne"> <strong> Thimann Laboratories, First Floor</strong> <br> Type: Soda and Snack <br> Rating: 4 out of 5 <br> </div>')
.openPopup();

L.marker([36.9995776, -122.0618475]).addTo(map)
.bindPopup('<div class="popupTwo"> <strong> Physical Sciences Building, Second Floor </strong> <br> Type: Soda and Snack <br> Rating: 3 out of 5 <br> </div>')
.openPopup();

L.marker([36.9986701, -122.0605268]).addTo(map)
.bindPopup('<div class="popupThree"> <strong> Natural Sciences 2 Building, Second Floor </strong> <br> Type: Soda and Snack <br> Rating: 4 out of 5 <br> </div>')
.openPopup();

L.marker([36.998982, -122.060592]).addTo(map)
.bindPopup('<div class="popupFour"> <strong> Science and Engineering Library, Basement Floor </strong> <br> Type: Snack <br> Rating: 4 out of 5 <br> Notes: Has hot chips! </div>')
.openPopup();

L.marker([36.9989572, -122.0606102]).addTo(map)
.bindPopup('<div class="popupFive"> <strong> Science and Engineering Library, Third Floor </strong> <br> Type: Soda and Snack <br> Rating: 4 out of 5 <br> Notes: Includes healthy snack trays, can be quite expensive though. </div>')
.openPopup();

L.marker([37.000698, -122.061498]).addTo(map)
.bindPopup('<div class="popupFive"> <strong> Communications Building, First Floor by the media checkout </strong> <br> Type: Soda and Snack <br> Rating: 2 out of 5 <br> </div>')
.openPopup();