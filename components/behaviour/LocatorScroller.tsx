'use client';

import { useEffect, useRef, useState } from 'react';

export type LocatorStep = { n: string; title: string; body: string; src: string; poster: string };

/* ============================================================
   PDP product locator — pinned, sideways-scrolling walkthrough.
   The stage holds one screen-height while the page scrolls; the row of
   phone recordings slides left one step per scroll slot, the step copy on
   the left swaps to match, and the screen in focus plays its clip.

   Server markup is the plain grid (phone + caption per step). JS opts in
   to the pinned layout with `.is-live`; without JS or with reduced motion
   the grid is what you get.
   ============================================================ */
export default function LocatorScroller({ steps }: { steps: LocatorStep[] }) {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const last = steps.length - 1;

  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    el.classList.add('is-live');

    const track = el.querySelector<HTMLElement>('.qr-loc-track')!;
    const items = Array.from(track.children) as HTMLElement[];
    const clips = items.map((li) => li.querySelector('video') as HTMLVideoElement);
    let inView = false;
    let current = -1;
    let raf = 0;

    // each step holds still for the middle of its scroll slot
    const dwell = (p: number) => {
      const i = Math.floor(p);
      const t = p - i;
      if (t < 0.22) return i;
      if (t > 0.78) return i + 1;
      const u = (t - 0.22) / 0.56;
      return i + u * u * (3 - 2 * u);
    };
    const play = (v?: HTMLVideoElement) => { v?.play().catch(() => {}); };

    const layout = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const travel = r.height - window.innerHeight;
      const pos = dwell(travel > 0 ? Math.min(Math.max(-r.top / travel, 0), 1) * last : 0);
      const stepW = items[1] ? items[1].offsetLeft - items[0].offsetLeft : 0;
      track.style.transform = `translate3d(${-pos * stepW}px, 0, 0)`;
      items.forEach((li, i) => {
        const d = i - pos;
        // the screen in focus is full strength; ones still to come wait a little dimmer,
        // ones already passed fade as they leave
        li.style.opacity = String(d < 0 ? Math.max(0, 1 + d * 1.6) : 1 - Math.min(d, 1) * 0.45);
        // and out of focus: sharp at the centre, fully soft one step away
        li.style.filter = `blur(${(Math.min(Math.abs(d), 1) * 5).toFixed(2)}px)`;
      });
      const now = Math.round(pos);
      if (now !== current) {
        current = now;
        setActive(now);
        clips.forEach((v, i) => { if (i === now && inView) play(v); else v.pause(); });
      }
    };
    const queue = () => { if (!raf) raf = requestAnimationFrame(layout); };

    const io = new IntersectionObserver(([e]) => {
      inView = e.isIntersecting;
      if (inView) play(clips[current]);
      else clips.forEach((v) => v.pause());
    }, { threshold: 0.2 });
    io.observe(el);

    const ac = new AbortController();
    window.addEventListener('scroll', queue, { passive: true, signal: ac.signal });
    window.addEventListener('resize', queue, { signal: ac.signal });
    layout();

    return () => {
      ac.abort();
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
      el.classList.remove('is-live');
      track.removeAttribute('style');
      items.forEach((li) => li.removeAttribute('style'));
    };
  }, [last]);

  // scroll the page so step i is the one in focus
  const go = (i: number) => {
    const el = root.current;
    if (!el || !el.classList.contains('is-live')) return;
    const r = el.getBoundingClientRect();
    const travel = r.height - window.innerHeight;
    const t = Math.min(Math.max(i, 0), last);
    window.scrollTo({ top: window.scrollY + r.top + (t / last) * travel, behavior: 'smooth' });
  };

  return (
    <div className="qr-loc" ref={root} data-hide-nav="" style={{ ['--n' as string]: steps.length }}>
      <div className="qr-loc-stage">
        <div className="qr-loc-copy">
          <p className="qr-loc-count" aria-hidden="true">
            <span>{steps[active].n}</span> / {String(steps.length).padStart(2, '0')}
          </p>
          <div className="qr-loc-steps" aria-live="polite">
            {steps.map((s, i) => (
              <div key={s.src} className="qr-loc-step" aria-hidden={i !== active}>
                <h4 className="qr-loc-title">{s.title}</h4>
                <p className="qr-loc-body">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="qr-loc-ticks">
            {steps.map((s, i) => (
              <button
                key={s.src}
                type="button"
                className={i === active ? 'is-on' : undefined}
                aria-label={`Step ${s.n}: ${s.title}`}
                aria-current={i === active ? 'step' : undefined}
                onClick={() => go(i)}
              />
            ))}
          </div>
        </div>

        <div className="qr-loc-view">
          <ol className="qr-loc-track qr-flow">
            {steps.map((s, i) => (
              <li key={s.src} onClick={() => { if (i !== active) go(i); }}>
                <figure className="qr-plate qr-plate--phone qr-plate--media">
                  <video
                    src={s.src}
                    poster={s.poster}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={`Product locator recording: ${s.title.toLowerCase()}`}
                  />
                </figure>
                <div className="qr-flow-step">
                  <span className="qr-flow-n">{s.n}</span>
                  <h4 className="qr-flow-title">{s.title}</h4>
                  <p className="pg-small">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
