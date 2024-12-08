var map = L.map('map').setView([36.99, -122.06], 19);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([36.996529, -482.051491]).addTo(map)
    .bindPopup('<div class="popupOne"> <strong> House 5, Second Floor </strong> <br>  Type: Snacks & Beverages <br> Rating: 4 out of 5 <br> </div>')
    .openPopup();

L.marker([36.997212, -482.052484]).addTo(map)
    .bindPopup('<div class="popupTwo"> <strong> Stevenson Game Room, Located between the Stevenson Cafe and the Stevenson Programming Office. </strong> <br>  Type: Snacks & Beverages <br> Rating: 2 out of 5 <br> </div>')
    .openPopup();
