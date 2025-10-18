const header = document.querySelector('header');
const logoLink = document.querySelector('.logo a');
let lastScrollY = window.scrollY;

document.addEventListener('DOMContentLoaded', () => {
    if (header) {
        header.style.transition = 'transform 0.3s ease-out';
        header.style.transform = 'translateY(0)'; 
    }

    window.addEventListener('scroll', () => {
        if (!header) return;

        const currentScrollY = window.scrollY;
        const scrollDistanceToBottom = document.body.scrollHeight - (currentScrollY + window.innerHeight);
        const bottomThreshold = 10; 

        if (currentScrollY > lastScrollY && scrollDistanceToBottom > bottomThreshold && currentScrollY > 100) {
            header.style.transform = 'translateY(-100%)';
            logoLink.classList.remove('pulsing');
        } 
        
        else if (currentScrollY < lastScrollY) {
            header.style.transform = 'translateY(0)';
        }

        else if (scrollDistanceToBottom < bottomThreshold) {
            header.style.transform = 'translateY(0)';
            logoLink.classList.add('pulsing');
        }
        lastScrollY = currentScrollY;

        if (logoLink) {
            logoLink.addEventListener('click', () => {
                logoLink.classList.remove('pulsing');
            });
        }

    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
            header.style.transform = 'translateY(0)';
        }
    });
});