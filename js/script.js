// Mostrar productos al dar clic en "Ver todo"
const btnVerTodo = document.getElementById("btnVerTodo");
const portada = document.getElementById("portada");
const productos = document.getElementById("productos");

btnVerTodo.addEventListener("click", () => {
  portada.style.display = "none";
  productos.style.display = "block";
});

// Modal producto
const modal = document.getElementById("modalProducto");
const cerrar = document.querySelector(".cerrar");
const modalImg = document.getElementById("modalImg");
const modalNombre = document.getElementById("modalNombre");
const modalPrecio = document.getElementById("modalPrecio");

document.querySelectorAll(".producto").forEach(prod => {
  prod.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = prod.dataset.img;
    modalNombre.textContent = prod.dataset.nombre;
    modalPrecio.textContent = "Precio: $" + prod.dataset.precio + " MXN";
  });
});

cerrar.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target == modal) modal.style.display = "none"; };

// Botones dentro del modal
document.getElementById("btnCesta").addEventListener("click", () => {
  alert("Producto añadido a la cesta ✅");
});

document.getElementById("btnComprar").addEventListener("click", () => {
  alert("Redirigiendo a la compra 🛒");
});
