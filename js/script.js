// =======================================
// CYBERLATTE
// FORMULARIO DE CONTACTO
// =======================================

// Esperar que cargue toda la página
document.addEventListener("DOMContentLoaded", function () {

    // Obtener el formulario
    const formulario = document.getElementById("contactForm");

    // Si no existe, detener el código
    if (!formulario) {

        console.error("No se encontró el formulario.");

        return;

    }

    // Escuchar el envío
    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        // Obtener datos

        const nombre = document.getElementById("nombre").value.trim();

        const correo = document.getElementById("correo").value.trim();

        const reserva = document.getElementById("reserva").value;

        const mensaje = document.getElementById("mensaje").value.trim();

        // Validar

        if (
            nombre === "" ||
            correo === "" ||
            mensaje === ""
        ) {

            alert("Por favor completa todos los campos.");

            return;

        }

        // Crear objeto

        const solicitud = {

            nombre,

            correo,

            reserva,

            mensaje

        };

// ===============================
// SIMULACIÓN DE ENVÍO AL SERVIDOR
// ===============================

function enviarReserva(datos) {

    return new Promise((resolve) => {

        console.log("Conectando con el servidor...");

        setTimeout(() => {

            console.log("Servidor conectado.");

            resolve({

                estado: "OK",

                mensaje: "Reserva almacenada correctamente."

            });

        }, 1500);

    });

}

        // Mostrar objeto

        console.log("Objeto JavaScript:");
        console.log(solicitud);

        console.log("JSON enviado:");
        console.log(JSON.stringify(solicitud, null, 2));

        enviarReserva(solicitud)

        .then((respuesta) => {

        console.log(respuesta);

        alert(respuesta.mensaje);

        formulario.reset();

        });
    });
});