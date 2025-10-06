// Modal en JavaScript
let modal = document.getElementById("modal");
let btn = document.getElementById("btnVer");
let span = document.getElementsByClassName("cerrar")[0];

btn.onclick = function(event) {
  event.preventDefault();
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
