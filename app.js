///////////////////////////////// MOBILE MENU ////////////////////////////

// In index.html, we have put an id on the navbar__toggle, which is "mobile-menu"
// This id allows the class to be targeted by JavaScript
const menu = document.querySelector('#mobile-menu'); // Query Selector: Allows to easily switch class...

// .navbar__menu is a class that includes the elements
const menuLinks = document.querySelector('.navbar__menu');

// Display Mobile Menu
// Add a function to make a class active or inactive
// Using Arrow Function
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

// Event listener
menu.addEventListener('click', mobileMenu);

////////////////////////////// SMOOTH SCROLL /////////////////////////////

/*
const navLogo = document.querySelector('#navbar__logo');

// Highlight Menu
// Show active menu when scrolling
// Using Arrow Function with the #IDs in index.html
const highlightMenu = () => {
    const elem = document.querySelector('.highlight'); // target highlight class
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const artworkMenu = document.querySelector('#artwork-page');

    // Scrolling Position is in Y axis
    let scrollPos = window.scrollY;

    // Useful tip to find correct scroll position!
    console.log(scrollPos); // Allows to find the accurate scroll position of each section by opening the console on the webpage
    // For different designs, we need different scroll positionings. The scrollPos values must be changed.

    // Adds 'highlight' class to menu items
    // The class must work only if no hamburger (screen must be large enough).
    // The 600 value is obtained by measuring the number of pixels required to get to the About Section.
    if (window.innerWidth > 960 && scrollPos < 300) {
        homeMenu.classList.add('highlight'); // Adds Highlight to Home Section.
        aboutMenu.classList.remove('highlight'); // Makes sure that we have only one highlight at the same time.
        return; // If we don't return, risk of bugs with clicks
    }
    else if (window.innerWidth > 960 && scrollPos < 750) {
        aboutMenu.classList.add('highlight'); // We're in the About Section, which is the only one to be highlighted.
        homeMenu.classList.remove('highlight');
        artworkMenu.classList.remove('highlight');
        return;
    }
    else if (window.innerWidth > 960 && scrollPos < 1000) {
        artworkMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight'); 
        return;
    }

    // When we click on the logo in the navbar
    if ((elem && window.innerWidth < 960 && scrollPos < 300) || elem) {
        elem.classList.remove('highlight');
    }
}

// Trigger highlights by calling the function which listens to scroll and clicks + function highlightMenu
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
*/
// Close mobile menu when clicking on a menu item
const hideMobileMenu = () => {
    // If we click on the icon, we want this to close up the mobile nav
    const menuBars = document.querySelector('.is-active');

    // If mobile and menuBars is true/activated/open
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active'); // Changes value
        menuLinks.classList.remove('active'); // active is a class in CSS that makes the menu appear on mobile version
    }
}

// Trigger the mobile menu to close when a menu section is chosen
menuLinks.addEventListener('click', hideMobileMenu);
// On mobile, clicking on the logo at top-left makes mobile menu disappear as well.
navLogo.addEventListener('click', hideMobileMenu);