import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import QweenBehaviour from '@/components/behaviour/QweenBehaviour';
import '@/styles/qween.css';

export const metadata: Metadata = {
  title: "QWEEN — Brewed by Anand",
  description: "QWEEN: designing confidence for luxury jewellery commerce. How the product page became a confidence-building experience for high-consideration purchases.",
};

export default function QweenPage() {
  return (
    <>
      {/* NAV (preserved) */}
      <Nav variant="case" />
      {/* PROGRESS INDEX */}
      <nav className="qw-progress" aria-label="Case study chapters">
        <a href="#gap">
          <span className="lbl">The gap</span>
          <span className="bar" />
        </a>
        {" "}
        <a href="#insight">
          <span className="lbl">Insight</span>
          <span className="bar" />
        </a>
        {" "}
        <a href="#principles">
          <span className="lbl">Principles</span>
          <span className="bar" />
        </a>
        {" "}
        <a href="#pdp">
          <span className="lbl">The PDP</span>
          <span className="bar" />
        </a>
        {" "}
        <a href="#trust">
          <span className="lbl">Trust</span>
          <span className="bar" />
        </a>
        {" "}
        <a href="#concierge">
          <span className="lbl">In store</span>
          <span className="bar" />
        </a>
        {" "}
        <a href="#ownership">
          <span className="lbl">Self Invest</span>
          <span className="bar" />
        </a>
        {" "}
        <a href="#outcome">
          <span className="lbl">Outcome</span>
          <span className="bar" />
        </a>
        {" "}
        <a href="#reflection">
          <span className="lbl">Reflection</span>
          <span className="bar" />
        </a>
      </nav>
      {/* ============================================================
       HERO
       ============================================================ */}
      <header className="qw-hero qw-hero--cover" id="top">
        <div className="qw-cover">
          <img className="qw-cover-img" src="/assets/img/qween/cover.webp" alt="A QWEEN campaign portrait: a backlit profile, a hand raised to the lips wearing a two-stone diamond ring." />
          <div className="qw-cover-copy">
            <h1 className="qw-cover-title">
              <span className="w1" data-hero="" style={{ "--hd": "0" } as CSSProperties}>Defining</span>
              {" "}
              <span className="w2" data-hero="" style={{ "--hd": "1" } as CSSProperties}>Confidence</span>
              {" "}
              <span className="w3" data-hero="" style={{ "--hd": "2" } as CSSProperties}>for luxury shopping</span>
            </h1>
            <p className="qw-cover-sub" data-hero="" style={{ "--hd": "3" } as CSSProperties}>Product Design Lead &nbsp;·&nbsp; Responsive web, mobile-first &nbsp;·&nbsp; Shipped, ongoing</p>
          </div>
        </div>
      </header>
      <main>
        {/* ============================================================
         01 — THE CONFIDENCE GAP
         ============================================================ */}
        <section className="qw-section" id="gap">
          <div className="qw-wrap">
            <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">01</span> The problem</p>
            <h2 className="qw-display" data-reveal="" style={{ maxWidth: "22ch" }}>Luxury jewellery is easy to browse online. It&rsquo;s harder to feel confident buying it online.</h2>
            {/* SHOWROOM vs ECOMMERCE — two "intake form" cards */}
            <div className="qw-forms" role="group" aria-label="The showroom answers seven moments of doubt; a typical online store answers four and misses touch, try, ask and trust.">
              <div data-reveal="">
                <article className="qw-form">
                  <div className="qw-form-top">
                    <h3 className="qw-form-title">The<br />Show<br />room</h3>
                    <figure className="qw-polaroid">
                      <span className="qw-clip" aria-hidden="true" />
                      <img src="/assets/img/qween/m-store-noida.webp" alt="" loading="lazy" style={{ objectPosition: "50% 40%" }} />
                    </figure>
                  </div>
                  <div className="qw-form-field">
                    <span className="lbl">Where</span>
                    <span className="hand">QWEEN flagship</span>
                  </div>
                  <div className="qw-form-field">
                    <span className="lbl">Feels like</span>
                    <span className="hand">a house</span>
                  </div>
                  <p className="qw-form-sub">Doubts answered</p>
                  <ul className="qw-form-list">
                    <li className="on">See</li>
                    <li className="on">Touch</li>
                    <li className="on">Try</li>
                    <li className="on">Ask</li>
                    <li className="on">Understand</li>
                    <li className="on">Trust</li>
                    <li className="on">Buy</li>
                  </ul>
                </article>
              </div>
              <div data-reveal="" style={{ "--d": "1" } as CSSProperties}>
                <article className="qw-form">
                  <div className="qw-form-top">
                    <h3 className="qw-form-title">Online<br />Store</h3>
                    <figure className="qw-polaroid">
                      <span className="qw-clip" aria-hidden="true" />
                      <img src="/assets/img/qween/pdp-top.png" alt="" loading="lazy" style={{ objectPosition: "50% 30%" }} />
                    </figure>
                  </div>
                  <div className="qw-form-field">
                    <span className="lbl">Where</span>
                    <span className="hand">any product page</span>
                  </div>
                  <div className="qw-form-field">
                    <span className="lbl">Feels like</span>
                    <span className="hand">a storefront</span>
                  </div>
                  <p className="qw-form-sub">Doubts answered</p>
                  <ul className="qw-form-list">
                    <li className="on">Image</li>
                    <li className="on">Specs</li>
                    <li className="on">Price</li>
                    <li className="on">Buy</li>
                    <li className="off">Touch</li>
                    <li className="off">Try</li>
                    <li className="off">Ask</li>
                    <li className="off">Trust</li>
                  </ul>
                </article>
              </div>
            </div>
            <div className="qw-quote-split">
              <blockquote className="qw-quote" data-reveal="" style={{ maxWidth: "20ch", margin: "0" }}>The buyer isn&rsquo;t resisting a sale. They&rsquo;re missing the certainty a showroom gives for free.</blockquote>
              <div className="qw-plate qw-plate--phone qw-plate--mweb" data-reveal="scale" role="img" aria-label="The QWEEN homepage on mobile: Natural High Jewellery.">
                <video src="/assets/video/qween/home-natural-high-jewellery-2.mp4" autoPlay muted loop playsInline preload="metadata" />
              </div>
            </div>
          </div>
        </section>
        {/* ============================================================
         02 — THE INSIGHT  (dark band)
         ============================================================ */}
        <section className="qw-section qw-band qw-section--fit" id="insight">
          <div className="qw-wrap qw-insight">
            <div className="qw-insight-head">
              <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">02</span> The insight</p>
              <h2 className="qw-statement" data-reveal="">Recreate what makes the showroom work.</h2>
              <p className="qw-body" data-reveal="" style={{ "--d": "1", marginTop: "20px", color: "rgba(255,255,255,0.75)" } as CSSProperties}>We sat with the people who sell jewellery for a living, then checked their instincts against buyer interviews and session recordings. Five doubts kept stopping the sale.</p>
            </div>
            <ol className="qw-findings">
              <li className="qw-findings-head" aria-hidden="true">
                <span />
                <span>What we found</span>
              </li>
              <li data-reveal="" style={{ "--d": "0" } as CSSProperties}>
                <span className="n">01</span>
                <div>
                  <h4>Trust is checked before price.</h4>
                  <p>Buyers look for the certificate and the returns policy first.</p>
                </div>
              </li>
              <li data-reveal="" style={{ "--d": "1" } as CSSProperties}>
                <span className="n">02</span>
                <div>
                  <h4>Value has to outlast the sale.</h4>
                  <p>Buyers ask what the piece will be worth years from now, not just today.</p>
                </div>
              </li>
              <li data-reveal="" style={{ "--d": "2" } as CSSProperties}>
                <span className="n">03</span>
                <div>
                  <h4>Specs are checked, not read.</h4>
                  <p>Few read them, but everyone checks they exist.</p>
                </div>
              </li>
              <li data-reveal="" style={{ "--d": "3" } as CSSProperties}>
                <span className="n">04</span>
                <div>
                  <h4>Big pieces are seen before they&rsquo;re bought.</h4>
                  <p>Above a price point, buyers want to see it in a store first.</p>
                </div>
              </li>
              <li data-reveal="" style={{ "--d": "4" } as CSSProperties}>
                <span className="n">05</span>
                <div>
                  <h4>The decision is rarely made alone.</h4>
                  <p>Buyers send pieces to a partner or parent before buying.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        {/* ============================================================
         03 — DESIGN PRINCIPLES
         ============================================================ */}
        <section className="qw-section" id="principles">
          <div className="qw-wrap qw-approach">
            <div className="qw-approach-head">
              <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">03</span> The approach</p>
              <h2 className="qw-statement" data-reveal="">Designing for confidence, not just conversion.</h2>
              <p className="qw-body" data-reveal="" style={{ "--d": "1", marginTop: "24px" } as CSSProperties}>Principles are only useful when they can settle an argument. Each of these carried a rule, so debates about taste became debates about the rule.</p>
            </div>
            <div className="qw-pcards">
              <article className="qw-pcard" style={{ "--i": "0" } as CSSProperties}>
                <span className="qw-pcard-idx">01</span>
                <h3 className="qw-pcard-name">Create desire</h3>
                <p className="qw-body">Let the jewellery sell itself before asking customers to evaluate it. The piece is the interface; chrome recedes, and no UI element overlaps product photography except a near-silent purchase bar.</p>
              </article>
              <article className="qw-pcard" style={{ "--i": "1" } as CSSProperties}>
                <span className="qw-pcard-idx">02</span>
                <h3 className="qw-pcard-name">Make it tangible</h3>
                <p className="qw-body">Reduce the distance between digital and physical. Answer scale by comparison, not measurement, and let the buyer see how a piece behaves before they commit.</p>
              </article>
              <article className="qw-pcard" style={{ "--i": "2" } as CSSProperties}>
                <span className="qw-pcard-idx">03</span>
                <h3 className="qw-pcard-name">Explain progressively</h3>
                <p className="qw-body">Reveal information when customers need it. A summary line is always visible; the full specification is one interaction away. Present, complete, never imposed.</p>
              </article>
              <article className="qw-pcard" style={{ "--i": "3" } as CSSProperties}>
                <span className="qw-pcard-idx">04</span>
                <h3 className="qw-pcard-name">Put trust before commitment</h3>
                <p className="qw-body">Make reassurance part of the purchase journey. Certification, hallmarking and returns move out of the footer and in front of the price, where the doubt actually occurs.</p>
              </article>
              <article className="qw-pcard" style={{ "--i": "4" } as CSSProperties}>
                <span className="qw-pcard-idx">05</span>
                <h3 className="qw-pcard-name">Keep a human door open</h3>
                <p className="qw-body">Self-service shouldn&rsquo;t mean being left alone. A way to reach a person stays within reach throughout, so the experience never traps a hesitant buyer.</p>
              </article>
            </div>
          </div>
        </section>
        {/* ============================================================
         05 — THE PDP  (the hero chapter)
         ============================================================ */}
        <section className="qw-section" id="pdp">
          <div className="qw-wrap">
            <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">04</span> The product experience</p>
            <h2 className="qw-display" data-reveal="" style={{ maxWidth: "16ch" }}>The PDP became the confidence engine.</h2>
            <p className="qw-body qw-measure" data-reveal="" style={{ "--d": "1", marginTop: "24px" } as CSSProperties}>Everything before this page builds desire. This page has to convert it into a decision worth six figures, made alone, on a phone, without a person in the room. It is the hardest surface in the product and it received the most work.</p>
          </div>
          {/* oversized PDP object, near full-bleed */}
          <div className="qw-wrap qw-pdp-hero">
            <div className="qw-plate qw-plate--pano qw-hoverable" style={{ aspectRatio: "16/10" }} data-reveal="scale" role="img" aria-label="The full QWEEN Cherry Pop Hoops product detail page, shown as the central artefact of the case study.">
              <img src="/assets/img/qween/pdp-top.png" alt="" loading="lazy" />
            </div>
            <p className="qw-cap" data-reveal="" style={{ textAlign: "center", marginInline: "auto" }}>The PDP is the central artefact, shown large, never as a thumbnail inside a card.</p>
          </div>
          {/* 04.1 DESIRE */}
          <div className="qw-wrap" style={{ paddingTop: "clamp(40px,6vw,80px)" }}>
            <div className="qw-split qw-split--rev">
              <div className="qw-split-media">
                <div className="qw-split-sticky">
                  <div className="qw-plate qw-plate--tall qw-hoverable qw-plate--screen" data-reveal="scale" role="img" aria-label="A large editorial crop of the hero product imagery.">
                    <img src="/assets/img/qween/m-hero.png" alt="" loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="qw-split-copy">
                <div className="qw-subchapter" data-reveal="">
                  <span className="num">04.1</span>
                  <span className="lbl">Desire</span>
                </div>
                <h3 className="qw-h" data-reveal="">Start with desire.</h3>
                <p className="qw-body" data-reveal="">Before buyers evaluate a piece, they need to want it.</p>
                <ul className="qw-points" data-reveal="">
                  <li><strong>Hero first.</strong> The gallery opens on the piece at true crop.</li>
                  <li><strong>Scale early.</strong> An on-model frame sits in the first two positions; size-distorting macros come later.</li>
                  <li><strong>Story apart from specs.</strong> Why the piece exists gets its own space, the way an associate would tell it.</li>
                </ul>
              </div>
            </div>
          </div>
          {/* 04.2 EXPERIENCE — title pinned left, steps scroll on the right */}
          <div className="qw-wrap qw-exp" style={{ paddingTop: "clamp(48px,7vw,96px)" }}>
            <div className="qw-exp-head">
              <div className="qw-subchapter" data-reveal="">
                <span className="num">04.2</span>
                <span className="lbl">Experience</span>
              </div>
              <h3 className="qw-h" data-reveal="">Make the product tangible.</h3>
              <p className="qw-body" data-reveal="" style={{ "--d": "1", marginTop: "18px" } as CSSProperties}>A photo is one viewpoint under one light. These tools let the buyer bring the piece closer before they commit.</p>
            </div>
            <div className="qw-exp-steps">
              <article className="qw-exp-step">
                <div className="qw-plate qw-plate--phone qw-plate--vid" data-reveal="scale" style={{ aspectRatio: "1180/2556" }} role="img" aria-label="Rotating and zooming a ring in the 3D viewer on mobile.">
                  <video src="/assets/video/qween/explore-3d.mp4" autoPlay muted loop playsInline preload="metadata" />
                </div>
                <div className="qw-exp-txt" data-reveal="">
                  <span className="n">01</span>
                  <h4>Explore in 3D</h4>
                  <p>Rotate and zoom to see proportion, depth and how the setting sits.</p>
                </div>
              </article>
              <article className="qw-exp-step">
                <div className="qw-plate qw-plate--phone qw-plate--vid" data-reveal="scale" style={{ aspectRatio: "1180/2556" }} role="img" aria-label="Trying a piece on with the camera, on mobile.">
                  <video src="/assets/video/qween/try-on.mp4" autoPlay muted loop playsInline preload="metadata" />
                </div>
                <div className="qw-exp-txt" data-reveal="">
                  <span className="n">02</span>
                  <h4>Try it on</h4>
                  <p>See the piece on your own hand, ear or neck, at true scale.</p>
                </div>
              </article>
              <article className="qw-exp-step">
                <div className="qw-plate qw-plate--phone qw-plate--vid" data-reveal="scale" style={{ aspectRatio: "568/1234" }} role="img" aria-label="Booking a live video consultation from the product page.">
                  <video src="/assets/video/qween/see-it-live.mov" autoPlay muted loop playsInline preload="metadata" />
                </div>
                <div className="qw-exp-txt" data-reveal="">
                  <span className="n">03</span>
                  <h4>See it live</h4>
                  <p>Book a video consultation and see the piece in an expert&rsquo;s hands, moving under real light.</p>
                </div>
              </article>
            </div>
          </div>
          {/* 04.3 UNDERSTAND — annotated */}
          <div className="qw-wrap" style={{ paddingTop: "clamp(48px,7vw,96px)" }}>
            <div className="qw-subchapter" data-reveal="">
              <span className="num">04.3</span>
              <span className="lbl">Understand</span>
            </div>
            <div className="qw-split">
              <div className="qw-split-media">
                <div className="qw-plate qw-plate--tall qw-hoverable qw-plate--screen" data-reveal="scale" role="img" aria-label="An annotated crop of the product specification block.">
                  <img src="/assets/img/qween/m-specs.png" alt="" loading="lazy" />
                </div>
              </div>
              <div className="qw-split-copy">
                <h3 className="qw-h" data-reveal="">Answer the questions that matter.</h3>
                <p className="qw-body" data-reveal="">The summary line reads as a sentence, not a table: stone count, total carat weight and metal, with the full breakdown one interaction away. Research said buyers check that the detail exists far more often than they read it, so it&rsquo;s present and complete, but never imposed on the majority.</p>
                <div className="qw-annot" data-reveal="">
                  <div className="qw-annot-tags">
                    <div className="qw-annot-tag">
                      <span className="k">Material</span>
                      <span className="v">Metal and purity, stated plainly in the summary line.</span>
                    </div>
                    <div className="qw-annot-tag">
                      <span className="k">Stone</span>
                      <span className="v">Cut, count and total carat weight: the credibility signal.</span>
                    </div>
                    <div className="qw-annot-tag">
                      <span className="k">Construction</span>
                      <span className="v">Setting technique and finish, revealed on expand.</span>
                    </div>
                    <div className="qw-annot-tag">
                      <span className="k">Specification</span>
                      <span className="v">The full 4Cs table, present for the few who read it.</span>
                    </div>
                  </div>
                </div>
                <p className="qw-body" data-reveal="">Give customers enough product truth to make an informed decision without overwhelming them.</p>
              </div>
            </div>
          </div>
          {/* 04.4 DECIDE — make it yours */}
          <div className="qw-wrap" style={{ paddingTop: "clamp(48px,7vw,96px)" }}>
            <div className="qw-subchapter" data-reveal="">
              <span className="num">04.4</span>
              <span className="lbl">Decide</span>
            </div>
            <h3 className="qw-h" data-reveal="" style={{ maxWidth: "18ch" }}>Make it yours, without leaving the page.</h3>
            <p className="qw-body qw-measure" data-reveal="" style={{ "--d": "1", marginTop: "18px" } as CSSProperties}>Size, metal colour, purity and gemstone are decided in bottom sheets over the product, not on separate pages. Each choice updates the delivery window and the price in place, so the buyer never loses sight of the piece they are deciding on.</p>
            <div className="qw-phones qw-phones--3" style={{ marginTop: "clamp(32px,4vw,52px)" }}>
              <div className="qw-plate qw-plate--phone qw-hoverable qw-plate--screen" data-reveal="scale" role="img" aria-label="Selecting a ring size on a ruler, with millimetre equivalent, delivery and price.">
                <img src="/assets/img/qween/m-ring-size.png" alt="" loading="lazy" />
              </div>
              <div className="qw-plate qw-plate--phone qw-hoverable qw-plate--screen" data-reveal="scale" style={{ "--d": "1" } as CSSProperties} role="img" aria-label="Picking a gold colour as a bottom sheet over the product.">
                <img src="/assets/img/qween/m-gold-colour.png" alt="" loading="lazy" />
              </div>
              <div className="qw-plate qw-plate--phone qw-hoverable qw-plate--screen" data-reveal="scale" style={{ "--d": "2" } as CSSProperties} role="img" aria-label="Full customisation: metal colour, purity and gemstone.">
                <img src="/assets/img/qween/m-customize.png" alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </section>
        {/* ============================================================
         06 — TRUST  (dark band, major moment)
         ============================================================ */}
        <section className="qw-section qw-band qw-section--fit" id="trust">
          <div className="qw-wrap qw-trust-fit">
            <div className="qw-trust-head">
              <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">05</span> Trust</p>
              <h2 className="qw-display" data-reveal="">Trust before price.</h2>
              <p className="qw-body" data-reveal="" style={{ "--d": "1", marginTop: "20px", color: "rgba(255,255,255,0.78)" } as CSSProperties}>Certification and returns sat in the footer, so buyers left mid-decision to find them, and often didn&rsquo;t come back. Now trust is stated before the price.</p>
              <blockquote className="qw-quote qw-quote--accent" data-reveal="" style={{ "--d": "2" } as CSSProperties}>Trust isn&rsquo;t a footer detail.</blockquote>
            </div>
            <div className="qw-plate qw-hoverable qw-plate--screen qw-trust-phone" data-reveal="scale" role="img" aria-label="The trust cards on the product page: natural stones and IGI certification.">
              <img src="/assets/img/qween/m-trust.png" alt="" loading="lazy" />
            </div>
            <div className="qw-tgrid" role="list">
              <div className="qw-tcard" data-reveal="" role="listitem">
                <span className="mk">Product truth</span>
                <h4>100% Natural Stones</h4>
                <p>A fact, not a marketing adjective.</p>
              </div>
              <div className="qw-tcard" data-reveal="" style={{ "--d": "1" } as CSSProperties} role="listitem">
                <span className="mk">Reassurance</span>
                <h4>IGI Certified</h4>
                <p>The real certificate, opened in place.</p>
              </div>
              <div className="qw-tcard" data-reveal="" style={{ "--d": "2" } as CSSProperties} role="listitem">
                <span className="mk">Reassurance</span>
                <h4>5 Year Stone Value Assurance</h4>
                <p>Promised at the moment of hesitation.</p>
              </div>
              <div className="qw-tcard" data-reveal="" style={{ "--d": "3" } as CSSProperties} role="listitem">
                <span className="mk">Confidence</span>
                <h4>Lifetime Buyback &amp; Exchange</h4>
                <p>The answer to &ldquo;what if I&rsquo;m wrong?&rdquo;</p>
              </div>
            </div>
          </div>
        </section>
        {/* ============================================================
         06 — FIND IT IN STORE (immersive)
         ============================================================ */}
        <section className="qw-section qw-section--fit" id="concierge">
          <div className="qw-wrap qw-store">
            <div className="qw-store-copy">
              <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">06</span> In store</p>
              <h2 className="qw-statement" data-reveal="">Find the piece in store, without leaving the page.</h2>
              <p className="qw-body" data-reveal="" style={{ "--d": "1", marginTop: "20px" } as CSSProperties}>Some buyers need to see a piece in person before they commit. The product page opens straight into the flagship: step inside, walk the floors, then plan the visit.</p>
              <ol className="qw-store-steps">
                <li data-reveal="">
                  <span className="k">01</span>
                  <div>
                    <h4>Find it</h4>
                    <p>&ldquo;Find this item in store&rdquo; sits on the product page, over a view of the flagship entrance.</p>
                  </div>
                </li>
                <li data-reveal="" style={{ "--d": "1" } as CSSProperties}>
                  <span className="k">02</span>
                  <div>
                    <h4>Step inside</h4>
                    <p>A 3D tour of the store, floor by floor, with experiences and the persona zone a tap away.</p>
                  </div>
                </li>
                <li data-reveal="" style={{ "--d": "2" } as CSSProperties}>
                  <span className="k">03</span>
                  <div>
                    <h4>Visit</h4>
                    <p>The Noida flagship, with directions, a virtual tour and visit booking.</p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="qw-store-phones qw-store-phones--one">
              <div className="qw-plate qw-hoverable qw-plate--phone qw-plate--vid" data-reveal="scale" style={{ aspectRatio: "1180/2556" }} role="img" aria-label="The product locator: finding a piece in the flagship store from the product page.">
                <video src="/assets/video/qween/product-locator.mp4" autoPlay muted loop playsInline preload="metadata" />
              </div>
            </div>
          </div>
        </section>
        {/* ============================================================
         08 — OWNERSHIP
         ============================================================ */}
        <section className="qw-section" id="ownership">
          <div className="qw-wrap">
            <div className="qw-split">
              <div className="qw-split-media">
                <div className="qw-plate qw-plate--phone qw-hoverable qw-plate--screen" data-reveal="scale" role="img" aria-label="The Self Invest plan: ten monthly instalments, with one and a half on QWEEN.">
                  <img src="/assets/img/qween/m-self-invest.png" alt="" loading="lazy" />
                </div>
              </div>
              <div className="qw-split-copy">
                <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">07</span> Self Invest Plan</p>
                <h2 className="qw-statement" data-reveal="">Spread the decision over time.</h2>
                <p className="qw-body" data-reveal="" style={{ "--d": "1", marginTop: "20px" } as CSSProperties}>The Self Invest plan turns a single large payment into ten monthly instalments, with one and a half instalments added by QWEEN. It is surfaced on the product page as the price the buyer could pay, and explained in three steps (choose, save, redeem) with a concierge one tap away.</p>
              </div>
            </div>
          </div>
        </section>
        {/* ============================================================
         10 — OUTCOME
         ============================================================ */}
        <section className="qw-section qw-section--fit" id="outcome">
          <div className="qw-wrap qw-outcome-layout">
            <div className="qw-outcome-copy">
              <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">08</span> Outcome</p>
              <h2 className="qw-display" data-reveal="" style={{ maxWidth: "12ch" }}>The shift.</h2>
              <div className="qw-measure" style={{ marginTop: "clamp(24px,3vw,40px)" }}>
                <p className="qw-body" data-reveal=""><strong>For buyers</strong>, the questions that used to end a session now have answers in the place the question occurs.</p>
                <p className="qw-body" data-reveal="" style={{ "--d": "1" } as CSSProperties}><strong>For the business</strong>, the design system and content model outlived any individual page. New collections launch against an existing structure instead of a new design cycle.</p>
                <p className="qw-body" data-reveal="" style={{ "--d": "2" } as CSSProperties}><strong>For the team</strong>, motion tokens, a photography shot list and a merchandising contract turned recurring debates into settled defaults.</p>
                <p className="qw-small" data-reveal="" style={{ marginTop: "18px" }}>QWEEN is a growing brand rather than a controlled experiment, so this study reports qualitative shifts rather than before-and-after numbers.</p>
              </div>
            </div>
            <div className="qw-outcome" role="group" aria-label="Before: a product catalogue of four steps. After: a confidence journey of seven moments.">
              <div className="qw-stamp-wrap was" data-reveal="" style={{ "--d": "1" } as CSSProperties}>
                <div className="qw-stamp">
                  <h3>Before</h3>
                  <div className="sub">Product catalogue</div>
                  <div className="qw-outcome-step">Image</div>
                  <div className="qw-outcome-step">Specs</div>
                  <div className="qw-outcome-step">Price</div>
                  <div className="qw-outcome-step">Buy</div>
                </div>
              </div>
              <div className="qw-stamp-wrap now" data-reveal="">
                <div className="qw-stamp">
                  <h3>After</h3>
                  <div className="sub">Confidence journey</div>
                  <div className="qw-outcome-step">Desire</div>
                  <div className="qw-outcome-step">Experience</div>
                  <div className="qw-outcome-step">Understand</div>
                  <div className="qw-outcome-step">Trust</div>
                  <div className="qw-outcome-step">Concierge</div>
                  <div className="qw-outcome-step">Decide</div>
                  <div className="qw-outcome-step">Own</div>
                  <p className="qw-stamp-foot">Same facts &middot; new order</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================================================
         11 — REFLECTION
         ============================================================ */}
        <section className="qw-section qw-band qw-section--fit" id="reflection">
          <div className="qw-wrap">
            <div className="qw-reflect">
              <div>
                <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">09</span> Reflection</p>
                <h2 className="qw-display" data-reveal="">Luxury ecommerce isn&rsquo;t about adding more information.</h2>
              </div>
              <div className="qw-reflect-copy">
                <p className="qw-body" data-reveal="">The content barely changed. The order did: trust before price, scale before specs, story before both.</p>
                <p className="qw-body" data-reveal="" style={{ "--d": "1" } as CSSProperties}>When a purchase is rare, expensive and emotional, the problem is doubt, not navigation. Find the order of doubts, and the interface mostly designs itself.</p>
              </div>
            </div>
            {/* METRICS — 30,000 PDP sessions, 1–31 Oct 2026. Method is stated in .qw-metrics-note. */}
            <div className="qw-metrics-wrap">
              <p className="qw-metrics-label" data-reveal="">Feature use</p>
              <div className="qw-metrics qw-metrics--5" role="list" aria-label="Share of PDP sessions using each feature">
                <div className="qw-metric" data-reveal="" style={{ "--d": "0" } as CSSProperties} role="listitem">
                  <span className="v">9%</span>
                  <span className="k">3D viewer</span>
                  <span className="d">opened the 3D viewer</span>
                </div>
                <div className="qw-metric" data-reveal="" style={{ "--d": "1" } as CSSProperties} role="listitem">
                  <span className="v">7%</span>
                  <span className="k">Virtual try-on</span>
                  <span className="d">tried a piece on</span>
                </div>
                <div className="qw-metric" data-reveal="" style={{ "--d": "2" } as CSSProperties} role="listitem">
                  <span className="v">5%</span>
                  <span className="k">Concierge</span>
                  <span className="d">reached the concierge</span>
                </div>
                <div className="qw-metric" data-reveal="" style={{ "--d": "3" } as CSSProperties} role="listitem">
                  <span className="v">8%</span>
                  <span className="k">Self Invest Plan</span>
                  <span className="d">explored the plan</span>
                </div>
                <div className="qw-metric" data-reveal="" style={{ "--d": "4" } as CSSProperties} role="listitem">
                  <span className="v">6%</span>
                  <span className="k">Find in store</span>
                  <span className="d">used find in store</span>
                </div>
              </div>
              <p className="qw-metrics-label" data-reveal="">Time on the product page</p>
              <div className="qw-metrics qw-metrics--3" role="list" aria-label="Share of PDP sessions by time spent">
                <div className="qw-metric" data-reveal="" style={{ "--d": "0" } as CSSProperties} role="listitem">
                  <span className="v">14%</span>
                  <span className="k">15+ sec</span>
                  <span className="d">stayed 15 seconds or more</span>
                </div>
                <div className="qw-metric" data-reveal="" style={{ "--d": "1" } as CSSProperties} role="listitem">
                  <span className="v">8%</span>
                  <span className="k">30+ sec</span>
                  <span className="d">stayed 30 seconds or more</span>
                </div>
                <div className="qw-metric" data-reveal="" style={{ "--d": "2" } as CSSProperties} role="listitem">
                  <span className="v">3%</span>
                  <span className="k">100+ sec</span>
                  <span className="d">stayed 100 seconds or more</span>
                </div>
              </div>
              <p className="qw-small qw-metrics-note" data-reveal="">Analysed 30,000 PDP sessions from 1 to 31 October 2026, calculating feature adoption as unique interactions divided by total sessions, and time-on-page engagement using 15s, 30s and 100s active-session thresholds.</p>
            </div>
          </div>
        </section>
        {/* CTA */}
        <div className="qw-wrap">
          <div className="qw-cta">
            <span className="qw-cta-note">Want the full walkthrough with screens?</span>
            {" "}
            <a href="https://calendly.com/anandpatil19594/30min" target="_blank" rel="noopener">Book a call</a>
          </div>
        </div>
      </main>
      {/* FOOTER (preserved) */}
      <Footer />
      <QweenBehaviour />
    </>
  );
}
