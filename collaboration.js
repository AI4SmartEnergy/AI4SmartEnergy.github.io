// Industry collaboration gallery: automatically advance every 2 seconds.
// Hovering or using the arrow buttons does not pause autoplay.
(() => {
  const gallery = document.querySelector('.collaboration-gallery');
  if (!gallery) return;

  const slides = Array.from(gallery.querySelectorAll('.collaboration-slides img'));
  const controls = gallery.querySelector('.collaboration-controls');
  if (slides.length < 2 || !controls) return;

  let current = slides.findIndex(slide => !slide.hidden);
  if (current === -1) current = 0;
  let timer;

  function displaySlide(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.hidden = i !== current;
    });
  }

  function startAutoplay() {
    window.clearInterval(timer);
    if (!document.hidden) {
      timer = window.setInterval(() => displaySlide(current + 1), 2000);
    }
  }

  controls.querySelector('[data-previous]')?.addEventListener('click', () => {
    displaySlide(current - 1);
    startAutoplay();
  });
  controls.querySelector('[data-next]')?.addEventListener('click', () => {
    displaySlide(current + 1);
    startAutoplay();
  });

  document.addEventListener('visibilitychange', startAutoplay);
  displaySlide(current);
  controls.hidden = false;
  startAutoplay();
})();
