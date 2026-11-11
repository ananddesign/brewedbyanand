'use client';

import { useEffect, useRef } from 'react';

/* A path card for the System section. The HTML below is the real,
   accessible card (and the fallback); three.js draws the same card as a
   3D paper object over it and, once it has rendered, `.is-3d` hides the
   HTML visually. three.js is loaded on the client only, as for the hero cup. */
export default function PaperCard({
  tag,
  title,
  steps,
  mark,
  accent = false,
  side,
}: {
  tag: string;
  title: string[];
  steps: string[];
  mark: string;
  accent?: boolean;
  side: -1 | 1;
}) {
  const root = useRef<HTMLDivElement>(null);
  const gl = useRef<HTMLDivElement>(null);
  // arrays are new on every render; key the scene on their content instead
  const specKey = JSON.stringify([tag, title, steps, mark, accent, side]);

  useEffect(() => {
    const [tag, title, steps, mark, accent, side] = JSON.parse(specKey) as [string, string[], string[], string, boolean, -1 | 1];
    let cleanup: (() => void) | undefined;
    let cancelled = false;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    import('./paper/paper-card')
      .then(({ mountPaperCard }) => {
        if (cancelled || !gl.current) return;
        cleanup = mountPaperCard(
          gl.current,
          { tag, title, steps, mark, tagColor: accent ? '#1E2A9E' : '#8A8579' },
          { reduced, side, onReady: () => root.current?.classList.add('is-3d') },
        );
      })
      .catch((err) => console.warn('paper card unavailable', err));
    return () => {
      cancelled = true;
      cleanup?.();
      root.current?.classList.remove('is-3d');
    };
  }, [specKey]);

  return (
    <div className={accent ? 'qr-paper qr-paper--b' : 'qr-paper'} ref={root}>
      <div className="qr-paper-html">
        <div className="qr-paper-sheet">
          <p className="qr-paper-tag">{tag}</p>
          <h3 className="qr-paper-title">{title.map((l, i) => <span key={l}>{i > 0 && ' '}{l}</span>)}</h3>
          <ol className="qr-paper-steps">{steps.map((s) => <li key={s}>{s}</li>)}</ol>
          <p className="qr-paper-mark">{mark}</p>
        </div>
      </div>
      <div className="qr-paper-gl" ref={gl} aria-hidden="true" />
    </div>
  );
}
