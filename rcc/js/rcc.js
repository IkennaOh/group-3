var map = L.map('map').setView([36.990875340557956, -122.06491874084834], 20);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([36.99096663245487, -122.06466090991745]).addTo(map)
    .bindPopup('<div class="popupOne"> <strong> Dorm Building B-L </strong> <br> Type: Food & Snacks <br> Rating: 5 out of 5 <br> Notes: It has takis! </div>')
    .openPopup();