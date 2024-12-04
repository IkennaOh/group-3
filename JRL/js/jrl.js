var map = L.map('map').setView([37.00068497450312, -122.05852230235037], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([37.00073751929527, -122.05722133695241]).addTo(map);

