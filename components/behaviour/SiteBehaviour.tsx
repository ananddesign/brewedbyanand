'use client';

import { useEffect } from 'react';

/* ============================================================
   SITE
   Shared behaviour for every page (ported from assets/js/site.js).
   Each block no-ops when the markup it drives isn't present, so one
   component serves all pages. It drives the server-rendered markup
   directly, exactly as the original script did; everything it
   attaches is torn down on unmount.
   ============================================================ */
export default function SiteBehaviour() {
  useEffect(() => {
    const ac = new AbortController();
    const on = { signal: ac.signal };
    const cleanups: Array<() => void> = [];

    document.body.classList.add('js-ready');

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------- Nav: shrink on scroll ---------- */
    const nav = document.getElementById('mainNav');
    if (nav) {
      const onScroll = () => {
        nav.classList.toggle('scrolled', window.scrollY > 40);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true, signal: ac.signal });
    }

    /* ---------- Nav: mobile menu ---------- */
    const toggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
    if (nav && toggle) {
      const setOpen = (open: boolean) => {
        nav.classList.toggle('nav-open', open);
        toggle.setAttribute('aria-expanded', String(open));
        document.body.style.overflow = open ? 'hidden' : '';
      };
      toggle.addEventListener('click', () => {
        setOpen(!nav.classList.contains('nav-open'));
      }, on);
      nav.querySelectorAll('.nav-links a, .nav-book-btn').forEach((a) => {
        a.addEventListener('click', () => { setOpen(false); }, on);
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('nav-open')) setOpen(false);
      }, on);
    }

    /* ---------- Reveal on scroll ---------- */
    const faders = document.querySelectorAll('.fade-up');
    if (faders.length) {
      if (reduced || !('IntersectionObserver' in window)) {
        faders.forEach((el) => { el.classList.add('visible'); });
      } else {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('visible');
              io.unobserve(e.target);
            }
          });
        }, { threshold: 0.08 });
        faders.forEach((el) => { io.observe(el); });
        cleanups.push(() => io.disconnect());

        const timers: number[] = [];
        const revealHero = () => {
          const hero = document.querySelectorAll('#hero .fade-up');
          hero.forEach((el, i) => {
            timers.push(window.setTimeout(() => { el.classList.add('visible'); }, 80 + i * 140));
          });
        };
        /* The original ran this on window load; by the time React hydrates
           the load event may already have fired. */
        if (document.readyState === 'complete') revealHero();
        else window.addEventListener('load', revealHero, on);
        cleanups.push(() => timers.forEach(clearTimeout));
      }
    }

    /* ---------- Card carousel ---------- */
    const track = document.querySelector<HTMLElement>('[data-carousel]');
    if (track) {
      const cards = Array.from(track.querySelectorAll<HTMLElement>('.exp-card'));
      const dotWrap = document.querySelector('[data-carousel-dots]');
      const dots = dotWrap ? Array.from(dotWrap.querySelectorAll<HTMLElement>('.exp-dot')) : [];
      const GAP = 24;
      let cur = 0, startX = 0, dragDelta = 0, startTranslate = 0, dragging = false;

      const cardWidth = () => cards[0].getBoundingClientRect().width + GAP;
      const getTranslate = () => {
        const t = window.getComputedStyle(track).transform;
        if (!t || t === 'none') return 0;
        return new DOMMatrix(t).m41;
      };

      const goTo = (idx: number, animated = true) => {
        idx = Math.max(0, Math.min(cards.length - 1, idx));
        cur = idx;
        track.style.transition = (animated && !reduced)
          ? 'transform 0.55s cubic-bezier(0.23,1,0.32,1)' : 'none';
        track.style.transform = 'translateX(' + (-cardWidth() * cur) + 'px)';
        cards.forEach((c, i) => { c.classList.toggle('active', i === cur); });
        dots.forEach((d, i) => {
          d.classList.toggle('active', i === cur);
          d.setAttribute('aria-selected', String(i === cur));
        });
      };

      track.addEventListener('pointerdown', (e) => {
        if ((e.target as Element).closest('a')) return;
        dragging = true; dragDelta = 0;
        startX = e.clientX;
        startTranslate = getTranslate();
        track.style.transition = 'none';
        track.setPointerCapture(e.pointerId);
      }, on);
      track.addEventListener('pointermove', (e) => {
        if (!dragging) return;
        dragDelta = e.clientX - startX;
        track.style.transform = 'translateX(' + (startTranslate + dragDelta) + 'px)';
      }, on);
      track.addEventListener('pointerup', () => {
        if (!dragging) return;
        dragging = false;
        if (Math.abs(dragDelta) > 60) {
          goTo(dragDelta < 0 ? cur + 1 : cur - 1);
        } else if (Math.abs(dragDelta) < 8) {
          const url = cards[cur].dataset.url;
          if (url && url !== '#') window.location.href = url;
          else goTo(cur);
        } else {
          goTo(cur);
        }
      }, on);

      track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX; dragDelta = 0;
        startTranslate = getTranslate();
        track.style.transition = 'none';
      }, { passive: true, signal: ac.signal });
      track.addEventListener('touchmove', (e) => {
        dragDelta = e.touches[0].clientX - startX;
        track.style.transform = 'translateX(' + (startTranslate + dragDelta) + 'px)';
      }, { passive: true, signal: ac.signal });
      track.addEventListener('touchend', () => {
        if (Math.abs(dragDelta) > 60) goTo(dragDelta < 0 ? cur + 1 : cur - 1);
        else goTo(cur);
      }, on);

      dots.forEach((d, i) => {
        d.addEventListener('click', () => { goTo(i); }, on);
      });

      /* Keyboard access — the original carousel was pointer-only. */
      track.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') { goTo(cur + 1); e.preventDefault(); }
        if (e.key === 'ArrowLeft') { goTo(cur - 1); e.preventDefault(); }
      }, on);

      let resizeTimer: number | undefined;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(() => { goTo(cur, false); }, 120);
      }, on);
      cleanups.push(() => clearTimeout(resizeTimer));

      goTo(0, false);
    }

    /* ---------- Hero headline reveal ---------- */
    /* The clipped-line slide (see .hl-mask/.hl-in in home.css). When the
       intro is playing it owns the timing and fires this at the aperture
       beat; otherwise it's an on-view reveal — and since the hero is above
       the fold, that's effectively on load. */
    const heroHeadline = document.querySelector('.hero-headline');
    if (heroHeadline && !document.documentElement.classList.contains('intro-play')) {
      if (reduced) {
        heroHeadline.classList.add('is-revealed');
      } else {
        let raf = requestAnimationFrame(() => {
          raf = requestAnimationFrame(() => { heroHeadline.classList.add('is-revealed'); });
        });
        cleanups.push(() => cancelAnimationFrame(raf));
      }
    }

    /* ---------- Case-study design notes toggle ---------- */
    const notes = document.getElementById('notesToggle');
    if (notes) {
      notes.addEventListener('click', () => {
        const isOn = document.body.classList.toggle('notes-on');
        notes.setAttribute('aria-pressed', String(isOn));
        notes.textContent = isOn ? 'Hide notes' : 'Design notes';
      }, on);
    }

    return () => {
      ac.abort();
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
