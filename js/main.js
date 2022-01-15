// Global variables
const menuToggleIcon = document.getElementById('menu-toggle-icon');
const navMobile = document.getElementById('nav');
const headerElement = document.getElementById('header');
// const menuToggleIcon = document.getElementById('menu-toggle-icon');

// Toggle navigation
const toggleMenu = () => {
    navMobile.classList.toggle('active')
    headerElement .classList.toggle('active')
}

menuToggleIcon.addEventListener('click', toggleMenu)

const headerScrollEvent = () => {
    if (this.scrollY >= 50) {
        headerElement.classList.add('active-scroll')
    } else {
        headerElement.classList.remove('active-scroll')
    }
}

window.addEventListener('scroll', headerScrollEvent)
//Add/remove header border bottom on scroll


// Add selected link styles to the link clicked and close navigation when clicking the links


// Scroll Reveal