'use client';

import { useEffect } from 'react';

/* Runs the counter-preloader timeline when the intro gate (see
   app/(home)/layout.tsx) decided to play it. The overlay markup is
   server-rendered so the blue blocks paint on the very first frame. */
export default function HomeIntro() {
  useEffect(() => {
    if (!document.documentElement.classList.contains('intro-play')) return;
    let cleanup: (() => void) | undefined;
    let cancelled = false;
    import('./intro.js').then(({ playIntro }) => {
      if (!cancelled) cleanup = playIntro();
    });
    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return null;
}
