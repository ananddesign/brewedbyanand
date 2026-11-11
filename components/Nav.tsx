import { CALENDLY_URL, GITHUB_URL } from '@/lib/site';

/* Main navigation, in the three forms the static site uses:
   - home: in-page section links (Work, GitHub, Experiments, About Me)
   - case: the case studies' short menu (Work, About) and Book a call
   - page: the full menu back to the homepage sections, and Book a call
     (resume and experiment pages)
   Behaviour (scroll shrink, mobile menu) lives in SiteBehaviour. */
export default function Nav({ variant = 'page', onLight = false }: { variant?: 'home' | 'case' | 'page'; onLight?: boolean }) {
  const home = variant === 'home';
  const className = home ? 'nav--on-light nav--home' : onLight ? 'nav--on-light' : undefined;

  return (
    <nav id="mainNav" className={className}>
      <a className="nav-logo" href={home ? '#hero' : '/'} aria-label="Brewed by Anand — home">
        <img className="nav-logo-white" src="/assets/img/logo-white.svg" alt="Brewed by Anand" width="334" height="117" />
        <img className="nav-logo-black" src="/assets/img/sign.svg" alt="" aria-hidden="true" width="177" height="112" />
      </a>
      <button className="nav-toggle" type="button" aria-label="Menu" aria-expanded="false" aria-controls="navRight">
        <span></span><span></span>
      </button>
      <div className="nav-right" id="navRight">
        {home ? (
          <ul className="nav-links">
            <li><a href="#work">Work</a></li>
            <li><a href={GITHUB_URL} target="_blank" rel="noopener">GitHub</a></li>
            <li><a href="#plugins">Experiments</a></li>
            <li><a href="#about">About Me</a></li>
          </ul>
        ) : (
          <>
            {variant === 'case' ? (
              <ul className="nav-links">
                <li><a href="/#work">Work</a></li>
                <li><a href="/#about">About</a></li>
              </ul>
            ) : (
              <ul className="nav-links">
                <li><a href="/#work">Work</a></li>
                <li><a href="/#ai">AI Products</a></li>
                <li><a href="/#plugins">Plugins</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/resume.html">Resume</a></li>
                <li><a href={GITHUB_URL} target="_blank" rel="noopener">GitHub</a></li>
              </ul>
            )}
            <a className="nav-book-btn" href={CALENDLY_URL} target="_blank" rel="noopener">Book a call</a>
          </>
        )}
      </div>
    </nav>
  );
}
