function toggleMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cierra el menú al hacer clic en cualquier parte del body
    document.body.addEventListener('click', (event) => {
        if (!event.target.closest('nav')) {
            navLinks.classList.remove('active');
        }
    });
}

// Llama a la función cuando el documento esté listo
document.addEventListener('DOMContentLoaded', toggleMenu);




