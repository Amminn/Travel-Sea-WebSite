// Global variables
const menuToggleIcon = document.getElementById('menu-toggle-icon');
const navMobile = document.getElementById('nav');
const headerElement = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-mobile .list-link');

// Toggle navigation
const toggleMenu = () => {
    navMobile.classList.toggle('active')
    headerElement.classList.toggle('active')
}

menuToggleIcon.addEventListener('click', toggleMenu)

const headerScrollEvent = () => {
    if (this.scrollY >= 50) {
        headerElement.classList.add('active-scroll')
    } else {
        headerElement.classList.remove('active-scroll')
    }
}

//Add/remove header border bottom on scroll
window.addEventListener('scroll', headerScrollEvent)



// Add selected link styles to the link clicked and close navigation when clicking the links
navLinks.forEach(link => link.addEventListener('click', () => {
    navMobile.classList.remove('active')
    headerElement.classList.remove('active')

    // select the link with current class
    let current = document.querySelector('.current')

    // remove the current class from the current element
    current.classList.remove('current')

    // add current class to the link we did click
    link.classList.add('current')
}))


// Scroll Reveal animation

const sr = ScrollReveal({
    distance: '25px',
    duration: 2500
})

sr.reveal(`.image-left, .popular-destionation-data, .plan-trip-data`, {
    origin: 'left'
}) 

sr.reveal(`.image-center`, {
    origin: 'bottom'
})

sr.reveal(`.image-right, .showcase-data`, {
    origin: 'right'
}) 

sr.reveal(`.newsletter-container-inner`, {
    origin: 'bottom',
    interval: 250
}) 
sr.reveal(`.beach-data-wrapper`, {
    origin: 'bottom',
    interval: 250
}) 

sr.reveal(`.newsletter-container`, {
    origin: 'top'
})

sr.reveal(`.footer-container > div, .footer-seperator, .copyright`, {
    origin: 'bottom',
    interval: 250
})