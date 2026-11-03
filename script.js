window.addEventListener('scroll', function() {
    const parallax = document.querySelectorAll('.parallax');
    parallax.forEach(function(el) {
        const scrollPosition = window.pageYOffset;
        el.style.backgroundPositionY = (scrollPosition * 0.1) + 'px'; // Измените коэффициент для настройки эффекта
    });
});