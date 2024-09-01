document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); 

            const targetId = this.getAttribute('href').substring(1); 
            const targetSection = document.getElementById(targetId);

            // Realizamos el desplazamiento suave
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Agregamos la clase para ocultar el elemento
            targetSection.classList.add('fade');
            
            // Esperamos un segundo antes de volver a mostrar el elemento
            setTimeout(() => {
                targetSection.classList.remove('fade');
                targetSection.classList.add('fade-in');
                
                // Limpiamos la clase 'fade-in' después de la animación
                setTimeout(() => {
                    targetSection.classList.remove('fade-in');
                }, 400); // La duración debe coincidir con la duración de la transición en CSS
            }, 900); // Tiempo que el elemento estará oculto
        });
    });
});
