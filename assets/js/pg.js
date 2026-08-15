/* ============================================================
   PRICE GENIE — case-study interactions
   One motion language, IntersectionObserver-driven, transform-only.
   Every block no-ops if its markup is absent. Respects reduced motion.
   ============================================================ */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var doc = document;

  /* ---------- hero load choreography ---------- */
  requestAnimationFrame(function () {
    requestAnimationFrame(function () { doc.body.classList.add('hero-ready'); });
  });

  /* ---------- reveal on scroll (chapters, diagrams, images) ---------- */
  var reveals = doc.querySelectorAll('[data-reveal], .pg-model, .pg-branch, .pg-sys, .pg-svg, .pg-reflect-transform, .pg-annot');
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

  /* ---------- active-step tracking (hypothesis + evidence timeline) ----------
     Marks the item nearest the reading line active; earlier items muted. */
  function trackActive(items, opts) {
    if (!items.length) return;
    opts = opts || {};
    if (reduced || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-active'); });
      return;
    }
    var visible = new Set();
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) visible.add(e.target); else visible.delete(e.target);
      });
      var activeIdx = -1;
      items.forEach(function (el, i) { if (visible.has(el)) activeIdx = Math.max(activeIdx, i); });
      // fall back to last passed item if none currently intersecting the band
      if (activeIdx === -1) {
        items.forEach(function (el, i) {
          if (el.getBoundingClientRect().top < window.innerHeight * 0.5) activeIdx = i;
        });
      }
      items.forEach(function (el, i) {
        el.classList.toggle('is-active', i === activeIdx);
        el.classList.toggle('is-past', i < activeIdx);
      });
      if (opts.onChange) opts.onChange(activeIdx);
    }, { threshold: 0.55, rootMargin: '-30% 0px -40% 0px' });
    items.forEach(function (el) { obs.observe(el); });
  }

  trackActive(Array.prototype.slice.call(doc.querySelectorAll('.pg-hyp-item')));

  /* evidence timeline: active dots + progressive line fill */
  var eviItems = Array.prototype.slice.call(doc.querySelectorAll('.pg-evi-item'));
  var eviLine = doc.querySelector('.pg-evi-line');
  trackActive(eviItems, {
    onChange: function (idx) {
      if (eviLine && eviItems.length) {
        var p = (idx + 1) / eviItems.length;
        eviLine.style.setProperty('--p', Math.max(0, Math.min(1, p)).toFixed(3));
      }
    }
  });

  /* ---------- sticky product walkthrough ---------- */
  (function walkthrough() {
    var steps = Array.prototype.slice.call(doc.querySelectorAll('.pg-walk-step'));
    var frames = Array.prototype.slice.call(doc.querySelectorAll('.pg-walk-frame img'));
    var segs = Array.prototype.slice.call(doc.querySelectorAll('.pg-walk-rail .seg'));
    if (!steps.length || !frames.length) return;
    function setActive(i) {
      steps.forEach(function (s, k) { s.classList.toggle('is-active', k === i); });
      frames.forEach(function (f, k) { f.classList.toggle('is-active', k === i); });
      segs.forEach(function (g, k) { g.classList.toggle('is-on', k === i); });
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

  /* ---------- store-first → item-first: scroll-controlled frames ---------- */
  (function shift() {
    var phases = Array.prototype.slice.call(doc.querySelectorAll('.pg-shift-phase'));
    var frames = Array.prototype.slice.call(doc.querySelectorAll('.pg-shift-frame'));
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
    var nav = doc.querySelector('.pg-progress');
    var links = Array.prototype.slice.call(doc.querySelectorAll('.pg-progress a'));
    if (!links.length) return;

    /* Reveal the reading indicator only once past the hero. */
    if (nav) {
      var hero = doc.querySelector('.pg-hero');
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
