// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animated Scrolling Elements
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const viewPortHeight = window.innerHeight;
        if (elementPosition < viewPortHeight - 150) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});

// Dynamic Content Loading
function loadDynamicContent() {
    const dynamicSections = document.querySelectorAll('.dynamic-content');
    dynamicSections.forEach(section => {
        fetch('path_to_your_content_source')
            .then(response => response.json())
            .then(data => {
                section.innerHTML = data.content;
            })
            .catch(error => console.error('Error loading dynamic content:', error));
    });
}
document.addEventListener('DOMContentLoaded', loadDynamicContent);

// Interactive Elements: Toggling Classes on Click
document.querySelectorAll('.interactive-element').forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('active');
    });
});

// Responsive Navbar Toggle (for Mobile Devices)
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// Parallax Scrolling Effect for Background Images
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    const scrollPosition = window.pageYOffset;
    parallaxElements.forEach(element => {
        const depth = element.getAttribute('data-depth');
        const movement = (scrollPosition * depth) + 'px';
        element.style.transform = `translateY(${movement})`;
    });
});

// Additional JS functionality can be added here as needed
