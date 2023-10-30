document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const offset = targetSection.getBoundingClientRect().top;
            const scrollOptions = {
                top: offset,
                behavior: 'smooth'
            };
            
            window.scrollTo(scrollOptions);
        }
    }
});
