document.addEventListener("DOMContentLoaded", () => {

    const opciones = document.querySelectorAll(".opcion");
    const datosPago = document.querySelector(".datos-pago form");
    const tituloPago = document.getElementById("titulo-pago");

    // Campos por método de pago
    const campos = {
        Tarjeta: `
            <label>
                Numero de tarjeta
                <input type="text" id="tarjeta" maxlength="16" placeholder="1234567890123456" required>
                <small class="error"></small>
            </label>
            <label>
                Nombre completo
                <input type="text" id="nombre" placeholder="Como aparece en la tarjeta" required>
                <small class="error"></small>
            </label>
            <div class="fila">
                <label>
                    Expiracion (MM/AA)
                    <input type="text" id="fecha" maxlength="5" placeholder="08/28" required>
                    <small class="error"></small>
                </label>
                <label>
                    CVV
                    <input type="text" id="cvv" maxlength="3" placeholder="123" required>
                    <small class="error"></small>
                </label>
            </div>
        `,
        GPay: `
            <label>
                Correo Google Pay
                <input type="email" id="gpay" placeholder="correo@ejemplo.com" required>
                <small class="error"></small>
            </label>
        `,
        OXXO: `
            <label>
                Nombre completo
                <input type="text" id="oxxo_nombre" placeholder="Nombre completo" required>
                <small class="error"></small>
            </label>
            <label>
                Correo electrónico
                <input type="email" id="oxxo_correo" placeholder="correo@ejemplo.com" required>
                <small class="error"></small>
            </label>
        `,
        Aplazo: `
            <label>
                Correo electrónico
                <input type="email" id="aplazo_correo" placeholder="correo@ejemplo.com" required>
                <small class="error"></small>
            </label>
            <label>
                Número telefónico
                <input type="tel" id="aplazo_tel" placeholder="10 digitos" maxlength="10" required>
                <small class="error"></small>
            </label>
        `,
        SPEI: `
            <label>
                Nombre completo
                <input type="text" id="spei_nombre" placeholder="Nombre completo" required>
                <small class="error"></small>
            </label>
            <label>
                Correo electrónico
                <input type="email" id="spei_correo" placeholder="correo@ejemplo.com" required>
                <small class="error"></small>
            </label>
        `,
        PayPal: `
            <label>
                Correo PayPal
                <input type="email" id="paypal_correo" placeholder="correo@paypal.com" required>
                <small class="error"></small>
            </label>
            <label>
                Contraseña
                <input type="password" id="paypal_pass" placeholder="Contraseña" required>
                <small class="error"></small>
            </label>
        `
    };

    function actualizarCamposPago(metodo) {
        switch(metodo) {
            case "Tarjeta de crédito o débito": 
                tituloPago.innerText = "Datos de la tarjeta";
                datosPago.querySelectorAll("label").forEach(l => l.remove());
                datosPago.insertAdjacentHTML("afterbegin", campos.Tarjeta); 
                break;
            case "Google Pay":
                tituloPago.innerText = "Pago con Google Pay";
                datosPago.querySelectorAll("label").forEach(l => l.remove());
                datosPago.insertAdjacentHTML("afterbegin", campos.GPay); 
                break;
            case "OXXO":
                tituloPago.innerText = "Pago en OXXO";
                datosPago.querySelectorAll("label").forEach(l => l.remove());
                datosPago.insertAdjacentHTML("afterbegin", campos.OXXO); 
                break;
            case "Paga en plazos":
                tituloPago.innerText = "Pago a plazos";
                datosPago.querySelectorAll("label").forEach(l => l.remove());
                datosPago.insertAdjacentHTML("afterbegin", campos.Aplazo); 
                break;
            case "SPEI":
                tituloPago.innerText = "Pago SPEI";
                datosPago.querySelectorAll("label").forEach(l => l.remove());
                datosPago.insertAdjacentHTML("afterbegin", campos.SPEI); 
                break;
            case "MSI disponibles":
                tituloPago.innerText = "Pago PayPal";
                datosPago.querySelectorAll("label").forEach(l => l.remove());
                datosPago.insertAdjacentHTML("afterbegin", campos.PayPal); 
                break;
        }
    }

    // Escuchar selección de método
    opciones.forEach(op => {
        op.addEventListener("click", () => {
            opciones.forEach(o => o.classList.remove("seleccionada"));
            op.classList.add("seleccionada");

            const metodo = op.innerText.trim();
            actualizarCamposPago(metodo);
        });
    });

    // Mantener botón "Realizar pedido" y validar formulario
    datosPago.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Pedido realizado con metodo: " + document.querySelector(".opcion.seleccionada").innerText.trim());
        // Aquí puedes añadir validación específica de cada método si quieres
    });

    // Inicializa con Tarjeta
    actualizarCamposPago("Tarjeta de crédito o débito");

});
