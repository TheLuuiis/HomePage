'used strict'
// <    >  =>

window.addEventListener('DOMContentLoaded', () => {
const links = document.querySelectorAll('#nav-menu a');
links.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
    header.classList.remove('show-close');
  });
});


});