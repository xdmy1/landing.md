const nav = document.querySelector('.navbar-options');
const openNavButton = document.querySelector('.button-opennav');
const closeNavItems = document.querySelectorAll('.navbar-options .mobile-hidden');

function openNav() {
    nav.style.display = 'flex'; // Show the nav
    setTimeout(() => {
        nav.style.opacity = '1'; // Fade in
        nav.style.transform = 'translateY(0)'; // Slide down
    }, 10); // Slight delay for the browser to register the display change
}

function closeNav() {
    if (window.innerWidth <= 600) { // Check if on mobile
        nav.style.opacity = '0'; // Fade out
        nav.style.transform = 'translateY(-100%)'; // Slide up
        setTimeout(() => {
            nav.style.display = 'none'; // Hide after animation
        }, 200); // Match this duration with the CSS transition duration
    }
}

// Event listeners
openNavButton.addEventListener('click', openNav);
closeNavItems.forEach(item => {
    item.addEventListener('click', closeNav);
});