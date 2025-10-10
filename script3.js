document.getElementById("formLogin").addEventListener("submit", function(e){
  e.preventDefault();
  
  const usuario = document.getElementById("Correo").value.trim();
  const password = document.getElementById("contra").value.trim();

  if(contra === "" || password === "") {
    alert("Por favor, completa todos los campos");
    return;
  }

  alert(`Bienvenido, ${Correo}!`);
  this.reset();
});
