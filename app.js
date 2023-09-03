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


//controlar el efecto parallax
window.addEventListener('scroll', function () {
    const scrollPosition = window.pageYOffset;
    const speed = 0.5; // Puedes ajustar la velocidad según tus preferencias

    // Aplica la transformación CSS al fondo de la página
    document.body.style.backgroundPositionY = -scrollPosition * speed + 'px';
});


//manejo efecto fade in del inicio

// Función para verificar si un elemento está en el área visible
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función para mostrar elementos con efecto fade-in cuando están en el área visible
function showOnScroll() {
    const sections = document.querySelectorAll('.fade-in-section');

    sections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('fade-in');
        }
    });
}

// Agregar un evento scroll para verificar cuando las secciones son visibles
window.addEventListener('scroll', showOnScroll);






