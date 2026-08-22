/* ============================================================
   PORTFOLIO INTRO  —  counter preloader → block-wipe reveal
   One GSAP timeline with a custom "hop" ease: a giant counter rolls
   00 → 27 → 65 → 98 → 99, the spinner fades, then two blue panels
   wipe upward to reveal the real homepage — the nav sliding down and
   the hero headline playing its clipped-line reveal behind them.
   Ported from the skincare-landing reveal, recoloured and tightened;
   the wordmark/divider steps are dropped. Plays once per session.
   ============================================================ */
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);
CustomEase.create('hop', '0.9, 0, 0.1, 1');

const root = document.documentElement;
const overlay = document.getElementById('intro');

if (overlay && root.classList.contains('intro-play')) {
  try { sessionStorage.setItem('introSeen', '1'); } catch (e) { /* private mode */ }
  boot();
}

function boot() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) { finish(); return; }

  /* Once JS is live the blocks provide the blue; drop the shell's first-paint
     guard so the block wipe reveals the page, not the shell's own colour. */
  overlay.style.background = 'transparent';

  /* Dev aids: ?intro=true&slow=N slows the whole timeline; &freeze=SECONDS
     pins it at one moment for inspection. */
  const params = new URLSearchParams(location.search);
  const SLOW = Math.max(1, parseFloat(params.get('slow')) || 1);
  const FREEZE = params.has('freeze') ? parseFloat(params.get('freeze')) : null;

  const STEP = 0.7;   /* counter pace — tightened from the spec's 1.0s */
  const counts = overlay.querySelectorAll('.count');

  /* Fire the real page's own entrance as the blocks lift: release the
     held fade-ups (corners, cup) and play the headline's clipped reveal. */
  const revealPortfolio = () => {
    root.classList.remove('intro-holding');
    document.querySelector('.hero-headline')?.classList.add('is-revealed');
    document.getElementById('mainNav')?.classList.add('nav-in');
  };

  const tl = gsap.timeline({
    delay: 0.3,
    defaults: { ease: 'hop' },
    onComplete: finish,
  });

  /* Seed GSAP's transform so it animates purely on yPercent. The CSS
     translateY(120%) that prevents a first-paint flash is read by GSAP as a
     pixel y (~115px) that would otherwise stack under the percent and keep
     the digits pushed down; y:0 clears it and yPercent:120 restores the same
     hidden position, now owned by GSAP. */
  gsap.set(overlay.querySelectorAll('.count .digit h1'), { y: 0, yPercent: 120 });

  /* 1. Counter roll — each pair rolls up into its mask at index*STEP and
     out one beat later, a continuous odometer. */
  counts.forEach((count, index) => {
    const digits = count.querySelectorAll('.digit h1');
    tl.to(digits, { yPercent: 0, duration: STEP, stagger: 0.05 }, index * STEP);
    tl.to(digits, { yPercent: -100, duration: STEP, stagger: 0.05 }, index * STEP + STEP);
  });

  const countersEnd = counts.length * STEP;   /* last pair has rolled out */

  /* 2. Spinner out. */
  tl.to('.intro-spinner', { opacity: 0, duration: 0.3 }, countersEnd);

  /* 3. Blocks wipe upward to a zero-height strip, second panel trailing. */
  tl.to('.intro-block', {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
    duration: 1,
    stagger: 0.1,
  }, countersEnd + 0.1);

  /* …and the page develops in behind the lifting blocks. */
  tl.add(revealPortfolio, countersEnd + 0.1);

  /* (The nav, hero headline and corners are the real page's own elements;
     revealPortfolio above hands them to their CSS reveals, so GSAP only ever
     drives the preloader's counter and blocks.) */

  if (SLOW > 1) tl.timeScale(1 / SLOW);
  if (FREEZE !== null) tl.pause(FREEZE);
}

/* Strip the overlay and every gating class, restore scrolling, and make
   sure the nav + headline are in their revealed state — the single exit
   used by the happy path and the reduced-motion path alike. */
function finish() {
  root.classList.remove('intro-play', 'intro-holding');
  document.querySelector('.hero-headline')?.classList.add('is-revealed');
  if (overlay) { overlay.dataset.done = '1'; overlay.remove(); }
}
