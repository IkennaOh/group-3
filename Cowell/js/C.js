var map = L.map('map').setView([36.99, -122.06], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([36.99437, -122.059271]).addTo(map)
    .bindPopup('<div class="popupOne"> <strong> Most Laundry rooms </strong> <br>  Type: Snacks & Beverages <br> Rating: 4 out of 5 <br> </div>')
    .openPopup();
