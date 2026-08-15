/* ============================================================
   QWEEN — case-study interactions
   One motion language, IntersectionObserver-driven, transform-only.
   Every block no-ops if its markup is absent. Respects reduced motion.
   Mirrors the price-genie choreography, scoped to `qw-` selectors.
   ============================================================ */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var doc = document;

  /* Opt into entrance animation only once JS is confirmed running. Every
     initial-hidden state is gated on `body.qw-anim`, so if this script never
     executes the page renders fully visible (just without the reveals). */
  doc.body.classList.add('qw-anim');

  /* ---------- hero load choreography ---------- */
  requestAnimationFrame(function () {
    requestAnimationFrame(function () { doc.body.classList.add('hero-ready'); });
  });

  /* ---------- reveal on scroll (chapters, diagrams, images) ---------- */
  var reveals = doc.querySelectorAll('[data-reveal], .qw-seq, .qw-svg');
  if (reduced || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---------- sticky experience walkthrough (05.2) ---------- */
  (function stick() {
    var steps = Array.prototype.slice.call(doc.querySelectorAll('.qw-stick-step'));
    var plates = Array.prototype.slice.call(doc.querySelectorAll('.qw-stick-plate'));
    if (!steps.length || !plates.length) return;
    function setActive(i) {
      steps.forEach(function (s, k) { s.classList.toggle('is-active', k === i); });
      plates.forEach(function (p, k) { p.classList.toggle('is-active', k === i); });
    }
    setActive(0);
    if (reduced || !('IntersectionObserver' in window)) { steps.forEach(function (s) { s.classList.add('is-active'); }); return; }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var i = steps.indexOf(e.target);
          if (i >= 0) setActive(i);
        }
      });
    }, { threshold: 0.5, rootMargin: '-25% 0px -25% 0px' });
    steps.forEach(function (s) { obs.observe(s); });
  })();

  /* ---------- the shift: scroll-controlled frames (ch 04) ---------- */
  (function shift() {
    var phases = Array.prototype.slice.call(doc.querySelectorAll('.qw-shift-phase'));
    var frames = Array.prototype.slice.call(doc.querySelectorAll('.qw-shift-frame'));
    if (!phases.length || !frames.length) return;
    var setFrame = function (i) {
      frames.forEach(function (f, k) { f.classList.toggle('is-on', k === i); });
    };
    setFrame(0);
    if (reduced || !('IntersectionObserver' in window)) return; /* CSS shows frames statically */
    var visible = new Set();
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) visible.add(e.target); else visible.delete(e.target);
      });
      var idx = 0;
      phases.forEach(function (p, i) { if (visible.has(p)) idx = i; });
      if (!visible.size) {
        phases.forEach(function (p, i) { if (p.getBoundingClientRect().top < window.innerHeight * 0.5) idx = i; });
      }
      setFrame(idx);
    }, { threshold: 0.5, rootMargin: '-25% 0px -35% 0px' });
    phases.forEach(function (p) { obs.observe(p); });
  })();

  /* ---------- progress index (active chapter) ---------- */
  (function progress() {
    var nav = doc.querySelector('.qw-progress');
    var links = Array.prototype.slice.call(doc.querySelectorAll('.qw-progress a'));
    if (!links.length) return;

    /* Reveal the reading indicator only once past the hero. */
    if (nav) {
      var hero = doc.querySelector('.qw-hero');
      var toggleVis = function () {
        var trigger = hero ? hero.offsetHeight * 0.6 : window.innerHeight * 0.6;
        nav.classList.toggle('is-visible', window.scrollY > trigger);
      };
      toggleVis();
      window.addEventListener('scroll', toggleVis, { passive: true });
    }

    if (!('IntersectionObserver' in window)) return;
    var map = {};
    links.forEach(function (a) {
      var id = a.getAttribute('href').slice(1);
      var sec = doc.getElementById(id);
      if (sec) map[id] = a;
    });
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (a) { a.classList.remove('is-active'); });
          var a = map[e.target.id];
          if (a) a.classList.add('is-active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(map).forEach(function (id) { obs.observe(doc.getElementById(id)); });
  })();

})();
