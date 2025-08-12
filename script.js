// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Add some interactivity to menu items
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        this.style.transform = 'scale(1.05)';
        setTimeout(() => {
            this.style.transform = 'translateY(-5px)';
        }, 200);
    });
});

// Simple counter animation for the hero section
let count = 0;
const heroTitle = document.querySelector('.hero-content h1');
const originalText = heroTitle.textContent;

function animateText() {
    if (count < originalText.length) {
        heroTitle.textContent = originalText.substring(0, count + 1);
        count++;
        setTimeout(animateText, 100);
    }
}

// Start animation when page loads
window.addEventListener('load', () => {
    setTimeout(animateText, 500);
});
