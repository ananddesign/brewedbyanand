'use client';

import { useEffect } from 'react';

/* ============================================================
   QWEEN — case-study interactions (ported from assets/js/qween.js)
   One motion language, IntersectionObserver-driven, transform-only.
   Every block no-ops if its markup is absent. Respects reduced motion.
   Mirrors the price-genie choreography, scoped to `qw-` selectors.
   ============================================================ */
export default function QweenBehaviour() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const doc = document;
    const ac = new AbortController();
    const observers: IntersectionObserver[] = [];
    const observe = (cb: IntersectionObserverCallback, opts: IntersectionObserverInit) => {
      const o = new IntersectionObserver(cb, opts);
      observers.push(o);
      return o;
    };

    /* Opt into entrance animation only once JS is confirmed running. Every
       initial-hidden state is gated on `body.qw-anim`, so if this script never
       executes the page renders fully visible (just without the reveals). */
    doc.body.classList.add('qw-anim');

    /* ---------- hero load choreography ---------- */
    let raf = requestAnimationFrame(() => {
      raf = requestAnimationFrame(() => { doc.body.classList.add('hero-ready'); });
    });

    /* ---------- reveal on scroll (chapters, diagrams, images) ---------- */
    const reveals = doc.querySelectorAll('[data-reveal], .qw-seq, .qw-svg');
    if (reduced || !('IntersectionObserver' in window)) {
      reveals.forEach((el) => { el.classList.add('is-in'); });
    } else {
      const io = observe((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });
      reveals.forEach((el) => { io.observe(el); });
    }

    /* ---------- sticky experience walkthrough (05.2) ---------- */
    (function stick() {
      const steps = Array.from(doc.querySelectorAll('.qw-stick-step'));
      const plates = Array.from(doc.querySelectorAll('.qw-stick-plate'));
      if (!steps.length || !plates.length) return;
      function setActive(i: number) {
        steps.forEach((s, k) => { s.classList.toggle('is-active', k === i); });
        plates.forEach((p, k) => { p.classList.toggle('is-active', k === i); });
      }
      setActive(0);
      if (reduced || !('IntersectionObserver' in window)) { steps.forEach((s) => { s.classList.add('is-active'); }); return; }
      const obs = observe((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = steps.indexOf(e.target);
            if (i >= 0) setActive(i);
          }
        });
      }, { threshold: 0.5, rootMargin: '-25% 0px -25% 0px' });
      steps.forEach((s) => { obs.observe(s); });
    })();

    /* ---------- the shift: scroll-controlled frames (ch 04) ---------- */
    (function shift() {
      const phases = Array.from(doc.querySelectorAll('.qw-shift-phase'));
      const frames = Array.from(doc.querySelectorAll('.qw-shift-frame'));
      if (!phases.length || !frames.length) return;
      const setFrame = (i: number) => {
        frames.forEach((f, k) => { f.classList.toggle('is-on', k === i); });
      };
      setFrame(0);
      if (reduced || !('IntersectionObserver' in window)) return; /* CSS shows frames statically */
      const visible = new Set<Element>();
      const obs = observe((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.add(e.target); else visible.delete(e.target);
        });
        let idx = 0;
        phases.forEach((p, i) => { if (visible.has(p)) idx = i; });
        if (!visible.size) {
          phases.forEach((p, i) => { if (p.getBoundingClientRect().top < window.innerHeight * 0.5) idx = i; });
        }
        setFrame(idx);
      }, { threshold: 0.5, rootMargin: '-25% 0px -35% 0px' });
      phases.forEach((p) => { obs.observe(p); });
    })();

    /* ---------- progress index (active chapter) ---------- */
    (function progress() {
      const nav = doc.querySelector('.qw-progress');
      const links = Array.from(doc.querySelectorAll('.qw-progress a'));
      if (!links.length) return;

      /* Reveal the reading indicator only once past the hero. */
      if (nav) {
        const hero = doc.querySelector<HTMLElement>('.qw-hero');
        const toggleVis = () => {
          const trigger = hero ? hero.offsetHeight * 0.6 : window.innerHeight * 0.6;
          nav.classList.toggle('is-visible', window.scrollY > trigger);
        };
        toggleVis();
        window.addEventListener('scroll', toggleVis, { passive: true, signal: ac.signal });
      }

      if (!('IntersectionObserver' in window)) return;
      const map: Record<string, Element> = {};
      links.forEach((a) => {
        const id = (a.getAttribute('href') || '').slice(1);
        const sec = doc.getElementById(id);
        if (sec) map[id] = a;
      });
      const obs = observe((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            links.forEach((a) => { a.classList.remove('is-active'); });
            const a = map[e.target.id];
            if (a) a.classList.add('is-active');
          }
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      Object.keys(map).forEach((id) => { obs.observe(doc.getElementById(id)!); });
    })();

    return () => {
      cancelAnimationFrame(raf);
      ac.abort();
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return null;
}
