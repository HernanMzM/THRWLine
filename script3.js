const formLogin = document.getElementById("formLogin");
const formRegistro = document.getElementById("formRegistro");
const irRegistro = document.getElementById("irRegistro");
const irLogin = document.getElementById("irLogin");

irRegistro.addEventListener("click", function(e) {
  e.preventDefault();
  formLogin.style.display = "none";
  formRegistro.style.display = "block";
});

irLogin.addEventListener("click", function(e) {
  e.preventDefault();
  formRegistro.style.display = "none";
  formLogin.style.display = "block";
});

formLogin.addEventListener("submit", function(e) {
  e.preventDefault();
  let correo = document.getElementById("correoLogin").value.trim();
  let pass = document.getElementById("passLogin").value.trim();

  if (correo === "" || pass === "") {
    alert("Por favor, llene todos los campos");
  } else {
    alert("Bienvenido " + correo);
    formLogin.reset();
  }
});

formRegistro.addEventListener("submit", function(e) {
  e.preventDefault();
  let nombre = document.getElementById("nombre").value.trim();
  let correo = document.getElementById("correoRegistro").value.trim();
  let pass = document.getElementById("passRegistro").value.trim();

  if (nombre === "" || correo === "" || pass === "") {
    alert("Por favor, llene todos los campos");
  } else {
    alert("Registro completado, " + nombre);
    formRegistro.reset();
    formRegistro.style.display = "none";
    formLogin.style.display = "block";
  }
});