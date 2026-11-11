/* Site-wide constants shared by the chrome (nav, footer) and SEO routes. */

export const SITE_URL = 'https://www.brewedbyanand.com';

export const CALENDLY_URL = 'https://calendly.com/anandpatil19594/30min';
export const GITHUB_URL = 'https://github.com/ananddesign';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/anandzyn94/';
export const EMAIL = 'anandpatil19594@gmail.com';

/* Every public page, at the exact URL the static site served it from.
   The `.html` suffixes are deliberate — they are the live, indexed URLs. */
export const PAGES = [
  '/',
  '/work-price-genie.html',
  '/work-qween.html',
  '/work-jugl.html',
  '/work-imagio.html',
  '/work-cityscope.html',
  '/experiment-design-cop.html',
  '/experiment-bunny-carrot.html',
  '/experiment-small-business-design.html',
  '/resume.html',
] as const;
