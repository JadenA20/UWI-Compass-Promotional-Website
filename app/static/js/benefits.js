//Written by: Khanez Wallace
//Adding Dynamic scroll effects and hover effects on card for Benefits page

document.addEventListener('DOMContentLoaded', function () {

    //Scroll reveal animation with staggered delay
    const revealElements = document.querySelectorAll('.scroll-reveal');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return rect.top <= windowHeight - 100 && rect.bottom >= 0;
    }

    function checkReveal() {
        revealElements.forEach((element, index) => {
            if (isElementInViewport(element) && !element.classList.contains('revealed')) {
                setTimeout(() => {
                    element.classList.add('revealed');
                }, index * 100);
            }
        });

    }

    //Initial Check
    checkReveal();

    //Check on scroll
    window.addEventListener('scroll', checkReveal);

    //Parallax efect (depth illusion) on intro section
    window.addEventListener('scroll', function() {
        const introSection = document.querySelector('.benefits-intro');
        
        if (introSection) {
            const scrolled = window.pageYOffset;
            introSection.style.transform = `translateY(${scrolled * 0.15}px)`;
        }
    });

    //Card hover effect, pulse-hint on load
    const cards = document.querySelectorAll('.benefit-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('pulse-hint');
            setTimeout(() => card.classList.remove('pulse-hint'), 600);
            
        }, 800 + index * 150);
    });


});