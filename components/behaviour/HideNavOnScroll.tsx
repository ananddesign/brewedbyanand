'use client';

import { useEffect } from 'react';

/* ============================================================
   Tucks the site header (#mainNav) away while scrolling down and
   brings it back on any scroll up, so it never sits over full-screen
   sections. Stays put while the mobile menu is open or the header has
   keyboard focus. Inside a `[data-hide-nav]` section that fills the
   top of the screen (e.g. a pinned carousel) it stays hidden in both
   directions. Styles: `.nav--tucked` in base.css.
   ============================================================ */
export default function HideNavOnScroll() {
  useEffect(() => {
    const nav = document.getElementById('mainNav');
    if (!nav) return;
    const toggle = nav.querySelector('.nav-toggle');
    const immersive = Array.from(document.querySelectorAll<HTMLElement>('[data-hide-nav]'));
    let last = window.scrollY;
    let raf = 0;

    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const menuOpen = toggle?.getAttribute('aria-expanded') === 'true';
      const focused = nav.contains(document.activeElement);
      const inImmersive = immersive.some((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= 1 && r.bottom > 120;
      });
      if (inImmersive && !menuOpen && !focused) nav.classList.add('nav--tucked');
      else if (y < 120 || menuOpen || focused) nav.classList.remove('nav--tucked');
      else if (y > last + 4) nav.classList.add('nav--tucked');
      else if (y < last - 4) nav.classList.remove('nav--tucked');
      if (Math.abs(y - last) > 4) last = y;
    };

    const ac = new AbortController();
    window.addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(update); }, { passive: true, signal: ac.signal });
    nav.addEventListener('focusin', () => nav.classList.remove('nav--tucked'), { signal: ac.signal });
    return () => {
      ac.abort();
      if (raf) cancelAnimationFrame(raf);
      nav.classList.remove('nav--tucked');
    };
  }, []);

  return null;
}
