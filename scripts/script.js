// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Keep the hero section visible for 3 seconds
    setTimeout(() => {
        // Trigger the animation by adding the 'slide-up' class after the delay
        document.querySelector('.hero').classList.add('slide-up');
    }, 2000);  // Time in milliseconds (3000ms = 3 seconds)
});

