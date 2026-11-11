'use client';

import { useEffect } from 'react';

/* Flips the fixed section index (.pg-progress) to its light colours while
   it sits over a `[data-dark]` section, so it stays readable on dark bands.
   Styles: `.pg-progress.is-on-dark` in the page's CSS. */
export default function ProgressContrast() {
  useEffect(() => {
    const index = document.querySelector<HTMLElement>('.pg-progress');
    const dark = Array.from(document.querySelectorAll<HTMLElement>('[data-dark]'));
    if (!index || !dark.length) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      const r = index.getBoundingClientRect();
      const mid = r.top + r.height / 2;
      const over = dark.some((el) => {
        const b = el.getBoundingClientRect();
        return b.top <= mid && b.bottom >= mid;
      });
      index.classList.toggle('is-on-dark', over);
    };
    const queue = () => { if (!raf) raf = requestAnimationFrame(update); };

    const ac = new AbortController();
    window.addEventListener('scroll', queue, { passive: true, signal: ac.signal });
    window.addEventListener('resize', queue, { signal: ac.signal });
    update();
    return () => {
      ac.abort();
      if (raf) cancelAnimationFrame(raf);
      index.classList.remove('is-on-dark');
    };
  }, []);

  return null;
}
