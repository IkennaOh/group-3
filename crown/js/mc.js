var map = L.map('map').setView([36.002955, -482.059286], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([37.001799, -482.05299]).addTo(map)
    .bindPopup('<div class="popupOne"> <strong>Merrill/Crown Apartments, Laundry room <strong> <br>  Type: Snacks & Beverages <br> Rating: 4 out of 5 <br> </div>')
    .openPopup();

L.marker([37.000119, -482.054541]).addTo(map)
    .bindPopup('<div class="popupTwo"> <strong>Fireside Lounge<strong> <br>  Type: Snacks & Beverages <br> Rating: 4 out of 5 <br> </div>')
    .openPopup();