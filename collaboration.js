const gallery = document.querySelector('.collaboration-gallery');
const slides = Array.from(gallery.querySelectorAll('.collaboration-slides img'));
const controls = gallery.querySelector('.collaboration-controls');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let current = 0;
let timer;

function moveSlide(offset) {
  slides[current].hidden = true;
  current = (current + offset + slides.length) % slides.length;
  slides[current].hidden = false;
}

function scheduleNextSlide() {
  window.clearTimeout(timer);
  if (!reducedMotion.matches && !document.hidden && !gallery.matches(':hover, :focus-within')) {
    timer = window.setTimeout(() => {
      moveSlide(1);
      scheduleNextSlide();
    }, 2000);
  }
}

gallery.querySelector('[data-previous]').addEventListener('click', () => moveSlide(-1));
gallery.querySelector('[data-next]').addEventListener('click', () => moveSlide(1));
for (const event of ['pointerenter', 'pointerleave', 'focusin', 'focusout']) {
  gallery.addEventListener(event, () => window.requestAnimationFrame(scheduleNextSlide));
}
reducedMotion.addEventListener('change', scheduleNextSlide);
document.addEventListener('visibilitychange', scheduleNextSlide);
controls.hidden = false;
scheduleNextSlide();
