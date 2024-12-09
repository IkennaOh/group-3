var map = L.map('map').setView([36.996195, -122.065423], 19);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([36.997615, -122.06579]).addTo(map)
    .bindPopup('<div class="popupOne"> <strong> Kresge Laundry Room </strong> <br> Type: Snacks & Beverages <br> Rating: 4 out of 5 <br> </div>')
    .openPopup();

