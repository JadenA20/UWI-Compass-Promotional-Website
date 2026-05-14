// Written by: Khanez Wallace
//Adding Dynamic scroll effects for About Us page

document.addEventListener('DOMContentLoaded', function() {

    // --- Scroll Reveal Animation (with staggered delay) ---
    const revealElements = document.querySelectorAll('.scroll-reveal');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Trigger for scroll reveal animation
        return rect.top <= windowHeight - 100 && rect.bottom >= 0;
    }

    function checkReveal() {
        revealElements.forEach((element, index) => {
            if (isElementInViewport(element) && !element.classList.contains('revealed')) {

                // Stagger the animation * 100ms
                setTimeout(() => {
                    element.classList.add('revealed');
                }, index * 100);
            }
        });
    }

    // Initial check
    checkReveal();

    // Check on scroll
    window.addEventListener('scroll', checkReveal);

    // --- Parallax effect (Depth illusion) on the intro section ---
    window.addEventListener('scroll', function() {
        const introSection = document.querySelector('.intro-section');
        if (introSection) {
            const scrolled = window.pageYOffset;
            introSection.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

});