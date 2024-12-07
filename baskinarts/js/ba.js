var map = L.map('map').setView([36.99, -122.06], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([36.99437, -122.059271]).addTo(map)
    .bindPopup('<div class="popupOne"> <strong> Academic Resources Center </strong> <br>  Type: Snacks & Beverages <br> Rating: 4 out of 5 <br> </div>')
    .openPopup();

L.marker([36.993211, -122.059833]).addTo(map)
    .bindPopup('<div class="popupTwo"> <strong> Music Building </strong> <br> Type: Snacks & Beverages <br> Rating: 3 out of 5 <br> </div>')
    .openPopup();

L.marker([36.994742, -122.062507]).addTo(map)
    .bindPopup('<div class="popupThree"> <strong> Theater Arts A Building </strong> <br> Type: Snacks & Beverages <br> Rating: 3 out of 5 <br> </div>')
    .openPopup();

L.marker([36.995664, -122.059114]).addTo(map)
    .bindPopup('<div class="popupFour"> <strong> McHenry Library, Ground Floor  </strong> <br> Type: Snacks & Beverages <br> Rating: 3 out of 5 <br> </div>')
    .openPopup();

L.marker([36.995276, -122.058867]).addTo(map)
    .bindPopup('<div class="popupFive"> <strong> McHenry Library, Main Floor  </strong> <br> Type: Snacks & Beverages <br> Rating: 4 out of 5 <br> </div>')
    .openPopup();
