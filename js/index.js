'use strict'

window.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('.body');
  const checkbox = document.getElementById('toggle-theme');
  const navDark = document.querySelectorAll('.nav-dark');
  const title = document.querySelector('.title');
  const text = document.querySelectorAll('.text');
  const logoLight = document.querySelector('.logo-light');
  const logoDark = document.querySelector('.logo-dark');  

  // Tema oscuro
  checkbox.addEventListener('change', () => {

    if (checkbox.checked) {
      body.style.backgroundColor = '#111729';

      navDark.forEach(a => {
        a.style.color = '#F2F9FE';
      });

      text.forEach(texto => {
        texto.style.color = '#FFFFFF';
      });

      title.style.color = '#FFFFFF';

      logoLight.style.display = 'none';
      logoDark.style.display = 'block';

    } else {
      body.style.backgroundColor = '#F2F9FE';

      navDark.forEach(a => {
        a.style.color = '#909193';
      });

      text.forEach(texto => {
        texto.style.color = '#909193';
      });

      title.style.color = '#111729';

      logoLight.style.display = 'block';
      logoDark.style.display = 'none';
    };

  });

  const sr = ScrollReveal({
    distance: '60px',
    duration: 1200,
    easing: 'ease-out',
    origin: 'bottom',
    reset: false
  });

  sr.reveal('.simple p', {
    origin: 'left',
    delay: 100,
    opacity: 0,
    scale: 0.9
  });

  sr.reveal('.title', {
    origin: 'top',
    delay: 200,
    opacity: 0,
    scale: 0.95
  });

  sr.reveal('.description p', {
    delay: 300,
    interval: 100,
    opacity: 0
  });

  sr.reveal('.container-buttons', {
    origin: 'bottom',
    delay: 400,
    scale: 0.95
  });

  sr.reveal('.container-verify', {
    origin: 'bottom',
    delay: 500,
    scale: 0.95
  });

  sr.reveal('.img img', {
    origin: 'right',
    delay: 600,
    scale: 0.9
  });
});
