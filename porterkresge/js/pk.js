let pins = [

    {loc1: 36.997615, loc2:  -122.06579, descr: "A pretty CSS popup.<br> Easily customizable"},
    {loc1: 36.997472, loc2:  -122.066774, descr: "A pretty CSS popup.<br> Easily customizable"},


];



console.log(pins[1].loc2);



var map = L.map('map').setView([36.997592, -122.06627], 17
);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



for (let i = 0; i < pins.length; i++) {

    L.marker([pins[i].loc1, pins[i].loc2]).addTo(map)
    .bindPopup(pins[i].descr)
    ;

  }

