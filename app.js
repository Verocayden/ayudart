// Multilanguage
// Inspired by: Noushad Mohamed. (November 2018). Multi language page with Javascript or jquery. Stack Overflow. https://stackoverflow.com/questions/40430462/multi-language-page-with-javascript-or-jquery?noredirect=1&lq=1

let arrLang = {
    fr: {
        "nav-home": "Accueil",
        "nav-about": "À propos",
        "nav-services": "Services",
        "nav-contact": "Contact",
        "nav-demo": "Essai gratuit",
        "hero-title": "L'IA au service des artistes",
        "hero-description": "Un assistant à portée de main pour vos illustrations !",
        "hero-button": "Essayez gratuitement !",
        "about-title" : "À propos",
        "about-description-1": "AyudART est un assistant intelligent pour vous aider à réaliser vos illustrations efficacement. En utilisant l'IA, AyudART diminue significativement le temps consacré aux tâches répétitives en dessin.",
        "about-description-2": "Grâce à AyudART, vous pouvez enfin vous concentrer sur les aspects les plus créatifs du dessin, de la bande dessinée, des mangas, des webcomics et de l'animation 2D !",
        "services-title": "L'encrage en un clic !",
        "services-description-1": "Il suffit de fournir votre croquis pour qu'AyudART encre votre dessin à la vitesse de l'éclair. AyudART sauve ainsi des heures de travail répétitif !",
        "services-description-2": "Dans les prochains développements, AyudART pourra même proposer différents types d'encrage, spécialement adaptés à votre style artistique !",
        "value-prop-title": "Ce qui distingue AyudART",
        "value-prop-1": "Un outil personnalisé qui facilite les tâches rébarbatives du dessin",
        "value-prop-2": "Une IA qui respecte intégralement votre créativité",
        "value-prop-3": "Une solution facilement accessible et adaptée à tous les budgets",
        "contact-title": "Contact",
        "contact-description-1": "Je m'appelle Victoria-Mae Carrière. J'étudie en génie logiciel à Polytechnique Montréal et je suis artiste en illustration numérique.",
        "contact-description-2": "Aider des milliers d'artistes à s'accomplir à leur plein potentiel vous intéresse ? Vous voulez rejoindre l'équipe ? Je vous invite à me contacter !",
        "contact-link": "Retrouvez-moi sur LinkedIn !",
        "cta-title": "Bye bye répétitivité ! Bonjour créativité !",
        "cta-description": "Explorez gratuitement les possibilités offertes par AyudART !",
        "cta-button": "Essayez la démo !",
        "footer-title": "Explorez",
        "footer-home": "Accueil",
        "footer-about": "À propos",
        "footer-services": "Services",
        "footer-contact": "Contact",
        "footer-demo": "Démo gratuite",
        "construction-title": "Page en construction",
        "construction-description-1": "AyudART est présentement en développement.",
        "construction-description-2": "Si vous souhaitez être parmi les premiers à essayer AyudART en avant-première, remplissez le formulaire dans le lien suivant !",
        "construction-cta": "Soyez parmi les premiers testeurs d'AyudART !"
    },

    en: {
        "nav-home" : "Home",
        "nav-about": "About",
        "nav-services": "Services",
        "nav-contact": "Contact",
        "nav-demo": "Free Demo",
        "hero-title": "AI at the Service of Artists",
        "hero-description": "A Handy Assistant For Your Illustrations!",
        "hero-button": "Try Now!",
        "about-title" : "About",
        "about-description-1": "AyudART is an AI assistant to help you create your illustrations efficiently. AyudART significantly reduces time spent on repetitive tasks in drawing.",
        "about-description-2": "Thanks to AyudART, you can finally focus on the most creative aspects in drawing, comics, mangas, and 2D animation!",
        "services-title": "Lineart in One Click!",
        "services-description-1": "Just provide your sketch and AyudART renders the lineart at lightning speed. AyudART saves hours of repetitive work!",
        "services-description-2": "In future developments, AyudART will be able to suggest different types of lineart, specially adapted to your art style!",
        "value-prop-title": "What Sets AyudART Apart",
        "value-prop-1": "A personalized tool that makes daunting tasks in drawing easier.",
        "value-prop-2": "An AI that fully respects your creativity",
        "value-prop-3": "An accessible solution, adapted to all budgets",
        "contact-title": "Contact",
        "contact-description-1": "I am Victoria-Mae Carrière, student in software engineering at Polytechnique Montréal and digital artist.",
        "contact-description-2": "Interested in helping thousands of artists to reach their full potential? Do you want to join the team? Contact me!",
        "contact-link": "Find me on LinkedIn!",
        "cta-title": "Say Hello to Creativity!",
        "cta-description": "Explore what AyudART has to offer!",
        "cta-button": "Try the Demo!",
        "footer-title": "Browse",
        "footer-home": "Home",
        "footer-about": "About",
        "footer-services": "Services",
        "footer-contact": "Contact",
        "footer-demo": "Free Demo",
        "construction-title": "Page Under Construction",
        "construction-description-1": "AyudART is currently in developement.",
        "construction-description-2": "If you wish to be among the first to try AyudART, fill out the form in the following link!",
        "construction-cta": "Be among the first testers of AyudART!"
    }
}

$(function() {
    let lang = localStorage.getItem('language');
    changeLanguage(lang);


    $('.translate').click(function(){
        lang = $(this).attr('id');
        localStorage.setItem('language', lang);
        changeLanguage(lang);
    });

    function changeLanguage(lang){
        if (lang === null) {
            return;
        }
        $('.lang').each(function(index,element){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        }); 
    }

})

// Mobile Menu
// Inspired by: Brian. (September 2020). HTML CSS and Javascript Website with Smooth Scroll. Codavilla. https://www.codavilla.com/posts/html-css-and-javascript-website-with-smooth-scroll

const menu = document.querySelector('#mobile-menu');
const navLogo = document.querySelector('#navbar__logo')
const menuLinks = document.querySelector('.navbar__menu');

// Show the Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Hide the Mobile Menu
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    
    if (window.innerWidth <= 960 && menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
    }
  };
  
  menuLinks.addEventListener('click', hideMobileMenu);
  navLogo.addEventListener('click', hideMobileMenu);
