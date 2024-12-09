var map = L.map('map').setView([36.000813, -482.053138], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([36.999986, -482.052754]).addTo(map)
    .bindPopup('<div class="popupOne"> <strong>Laundry room of "B" dorm <strong> Social Sciences 2 </strong> <br>  Type: Snacks & Beverages <br> Rating: 4 out of 5 <br> </div>')
    .openPopup();

L.marker([37.001799, -482.05299]).addTo(map)
    .bindPopup('<div class="popupTwo"> <strong>Merrill/Crown Apartments, Laundry room <strong> Social Sciences 2 </strong> <br>  Type: Snacks & Beverages <br> Rating: 4 out of 5 <br> </div>')
    .openPopup();

