'use client';

import { useEffect, useRef, useState } from 'react';

export type VrCard = { n: string; title: string; body: string; src: string; poster: string };

/* ============================================================
   VR showroom — scroll-driven card carousel (spatial-UI style).
   The section is pinned for a stretch of scroll; scrolling moves a
   fan of glass cards past the centre, over a blurred still of the
   showroom. Only the centred card's clip plays.

   Server markup is a plain vertical stack of cards. JS opts in to the
   pinned layout by adding `.is-live`, so without JS — or with reduced
   motion — the content is all there, just not choreographed.
   Cards away from the centre dim and blur (CSS, from --focus).
   ============================================================ */
export default function VrCarousel({ cards, bg }: { cards: VrCard[]; bg: string }) {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const last = cards.length - 1;

  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    el.classList.add('is-live');

    const items = Array.from(el.querySelectorAll<HTMLElement>('.qr-vr-card'));
    const clips = items.map((li) => li.querySelector('video') as HTMLVideoElement);
    let inView = false;
    let current = -1;
    let raf = 0;

    /* Each card dwells at the centre for the middle of its scroll slot:
       the first and last 20% of a slot do the travelling. */
    const dwell = (p: number) => {
      const i = Math.floor(p);
      const t = p - i;
      if (t < 0.2) return i;
      if (t > 0.8) return i + 1;
      const u = (t - 0.2) / 0.6;
      return i + u * u * (3 - 2 * u);
    };

    const play = (v: HTMLVideoElement | null) => { v?.play().catch(() => {}); };

    const layout = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const travel = r.height - window.innerHeight;
      const raw = travel > 0 ? Math.min(Math.max(-r.top / travel, 0), 1) * last : 0;
      const pos = dwell(raw);

      items.forEach((li, i) => {
        const d = i - pos;
        const a = Math.abs(d);
        const s = Math.sign(d);
        /* neighbours turn in towards the viewer and recede; the second
           rank tucks in behind them, like panels around a spatial UI */
        /* ease-out on the first step so the outgoing and incoming cards
           clear each other quickly instead of crossing at the centre */
        const x = s * (a <= 1 ? 0.56 * (1 - (1 - a) * (1 - a)) : 0.56 + 0.2 * (a - 1)) * 100;
        const rot = -s * Math.min(a, 1) * 34 - s * Math.max(0, Math.min(a, 2) - 1) * 8;
        const scale = 1 - Math.min(a, 1) * 0.22 - Math.max(0, Math.min(a, 2) - 1) * 0.12;
        li.style.transform = `translate(-50%, -50%) translateX(${x}%) translateZ(${-Math.min(a, 2.5) * 220}px) rotateY(${rot}deg) scale(${scale})`;
        li.style.opacity = String(a > 2.4 ? 0 : 1 - Math.max(0, a - 1) * 0.5);
        li.style.zIndex = String(100 - Math.round(a * 10));
        li.style.setProperty('--focus', String(Math.max(0, 1 - a)));
        li.style.pointerEvents = a > 2.2 ? 'none' : 'auto';
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
    }, { threshold: 0.15 });
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
      items.forEach((li) => { li.removeAttribute('style'); });
    };
  }, [last]);

  /* Scroll the page so card i sits at the centre. */
  const go = (i: number) => {
    const el = root.current;
    if (!el || !el.classList.contains('is-live')) return;
    const r = el.getBoundingClientRect();
    const travel = r.height - window.innerHeight;
    const target = Math.min(Math.max(i, 0), last);
    window.scrollTo({ top: window.scrollY + r.top + (target / last) * travel, behavior: 'smooth' });
  };

  const now = cards[active];

  return (
    <div className="qr-vr" ref={root} data-hide-nav="" style={{ ['--n' as string]: cards.length }}>
      <div className="qr-vr-stage">
        <div className="qr-vr-bg" aria-hidden="true" style={{ ['--bg-img' as string]: `url('${bg}')` }} />

        <p className="qr-vr-top" aria-hidden="true"><span className="qr-vr-top-dot" />QWEENVERSE<span className="qr-vr-top-sep" />The immersive store</p>

        <ol className="qr-vr-cards">
          {cards.map((c, i) => (
            <li key={c.src} className="qr-vr-card" aria-current={i === active ? 'step' : undefined} onClick={() => { if (i !== active) go(i); }}>
              <div className="qr-vr-media">
                <video src={c.src} poster={c.poster} muted loop playsInline preload="none" aria-label={`VR showroom recording: ${c.title.toLowerCase()}`} />
              </div>
              <div className="qr-vr-cap">
                <span className="qr-vr-n">{c.n}</span>
                <div>
                  <h4 className="qr-vr-title">{c.title}</h4>
                  <p className="qr-vr-body">{c.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="qr-vr-dock">
          <div className="qr-vr-dock-pill">
            <button type="button" className="qr-vr-btn" aria-label="Previous moment" onClick={() => go(active - 1)} disabled={active === 0}>
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M10 3 5 8l5 5" /></svg>
            </button>
            <p className="qr-vr-now" aria-live="polite">
              <span className="qr-vr-now-n">{now.n}</span>
              <span className="qr-vr-now-t">{now.title}</span>
              <span className="qr-vr-now-of">of {String(cards.length).padStart(2, '0')}</span>
            </p>
            <button type="button" className="qr-vr-btn" aria-label="Next moment" onClick={() => go(active + 1)} disabled={active === last}>
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="m6 3 5 5-5 5" /></svg>
            </button>
          </div>
          <div className="qr-vr-ticks" aria-hidden="true">
            {cards.map((c, i) => <span key={c.src} className={i === active ? 'is-on' : undefined} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
