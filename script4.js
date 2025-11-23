document.addEventListener("DOMContentLoaded", () => {

    const cantidadInput = document.getElementById("cantidad");

    window.cambiarCantidad = function(num) {
        let c = parseInt(cantidadInput.value) || 1;
        c += num;
        if (c < 1) c = 1;
        cantidadInput.value = c;
    };

 

    const opciones = document.querySelectorAll(".opcion");
    const datosPago = document.querySelector(".datos-pago");

    const campos = {
        Tarjeta: `
            <input type="text" placeholder="Nombre del titular *">
            <input type="text" placeholder="Número de tarjeta *" maxlength="16">
            <div class="fila">
                <input type="text" placeholder="MM/AA *" maxlength="5">
                <input type="text" placeholder="CVV *" maxlength="4">
            </div>
        `,
        GPay: `
            <input type="email" placeholder="Correo Google Pay *">
        `,
        OXXO: `
            <input type="text" placeholder="Nombre completo *">
            <input type="email" placeholder="Correo electrónico *">
        `,
        Aplazo: `
            <input type="email" placeholder="Correo electrónico *">
            <input type="tel" placeholder="Número telefónico *">
        `,
        SPEI: `
            <input type="text" placeholder="Nombre completo *">
            <input type="email" placeholder="Correo electrónico *">
        `,
        PayPal: `
            <input type="email" placeholder="Correo PayPal *">
            <input type="password" placeholder="Contraseña *">
        `
    };

    function actualizarCamposPago(metodo) {
        datosPago.innerHTML = campos[metodo] +
            `<button class="realizar">Realizar pedido</button>`;
    }

    opciones.forEach(op => {
        op.addEventListener("click", () => {
            opciones.forEach(o => o.classList.remove("seleccionada"));
            op.classList.add("seleccionada");

            const texto = op.innerText.toLowerCase();

            if (texto.includes("crédito") || texto.includes("débito")) actualizarCamposPago("Tarjeta");
            else if (texto.includes("google")) actualizarCamposPago("GPay");
            else if (texto.includes("oxxo")) actualizarCamposPago("OXXO");
            else if (texto.includes("plazos")) actualizarCamposPago("Aplazo");
            else if (texto.includes("spei")) actualizarCamposPago("SPEI");
            else if (texto.includes("msi")) actualizarCamposPago("PayPal");
        });
    });


    document.addEventListener("click", e => {
        if (e.target.classList.contains("realizar")) {
            const metodo = document.querySelector(".opcion.seleccionada")?.innerText.trim();
            alert("Pedido realizado con método: " + metodo);
        }
    });

    actualizarCamposPago("Tarjeta"); 
});
