/* ============================================================
   SIMPLY CHECKOUT — the side-by-side flow strip
   Native horizontal scroll does the work (trackpad, touch, keyboard).
   This adds the arrows, the position bar and mouse drag. Reveals and
   the chapter rail come from qween.js.
   ============================================================ */
(function () {
  'use strict';

  var flow = document.querySelector('.co-flow');
  if (!flow) return;
  var btns = Array.prototype.slice.call(document.querySelectorAll('.co-flow-btn'));
  var bar = document.querySelector('.co-flow-bar span');
  var smooth = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

  function update() {
    var max = flow.scrollWidth - flow.clientWidth;
    var share = flow.clientWidth / flow.scrollWidth;
    if (bar) {
      bar.style.setProperty('--w', share * 100 + '%');
      /* translateX percentages are of the bar's own width */
      bar.style.setProperty('--t', (max > 0 ? (flow.scrollLeft / max) * (1 / share - 1) * 100 : 0) + '%');
    }
    btns.forEach(function (b) {
      var dir = Number(b.getAttribute('data-dir'));
      b.disabled = dir < 0 ? flow.scrollLeft <= 2 : flow.scrollLeft >= max - 2;
    });
  }

  btns.forEach(function (b) {
    b.addEventListener('click', function () {
      flow.scrollBy({ left: Number(b.getAttribute('data-dir')) * flow.clientWidth * 0.7, behavior: smooth });
    });
  });

  /* Mouse drag only: touch and trackpad already scroll natively. */
  var startX = 0, startLeft = 0, dragging = false;
  flow.addEventListener('pointerdown', function (e) {
    if (e.pointerType !== 'mouse') return;
    dragging = true; startX = e.clientX; startLeft = flow.scrollLeft;
    flow.classList.add('is-dragging');
    flow.setPointerCapture(e.pointerId);
  });
  flow.addEventListener('pointermove', function (e) {
    if (dragging) flow.scrollLeft = startLeft - (e.clientX - startX);
  });
  function stop() { dragging = false; flow.classList.remove('is-dragging'); }
  flow.addEventListener('pointerup', stop);
  flow.addEventListener('pointercancel', stop);

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      document.body.classList.toggle('co-flow-on', entries[0].isIntersecting);
    }, { rootMargin: '-10% 0px -10% 0px' }).observe(flow);
  }

  flow.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
