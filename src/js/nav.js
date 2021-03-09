// Header DOM-elements
const header = document.querySelector('.header-content');
const mainMenu = document.querySelector('#menu-main-menu');
const mainMenuToggle = document.querySelector('#main-menu-toggle');



// Hide header & to top on scroll
window.onscroll = () => {
  hideMenu();
  hideToTopBtn();
  alterBgColor(300, 'rgba(0, 0, 0, 0.6)', 'transparent', header);
  screen.width < 813 ? alterBgColor(300, 'rgba(0, 0, 0, 0.6)', 'transparent', mainMenu) : null;
};



// Hide Header
let prevScrollpos = window.pageYOffset;

const hideMenu = () => {
  let currentScrollPos = window.pageYOffset;

  if (window.pageYOffset > 100) {
    if (prevScrollpos > currentScrollPos) {
      elementToggle(header, 'top', '0');
      header.setAttribute('aria-hidden', 'false');
      elementDisplay(mainMenu, 'none');
      mainMenu.setAttribute('aria-hidden', 'false');
      mainMenuToggle.setAttribute('aria-hidden', 'false');
    } else {
      elementToggle(header, 'top', '-120px');
      header.setAttribute('aria-hidden', 'true');
      elementDisplay(mainMenu, 'none');
      mainMenu.setAttribute('aria-hidden', 'true');
      mainMenuToggle.setAttribute('aria-hidden', 'true');
    }
  }

  prevScrollpos = currentScrollPos;
}



// Toggle mobile menu
$('#main-menu-toggle').click(function () {
  $('.main-menu ul').slideToggle(200, function () {
  });

  if (mainMenu.getAttribute('aria-hidden') == 'false') {
    mainMenu.setAttribute('aria-hidden', 'true');
    mainMenuToggle.setAttribute('aria-expanded', 'false');
  } else {
    mainMenu.setAttribute('aria-hidden', 'false');
    mainMenuToggle.setAttribute('aria-expanded', 'true');
  }
});



window.onload = () => {
  if (window.innerWidth <= 812) {
    mainMenuToggle.setAttribute('aria-hidden', 'false');
    mainMenuToggle.setAttribute('aria-expanded', 'false');
  } else {
    mainMenuToggle.setAttribute('aria-hidden', 'true');
    mainMenuToggle.setAttribute('aria-expanded', 'true');
  }
}



// Correct WAI-ARIA on resize
window.onresize = () => {
  if (window.innerWidth <= 812) {
    mainMenu.style.display = 'none';
    mainMenu.setAttribute('aria-hidden', 'true');
    mainMenuToggle.setAttribute('aria-hidden', 'false');
    mainMenuToggle.setAttribute('aria-expanded', 'false');
  } else {
    mainMenu.setAttribute('aria-hidden', 'false');
    mainMenuToggle.setAttribute('aria-hidden', 'true');
    mainMenuToggle.setAttribute('aria-expanded', 'true');
  }
}
