$("#search-button").click(function(){
  var query = document.getElementById("searchInput").value.toLowerCase();
  
    // Define list of colleges with vending machines (hard-coded)
    var colleges = [
      { name: "Kresge College", url: "kresge/index.html" },
      { name: "Rachel Carson College", url: "rcc/index.html" },
      { name: "Oakes college", url: "oakes/index.html" },
      { name: "Porter College", url: "porter/index.html" }, 
      { name: "Baskin Arts", url: "baskinarts/index.html"},
      { name: "Science Hill", url: "sciencehill/index.html"},
      { name: "McHenry Library", url: "baskinarts/index.html"},
      { name: "Crown College", url: "crown/index.html"},
      { name: "Cowell College", url: "cowellcollege/index.html"},
      { name: "John R Lewis College", url:"johnrlewis/index.html"},
      { name: "College Nine", url: "C9/index.html"},
      { name: "Merrill College", url: "merrill/index.html"},
      { name: "Stevenson College", url: "steven/index.html"},
      { name: "Stevenson", url: "steven/index.html"},
      { name: "Merrill", url: "merrill/index.html"},
      { name: "JRL", url:"johnrlewis/index.html"},
      { name: "Cowell", url: "Cowell/index.html"},
      { name: "Crown", url: "crown/index.html"},
      { name: "McHenry", url: "baskinarts/index.html"},
      { name: "oakes", url: "oakes/index.html" },
      { name: "Kresge", url: "kresge/index.html" },
      { name: "RCC", url: "rcc/index.html" },
      { name: "Music", url: "baskinarts/index.html"},
      { name: "Music building", url: "baskinarts/index.html"},
      { name: "Theatre building", url: "baskinarts/index.html"},
      ];
  
     // Iterate through the colleges array and find matching ones
     for (var i = 0; i < colleges.length; i++) {
       if (colleges[i].name.toLowerCase().includes(query)) {
         window.location.href = colleges[i].url;
         break;
        }
     }
  }
)

function search() {
   // Check if the Enter key was pressed (key code 13)
   if (event.keyCode === 13) { 
    // Get content of input field
    var query = document.getElementById("searchInput").value.toLowerCase();
  
    // Define list of colleges with vending machines (hard-coded)
    var colleges = [
      { name: "Kresge College", url: "kresge/index.html" },
      { name: "Rachel Carson College", url: "rcc/index.html" },
      { name: "Oakes college", url: "oakes/index.html" },
      { name: "Porter College", url: "porter/index.html" }, 
      { name: "Baskin Arts", url: "baskinarts/index.html"},
      { name: "Science Hill", url: "sciencehill/index.html"},
      { name: "McHenry Library", url: "baskinarts/index.html"},
      { name: "Crown College", url: "crown/index.html"},
      { name: "Cowell College", url: "cowellcollege/index.html"},
      { name: "John R Lewis College", url:"johnrlewis/index.html"},
      { name: "College Nine", url: "C9/index.html"},
      { name: "Merrill College", url: "merrill/index.html"},
      { name: "Stevenson College", url: "steven/index.html"},
      { name: "Stevenson", url: "steven/index.html"},
      { name: "Merrill", url: "merrill/index.html"},
      { name: "JRL", url:"johnrlewis/index.html"},
      { name: "Cowell", url: "Cowell/index.html"},
      { name: "Crown", url: "crown/index.html"},
      { name: "McHenry", url: "baskinarts/index.html"},
      { name: "oakes", url: "oakes/index.html" },
      { name: "Kresge", url: "kresge/index.html" },
      { name: "RCC", url: "rcc/index.html" },
      { name: "Music", url: "baskinarts/index.html"},
      { name: "Music building", url: "baskinarts/index.html"},
      { name: "Theatre building", url: "baskinarts/index.html"},
      ];
  
     // Iterate through the colleges array and find matching ones
     for (var i = 0; i < colleges.length; i++) {
       if (colleges[i].name.toLowerCase().includes(query)) {
         window.location.href = colleges[i].url;
         break;
        }
     }
  }
}

document.getgetElementById('search-button').addEventListener('click', function() {
  var query = document.getElementById('search').value; 
  if (query) { 
    alert('You searched for: ' + query); 
    // You can replace the alert with other functionality, such as sending the query to a server or searching a database 
    } else { 
      alert('Please enter a search term'); } }
    );