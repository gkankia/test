document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
        
// JavaScript for changing logo on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const logoImg = document.querySelector('.logo-img');
    const heroSection = document.querySelector('.hero');

    // Calculate the bottom position of the hero section
    const heroBottom = heroSection.getBoundingClientRect().bottom;

    // Check if the bottom of hero section is above or at the top of the viewport
    if (heroBottom <= 0) {
        header.classList.add('scrolled');
        logoImg.src = './img/zaxis-new.svg'; // Change to the scrolled logo
    } else {
        header.classList.remove('scrolled');
        logoImg.src = './img/zaxis-new.svg'; // Change back to the default logo
    }
});