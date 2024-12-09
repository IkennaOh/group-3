var map = L.map('map').setView([36.99419, -122.06], 19);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([36.994241, -122.065712]).addTo(map)
    .bindPopup('<div class="popupOne"> <strong> Porter Store </strong> <br> </div>')
    .openPopup();

L.marker([36.994318, -122.066195]).addTo(map)
    .bindPopup('<div class="popupTwo"> <strong> Porter College Dining Hall Building </strong> <br> Note:access to these machines may be restricted due to their location on private property </div>')
    .openPopup();

