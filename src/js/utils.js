// DOM element selectors
const toTopBtn = document.querySelector('#goTop');



/* Toggle element from top or bottom
 * @param   {DOM element}   element     Target DOM element to toggle
 * @param   {string}        position    'top' or 'bottom'
 * @param   {string}        offset      Offset in e.g. pixels, rem, em, etc.
*/
const elementToggle = (element, position, offset) => position === 'top' ? element.style.top = offset : element.style.bottom = offset;



/* Change display attribute of element
 * @param   {DOM element}   element     Target DOM element
 * @param   {string}        value       Display attribute value, e.g. 'none', 'block', etc.
*/
const elementDisplay = (element, value) => element.style.display = value;



// Hide "to top button"
const hideToTopBtn = () => window.pageYOffset > window.screen.height ? elementToggle(toTopBtn, 'bottom', '20px') : elementToggle(toTopBtn, 'bottom', '-50px');



/* Changes background color of elements depending on window.pageYOffset - Used onscroll
 * @param   {number}    offset     Negative offset on window.screen.height
 * @param   {string}    col1       Color if scrolled > (screen height - offset)
 * @param   {string}    col2       Color if scrolled < (screen height - offset)
 * @param   {DOM Eleme} elements   Element/elements to alter
*/
const alterBgColor = (offset, col1, col2, ...elements) => elements.forEach(element => window.pageYOffset > window.screen.height - offset ? element.style.background = col1 : element.style.background = col2);



/* If iOs device or no
  * @returns {boolean}
*/
const isIos = () => /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;



//Smooth scrolling
$('#menu-main-menu a, .btn-top, .arrow-link').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top,
    },
      800
    );
  }
});



// Show hidden project info on default on touch screens(since no hover/focus capabilities)
var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;



// Add hover and focus effects on projects
document.querySelectorAll(".portfolio-item_link").forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.firstChild.nextElementSibling.firstElementChild.style.display = 'block';
  })

  link.addEventListener('focusin', () => {
    link.firstChild.nextElementSibling.firstElementChild.style.display = 'block';
  })

  if (!supportsTouch) {
    link.addEventListener('mouseleave', () => {
      link.firstChild.nextElementSibling.firstElementChild.style.display = 'none';
    })

    link.addEventListener('focusout', () => {
      link.firstChild.nextElementSibling.firstElementChild.style.display = 'none';
    })
  }
});



if (supportsTouch) {
  document.querySelectorAll(".portfolio-item_link").forEach(link => {
    link.firstChild.nextElementSibling.firstElementChild.style.display = 'block';
  })
}
