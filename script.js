const header = document.querySelector('header');
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
        } 
        
        else if (currentScrollY < lastScrollY || scrollDistanceToBottom < bottomThreshold) {
            header.style.transform = 'translateY(0)';
        }
        lastScrollY = currentScrollY;
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
            header.style.transform = 'translateY(0)';
        }
    });
});