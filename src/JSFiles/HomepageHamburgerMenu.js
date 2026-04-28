document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOverlay = document.getElementById('menu-overlay');

    if (mobileMenuButton && mobileMenu && menuOverlay) {
        const toggleMenu = () => {
            mobileMenu.classList.toggle('hidden');
            menuOverlay.classList.toggle('hidden');
        };

        mobileMenuButton.addEventListener('click', toggleMenu);
        menuOverlay.addEventListener('click', toggleMenu);
    }
});