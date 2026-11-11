import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import QweenBehaviour from '@/components/behaviour/QweenBehaviour';
import '@/styles/qween.css';

export const metadata: Metadata = {
  title: "QWEEN — Brewed by Anand",
  description: "QWEEN — designing confidence for luxury jewellery commerce. How the product page became a confidence-building experience for high-consideration purchases.",
};

export default function QweenPage() {
  return (
    <>
      {/* NAV (preserved) */}
      <Nav />
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
        <a href="#shift">
          <span className="lbl">The shift</span>
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
          <span className="lbl">Human + digital</span>
          <span className="bar" />
        </a>
        {" "}
        <a href="#ownership">
          <span className="lbl">Ownership</span>
          <span className="bar" />
        </a>
        {" "}
        <a href="#ecosystem">
          <span className="lbl">Beyond the PDP</span>
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
      <header className="qw-hero" id="top">
        <div className="qw-hero-bg">
          <div className="qw-plate" role="img" aria-label="The QWEEN product detail page — the Cherry Pop Hoops, shown as the hero product visual.">
            {/* Replace with the strongest QWEEN PDP visual (Cherry Pop Hoops, full-bleed). */}
            <div className="qw-plate-note">
              <span className="qw-plate-kind">Hero — QWEEN PDP</span>
              {" "}
              <span className="qw-plate-desc">The Cherry Pop Hoops product experience, at full bleed</span>
              {" "}
              <span className="qw-plate-swap">Drop the live PDP screenshot here</span>
            </div>
          </div>
        </div>
        <div className="qw-hero-inner">
          <div className="qw-hero-content">
            <p className="qw-hero-eyebrow" data-hero="" style={{ "--hd": "0" } as CSSProperties}>QWEEN · Product Design · Luxury Commerce</p>
            <h1 className="qw-hero-title" data-hero="" style={{ "--hd": "1" } as CSSProperties}>Designing confidence for luxury jewellery commerce.</h1>
            <p className="qw-hero-desc" data-hero="" style={{ "--hd": "2" } as CSSProperties}>How we transformed the jewellery product page from a catalogue of products into a confidence-building experience for high-consideration purchases.</p>
            <dl className="qw-hero-meta" data-hero="" style={{ "--hd": "3" } as CSSProperties}>
              <div>
                <dt>Role</dt>
                <dd>Product Designer · end-to-end</dd>
              </div>
              <div>
                <dt>Scope</dt>
                <dd>Ecommerce · Design system · Motion · Responsive</dd>
              </div>
              <div>
                <dt>Platform</dt>
                <dd>Responsive web · mobile-first</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>Shipped · ongoing</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="qw-hero-scroll" aria-hidden="true">
          <span>Scroll</span>
        </div>
      </header>
      <main>
        {/* STORYBOARD — the three confidence surfaces */}
        <section className="qw-section qw-section--tight">
          <div className="qw-wrap">
            <p className="qw-eyebrow qw-chaptertag" data-reveal="">Desire &nbsp;→&nbsp; Understanding &nbsp;→&nbsp; Trust</p>
            <div className="qw-storyboard" data-reveal="scale">
              <div className="qw-plate s2" role="img" aria-label="Product story — why the piece exists.">
                <div className="qw-plate-note">
                  <span className="qw-plate-kind">Story</span>
                  <span className="qw-plate-desc">Why the piece exists</span>
                </div>
              </div>
              <div className="qw-plate s1" role="img" aria-label="The PDP hero — establishing the piece at true scale.">
                <div className="qw-plate-note">
                  <span className="qw-plate-kind">PDP</span>
                  <span className="qw-plate-desc">The piece at true scale</span>
                </div>
              </div>
              <div className="qw-plate s3" role="img" aria-label="Trust — certification and assurance before price.">
                <div className="qw-plate-note">
                  <span className="qw-plate-kind">Trust</span>
                  <span className="qw-plate-desc">Assurance before price</span>
                </div>
              </div>
            </div>
            <p className="qw-cap" data-reveal="" style={{ margin: "34px auto 0", textAlign: "center", maxWidth: "56ch" }}>The product page carries the confidence burden — so it is where most of this case study lives.</p>
          </div>
        </section>
        {/* ============================================================
           01 — THE CONFIDENCE GAP
           ============================================================ */}
        <section className="qw-section" id="gap">
          <div className="qw-wrap">
            <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">01</span> &mdash; The problem</p>
            <h2 className="qw-display" data-reveal="" style={{ maxWidth: "22ch" }}>Luxury jewellery is easy to browse online. It&rsquo;s harder to feel confident buying it online.</h2>
            <div className="qw-measure" style={{ marginTop: "clamp(34px,5vw,56px)" }}>
              <p className="qw-body" data-reveal="">QWEEN sells fine jewellery at price points where a single order can cost more than a laptop. The site worked. People browsed it. Very few of them bought. The instinct in that situation is to optimise the funnel &mdash; faster checkout, better filters, more urgency. The blocker was never speed.</p>
              <p className="qw-body" data-reveal="" style={{ "--d": "1" } as CSSProperties}>A buyer standing in front of a &#8377;2,00,000 decision has no way to reach the certainty a showroom gives them in four minutes: seeing the piece at true scale, understanding what the stone actually is, knowing it can be returned, and feeling like the brand is a house rather than a storefront. Fine jewellery is slow, high-stakes and rare &mdash; and most of the ecommerce playbook, tuned for fast and low-stakes, inverts.</p>
            </div>
            {/* SHOWROOM vs ECOMMERCE */}
            <div className="qw-versus" role="group" aria-label="The showroom resolves seven moments of doubt; traditional ecommerce answers four steps.">
              <div className="qw-versus-col now" data-reveal="">
                <h3>The showroom</h3>
                <div className="qw-versus-step">See</div>
                <div className="qw-versus-step">Touch</div>
                <div className="qw-versus-step">Try</div>
                <div className="qw-versus-step">Ask</div>
                <div className="qw-versus-step">Understand</div>
                <div className="qw-versus-step">Trust</div>
                <div className="qw-versus-step">Buy</div>
              </div>
              <div className="qw-versus-mid" data-reveal="" style={{ "--d": "1" } as CSSProperties} aria-hidden="true">vs.</div>
              <div className="qw-versus-col muted" data-reveal="" style={{ "--d": "1" } as CSSProperties}>
                <h3>Traditional ecommerce</h3>
                <div className="qw-versus-step">Image</div>
                <div className="qw-versus-step">Specs</div>
                <div className="qw-versus-step">Price</div>
                <div className="qw-versus-step">Buy</div>
              </div>
            </div>
            <blockquote className="qw-quote" data-reveal="" style={{ maxWidth: "24ch" }}>The buyer isn&rsquo;t resisting a sale. They&rsquo;re missing the certainty a showroom gives for free.</blockquote>
          </div>
        </section>
        {/* ============================================================
           02 — THE INSIGHT  (dark band)
           ============================================================ */}
        <section className="qw-section qw-band" id="insight">
          <div className="qw-wrap">
            <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">02</span> &mdash; The insight</p>
            <h2 className="qw-display" data-reveal="" style={{ maxWidth: "20ch" }}>Don&rsquo;t replicate the showroom. Recreate what makes the showroom work.</h2>
            <div className="qw-measure" style={{ marginTop: "clamp(34px,5vw,56px)" }}>
              <p className="qw-body" data-reveal="">Time spent with the people who sell jewellery for a living was the most useful research of the project. A sales associate carries a compressed, tested model of what a buyer needs and in what order &mdash; it just lives in their head. Buyer conversations, session recordings and drop-off analysis confirmed the same pattern. Five things surfaced, and each one has a named consequence later in the product.</p>
            </div>
            <div className="qw-trust-list" style={{ marginTop: "clamp(40px,5vw,64px)" }} role="list">
              <div className="qw-trust-item" role="listitem">
                <div>
                  <h4>Scale is the first unanswered question &mdash; and it&rsquo;s never asked.</h4>
                  <p>Buyers don&rsquo;t say &ldquo;I can&rsquo;t tell how big it is.&rdquo; They zoom, hesitate, leave. On-model imagery resolves more doubt than dimensions in millimetres.</p>
                </div>
                <span className="mk">01</span>
              </div>
              <div className="qw-trust-item" role="listitem">
                <div>
                  <h4>Returns and certification are read before price.</h4>
                  <p>Above a threshold, buyers hunt for the returns window and the certificate before engaging with the piece. Trust is a gate, not a footer.</p>
                </div>
                <span className="mk">02</span>
              </div>
              <div className="qw-trust-item" role="listitem">
                <div>
                  <h4>Specifications are wanted by a minority, needed by everyone.</h4>
                  <p>Few read the full breakdown; almost all check that it exists. Depth is a credibility signal even when unread.</p>
                </div>
                <span className="mk">03</span>
              </div>
              <div className="qw-trust-item" role="listitem">
                <div>
                  <h4>People shop by occasion, not category.</h4>
                  <p>The model is &ldquo;something for my sister&rsquo;s wedding,&rdquo; not &ldquo;pendants, 18kt, under &#8377;X.&rdquo; Category-first forced a translation buyers were bad at.</p>
                </div>
                <span className="mk">04</span>
              </div>
              <div className="qw-trust-item" role="listitem">
                <div>
                  <h4>The decision is rarely made alone.</h4>
                  <p>Sharing a piece with a partner or parent was a routine, unsupported step. A link without context broke the conversation the buyer was trying to have.</p>
                </div>
                <span className="mk">05</span>
              </div>
            </div>
            <p className="qw-eyebrow qw-chaptertag" data-reveal="" style={{ marginTop: "clamp(64px,9vw,110px)", marginBottom: "clamp(28px,4vw,40px)" }}>The five confidence moments</p>
            <div className="qw-seq" role="img" aria-label="The confidence sequence: desire, experience, understand, trust, decide.">
              <span className="qw-seq-node" style={{ "--d": "0" } as CSSProperties}><span className="idx">01</span>Desire</span>
              {" "}
              <span className="qw-seq-link" style={{ "--d": "1" } as CSSProperties} />
              {" "}
              <span className="qw-seq-node" style={{ "--d": "1" } as CSSProperties}><span className="idx">02</span>Experience</span>
              {" "}
              <span className="qw-seq-link" style={{ "--d": "2" } as CSSProperties} />
              {" "}
              <span className="qw-seq-node" style={{ "--d": "2" } as CSSProperties}><span className="idx">03</span>Understand</span>
              {" "}
              <span className="qw-seq-link" style={{ "--d": "3" } as CSSProperties} />
              {" "}
              <span className="qw-seq-node" style={{ "--d": "3" } as CSSProperties}><span className="idx">04</span>Trust</span>
              {" "}
              <span className="qw-seq-link" style={{ "--d": "4" } as CSSProperties} />
              {" "}
              <span className="qw-seq-node" style={{ "--d": "4" } as CSSProperties}><span className="idx">05</span>Decide</span>
            </div>
            <p className="qw-body qw-measure" data-reveal="" style={{ marginTop: "clamp(30px,4vw,48px)", color: "rgba(255,255,255,0.78)" }}>These aren&rsquo;t features. They&rsquo;re the moments where confidence is won or lost &mdash; and the order they arrive in is not negotiable. Everything after this chapter is an attempt to answer them in sequence.</p>
          </div>
        </section>
        {/* ============================================================
           03 — DESIGN PRINCIPLES
           ============================================================ */}
        <section className="qw-section" id="principles">
          <div className="qw-wrap">
            <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">03</span> &mdash; The approach</p>
            <h2 className="qw-statement" data-reveal="">Designing for confidence, not just conversion.</h2>
            <p className="qw-body qw-measure" data-reveal="" style={{ "--d": "1", marginTop: "24px" } as CSSProperties}>Principles are only useful when they can settle an argument. Each of these carried a rule, so debates about taste became debates about the rule.</p>
            <div className="qw-principles">
              <div className="qw-principle" data-reveal="fade">
                <div className="qw-principle-copy">
                  <div className="qw-principle-idx">01</div>
                  <h3 className="qw-principle-name">Create desire</h3>
                  <p className="qw-body">Let the jewellery sell itself before asking customers to evaluate it. The piece is the interface; chrome recedes, and no UI element overlaps product photography except a near-silent purchase bar.</p>
                </div>
                <div className="qw-principle-media">
                  <div className="qw-plate qw-plate--wide" role="img" aria-label="Product photography occupying the majority of the viewport.">
                    <div className="qw-plate-note">
                      <span className="qw-plate-kind">Principle 01</span>
                      <span className="qw-plate-desc">The piece occupies the viewport</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="qw-principle" data-reveal="fade">
                <div className="qw-principle-copy">
                  <div className="qw-principle-idx">02</div>
                  <h3 className="qw-principle-name">Make it tangible</h3>
                  <p className="qw-body">Reduce the distance between digital and physical. Answer scale by comparison, not measurement &mdash; and let the buyer see how a piece behaves before they commit.</p>
                </div>
                <div className="qw-principle-media">
                  <div className="qw-plate qw-plate--wide" role="img" aria-label="On-model and interactive views that make scale tangible.">
                    <div className="qw-plate-note">
                      <span className="qw-plate-kind">Principle 02</span>
                      <span className="qw-plate-desc">On-model, at true scale</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="qw-principle" data-reveal="fade">
                <div className="qw-principle-copy">
                  <div className="qw-principle-idx">03</div>
                  <h3 className="qw-principle-name">Explain progressively</h3>
                  <p className="qw-body">Reveal information when customers need it. A summary line is always visible; the full specification is one interaction away. Present, complete, never imposed.</p>
                </div>
                <div className="qw-principle-media">
                  <div className="qw-plate qw-plate--wide" role="img" aria-label="A collapsed specification summary that expands on demand.">
                    <div className="qw-plate-note">
                      <span className="qw-plate-kind">Principle 03</span>
                      <span className="qw-plate-desc">Summary now, depth on demand</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="qw-principle" data-reveal="fade">
                <div className="qw-principle-copy">
                  <div className="qw-principle-idx">04</div>
                  <h3 className="qw-principle-name">Put trust before commitment</h3>
                  <p className="qw-body">Make reassurance part of the purchase journey. Certification, hallmarking and returns move out of the footer and in front of the price, where the doubt actually occurs.</p>
                </div>
                <div className="qw-principle-media">
                  <div className="qw-plate qw-plate--wide" role="img" aria-label="A trust band placed above the price.">
                    <div className="qw-plate-note">
                      <span className="qw-plate-kind">Principle 04</span>
                      <span className="qw-plate-desc">Assurance ahead of price</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="qw-principle" data-reveal="fade">
                <div className="qw-principle-copy">
                  <div className="qw-principle-idx">05</div>
                  <h3 className="qw-principle-name">Keep a human door open</h3>
                  <p className="qw-body">Self-service shouldn&rsquo;t mean being left alone. A way to reach a person stays within reach throughout, so the experience never traps a hesitant buyer.</p>
                </div>
                <div className="qw-principle-media">
                  <div className="qw-plate qw-plate--wide" role="img" aria-label="A quiet concierge entry point kept within reach.">
                    <div className="qw-plate-note">
                      <span className="qw-plate-kind">Principle 05</span>
                      <span className="qw-plate-desc">A person, one tap away</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================================================
           04 — THE DESIGN SHIFT (scroll-controlled)
           ============================================================ */}
        <section className="qw-section" id="shift">
          <div className="qw-wrap">
            <div className="qw-shift-layout">
              <aside className="qw-shift-aside">
                <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">04</span> &mdash; The system</p>
                <p className="qw-shift-statement" data-reveal="" style={{ "--d": "1" } as CSSProperties}>From product page to confidence journey.</p>
              </aside>
              <div className="qw-shift-track">
                <div className="qw-shift-viewport" role="img" aria-label="The product page transforms from a four-step catalogue sequence into a seven-moment confidence journey.">
                  <div className="qw-shift-frame f1 is-on">
                    <p className="qw-shift-flowlabel">Before &mdash; the catalogue page</p>
                    <div className="qw-shift-row">
                      <span className="qw-shift-node dim">Image</span>
                      <span className="qw-shift-sep">→</span>
                      {" "}
                      <span className="qw-shift-node dim">Specs</span>
                      <span className="qw-shift-sep">→</span>
                      {" "}
                      <span className="qw-shift-node dim">Price</span>
                      <span className="qw-shift-sep">→</span>
                      {" "}
                      <span className="qw-shift-node dim">Buy</span>
                    </div>
                  </div>
                  <div className="qw-shift-frame f2">
                    <p className="qw-shift-q">What if the page answered doubts in the order they arrive?</p>
                  </div>
                  <div className="qw-shift-frame f3 now">
                    <p className="qw-shift-flowlabel">QWEEN &mdash; the confidence journey</p>
                    <div className="qw-shift-row">
                      <span className="qw-shift-node lead">Desire</span>
                      <span className="qw-shift-sep">→</span>
                      {" "}
                      <span className="qw-shift-node">Experience</span>
                      <span className="qw-shift-sep">→</span>
                      {" "}
                      <span className="qw-shift-node">Understand</span>
                    </div>
                    <div className="qw-shift-row" style={{ marginTop: "12px" }}>
                      <span className="qw-shift-node">Trust</span>
                      <span className="qw-shift-sep">→</span>
                      {" "}
                      <span className="qw-shift-node">Get help</span>
                      <span className="qw-shift-sep">→</span>
                      {" "}
                      <span className="qw-shift-node">Decide</span>
                      <span className="qw-shift-sep">→</span>
                      {" "}
                      <span className="qw-shift-node">Own</span>
                    </div>
                    <p className="qw-shift-note">Same facts, resequenced. Trust before price. Scale before specification. Story before both.</p>
                  </div>
                </div>
                <div className="qw-shift-phase" data-phase="0" />
                <div className="qw-shift-phase" data-phase="1" />
                <div className="qw-shift-phase" data-phase="2" />
              </div>
            </div>
            <blockquote className="qw-quote qw-quote--accent" data-reveal="" style={{ maxWidth: "24ch", marginTop: "clamp(32px,5vw,64px)" }}>A PDP that works isn&rsquo;t a page. It&rsquo;s a sequence of answers.</blockquote>
          </div>
        </section>
        {/* ============================================================
           05 — THE PDP  (the hero chapter)
           ============================================================ */}
        <section className="qw-section" id="pdp">
          <div className="qw-wrap">
            <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">05</span> &mdash; The product experience</p>
            <h2 className="qw-display" data-reveal="" style={{ maxWidth: "16ch" }}>The PDP became the confidence engine.</h2>
            <p className="qw-body qw-measure" data-reveal="" style={{ "--d": "1", marginTop: "24px" } as CSSProperties}>Everything before this page builds desire. This page has to convert it into a decision worth six figures &mdash; made alone, on a phone, without a person in the room. It is the hardest surface in the product and it received the most work.</p>
          </div>
          {/* oversized PDP object, near full-bleed */}
          <div className="qw-wrap qw-pdp-hero">
            <div className="qw-plate qw-plate--pano qw-hoverable" data-reveal="scale" role="img" aria-label="The full QWEEN Cherry Pop Hoops product detail page, shown as the central artefact of the case study.">
              <div className="qw-plate-note">
                <span className="qw-plate-kind">The artefact — Cherry Pop Hoops PDP</span>
                {" "}
                <span className="qw-plate-desc">The live product page, treated as the hero object of the whole study</span>
                {" "}
                <span className="qw-plate-swap">Replace with a high-resolution capture of the live PDP</span>
              </div>
            </div>
            <p className="qw-cap" data-reveal="" style={{ textAlign: "center", marginInline: "auto" }}>The PDP is the central artefact — shown large, never as a thumbnail inside a card.</p>
          </div>
          {/* 05.1 DESIRE */}
          <div className="qw-wrap" style={{ paddingTop: "clamp(40px,6vw,80px)" }}>
            <div className="qw-split qw-split--rev">
              <div className="qw-split-media">
                <div className="qw-split-sticky">
                  <div className="qw-plate qw-plate--tall qw-hoverable" data-reveal="scale" role="img" aria-label="A large editorial crop of the hero product imagery.">
                    <div className="qw-plate-note">
                      <span className="qw-plate-kind">05.1 — Desire</span>
                      <span className="qw-plate-desc">Hero imagery, oversized crop</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="qw-split-copy">
                <div className="qw-subchapter" data-reveal="">
                  <span className="num">05.1</span>
                  <span className="lbl">Desire</span>
                </div>
                <h3 className="qw-h" data-reveal="">Start with desire.</h3>
                <p className="qw-body" data-reveal="">Before customers evaluate the product, they need to want it. The gallery leads with a full-bleed hero at true crop, then an on-model or on-hand frame within the first two positions &mdash; establishing scale by comparison before any detail macro. Macro shots are the most seductive asset a jewellery brand owns, and they mislead on size, so they were deliberately demoted.</p>
                <p className="qw-body" data-reveal="">Beneath the imagery sits the product story &mdash; the reference it draws on, the setting technique, why the stones are cut that way. In a showroom the associate tells you this; it&rsquo;s what converts an object into a possession. It gets its own space, separated entirely from the specification block.</p>
                <blockquote className="qw-quote" data-reveal="" style={{ fontSize: "clamp(1.3rem,2.2vw,1.9rem)" }}>Before customers evaluate the product, they need to want it.</blockquote>
              </div>
            </div>
          </div>
          {/* 05.2 EXPERIENCE — sticky */}
          <div className="qw-wrap" style={{ paddingTop: "clamp(48px,7vw,96px)" }}>
            <div className="qw-subchapter" data-reveal="">
              <span className="num">05.2</span>
              <span className="lbl">Experience</span>
            </div>
            <h3 className="qw-h" data-reveal="" style={{ maxWidth: "18ch" }}>Make the product tangible.</h3>
            <p className="qw-body qw-measure" data-reveal="" style={{ "--d": "1", marginTop: "18px" } as CSSProperties}>Photography is a fixed viewpoint under fixed light. The experience layer closes the distance to the physical piece &mdash; letting the buyer bring it closer, place it on themselves, and see how it behaves.</p>
          </div>
          <div className="qw-wrap">
            <div className="qw-stick">
              <div className="qw-stick-stage" aria-hidden="true">
                <div className="qw-stick-viewport">
                  <div className="qw-plate qw-stick-plate is-active" data-w="0">
                    <div className="qw-plate-note">
                      <span className="qw-plate-kind">Explore in 3D</span>
                      <span className="qw-plate-desc">Rotate the piece</span>
                    </div>
                  </div>
                  <div className="qw-plate qw-stick-plate" data-w="1">
                    <div className="qw-plate-note">
                      <span className="qw-plate-kind">Try it on</span>
                      <span className="qw-plate-desc">On your own hand or ear</span>
                    </div>
                  </div>
                  <div className="qw-plate qw-stick-plate" data-w="2">
                    <div className="qw-plate-note">
                      <span className="qw-plate-kind">See it live</span>
                      <span className="qw-plate-desc">How it behaves in light</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="qw-stick-steps">
                <div className="qw-stick-step">
                  <div className="qw-plate qw-plate--tall mobile-plate">
                    <div className="qw-plate-note">
                      <span className="qw-plate-kind">Explore in 3D</span>
                    </div>
                  </div>
                  <span className="n">01</span>
                  <h4>Explore in 3D</h4>
                  <p className="qw-body">Rotate the piece to answer what a single photograph can&rsquo;t &mdash; proportion, depth, the way a setting sits. Direct manipulation, so the response is instant.</p>
                </div>
                <div className="qw-stick-step">
                  <div className="qw-plate qw-plate--tall mobile-plate">
                    <div className="qw-plate-note">
                      <span className="qw-plate-kind">Try it on</span>
                    </div>
                  </div>
                  <span className="n">02</span>
                  <h4>Try it on.</h4>
                  <p className="qw-body">Place the piece on the buyer&rsquo;s own hand, ear or neck at true scale &mdash; resolving the most common reason a considered buyer defers: &ldquo;how will this look on me?&rdquo;</p>
                </div>
                <div className="qw-stick-step">
                  <div className="qw-plate qw-plate--tall mobile-plate">
                    <div className="qw-plate-note">
                      <span className="qw-plate-kind">See it live</span>
                    </div>
                  </div>
                  <span className="n">03</span>
                  <h4>See it live.</h4>
                  <p className="qw-body">See how the stones behave as light moves &mdash; the thing people tilt a piece under the showroom lamp to check. The experience never begins without the buyer&rsquo;s action.</p>
                </div>
              </div>
            </div>
          </div>
          {/* 05.3 UNDERSTAND — annotated */}
          <div className="qw-wrap" style={{ paddingTop: "clamp(48px,7vw,96px)" }}>
            <div className="qw-subchapter" data-reveal="">
              <span className="num">05.3</span>
              <span className="lbl">Understand</span>
            </div>
            <div className="qw-split">
              <div className="qw-split-media">
                <div className="qw-plate qw-plate--tall qw-hoverable" data-reveal="scale" role="img" aria-label="An annotated crop of the product specification block.">
                  <div className="qw-plate-note">
                    <span className="qw-plate-kind">05.3 — Understand</span>
                    <span className="qw-plate-desc">The specification, annotated</span>
                  </div>
                </div>
              </div>
              <div className="qw-split-copy">
                <h3 className="qw-h" data-reveal="">Answer the questions that matter.</h3>
                <p className="qw-body" data-reveal="">The summary line reads as a sentence, not a table &mdash; stone count, total carat weight, metal &mdash; with the full breakdown one interaction away. Research said buyers check that the detail exists far more often than they read it, so it&rsquo;s present and complete, but never imposed on the majority.</p>
                <div className="qw-annot" data-reveal="">
                  <div className="qw-annot-tags">
                    <div className="qw-annot-tag">
                      <span className="k">Material</span>
                      <span className="v">Metal and purity, stated plainly in the summary line.</span>
                    </div>
                    <div className="qw-annot-tag">
                      <span className="k">Stone</span>
                      <span className="v">Cut, count and total carat weight &mdash; the credibility signal.</span>
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
        </section>
        {/* ============================================================
           06 — TRUST  (dark band, major moment)
           ============================================================ */}
        <section className="qw-section qw-band" id="trust">
          <div className="qw-wrap">
            <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">06</span> &mdash; Trust</p>
            <h2 className="qw-display" data-reveal="" style={{ maxWidth: "14ch" }}>Trust before price.</h2>
            <p className="qw-body qw-measure" data-reveal="" style={{ "--d": "1", marginTop: "24px", color: "rgba(255,255,255,0.78)" } as CSSProperties}>Certification and returns used to live in the footer. Session recordings showed buyers leaving the product page to hunt for them mid-consideration &mdash; and frequently not returning. On a high-value item, trust isn&rsquo;t reassurance delivered after the sell. It&rsquo;s a precondition for engaging with the sell at all.</p>
            <div className="qw-trust">
              <div className="qw-plate qw-plate--tall qw-hoverable" data-reveal="scale" role="img" aria-label="The trust band on the product page, shown as a large crop.">
                <div className="qw-plate-note">
                  <span className="qw-plate-kind">The trust band</span>
                  <span className="qw-plate-desc">Product truth, stated above the price</span>
                </div>
              </div>
              <div className="qw-trust-details">
                <div className="qw-plate qw-plate--square qw-hoverable" data-reveal="scale" style={{ "--d": "1" } as CSSProperties} role="img" aria-label="A detail crop of the certificate view.">
                  <div className="qw-plate-note">
                    <span className="qw-plate-kind">Detail</span>
                    <span className="qw-plate-desc">The certificate, in place</span>
                  </div>
                </div>
                <div className="qw-plate qw-plate--square qw-hoverable" data-reveal="scale" style={{ "--d": "2" } as CSSProperties} role="img" aria-label="A detail crop of the assurance and buyback terms.">
                  <div className="qw-plate-note">
                    <span className="qw-plate-kind">Detail</span>
                    <span className="qw-plate-desc">Assurance &amp; buyback terms</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="qw-trust-list" role="list">
              <div className="qw-trust-item" role="listitem">
                <div>
                  <h4>Natural Stones</h4>
                  <p>Stated as product truth, not a marketing adjective &mdash; the material the buyer is actually paying for.</p>
                </div>
                <span className="mk">Product truth</span>
              </div>
              <div className="qw-trust-item" role="listitem">
                <div>
                  <h4>IGI Certified</h4>
                  <p>Certification linked to the actual document, expandable in place rather than opening a new tab.</p>
                </div>
                <span className="mk">Reassurance</span>
              </div>
              <div className="qw-trust-item" role="listitem">
                <div>
                  <h4>5 Year Stone Value Assurance</h4>
                  <p>A commitment stated plainly at the point of hesitation, before the price is reached.</p>
                </div>
                <span className="mk">Reassurance</span>
              </div>
              <div className="qw-trust-item" role="listitem">
                <div>
                  <h4>Lifetime Buyback &amp; Exchange</h4>
                  <p>The relationship framed as ongoing &mdash; the reassurance that undoes &ldquo;what if I&rsquo;m wrong.&rdquo;</p>
                </div>
                <span className="mk">Confidence</span>
              </div>
            </div>
            <blockquote className="qw-quote qw-quote--accent" data-reveal="" style={{ maxWidth: "22ch", marginTop: "clamp(52px,8vw,100px)" }}>Trust isn&rsquo;t a footer detail. It is part of the product experience.</blockquote>
          </div>
        </section>
        {/* ============================================================
           07 — HUMAN + DIGITAL (concierge)
           ============================================================ */}
        <section className="qw-section" id="concierge">
          <div className="qw-wrap">
            <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">07</span> &mdash; Concierge</p>
            <span className="qw-flag" data-reveal="">Concept exploration &mdash; not shipped</span>
            <h2 className="qw-statement" data-reveal="">Self-service shouldn&rsquo;t mean being left alone.</h2>
            <div className="qw-split" style={{ marginTop: "clamp(40px,5vw,64px)" }}>
              <div className="qw-split-media">
                <div className="qw-plate qw-plate--tall qw-hoverable" data-reveal="scale" role="img" aria-label="A concierge interaction offered alongside self-guided exploration.">
                  <div className="qw-plate-note">
                    <span className="qw-plate-kind">QWEEN Concierge</span>
                    <span className="qw-plate-desc">A person, kept within reach</span>
                  </div>
                </div>
              </div>
              <div className="qw-split-copy">
                <p className="qw-body" data-reveal="">The single highest-value thing a showroom provides is a person who has sold jewellery for fifteen years. They can hear &ldquo;something for my sister&rsquo;s wedding, she wears mostly gold, budget around this&rdquo; and produce four correct options in ninety seconds. Self-service replaces that with filters, which require the buyer to already know the answer.</p>
                <p className="qw-body" data-reveal="">So the door to a person stays open throughout &mdash; not as a support link buried in a menu, but as a hand-off available exactly where hesitation tends to occur. The buyer explores freely; the moment they stall, help is one step away, and it arrives already knowing what they were looking at.</p>
                <div className="qw-flow" role="img" aria-label="The concierge hand-off: explore yourself, then need help, then reach the QWEEN concierge.">
                  <span className="qw-flow-step">Explore yourself</span>
                  {" "}
                  <span className="qw-flow-link" aria-hidden="true" />
                  {" "}
                  <span className="qw-flow-step">Need help?</span>
                  {" "}
                  <span className="qw-flow-link" aria-hidden="true" />
                  {" "}
                  <span className="qw-flow-step hl">QWEEN Concierge</span>
                </div>
                <p className="qw-small" data-reveal="">Documented as a concept exploration. The reasoning is part of how the confidence problem was framed; it is not a shipped feature.</p>
              </div>
            </div>
          </div>
        </section>
        {/* ============================================================
           08 — OWNERSHIP
           ============================================================ */}
        <section className="qw-section" id="ownership">
          <div className="qw-wrap">
            <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">08</span> &mdash; Ownership</p>
            <h2 className="qw-statement" data-reveal="">The relationship doesn&rsquo;t end at checkout.</h2>
            <p className="qw-body qw-measure" data-reveal="" style={{ "--d": "1", marginTop: "24px" } as CSSProperties}>One of the doubts a showroom quietly answers is &ldquo;will this brand exist in ten years when I need it resized?&rdquo; The experience treats ownership as part of the purchase, not an afterthought &mdash; lifetime cleaning and resizing, a clear returns window, and the buyback and exchange that make a high-value decision reversible.</p>
            <div className="qw-seq" role="img" aria-label="The ownership lifecycle: purchase, live with it, care, exchange or buyback.">
              <span className="qw-seq-node" style={{ "--d": "0" } as CSSProperties}>Purchase</span>
              {" "}
              <span className="qw-seq-link" style={{ "--d": "1" } as CSSProperties} />
              {" "}
              <span className="qw-seq-node" style={{ "--d": "1" } as CSSProperties}>Live with it</span>
              {" "}
              <span className="qw-seq-link" style={{ "--d": "2" } as CSSProperties} />
              {" "}
              <span className="qw-seq-node" style={{ "--d": "2" } as CSSProperties}>Care</span>
              {" "}
              <span className="qw-seq-link" style={{ "--d": "3" } as CSSProperties} />
              {" "}
              <span className="qw-seq-node" style={{ "--d": "3" } as CSSProperties}>Exchange / Buyback</span>
            </div>
            <blockquote className="qw-quote" data-reveal="" style={{ maxWidth: "26ch" }}>A reversible decision is an easier decision. Ownership is where a high-value purchase is finally de-risked.</blockquote>
          </div>
        </section>
        {/* ============================================================
           09 — THE BROADER EXPERIENCE (short)
           ============================================================ */}
        <section className="qw-section qw-section--tight" id="ecosystem">
          <div className="qw-wrap">
            <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">09</span> &mdash; Beyond the PDP</p>
            <h2 className="qw-h" data-reveal="" style={{ maxWidth: "24ch" }}>The PDP was one expression of a larger QWEEN experience.</h2>
            <p className="qw-body qw-measure" data-reveal="" style={{ "--d": "1", marginTop: "20px" } as CSSProperties}>Discovery is organised by occasion rather than category, because that is how buyers arrive. Collection reads as editorial rather than catalogue. Each surface does one part of the confidence job and hands off cleanly &mdash; but the product page is where the burden is carried, so it is where this study stays.</p>
            <div className="qw-seq qw-seq--quiet" role="img" aria-label="The broader experience: discover, desire, experience, trust, concierge, store, own.">
              <span className="qw-seq-node">Discover</span>
              <span className="qw-seq-link" />
              {" "}
              <span className="qw-seq-node">Desire</span>
              <span className="qw-seq-link" />
              {" "}
              <span className="qw-seq-node">Experience</span>
              <span className="qw-seq-link" />
              {" "}
              <span className="qw-seq-node">Trust</span>
              <span className="qw-seq-link" />
              {" "}
              <span className="qw-seq-node">Concierge</span>
              <span className="qw-seq-link" />
              {" "}
              <span className="qw-seq-node">Store</span>
              <span className="qw-seq-link" />
              {" "}
              <span className="qw-seq-node">Own</span>
            </div>
          </div>
        </section>
        {/* ============================================================
           10 — OUTCOME
           ============================================================ */}
        <section className="qw-section" id="outcome">
          <div className="qw-wrap">
            <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">10</span> &mdash; Outcome</p>
            <h2 className="qw-display" data-reveal="" style={{ maxWidth: "12ch" }}>The shift.</h2>
            <div className="qw-outcome" role="group" aria-label="Before: a product catalogue of four steps. After: a confidence journey of seven moments.">
              <div className="qw-outcome-col was" data-reveal="">
                <h3>Before</h3>
                <div className="sub">Product catalogue</div>
                <div className="qw-outcome-step">Image</div>
                <div className="qw-outcome-step">Specs</div>
                <div className="qw-outcome-step">Price</div>
                <div className="qw-outcome-step">Buy</div>
              </div>
              <div className="qw-outcome-mid" data-reveal="" style={{ "--d": "1" } as CSSProperties} aria-hidden="true">→</div>
              <div className="qw-outcome-col now" data-reveal="" style={{ "--d": "1" } as CSSProperties}>
                <h3>After</h3>
                <div className="sub">Confidence journey</div>
                <div className="qw-outcome-step">Desire</div>
                <div className="qw-outcome-step">Experience</div>
                <div className="qw-outcome-step">Understand</div>
                <div className="qw-outcome-step">Trust</div>
                <div className="qw-outcome-step">Concierge</div>
                <div className="qw-outcome-step">Decide</div>
                <div className="qw-outcome-step">Own</div>
              </div>
            </div>
            <div className="qw-measure">
              <p className="qw-body" data-reveal=""><strong>For buyers</strong>, the questions that used to end a session now have answers in the place the question occurs.</p>
              <p className="qw-body" data-reveal="" style={{ "--d": "1" } as CSSProperties}><strong>For the business</strong>, the design system and content model outlived any individual page &mdash; new collections launch against an existing structure instead of a new design cycle.</p>
              <p className="qw-body" data-reveal="" style={{ "--d": "2" } as CSSProperties}><strong>For the team</strong>, motion tokens, a photography shot list and a merchandising contract turned recurring debates into settled defaults.</p>
              <p className="qw-small" data-reveal="" style={{ marginTop: "18px" }}>QWEEN is a growing brand rather than a controlled experiment, so this study reports qualitative shifts rather than before-and-after numbers.</p>
            </div>
          </div>
        </section>
        {/* ============================================================
           11 — REFLECTION
           ============================================================ */}
        <section className="qw-section qw-band" id="reflection">
          <div className="qw-wrap">
            <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">11</span> &mdash; Reflection</p>
            <h2 className="qw-display" data-reveal="" style={{ maxWidth: "18ch" }}>Luxury ecommerce isn&rsquo;t about adding more information.</h2>
            <div className="qw-measure" style={{ marginTop: "clamp(34px,5vw,56px)" }}>
              <p className="qw-body" data-reveal="" style={{ color: "rgba(255,255,255,0.78)" }}>The PDP&rsquo;s content didn&rsquo;t change dramatically. Its sequence did. Trust before price, scale before specification, story before both &mdash; the same facts in the order doubts arrive did most of the work. In luxury, the constraint is the product: every meaningful decision here was about what <em>not</em> to include.</p>
              <p className="qw-body" data-reveal="" style={{ "--d": "1", color: "rgba(255,255,255,0.78)" } as CSSProperties}>The design problem in categories where the purchase is rare, expensive and emotional is almost never navigation. It is doubt. The goal is to understand which uncertainty is preventing someone from moving forward &mdash; and design the experience around resolving it. Find the order, and the interface mostly designs itself.</p>
            </div>
            <blockquote className="qw-quote qw-quote--accent" data-reveal="" style={{ maxWidth: "20ch", marginTop: "clamp(48px,7vw,90px)" }}>The showroom is not competition for the website. It is the specification.</blockquote>
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
