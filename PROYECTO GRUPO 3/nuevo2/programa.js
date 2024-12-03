document.addEventListener("DOMContentLoaded", function () {
    // Funcionalidad del botón de donación
    const donationButton = document.querySelector(".btn");

    if (donationButton) {
        donationButton.addEventListener("click", function (event) {
            event.preventDefault(); // Previene la acción predeterminada del botón
            alert("Gracias por tu interés en donar. Esta funcionalidad estará disponible pronto.");
        });
    } else {
        console.log("El botón de donación no se encontró.");
    }
    document.addEventListener("DOMContentLoaded", function () {
        const formularioDonacion = document.getElementById('formulario-donacion');
        const mensajeConfirmacion = document.getElementById('mensajeConfirmacion');
    
        formularioDonacion.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevenir el envío tradicional del formulario
    
            // Mostrar el mensaje de confirmación
            mensajeConfirmacion.style.display = 'block';
    
            // Limpiar el formulario después de mostrar el mensaje de confirmación
            formularioDonacion.reset();
        });
    });
    

    // Funcionalidad para el formulario de contacto
    document.addEventListener("DOMContentLoaded", function () {
        const formularioContacto = document.getElementById('formularioContacto');
        const mensajeConfirmacion = document.getElementById('mensajeConfirmacion');
    
        formularioContacto.addEventListener('submit', function (event) {
            event.preventDefault(); // Previene el comportamiento por defecto del formulario
    
            // Obtén los valores de los campos (si deseas usarlos)
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const telefono = document.getElementById('telefono').value;
            const mensaje = document.getElementById('mensaje').value;
    
            // Muestra el mensaje de confirmación en la página
            mensajeConfirmacion.style.display = 'block';
    
            // Opcional: Limpia los campos del formulario después de enviarlo
            formularioContacto.reset();
        });
    });
});    