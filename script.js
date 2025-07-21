document.addEventListener('DOMContentLoaded', function() {
    
    const hamburger = document.getElementById('hamburger-icon');
    const menu = document.getElementById('menu-links');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });

    const menuLinks = document.querySelectorAll('#menu-links a');

    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active'); 
            menu.classList.remove('active');
        });
    });

    const backToTopButton = document.getElementById('back-to-top-btn');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
});