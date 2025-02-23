
/*
window.addEventListener('load', function() {
    document.body.classList.add('loaded'); // Fade in the title when the page loads
});
*/


gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-text", {
    opacity: 0,
    y: 50,
    duration: 1.8,
    ease: "power2.out"
});

gsap.from(".hero-text2", {
    opacity: 0,
    y: 50,
    duration: 1.75,
    ease: "power2.out"
});

gsap.to(".skill", {
    scrollTrigger: {
        trigger: ".skills-grid",
        start: "top 70%",
        end: "top 16%",
        scrub: true
    },
    opacity: 1,
    stagger: 0.1
});
