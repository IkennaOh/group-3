function search() {
    // Get content of input field
    var query = document.getElementById("searchInput").value.toLowerCase();
  
    // Define list of colleges with vending machines (hard-coded)
    var colleges = [
      { name: "Kresge College", url: "kresge/index.html" },
      { name: "Rachel Carson College", url: "rcc/index.html" },
      { name: "Oakes College", url: "oakes/index.html" },
      { name: "Porter College", url: "porter/index.html" }, 
      ];
  
     // Iterate through the colleges array and find matching ones
     for (var i = 0; i < colleges.length; i++) {
       if (colleges[i].name.toLowerCase().includes(query)) {
         window.location.href = colleges[i].url;
         break;
        }
     }
  }
