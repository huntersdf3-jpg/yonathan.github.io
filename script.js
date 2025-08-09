// Selecciona todos los elementos con la clase 'car-card'
const carCards = document.querySelectorAll('.car-card');

// Crea un nuevo IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Si el elemento está en el viewport
        if (entry.isIntersecting) {
            // Añade la clase 'in-view' para activar la animación
            entry.target.classList.add('in-view');
            // Deja de observar el elemento una vez que se ha animado
            observer.unobserve(entry.target);
        }
    });
}, {
    // Opciones del observador
    threshold: 0.5 // El 50% del elemento debe ser visible para disparar la animación
});

// Observa cada tarjeta de auto
carCards.forEach(card => {
    observer.observe(card);
});