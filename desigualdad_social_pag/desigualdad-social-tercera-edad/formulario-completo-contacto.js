// .js para formulario ya completo
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validar si los campos están completos
        if (name && email && message) {
            alert('¡Gracias por contactarnos!');
        }
    });
});
