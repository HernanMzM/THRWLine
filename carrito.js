function actualizarCarritoIcono() {
    let carrito = JSON.parse(localStorage.getItem("cestaProductos")) || [];
    let total = carrito.reduce((acum, p) => acum + p.cantidad, 0);

    let icono = document.getElementById("carrito-contador");
    if (icono) icono.textContent = total;
}

document.addEventListener("DOMContentLoaded", actualizarCarritoIcono);
