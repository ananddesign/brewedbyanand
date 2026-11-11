import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import HeroCup from '@/components/behaviour/HeroCup';
import HomeIntro from '@/components/behaviour/HomeIntro';
import '@/styles/components.css';
import '@/styles/home.css';
import '@/styles/intro.css';

export const metadata: Metadata = {
  title: "Brewed by Anand — Product Designer",
  description: "Anand Patil — product designer with 9+ years across fintech, e-commerce, SaaS and luxury retail. 0-1 journeys, design systems, and products built end to end.",
};

export default function HomePage() {
  return (
    <>
      {/* ============================================================
       PORTFOLIO INTRO OVERLAY  (counter preloader → block-wipe reveal)
       Static markup so the blue blocks paint on the very first frame.
       assets/js/intro.js runs one GSAP timeline: a giant counter rolls
       00 → 27 → 65 → 98 → 99, then the two blue panels wipe upward to
       reveal the real homepage, with the nav sliding in and the hero
       headline playing its clipped-line reveal. Removed when done.
       ============================================================ */}
      <div className="intro" id="intro" aria-hidden="true">
        <div className="intro-overlay">
          <div className="intro-block" />
          <div className="intro-block" />
        </div>
        <div className="intro-counter" id="introCounter">
          <div className="count">
            <div className="digit">
              <h1>0</h1>
            </div>
            <div className="digit">
              <h1>0</h1>
            </div>
          </div>
          <div className="count">
            <div className="digit">
              <h1>2</h1>
            </div>
            <div className="digit">
              <h1>7</h1>
            </div>
          </div>
          <div className="count">
            <div className="digit">
              <h1>6</h1>
            </div>
            <div className="digit">
              <h1>5</h1>
            </div>
          </div>
          <div className="count">
            <div className="digit">
              <h1>9</h1>
            </div>
            <div className="digit">
              <h1>8</h1>
            </div>
          </div>
          <div className="count">
            <div className="digit">
              <h1>9</h1>
            </div>
            <div className="digit">
              <h1>9</h1>
            </div>
          </div>
        </div>
        <div className="intro-spinner-container">
          <div className="intro-spinner" />
        </div>
      </div>
      {/* NAV */}
      <Nav variant="home" />
      {/* HERO */}
      <section id="hero">
        <div className="hero-content">
          {/* Two-level reveal (per revealanimation.js): each line is a clipped
           mask wrapping an inner element that slides in from xPercent 50 → 0
           with an expo-out ease, the two lines staggered. Triggered by
           .is-revealed — on view when the intro is skipped, or at the
           aperture beat when the intro plays. */}
          <h1 className="hero-headline">
            <span className="hl-mask">
              <span className="hl-in hero-headline-lead"><span className="hero-headline-swash">F</span>uelled by coffee</span>
            </span>
            {" "}
            <span className="hl-mask">
              <span className="hl-in hero-headline-sub">driven by designs</span>
            </span>
          </h1>
          {/* 3D cup. Decorative: the hero reads the same with the canvas empty. */}
          <HeroCup />
        </div>
        <a className="hero-corner hero-corner--left fade-up" href="https://calendly.com/anandpatil19594/30min" target="_blank" rel="noopener">Book a call?</a>
        <p className="hero-corner hero-corner--right fade-up">Powered by dark brown beans</p>
      </section>
      {/* 01 — FEATURED WORK */}
      <section id="work">
        <div className="section-head fade-up">
          <p className="section-kicker">01 &#8212; Featured Work</p>
          <h2 className="section-title">Selected case studies</h2>
          <p className="section-intro">Four products taken from ambiguity to shipped experience &#8212; the research, the trade-offs, and what the numbers did afterwards.</p>
        </div>
        <div className="work-features">
          <a className="work-feature fade-up fade-up-d1" href="/work-price-genie.html" style={{ "--feature-art": "#14161C url('/assets/img/price-genie/thumb.jpg') center/cover no-repeat", "--feature-tint": "linear-gradient(to bottom, rgba(10,11,12,0.4) 0%, rgba(10,11,12,0) 30%, rgba(10,11,12,0) 52%, rgba(10,11,12,0.62) 100%)" } as CSSProperties}>
            <div className="work-feature-art">
              <span className="work-feature-index">01</span>
              <p className="work-feature-art-label">PhonePe Pincode &#8212; ONDC</p>
            </div>
            <div className="work-feature-body">
              <p className="work-feature-tag">Hyperlocal commerce &#8212; 0 to 1</p>
              <h3>Price Genie</h3>
              <p className="work-feature-desc">What if you didn&#8217;t have to choose the store? A product experiment that challenged store-first commerce with an item-first shopping model &#8212; discover products first, then let the system compare fulfilment across nearby stores.</p>
              <ul className="work-feature-meta">
                <li>
                  <h4>Role</h4>
                  <p>Product Designer</p>
                </li>
                <li>
                  <h4>Scope</h4>
                  <p>Strategy &#183; UX &#183; Prototyping</p>
                </li>
                <li>
                  <h4>Type</h4>
                  <p>0&#8594;1 experiment</p>
                </li>
              </ul>
              <div className="work-feature-impact">
                <span>Store-first &#8594; Item-first</span>
                {" "}
                <span>Multi-store fulfilment</span>
                {" "}
                <span>Marketplace UX</span>
              </div>
              <span className="work-card-link">Read case study</span>
            </div>
          </a>
          {" "}
          <a className="work-feature fade-up fade-up-d1" href="/work-qween.html" style={{ "--feature-art": "#0B0B0C url('/assets/img/qween%20thumbnail.png') center/cover no-repeat", "--feature-tint": "linear-gradient(to bottom, rgba(10,11,12,0.4) 0%, rgba(10,11,12,0) 30%, rgba(10,11,12,0) 52%, rgba(10,11,12,0.62) 100%)" } as CSSProperties}>
            <div className="work-feature-art">
              <span className="work-feature-index">02</span>
              <p className="work-feature-art-label">QWEEN &#8212; Luxury Jewellery</p>
            </div>
            <div className="work-feature-body">
              <p className="work-feature-tag">Luxury e-commerce &#8212; end to end</p>
              <h3>QWEEN</h3>
              <p className="work-feature-desc">Moving the certainty of a jewellery showroom online. Discovery, collection, and a nine-chapter product experience built around the moments where a six-figure decision is won or lost.</p>
              <ul className="work-feature-meta">
                <li>
                  <h4>Role</h4>
                  <p>Product Designer</p>
                </li>
                <li>
                  <h4>Duration</h4>
                  <p>~1 year, ongoing</p>
                </li>
                <li>
                  <h4>Scope</h4>
                  <p>Design system, motion, responsive</p>
                </li>
              </ul>
              <div className="work-feature-impact">
                <span>Design system from zero</span>
                {" "}
                <span>9-chapter PDP</span>
                {" "}
                <span>Motion language</span>
              </div>
              <span className="work-card-link">Read case study</span>
            </div>
          </a>
          {" "}
          <a className="work-feature fade-up fade-up-d1" href="/work-checkout.html" style={{ "--feature-art": "#0F5C4E url('/assets/img/checkout/thumb.jpg') center/cover no-repeat", "--feature-tint": "linear-gradient(to bottom, rgba(10,11,12,0.4) 0%, rgba(10,11,12,0) 30%, rgba(10,11,12,0) 52%, rgba(10,11,12,0.62) 100%)" } as CSSProperties}>
            <div className="work-feature-art">
              <span className="work-feature-index">03</span>
              <p className="work-feature-art-label">Pincode &#8212; ONDC</p>
            </div>
            <div className="work-feature-body">
              <p className="work-feature-tag">Hyperlocal commerce &#8212; checkout</p>
              <h3>Simply Checkout</h3>
              <p className="work-feature-desc">Checkout made quick, fun and stress-free. A redesign of the cart and order tracking for an ONDC-based app, built around the questions that were stopping people from finishing an order.</p>
              <ul className="work-feature-meta">
                <li>
                  <h4>Role</h4>
                  <p>Product Designer</p>
                </li>
                <li>
                  <h4>Scope</h4>
                  <p>Research &#183; UX &#183; Prototyping</p>
                </li>
                <li>
                  <h4>Surfaces</h4>
                  <p>Cart &#183; Order tracking</p>
                </li>
              </ul>
              <div className="work-feature-impact">
                <span>7% more cart to order</span>
                {" "}
                <span>11% fewer order tickets</span>
                {" "}
                <span>Tone of voice</span>
              </div>
              <span className="work-card-link">Read case study</span>
            </div>
          </a>
          {" "}
          <a className="work-feature fade-up fade-up-d1" href="/work-qween-immersive-retail.html" style={{ "--feature-art": "#0F0F11 url('/assets/img/qween-immersive/home-card.webp') center/cover no-repeat", "--feature-tint": "linear-gradient(to bottom, rgba(10,11,12,0.4) 0%, rgba(10,11,12,0) 30%, rgba(10,11,12,0) 52%, rgba(10,11,12,0.62) 100%)" } as CSSProperties}>
            <div className="work-feature-art">
              <span className="work-feature-index">04</span>
              <p className="work-feature-art-label">QWEEN &#8212; Immersive Retail</p>
            </div>
            <div className="work-feature-body">
              <p className="work-feature-tag">Immersive retail &#8212; VR to physical store</p>
              <h3>Beyond Digital Commerce</h3>
              <p className="work-feature-desc">Connecting immersive jewellery discovery with physical retail: a virtual QWEEN showroom with mixed-reality try-on, and a product locator that takes customers from the product page to the exact piece in store.</p>
              <ul className="work-feature-meta">
                <li>
                  <h4>Brand</h4>
                  <p>QWEEN</p>
                </li>
                <li>
                  <h4>Scope</h4>
                  <p>Spatial UX &#183; Interaction &#183; E-commerce</p>
                </li>
                <li>
                  <h4>Type</h4>
                  <p>Connected retail experience</p>
                </li>
              </ul>
              <div className="work-feature-impact">
                <span>VR showroom</span>
                {" "}
                <span>Mixed-reality try-on</span>
                {" "}
                <span>PDP product locator</span>
              </div>
              <span className="work-card-link">Read case study</span>
            </div>
          </a>
        </div>
      </section>
      {/* 02 — AI PRODUCTS */}
      <section id="ai">
        <div className="section-head fade-up">
          <p className="section-kicker">02 &#8212; AI Products</p>
          <h2 className="section-title">Built, not prototyped</h2>
          <p className="section-intro">Products where the model is the mechanism, not the marketing. Each one ships with a working demo and public source.</p>
        </div>
        <div className="exp-carousel-viewport fade-up fade-up-d1">
          <div className="exp-carousel-track" id="expTrack" data-carousel="" tabIndex={0} role="group" aria-label="AI products">
            <div className="exp-card exp-card--ai active" data-url="/work-jugl.html" style={{ "--card-bg": "#12241A", "--card-img": "url('/assets/img/JUGL.png')" } as CSSProperties}>
              <div className="exp-card-text">
                <p className="exp-card-eyebrow">Web App &#183; AI product recognition</p>
                <h2>JUGL</h2>
                <p>A lightweight business OS for small sellers and pop-up businesses &#8212; inventory, live selling, expenses and customers, built around the moment of sale rather than the dashboard.</p>
                <p className="exp-card-why"><strong>Why AI:</strong> Scan Item photographs a product and identifies it to log a sale &#8212; and surfaces low-confidence results for manual check instead of silently trusting the model.</p>
                <div className="tech-tags">
                  <span className="tech-tag tech-tag--onlight">Web App</span>
                  {" "}
                  <span className="tech-tag tech-tag--onlight">AI Vision</span>
                  {" "}
                  <span className="tech-tag tech-tag--onlight">QR Checkout</span>
                </div>
                <div className="link-row link-row--onlight">
                  <a href="/work-jugl.html">Read case study</a>
                  {" "}
                  <a href="https://jugl.vercel.app/" target="_blank" rel="noopener">Live product</a>
                </div>
              </div>
            </div>
            <div className="exp-card exp-card--ai" data-url="/work-imagio.html" style={{ "--card-bg": "#241C12", "--card-img": "url('/assets/img/imagio.png')" } as CSSProperties}>
              <div className="exp-card-text">
                <p className="exp-card-eyebrow">Next.js &#183; Three.js &#183; OpenAI</p>
                <h2>Imagio</h2>
                <p>An AI photography studio for jewellery brands. Upload one product shot, then change angle, lighting, lens, pose and background as easily as changing a setting &#8212; no new photoshoot.</p>
                <p className="exp-card-why"><strong>Why AI:</strong> the model becomes the studio itself &#8212; generating a new shot from a real photograph, so the workflow is direct-and-iterate rather than prompt-and-hope.</p>
                <div className="tech-tags">
                  <span className="tech-tag tech-tag--onlight">Three.js</span>
                  {" "}
                  <span className="tech-tag tech-tag--onlight">OpenAI</span>
                  {" "}
                  <span className="tech-tag tech-tag--onlight">Supabase</span>
                </div>
                <div className="link-row link-row--onlight">
                  <a href="/work-imagio.html">Read case study</a>
                  {" "}
                  <a href="https://vstudio-kappa.vercel.app/" target="_blank" rel="noopener">See it live</a>
                </div>
              </div>
            </div>
            <div className="exp-card exp-card--ai exp-card--cityscope" data-url="/work-cityscope.html" style={{ "--card-bg": "#D8D1CD", "--card-img": "url('/assets/img/cityscope/hero-banner.webp')" } as CSSProperties}>
              <div className="exp-card-text">
                <p className="exp-card-eyebrow">Next.js &#183; MapLibre &#183; PostGIS</p>
                <h2>CityScope</h2>
                <p>A spatial exploration product for property decisions, where the map is the product. Every metro, park, project and news event becomes an entity you can point at and reason about.</p>
                <p className="exp-card-why"><strong>The idea:</strong> a confidence lifecycle &#8212; Proposal &#8594; Approved &#8594; Tender &#8594; Construction &#8594; Operational &#8212; separates a genuine advantage from a speculative promise.</p>
                <div className="tech-tags">
                  <span className="tech-tag tech-tag--onlight">MapLibre</span>
                  {" "}
                  <span className="tech-tag tech-tag--onlight">Turf.js</span>
                  {" "}
                  <span className="tech-tag tech-tag--onlight">PostGIS</span>
                </div>
                <div className="link-row link-row--onlight">
                  <a href="/work-cityscope.html">Read case study</a>
                  {" "}
                  <a href="https://cityscope-anand.vercel.app/" target="_blank" rel="noopener">See it live</a>
                </div>
              </div>
            </div>
          </div>
          <div className="exp-dots" data-carousel-dots="">
            <button className="exp-dot active" type="button" aria-label="Go to item 1" />
            {" "}
            <button className="exp-dot" type="button" aria-label="Go to item 2" />
            {" "}
            <button className="exp-dot" type="button" aria-label="Go to item 3" />
          </div>
        </div>
      </section>
      {/* 03 — PLUGINS & TOOLS */}
      <section id="plugins">
        <div className="section-head fade-up">
          <p className="section-kicker">03 &#8212; Plugins &amp; Tools</p>
          <h2 className="section-title section-title--sm">Small things I keep using</h2>
          <p className="section-intro">Utilities built to solve my own problems. Smaller in scope, all of them open source.</p>
        </div>
        <div className="plugin-grid fade-up fade-up-d1">
          <div className="plugin-card">
            <div className="plugin-art plugin-art--design-cop" />
            <div className="plugin-body">
              <p className="plugin-type">Figma Plugin</p>
              <h3>Design Cop</h3>
              <p>Audits a design system, flags violations against tokens, and auto-fixes them before they reach handoff.</p>
              <div className="tech-tags">
                <span className="tech-tag">Figma API</span>
                {" "}
                <span className="tech-tag">TypeScript</span>
              </div>
              <div className="link-row">
                <a href="/experiment-design-cop.html">Write-up</a>
                {/* No public repo yet. Once pushed, paste:
              <a href="https://github.com/ananddesign/REPO" target="_blank" rel="noopener">GitHub</a> */}
              </div>
            </div>
          </div>
          <div className="plugin-card">
            <div className="plugin-art plugin-art--linemotion" />
            <div className="plugin-body">
              <p className="plugin-type">Figma Plugin</p>
              <h3>LineMotion</h3>
              <p>Scans icons in a selection, previews the line-draw animation live, and exports it as a Lottie file.</p>
              <div className="tech-tags">
                <span className="tech-tag">Figma API</span>
                {" "}
                <span className="tech-tag">Lottie</span>
              </div>
            </div>
          </div>
          <div className="plugin-card">
            <div className="plugin-art plugin-art--video">
              <video autoPlay muted loop playsInline preload="metadata" aria-label="Leo desktop assistant demo">
                <source src="/assets/video/tools/leo.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="plugin-body">
              <p className="plugin-type">Desktop App</p>
              <h3>Leo</h3>
              <p>A desktop assistant that sits on my screen and helps with everyday tasks without breaking my flow.</p>
              <div className="tech-tags">
                <span className="tech-tag">Desktop</span>
                {" "}
                <span className="tech-tag">AI</span>
              </div>
            </div>
          </div>
          <div className="plugin-card">
            <div className="plugin-art plugin-art--feedback" />
            <div className="plugin-body">
              <p className="plugin-type">Chrome Extension</p>
              <h3>Feedback</h3>
              <p>Draw arrows on a page, capture an area, and raise a ClickUp ticket in three quick steps.</p>
              <div className="tech-tags">
                <span className="tech-tag">Chrome</span>
                {" "}
                <span className="tech-tag">ClickUp API</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 04 — ABOUT */}
      <section id="about">
        <div className="section-head fade-up">
          <p className="section-kicker">04 &#8212; About</p>
          <h2 className="section-title">About me</h2>
        </div>
        <div className="about-layout fade-up fade-up-d1">
          <div className="about-text">
            <p>I&#8217;m Anand, a Product Designer with 9+ years of experience shaping products that drive meaningful growth through intentional design.</p>
            <p>I specialise in 0-1 journeys, turning ambiguity into structured, scalable systems. My work spans fintech, e-commerce, SaaS, and luxury retail, with experience at PhonePe, Qween, Lollypop Design, and Fractal Ink.</p>
            <p>I care deeply about craft, the design token that keeps a system honest, the flow that removes friction, the interaction that feels inevitable.</p>
            <p>Currently at Qween, where I&#8217;m building design systems and crafting immersive product experiences for a luxury jewellery brand.</p>
            <p>Always exploring, always building, there&#8217;s usually something new in the works.</p>
            <a className="book-call-btn" href="https://calendly.com/anandpatil19594/30min" target="_blank" rel="noopener"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="1" y="2" width="12" height="11" rx="1" stroke="white" strokeWidth="1.2" /> <path d="M1 5.5H13" stroke="white" strokeWidth="1.2" /> <path d="M4 1V3.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" /> <path d="M10 1V3.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" /> </svg> Book a call</a>
          </div>
          <div className="about-image">
            <picture>
              <source srcSet="/assets/img/about.webp" type="image/webp" />
              {" "}
              <img src="/assets/img/about.jpg" alt="Anand Patil" width="1254" height="1254" loading="lazy" />
            </picture>
          </div>
        </div>
      </section>
      {/* 06 — CONTACT */}
      <section id="contact">
        <div className="contact-inner fade-up">
          <h2 className="section-title">Let&#8217;s talk</h2>
          <p className="contact-lead">Open to Senior and Staff Product Design roles across Europe. If you&#8217;re building something where design has to reach into the product, I&#8217;d like to hear about it.</p>
          <div className="contact-actions">
            <a className="book-call-btn" href="https://calendly.com/anandpatil19594/30min" target="_blank" rel="noopener"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="1" y="2" width="12" height="11" rx="1" stroke="white" strokeWidth="1.2" /> <path d="M1 5.5H13" stroke="white" strokeWidth="1.2" /> <path d="M4 1V3.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" /> <path d="M10 1V3.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" /> </svg> Book a call</a>
            {" "}
            <a className="btn-ghost" href="mailto:anandpatil19594@gmail.com">Email me</a>
          </div>
          <div className="contact-links">
            <a href="https://github.com/ananddesign" target="_blank" rel="noopener">GitHub</a>
            {" "}
            <a href="https://www.linkedin.com/in/anandzyn94/" target="_blank" rel="noopener">LinkedIn</a>
            {" "}
            <a href="mailto:anandpatil19594@gmail.com">anandpatil19594@gmail.com</a>
            {" "}
            <a href="/resume.html">Resume</a>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <Footer variant="image" home />
      <HomeIntro />
    </>
  );
}
