function toggleDropdown1() {
  var theElement = document.getElementById("dropdown-content")
  
  if (theElement.style.display = "none") {
    theElement.style.display = "block"
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      theElement.style.display = "none"
    }
  }
}

document.getElementById("icon").addEventListener("click", function() {
    var inputSC = document.getElementById("inputSC");

    inputSC.style.display = (inputSC.style.display === "none") ? "block" : "none";
  });


function toggleDropdown() {
    var dropdown2 = document.querySelector('.dropdown2');
    dropdown2.classList.toggle('active');
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn2')) {
      var dropdowns = document.getElementsByClassName('dropdown');
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('active')) {
          openDropdown.classList.remove('active');
        }
      }
    }
}