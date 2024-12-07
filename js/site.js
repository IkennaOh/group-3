function search() {
    // Get content of input field
    var query = document.getElementById("searchInput").value.toLowerCase();
  
    // Define list of colleges with vending machines (hard-coded)
    var colleges = [
      { name: "Kresge College", url: "porterkresge/index.html" },
      { name: "Rachel Carson College", url: "rcc/index.html" },
      { name: "Oakes College", url: "oakes/index.html" },
      { name: "Porter College", url: "porterkresge/index.html" }, 
      { name: "Baskin Arts", url: "baskinarts/index.html"},
      { name: "Science Hill", url: "sciencehill/index.html"},
      { name: "McHenry Library", url: "baskinarts/index.html"},
      { name: "Crown College", url: "crown/index.html"},
      { name: "Cowell College", url: "Cowell/index.html"},
      { name: "John R Lewis College", url:"JRL/index.html"},
      { name: "College Nine", url: "C9/index.html"},
      { name: "Merrill College", url: "merrill/index.html"},
      { name: "Stevenson College", url: "Stevenson/index.html"},
      ];
  
     // Iterate through the colleges array and find matching ones
     for (var i = 0; i < colleges.length; i++) {
       if (colleges[i].name.toLowerCase().includes(query)) {
         window.location.href = colleges[i].url;
         break;
        }
     }
  }
