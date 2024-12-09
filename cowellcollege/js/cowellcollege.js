var map = L.map('map').setView([36.99667, -482.054994], 19);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([36.996846, -482.05483]).addTo(map)
    .bindPopup('<div class="popupOne"> <strong> Most Laundry rooms </strong> <br>  Type: Beverages <br> Rating: 3 out of 5 <br> </div>')
    .openPopup();

L.marker([36.997838, -482.055954]).addTo(map)
    .bindPopup('<div class="popupOne"> <strong> Baytree Plaza, Student Union</strong> <br>  Type: Beverages <br> Rating: 4 out of 5 <br> </div>')
    .openPopup();
