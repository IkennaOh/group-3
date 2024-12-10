var map = L.map('map').setView([36.99080350583893, -122.06498909975468], 19);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([36.99096663245487, -122.06466090991745]).addTo(map)
    .bindPopup('<div class="popupOne"> <strong> Dorm Building B-L </strong> <br> Type: Food & Snacks <br> Rating: 5 out of 5 <br> Notes: It has takis! </div>')
    .openPopup();

L.marker([36.990571089051166, -122.06488948440018]).addTo(map)
    .bindPopup('<div class="popupTwo"> <strong> Dorm Building D-L </strong> <br> Type: Food & Snacks <br> Rating: 4 out of 5 </div>')
    .openPopup();

L.marker([36.99061296600231, -122.06514376569984]).addTo(map)
    .bindPopup('<div class="popupThree"> <strong> Dorm Building C-L </strong> <br> Type: Food & Snacks <br> Rating: 4 out of 5 </div>')
    .openPopup();

L.marker([36.99106523560557, -122.06511492967617]).addTo(map)
    .bindPopup('<div class="popupThree"> <strong> Dorm Building A-L </strong> <br> Type: Food & Snacks <br> Rating: 5 out of 5 </div>')
    .openPopup();

