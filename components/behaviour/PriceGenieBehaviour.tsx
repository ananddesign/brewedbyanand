'use client';

import { useEffect } from 'react';

/* ============================================================
   PRICE GENIE — case-study interactions (ported from assets/js/pg.js)
   One motion language, IntersectionObserver-driven, transform-only.
   Every block no-ops if its markup is absent. Respects reduced motion.
   ============================================================ */
export default function PriceGenieBehaviour() {
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

    /* ---------- hero load choreography ---------- */
    let raf = requestAnimationFrame(() => {
      raf = requestAnimationFrame(() => { doc.body.classList.add('hero-ready'); });
    });

    /* ---------- reveal on scroll (chapters, diagrams, images) ---------- */
    const reveals = doc.querySelectorAll('[data-reveal], .pg-model, .pg-branch, .pg-sys, .pg-svg, .pg-reflect-transform, .pg-annot');
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

    /* ---------- active-step tracking (hypothesis + evidence timeline) ----------
       Marks the item nearest the reading line active; earlier items muted. */
    function trackActive(items: Element[], opts: { onChange?: (idx: number) => void } = {}) {
      if (!items.length) return;
      if (reduced || !('IntersectionObserver' in window)) {
        items.forEach((el) => { el.classList.add('is-active'); });
        return;
      }
      const visible = new Set<Element>();
      const obs = observe((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.add(e.target); else visible.delete(e.target);
        });
        let activeIdx = -1;
        items.forEach((el, i) => { if (visible.has(el)) activeIdx = Math.max(activeIdx, i); });
        // fall back to last passed item if none currently intersecting the band
        if (activeIdx === -1) {
          items.forEach((el, i) => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.5) activeIdx = i;
          });
        }
        items.forEach((el, i) => {
          el.classList.toggle('is-active', i === activeIdx);
          el.classList.toggle('is-past', i < activeIdx);
        });
        if (opts.onChange) opts.onChange(activeIdx);
      }, { threshold: 0.55, rootMargin: '-30% 0px -40% 0px' });
      items.forEach((el) => { obs.observe(el); });
    }

    trackActive(Array.from(doc.querySelectorAll('.pg-hyp-item')));

    /* evidence timeline: active dots + progressive line fill */
    const eviItems = Array.from(doc.querySelectorAll('.pg-evi-item'));
    const eviLine = doc.querySelector<HTMLElement>('.pg-evi-line');
    trackActive(eviItems, {
      onChange: (idx) => {
        if (eviLine && eviItems.length) {
          const p = (idx + 1) / eviItems.length;
          eviLine.style.setProperty('--p', Math.max(0, Math.min(1, p)).toFixed(3));
        }
      },
    });

    /* ---------- sticky product walkthrough ---------- */
    (function walkthrough() {
      const steps = Array.from(doc.querySelectorAll('.pg-walk-step'));
      const frames = Array.from(doc.querySelectorAll('.pg-walk-frame img'));
      const segs = Array.from(doc.querySelectorAll('.pg-walk-rail .seg'));
      if (!steps.length || !frames.length) return;
      function setActive(i: number) {
        steps.forEach((s, k) => { s.classList.toggle('is-active', k === i); });
        frames.forEach((f, k) => { f.classList.toggle('is-active', k === i); });
        segs.forEach((g, k) => { g.classList.toggle('is-on', k === i); });
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

    /* ---------- store-first → item-first: scroll-controlled frames ---------- */
    (function shift() {
      const phases = Array.from(doc.querySelectorAll('.pg-shift-phase'));
      const frames = Array.from(doc.querySelectorAll('.pg-shift-frame'));
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
      const nav = doc.querySelector('.pg-progress');
      const links = Array.from(doc.querySelectorAll('.pg-progress a'));
      if (!links.length) return;

      /* Reveal the reading indicator only once past the hero. */
      if (nav) {
        const hero = doc.querySelector<HTMLElement>('.pg-hero');
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
