document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
          entry.target.classList.remove('opacity-0'); // Hacer visible
          observer.unobserve(entry.target); // Dejar de observar una vez activada la animación
        }
      });
    });
  
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
      el.classList.add('opacity-0'); // Ocultar inicialmente
      observer.observe(el);
    });
  });
  