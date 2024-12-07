var map = L.map('map').setView([36.98972627892269, -122.06311195588479], 19);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([36.98965767376031, -122.06282345678684]).addTo(map)
    .bindPopup('<div class="popupOne"> <strong> Oakes Academic Building </strong> <br> Type: Beverages <br> Rating: 4 out of 5 <br> Notes: It has red and blue gatorade! </div>')
    .openPopup();

L.marker([36.98906340010889, -122.06322484048678]).addTo(map)
    .bindPopup('<div class="popupTwo"> <strong> Milk Block Laundry Room </strong> <br> Type: Beverages <br> Rating: 0 out of 5 <br> Notes: Trickery! It does not work. </div>')
    .openPopup();

L.marker([36.98994946805238, -122.06376240044492]).addTo(map)
    .bindPopup('<div class="popupThree"> <strong> Shabazz Block Laundry Room </strong> <br> Type: Beverages <br> Rating: 2 out of 5 <br> Notes: Cash only, specifically $1 bills. </div>')
    .openPopup();

L.marker([36.98902989687825, -122.06510972611966]).addTo(map)
    .bindPopup('<div class="popupFour"> <strong> Casa Huerta Dorm </strong> <br> Type: Beverages <br> Rating: 0 out of 5 <br> Notes: Also trickery! It does not work. Do not be deceived. </div>')
    .openPopup();
