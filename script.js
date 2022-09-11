let mainNav = document.getElementById('js-menu');
console.log("mainNav",mainNav);
let navBarToggle = document.getElementById('js-navbar-toggle');
console.log("navBarToggle",navBarToggle);
navBarToggle.addEventListener("click", function () {

    mainNav.classList.toggle('active');
});
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (event.target.matches('firstpage')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function servicePage() {
    document.getElementById("serviceDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (event.target.matches('servicepage')) {
   
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function promotionPage() {
    document.getElementById("promotionDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (event.target.matches('promotionpage')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
