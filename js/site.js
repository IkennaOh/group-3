function search() {
    // Get content of input field
    var query = document.getElementById("searchInput").value.toLowerCase();
  
    // Define list of colleges with vending machines (hard-coded)
    var colleges = [
      { name: "College Nine", url: "college-nine.html" },
      { name: "College Ten", url: "college-ten.html" },
      { name: "Porter College", url: "porter-college.html" }
      ];
  
     // Iterate through the colleges array and find matching ones
     for (var i = 0; i < colleges.length; i++) {
       if (colleges[i].name.toLowerCase().includes(query)) {
         window.location.href = colleges[i].url;
         break;
        }
     }
  }
