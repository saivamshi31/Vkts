document.addEventListener('DOMContentLoaded', () => {
    // Simple mobile menu toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            const isActive = navLinks.classList.contains('nav-active');
            mobileBtn.textContent = isActive ? '✕' : '☰';
        });
    }

    // Accordion functionality (Homepage)
    const accordions = document.querySelectorAll('.accordion-header');
    if (accordions.length > 0) {
        accordions.forEach(acc => {
            acc.addEventListener('click', function () {
                this.parentElement.classList.toggle('accordion-active');
                const panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        });
    }
});
