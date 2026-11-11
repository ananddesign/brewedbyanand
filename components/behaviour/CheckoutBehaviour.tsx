'use client';

import { useEffect } from 'react';

/* ============================================================
   SIMPLY CHECKOUT — the side-by-side flow strip (ported from
   assets/js/checkout.js). Native horizontal scroll does the work
   (trackpad, touch, keyboard). This adds the arrows, the position bar
   and mouse drag. Reveals and the chapter rail come from QweenBehaviour.
   ============================================================ */
export default function CheckoutBehaviour() {
  useEffect(() => {
    const flow = document.querySelector<HTMLElement>('.co-flow');
    if (!flow) return;
    const btns = Array.from(document.querySelectorAll<HTMLButtonElement>('.co-flow-btn'));
    const bar = document.querySelector<HTMLElement>('.co-flow-bar span');
    const smooth: ScrollBehavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    const ac = new AbortController();
    const opts = { signal: ac.signal };

    const update = () => {
      const max = flow.scrollWidth - flow.clientWidth;
      const share = flow.clientWidth / flow.scrollWidth;
      if (bar) {
        bar.style.setProperty('--w', `${share * 100}%`);
        /* translateX percentages are of the bar's own width */
        bar.style.setProperty('--t', `${max > 0 ? (flow.scrollLeft / max) * (1 / share - 1) * 100 : 0}%`);
      }
      btns.forEach((b) => {
        const dir = Number(b.getAttribute('data-dir'));
        b.disabled = dir < 0 ? flow.scrollLeft <= 2 : flow.scrollLeft >= max - 2;
      });
    };

    btns.forEach((b) => {
      b.addEventListener('click', () => {
        flow.scrollBy({ left: Number(b.getAttribute('data-dir')) * flow.clientWidth * 0.7, behavior: smooth });
      }, opts);
    });

    /* Mouse drag only: touch and trackpad already scroll natively. */
    let startX = 0;
    let startLeft = 0;
    let dragging = false;
    flow.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'mouse') return;
      dragging = true; startX = e.clientX; startLeft = flow.scrollLeft;
      flow.classList.add('is-dragging');
      flow.setPointerCapture(e.pointerId);
    }, opts);
    flow.addEventListener('pointermove', (e) => {
      if (dragging) flow.scrollLeft = startLeft - (e.clientX - startX);
    }, opts);
    const stop = () => { dragging = false; flow.classList.remove('is-dragging'); };
    flow.addEventListener('pointerup', stop, opts);
    flow.addEventListener('pointercancel', stop, opts);

    let io: IntersectionObserver | undefined;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver((entries) => {
        document.body.classList.toggle('co-flow-on', entries[0].isIntersecting);
      }, { rootMargin: '-10% 0px -10% 0px' });
      io.observe(flow);
    }

    flow.addEventListener('scroll', update, { passive: true, signal: ac.signal });
    window.addEventListener('resize', update, opts);
    update();

    return () => {
      ac.abort();
      io?.disconnect();
      document.body.classList.remove('co-flow-on');
    };
  }, []);

  return null;
}
