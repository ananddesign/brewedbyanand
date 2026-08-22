/* ============================================================
   SITE
   Shared behaviour for every page. Each block no-ops when the
   markup it drives isn't present, so one file serves all pages.
   ============================================================ */
(function () {
  'use strict';

  document.body.classList.add('js-ready');

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Nav: shrink on scroll ---------- */
  var nav = document.getElementById('mainNav');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Nav: mobile menu ---------- */
  var toggle = document.querySelector('.nav-toggle');
  if (nav && toggle) {
    var setOpen = function (open) {
      nav.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    };
    toggle.addEventListener('click', function () {
      setOpen(!nav.classList.contains('nav-open'));
    });
    nav.querySelectorAll('.nav-links a, .nav-book-btn').forEach(function (a) {
      a.addEventListener('click', function () { setOpen(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('nav-open')) setOpen(false);
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var faders = document.querySelectorAll('.fade-up');
  if (faders.length) {
    if (reduced || !('IntersectionObserver' in window)) {
      faders.forEach(function (el) { el.classList.add('visible'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.08 });
      faders.forEach(function (el) { io.observe(el); });

      window.addEventListener('load', function () {
        var hero = document.querySelectorAll('#hero .fade-up');
        hero.forEach(function (el, i) {
          setTimeout(function () { el.classList.add('visible'); }, 80 + i * 140);
        });
      });
    }
  }

  /* ---------- Card carousel ---------- */
  var track = document.querySelector('[data-carousel]');
  if (track) {
    var cards = Array.prototype.slice.call(track.querySelectorAll('.exp-card'));
    var dotWrap = document.querySelector('[data-carousel-dots]');
    var dots = dotWrap ? Array.prototype.slice.call(dotWrap.querySelectorAll('.exp-dot')) : [];
    var GAP = 24;
    var cur = 0, startX = 0, dragDelta = 0, startTranslate = 0, dragging = false;

    var cardWidth = function () {
      return cards[0].getBoundingClientRect().width + GAP;
    };
    var getTranslate = function () {
      var t = window.getComputedStyle(track).transform;
      if (!t || t === 'none') return 0;
      return new DOMMatrix(t).m41;
    };

    var goTo = function (idx, animated) {
      if (animated === undefined) animated = true;
      idx = Math.max(0, Math.min(cards.length - 1, idx));
      cur = idx;
      track.style.transition = (animated && !reduced)
        ? 'transform 0.55s cubic-bezier(0.23,1,0.32,1)' : 'none';
      track.style.transform = 'translateX(' + (-cardWidth() * cur) + 'px)';
      cards.forEach(function (c, i) { c.classList.toggle('active', i === cur); });
      dots.forEach(function (d, i) {
        d.classList.toggle('active', i === cur);
        d.setAttribute('aria-selected', String(i === cur));
      });
    };

    track.addEventListener('pointerdown', function (e) {
      if (e.target.closest('a')) return;
      dragging = true; dragDelta = 0;
      startX = e.clientX;
      startTranslate = getTranslate();
      track.style.transition = 'none';
      track.setPointerCapture(e.pointerId);
    });
    track.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      dragDelta = e.clientX - startX;
      track.style.transform = 'translateX(' + (startTranslate + dragDelta) + 'px)';
    });
    track.addEventListener('pointerup', function () {
      if (!dragging) return;
      dragging = false;
      if (Math.abs(dragDelta) > 60) {
        goTo(dragDelta < 0 ? cur + 1 : cur - 1);
      } else if (Math.abs(dragDelta) < 8) {
        var url = cards[cur].dataset.url;
        if (url && url !== '#') window.location.href = url;
        else goTo(cur);
      } else {
        goTo(cur);
      }
    });

    track.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX; dragDelta = 0;
      startTranslate = getTranslate();
      track.style.transition = 'none';
    }, { passive: true });
    track.addEventListener('touchmove', function (e) {
      dragDelta = e.touches[0].clientX - startX;
      track.style.transform = 'translateX(' + (startTranslate + dragDelta) + 'px)';
    }, { passive: true });
    track.addEventListener('touchend', function () {
      if (Math.abs(dragDelta) > 60) goTo(dragDelta < 0 ? cur + 1 : cur - 1);
      else goTo(cur);
    });

    dots.forEach(function (d, i) {
      d.addEventListener('click', function () { goTo(i); });
    });

    /* Keyboard access — the original carousel was pointer-only. */
    track.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { goTo(cur + 1); e.preventDefault(); }
      if (e.key === 'ArrowLeft') { goTo(cur - 1); e.preventDefault(); }
    });

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () { goTo(cur, false); }, 120);
    });

    goTo(0, false);
  }

  /* ---------- Hero headline reveal ---------- */
  /* The clipped-line slide (see .hl-mask/.hl-in in home.css). When the
     intro is playing it owns the timing and fires this at the aperture
     beat; otherwise it's an on-view reveal — and since the hero is above
     the fold, that's effectively on load. */
  var heroHeadline = document.querySelector('.hero-headline');
  if (heroHeadline && !document.documentElement.classList.contains('intro-play')) {
    if (reduced) {
      heroHeadline.classList.add('is-revealed');
    } else {
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { heroHeadline.classList.add('is-revealed'); });
      });
    }
  }

  /* ---------- Case-study design notes toggle ---------- */
  var notes = document.getElementById('notesToggle');
  if (notes) {
    notes.addEventListener('click', function () {
      var on = document.body.classList.toggle('notes-on');
      notes.setAttribute('aria-pressed', String(on));
      notes.textContent = on ? 'Hide notes' : 'Design notes';
    });
  }
})();
