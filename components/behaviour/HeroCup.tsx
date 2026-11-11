'use client';

import { useEffect, useRef } from 'react';

/* 3D cup. Decorative: the hero reads the same with the canvas empty.
   three.js is loaded on the client only, after hydration. */
export default function HeroCup() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let cancelled = false;
    import('./hero/hero-cup.js')
      .then(({ mountHeroCup }) => {
        if (!cancelled && ref.current) cleanup = mountHeroCup(ref.current);
      })
      .catch((err) => console.warn('hero cup unavailable', err));
    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return <div className="hero-cup fade-up fade-up-d3" id="heroCup" aria-hidden="true" ref={ref} />;
}
