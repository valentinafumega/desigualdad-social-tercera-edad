// .js para validación de form - contacto
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        // Obtener los valores de los campos del formulario
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validar si los campos están vacíos
        if (!name || !email || !message) {
            event.preventDefault(); // Evita el envío del formulario
            alert('Por favor, complete todos los campos del formulario.');
        }
    });
});
