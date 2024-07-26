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

document.addEventListener('DOMContentLoaded', function() {
    // Function to format date as 'Month Day, Year' in English
    function formatDateInEnglish(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    // Function to format date as 'Month Day, Year' in Georgian
    function formatDateInGeorgian(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('ka-GE', options);
    }

    // Get the current date
    const currentDate = new Date();

    // Find all elements with data-date attribute and set their content to the current date
    const dateElements = document.querySelectorAll('[data-date]');
    dateElements.forEach(element => {
        const lang = element.getAttribute('lang');
        if (lang === 'ka') {
            element.textContent = formatDateInGeorgian(currentDate);
        } else {
            element.textContent = formatDateInEnglish(currentDate);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var iso = new Isotope('.grid', {
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    var filterButtons = document.querySelectorAll('.filter-buttons button');
    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var filterValue = this.getAttribute('data-filter');
            iso.arrange({ filter: filterValue });
        });
    });
});

async function submitForm(event) {
    event.preventDefault();

    const form = document.getElementById('subscription-form');
    const formData = new FormData(form);

    const response = await fetch('https://script.google.com/macros/s/AKfycbyA8EGnlpL31Ut_yATrtAcKL6dd_oCUp_XV0ZK1p9Mw5e5tYjAgNlZwWzIjAXA4KQE/exec', {
        method: 'POST',
        body: formData
    });

    const result = await response.text(); // Assuming the server returns a plain text response
    const responseMessage = document.getElementById('response-message');

    // Update message and color based on result
    if (result === "Subscribed! We will be in touch!") {
        responseMessage.innerText = result;
        responseMessage.style.color = '#28a745'; // Green for success
    } else if (result === "This e-mail address is already subscribed.") {
        responseMessage.innerText = result;
        responseMessage.style.color = '#dc3545'; // Red for error
    } else if (result === "Invalid e-mail address.") {
        responseMessage.innerText = result;
        responseMessage.style.color = '#856404'; // Brown for warning
    }
    
    responseMessage.style.display = 'block'; // Show the message
}