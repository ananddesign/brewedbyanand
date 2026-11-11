import type { ReactNode } from 'react';
import Document from '@/components/Document';

/* Intro gate. Runs before the body paints so the decision (play vs
   skip) is made with zero flash. Plays once per session; ?intro=true
   forces a replay for development. Reduced-motion and already-seen
   visitors skip straight to the page. A 7s failsafe strips the overlay
   if the module ever fails to take over. */
const INTRO_GATE = `(function () {
  var p = new URLSearchParams(location.search);
  var force = p.get('intro') === 'true';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var seen = false;
  try { seen = sessionStorage.getItem('introSeen') === '1'; } catch (e) {}
  var root = document.documentElement;
  if (force || (!reduced && !seen)) {
    root.className += ' intro-play intro-holding';
    setTimeout(function () {
      var el = document.getElementById('intro');
      if (el && el.dataset.done !== '1') {
        el.remove();
        root.classList.remove('intro-play', 'intro-holding');
        var hh = document.querySelector('.hero-headline');
        if (hh) hh.classList.add('is-revealed');
        var nv = document.getElementById('mainNav');
        if (nv) nv.style.transform = '';
      }
    }, 7000);
  } else {
    root.className += ' intro-skip';
  }
})();`;

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <Document head={<script dangerouslySetInnerHTML={{ __html: INTRO_GATE }} />}>
      {children}
    </Document>
  );
}
