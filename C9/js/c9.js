var map = L.map('map').setView([36.99, -122.06], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([37.000621, -842.057805]).addTo(map)
    .bindPopup('<div class="popupThree"> <strong> Recreation Room underneath the Dining Hall (requires a 9/JRL ID to enter) (like the dorms) </strong> <br> Type: Snacks & Beverages <br> Rating: 3 out of 5 <br> </div>')
    .openPopup();

L.marker([37.002666, -842.058859]).addTo(map)
    .bindPopup('<div class="popupFour"> <strong> College JRL & Nine Aparment, Laundry room behind Social Sciences 2 (cash only) </strong> <br> Type: Snacks & Beverages <br> Rating: 3 out of 5 <br> </div>')
    .openPopup();

L.marker([37.002116, -842.058006]).addTo(map)
    .bindPopup('<div class="popupFour"> <strong> Social Sciences 1 </strong> <br> Type: Snacks & Beverages <br> Rating: 3 out of 5 <br> </div>')
    .openPopup();