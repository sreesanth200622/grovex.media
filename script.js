document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const links = document.querySelectorAll('nav a');

    // Mobile Menu Toggle
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        if (nav.classList.contains('active')) {
            menuToggle.textContent = '✕';
        } else {
            menuToggle.textContent = '☰';
        }
    });

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuToggle.textContent = '☰';
        });
    });

    // Scroll Animations (Simple Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.service-item, .hero-content');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});
