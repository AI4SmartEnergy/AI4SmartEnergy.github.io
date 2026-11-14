document.documentElement.classList.add('js');

const menu = document.querySelector('.menu');
const nav = document.querySelector('#navigation');

function setMenu(open) {
  nav.classList.toggle('open', open);
  menu.setAttribute('aria-expanded', String(open));
}

menu.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    setMenu(false);
    menu.focus();
  }
});
window.matchMedia('(max-width: 880px)').addEventListener('change', () => setMenu(false));
