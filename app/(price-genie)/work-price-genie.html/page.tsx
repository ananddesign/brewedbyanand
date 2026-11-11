import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PriceGenieBehaviour from '@/components/behaviour/PriceGenieBehaviour';
import '@/styles/pg.css';

export const metadata: Metadata = {
  title: "Price Genie — Brewed by Anand",
  description: "Price Genie — a 0→1 experiment on Pincode that challenged store-first commerce with an item-first shopping model.",
};

export default function PriceGeniePage() {
  return (
    <>
      {/* NAV (preserved) */}
      <Nav />
      {/* PROGRESS INDEX */}
      <nav className="pg-progress" aria-label="Case study sections">
        <a href="#context">
          <span className="lbl">Context</span>
          <span className="bar" />
        </a>
        {" "}
        <a href="#problem">
          <span className="lbl">Problem</span>
          <span className="bar" />
        </a>
        {" "}
        <a href="#opportunity">
          <span className="lbl">Opportunity</span>
          <span className="bar" />
        </a>
        {" "}
        <a href="#system">
          <span className="lbl">System</span>
          <span className="bar" />
        </a>
        {" "}
        <a href="#design">
          <span className="lbl">Design</span>
          <span className="bar" />
        </a>
        {" "}
        <a href="#experiment">
          <span className="lbl">Experiment</span>
          <span className="bar" />
        </a>
        {" "}
        <a href="#learnings">
          <span className="lbl">Learnings</span>
          <span className="bar" />
        </a>
      </nav>
      {/* ============================================================
         01 — HERO
         ============================================================ */}
      <header className="pg-hero" id="top">
        <div className="pg-hero-bg">
          <img src="/assets/img/price-genie/hero.jpg" alt="The Price Genie app on a phone, surrounded by fresh produce on a kitchen counter." />
        </div>
        <div className="pg-hero-inner">
          <div className="pg-hero-content">
            <p className="pg-hero-eyebrow" data-hero="" style={{ "--hd": "0" } as CSSProperties}>Case Study — Pincode</p>
            <h1 className="pg-hero-title" data-hero="" style={{ "--hd": "1" } as CSSProperties}>Reimagining how people shop across local stores.</h1>
            <p className="pg-hero-desc" data-hero="" style={{ "--hd": "2" } as CSSProperties}>Price Genie explored a new shopping model for Pincode where users could discover the products they wanted first, compare fulfilment options, and let the system construct the best basket across nearby stores.</p>
            <dl className="pg-hero-meta" data-hero="" style={{ "--hd": "3" } as CSSProperties}>
              <div>
                <dt>Role</dt>
                <dd>Product Designer</dd>
              </div>
              <div>
                <dt>Scope</dt>
                <dd>Product strategy · UX · Interaction · Prototyping</dd>
              </div>
              <div>
                <dt>Platform</dt>
                <dd>Mobile</dd>
              </div>
              <div>
                <dt>Type</dt>
                <dd>0→1 product experiment</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="pg-hero-scroll" aria-hidden="true">
          <span>Scroll</span>
        </div>
      </header>
      <main>
        {/* STORYBOARD — the three surfaces, layered */}
        <section className="pg-section pg-section--tight">
          <div className="pg-wrap">
            <p className="pg-eyebrow pg-chaptertag" data-reveal="">Product discovery &nbsp;→&nbsp; Store comparison &nbsp;→&nbsp; Fulfilment</p>
            <div className="pg-storyboard" data-reveal="scale" style={{ "--d": "1" } as CSSProperties}>
              <figure className="s2">
                <img src="/assets/img/price-genie/stores-list.png" alt="Store comparison — nearby stores ranked by fulfilment, price and delivery." loading="lazy" />
              </figure>
              <figure className="s1">
                <img src="/assets/img/price-genie/pg-landing.png" alt="Product discovery — building a store-agnostic shopping list." loading="lazy" />
              </figure>
              <figure className="s3">
                <img src="/assets/img/price-genie/cart-groups.png" alt="Fulfilment — a multi-store cart grouped by delivery time." loading="lazy" />
              </figure>
            </div>
            <p className="pg-cap" data-reveal="" style={{ margin: "34px auto 0", textAlign: "center", maxWidth: "52ch" }}>The three surfaces this case study is about: discovering products, comparing fulfilment, and understanding the resulting basket.</p>
          </div>
        </section>
        {/* ============================================================
           02 — CONTEXT
           ============================================================ */}
        <section className="pg-section" id="context">
          <div className="pg-wrap">
            <p className="pg-eyebrow pg-chaptertag" data-reveal=""><span className="n">02</span> &mdash; Context</p>
            <h2 className="pg-statement" data-reveal="">Pincode was built around stores.</h2>
            <div className="pg-model" role="img" aria-label="The original sequence: store, then products, then cart, then checkout.">
              <span className="pg-model-node" style={{ "--d": "0" } as CSSProperties}>Store</span>
              {" "}
              <span className="pg-model-link" style={{ "--d": "1" } as CSSProperties} />
              {" "}
              <span className="pg-model-node" style={{ "--d": "1" } as CSSProperties}>Products</span>
              {" "}
              <span className="pg-model-link" style={{ "--d": "2" } as CSSProperties} />
              {" "}
              <span className="pg-model-node" style={{ "--d": "2" } as CSSProperties}>Cart</span>
              {" "}
              <span className="pg-model-link" style={{ "--d": "3" } as CSSProperties} />
              {" "}
              <span className="pg-model-node" style={{ "--d": "3" } as CSSProperties}>Checkout</span>
            </div>
            <div className="pg-grid" style={{ alignItems: "start" }}>
              <div style={{ gridColumn: "span 7" }}>
                <p className="pg-body" data-reveal="">Pincode is a hyperlocal shopping app. Like most commerce products, it followed the model ecommerce has used for decades: pick a store, then shop inside it. The model worked&mdash;unevenly. Whatever a user could discover was bounded by whichever store they happened to open first.</p>
              </div>
              <div style={{ gridColumn: "span 5" }}>
                <div className="pg-datanote" data-reveal="" style={{ "--d": "1", marginBlock: "0" } as CSSProperties}>
                  <div>
                    <div className="pg-datanote-fig">49%</div>
                    <div className="pg-datanote-lbl">Grocery share</div>
                  </div>
                  <div>
                    <div className="pg-datanote-fig">34%</div>
                    <div className="pg-datanote-lbl">Food share</div>
                  </div>
                </div>
                <p className="pg-small" data-reveal="" style={{ "--d": "2", marginTop: "20px", maxWidth: "34ch" } as CSSProperties}>Two categories carried the app. Penetration across everything else stayed low&mdash;discovery was capped by the store-first funnel.</p>
              </div>
            </div>
            <blockquote className="pg-quote" data-reveal="" style={{ margin: "clamp(56px,8vw,110px) 0 0", maxWidth: "20ch" }}>Users don&rsquo;t necessarily care from which store their orders are delivered.</blockquote>
            <div className="pg-measure" style={{ marginTop: "34px" }}>
              <p className="pg-body" data-reveal="">They care about finding the products they need, at a good price, with a good delivery promise. The store is a means to that end&mdash;yet it was the first and most binding decision in the flow.</p>
              <p className="pg-body" data-reveal="" style={{ "--d": "1" } as CSSProperties}>
                <strong>The store-first model was becoming a constraint on product discovery.</strong>
              </p>
            </div>
            <div className="pg-duo pg-hoverable">
              <figure className="a pg-screen" data-reveal="" style={{ margin: "0" }}>
                <img src="/assets/img/price-genie/home.png" alt="Pincode home — find stores by category." loading="lazy" />
              </figure>
              <figure className="b pg-screen" data-reveal="" style={{ "--d": "1", margin: "0" } as CSSProperties}>
                <img src="/assets/img/price-genie/categories.png" alt="Category browsing that still resolves to a single store's shelf." loading="lazy" />
              </figure>
            </div>
            <p className="pg-cap" data-reveal="">The original entry points: pick a store, or browse a category that still resolves to one store&rsquo;s shelf.</p>
          </div>
        </section>
        {/* ============================================================
           03 — PROBLEM
           ============================================================ */}
        <section className="pg-section" id="problem">
          <div className="pg-wrap">
            <p className="pg-eyebrow pg-chaptertag" data-reveal=""><span className="n">03</span> &mdash; Problem</p>
            <h2 className="pg-display" data-reveal="" style={{ maxWidth: "20ch" }}>The problem wasn&rsquo;t the cart. It was the shopping model.</h2>
            <div className="pg-conseq" data-reveal="fade">
              <p className="pg-conseq-core">Item unavailable</p>
              <div className="pg-conseq-stem" aria-hidden="true" />
              <ol className="pg-conseq-list">
                <li className="pg-conseq-item" style={{ "--i": "0" } as CSSProperties}>
                  <span className="num">01</span>
                  <span className="txt">Search another store</span>
                </li>
                <li className="pg-conseq-item" style={{ "--i": "1" } as CSSProperties}>
                  <span className="num">02</span>
                  <span className="txt">Compromise on product</span>
                </li>
                <li className="pg-conseq-item" style={{ "--i": "2" } as CSSProperties}>
                  <span className="num">03</span>
                  <span className="txt">Compromise on price / delivery</span>
                </li>
                <li className="pg-conseq-item" style={{ "--i": "3" } as CSSProperties}>
                  <span className="num">04</span>
                  <span className="txt">Abandon the basket</span>
                </li>
              </ol>
            </div>
            <div className="pg-measure">
              <p className="pg-body" data-reveal="">When users begin by choosing a store, their product discovery is constrained by that store&rsquo;s inventory. The moment the store doesn&rsquo;t have something, every path forward costs the user.</p>
              <p className="pg-body" data-reveal="" style={{ "--d": "1" } as CSSProperties}>None of these are interface failures. A better cart, a better search bar, a better store page&mdash;none of them fix a sequence that forces the least-informed decision first. The problem was systemic, and it needed a model-level answer.</p>
            </div>
          </div>
        </section>
        {/* ============================================================
           04 — THE SHIFT (scroll-controlled transformation)
           ============================================================ */}
        <section className="pg-section" id="opportunity">
          <div className="pg-wrap">
            <div className="pg-shift-layout">
              <aside className="pg-shift-aside">
                <p className="pg-eyebrow pg-chaptertag" data-reveal=""><span className="n">04</span> &mdash; The shift</p>
                <p className="pg-shift-statement" data-reveal="" style={{ "--d": "1" } as CSSProperties}>What if shopping started with what people wanted?</p>
              </aside>
              <div className="pg-shift-track">
                <div className="pg-shift-viewport" role="img" aria-label="An illustrative model transforming store-first shopping into an item-first fulfilment model, where the store becomes one signal of fulfilment rather than the first decision.">
                  {/* State 1 — store-first */}
                  <div className="pg-shift-frame f1 is-on">
                    <p className="pg-shift-flowlabel">Store-first</p>
                    <div className="pg-shift-node lead">Choose a store</div>
                    <div className="pg-shift-arrow" />
                    <div className="pg-shift-node">Browse products</div>
                    <div className="pg-shift-arrow" />
                    <div className="pg-shift-node">Build cart</div>
                  </div>
                  {/* State 2 — the question */}
                  <div className="pg-shift-frame f2">
                    <p className="pg-shift-q">What if we started with the basket?</p>
                  </div>
                  {/* State 3 — item-first */}
                  <div className="pg-shift-frame f3 now">
                    <p className="pg-shift-flowlabel">Item-first</p>
                    <div className="pg-shift-node lead">Choose products</div>
                    <div className="pg-shift-arrow" />
                    <div className="pg-shift-node">Compare fulfilment</div>
                    <div className="pg-shift-arrow" />
                    <div className="pg-shift-node">Build basket</div>
                    <div className="pg-shift-chips">
                      <span className="store">Store</span>
                      <span>Availability</span>
                      <span>Price</span>
                      <span>Delivery</span>
                      <span>Offers</span>
                    </div>
                  </div>
                  {/* State 4 — the fulfilment model */}
                  <div className="pg-shift-frame f4 now">
                    <p className="pg-shift-flowlabel">The fulfilment model</p>
                    <div className="pg-shift-node">Products</div>
                    <div className="pg-shift-arrow" />
                    <div className="pg-shift-node lead">Fulfilment</div>
                    <div className="pg-shift-chips">
                      <span className="store">Store</span>
                      <span>Availability</span>
                      <span>Price</span>
                      <span>Delivery</span>
                      <span>Offers</span>
                    </div>
                    <div className="pg-shift-arrow" />
                    <div className="pg-shift-node">Basket</div>
                    <p className="pg-shift-note">The store didn&rsquo;t disappear. Its role changed &mdash; from the first decision to one signal of fulfilment.</p>
                  </div>
                </div>
                <div className="pg-shift-phase" data-phase="0" />
                <div className="pg-shift-phase" data-phase="1" />
                <div className="pg-shift-phase" data-phase="2" />
                <div className="pg-shift-phase" data-phase="3" />
              </div>
            </div>
            <blockquote className="pg-quote pg-quote--accent" data-reveal="" style={{ maxWidth: "24ch", marginTop: "clamp(32px,5vw,64px)" }}>Instead of asking users where they wanted to shop, Price Genie started with what they wanted to buy.</blockquote>
          </div>
        </section>
        {/* ============================================================
           05 — HYPOTHESIS
           ============================================================ */}
        <section className="pg-section" id="hypothesis">
          <div className="pg-wrap">
            <p className="pg-eyebrow pg-chaptertag" data-reveal=""><span className="n">05</span> &mdash; Hypothesis</p>
            <h2 className="pg-h pg-h--mixed" data-reveal="" style={{ maxWidth: "20ch", marginBottom: "clamp(40px,5vw,64px)" }}>Could item-first shopping help users build better baskets?</h2>
            <div className="pg-hyp">
              <div className="pg-hyp-item">
                <div className="pg-hyp-num">01</div>
                <div>
                  <p className="pg-hyp-statement">Add more of the products people actually need.</p>
                  <p className="pg-hyp-note pg-body">If adding an item no longer commits you to a store, the basket should converge on the real shopping list&mdash;not the subset one store happens to carry.</p>
                </div>
              </div>
              <div className="pg-hyp-item">
                <div className="pg-hyp-num">02</div>
                <div>
                  <p className="pg-hyp-statement">Consider multiple stores if it improved fulfilment.</p>
                  <p className="pg-hyp-note pg-body">Store loyalty on hyperlocal platforms is thin. Would users accept fulfilment from unfamiliar stores when availability, price, and delivery were clearly better?</p>
                </div>
              </div>
              <div className="pg-hyp-item">
                <div className="pg-hyp-num">03</div>
                <div>
                  <p className="pg-hyp-statement">Trade store preference for better price and delivery.</p>
                  <p className="pg-hyp-note pg-body">The model only works if the comparison surface makes the trade obvious&mdash;users won&rsquo;t abandon a known store for an abstract promise.</p>
                </div>
              </div>
              <div className="pg-hyp-item">
                <div className="pg-hyp-num">04</div>
                <div>
                  <p className="pg-hyp-statement">Complete larger baskets without increasing cancellations.</p>
                  <p className="pg-hyp-note pg-body">Bigger baskets are only commercially healthy if the marketplace can actually fulfil them. Cancellations were the guardrail metric for the whole experiment.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================================================
           06 — METRICS
           ============================================================ */}
        <section className="pg-section" id="metrics">
          <div className="pg-wrap">
            <p className="pg-eyebrow pg-chaptertag" data-reveal=""><span className="n">06</span> &mdash; What we measured</p>
            <h2 className="pg-statement" data-reveal="">We measured three things.</h2>
            <div className="pg-metrics">
              <div className="pg-metric" data-reveal="">
                <div className="pg-metric-num">01</div>
                <div className="pg-metric-name">Discovery</div>
                <div className="pg-metric-list">
                  <span>Avg. items added</span>
                  <span className="pg-small">Are users able to find more of what they need?</span>
                </div>
              </div>
              <div className="pg-metric" data-reveal="" style={{ "--d": "1" } as CSSProperties}>
                <div className="pg-metric-num">02</div>
                <div className="pg-metric-name">Fulfilment</div>
                <div className="pg-metric-list">
                  <span>Avg. stores with all items</span>
                  <span>Avg. stores with N−1 / N−2 items</span>
                  <span className="pg-small">Can the marketplace actually serve those baskets?</span>
                </div>
              </div>
              <div className="pg-metric" data-reveal="" style={{ "--d": "2" } as CSSProperties}>
                <div className="pg-metric-num">03</div>
                <div className="pg-metric-name">Business</div>
                <div className="pg-metric-list">
                  <span>Cart value per user per month</span>
                  <span>Cancellations per order</span>
                  <span className="pg-small">Does the new model create commercially healthy orders?</span>
                </div>
              </div>
            </div>
            <p className="pg-body pg-measure" data-reveal="" style={{ marginTop: "clamp(34px,4vw,52px)" }}>The fulfilment metrics are the interesting ones. Item-first shopping is only viable if enough nearby stores can cover all&mdash;or nearly all&mdash;of a typical basket. N−1 and N−2 coverage told us how often the model would need multi-store fulfilment to keep its promise.</p>
          </div>
        </section>
        {/* ============================================================
           07 — SYSTEM
           ============================================================ */}
        <section className="pg-section" id="system">
          <div className="pg-wrap">
            <p className="pg-eyebrow pg-chaptertag" data-reveal=""><span className="n">07</span> &mdash; System</p>
            <h2 className="pg-h pg-h--mixed" data-reveal="" style={{ maxWidth: "22ch" }}>The user shouldn&rsquo;t have to understand the complexity underneath.</h2>
            <p className="pg-body pg-measure" data-reveal="" style={{ "--d": "1", marginTop: "24px" } as CSSProperties}>Behind one decision surface, Price Genie evaluates the possible fulfilment combinations across nearby stores&mdash;availability, price, delivery, and offers&mdash;and presents only what the user needs to choose.</p>
            <div className="pg-sys">
              <svg className="pg-sys-svg pg-svg" viewBox="0 0 1000 700" role="img" aria-label="System diagram: six products flow into the Price Genie engine, which evaluates availability, price, delivery and offers, converging into best options and then a cart.">
                {/* connecting lines (draw) */}
                <g fill="none" stroke="rgba(27,26,21,0.28)" strokeWidth="1.2">
                  <path pathLength="1" d="M170 78 C 300 150, 420 190, 500 250" />
                  <path pathLength="1" d="M302 78 C 360 150, 450 200, 500 250" />
                  <path pathLength="1" d="M434 78 C 460 150, 490 200, 500 250" />
                  <path pathLength="1" d="M566 78 C 540 150, 510 200, 500 250" />
                  <path pathLength="1" d="M698 78 C 640 150, 550 200, 500 250" />
                  <path pathLength="1" d="M830 78 C 700 150, 580 190, 500 250" />
                  {/* engine to dims */}
                  <path pathLength="1" d="M330 336 L 260 402" />
                  <path pathLength="1" d="M430 336 L 420 402" />
                  <path pathLength="1" d="M570 336 L 580 402" />
                  <path pathLength="1" d="M670 336 L 740 402" />
                  {/* dims converge to best options */}
                  <path pathLength="1" d="M260 430 C 320 500, 430 505, 500 520" />
                  <path pathLength="1" d="M420 430 C 450 490, 480 505, 500 520" />
                  <path pathLength="1" d="M580 430 C 550 490, 520 505, 500 520" />
                  <path pathLength="1" d="M740 430 C 680 500, 570 505, 500 520" />
                  {/* best options to cart */}
                  <path pathLength="1" d="M500 566 L 500 618" />
                </g>
                {/* nodes */}
                <g className="pg-sys-node">
                  <text className="node-txt" x="500" y="40" textAnchor="middle" fill="#6f6a5f">User needs · 6 products</text>
                  <g fill="#1b1a15">
                    <circle cx="170" cy="72" r="5" />
                    <circle cx="302" cy="72" r="5" />
                    <circle cx="434" cy="72" r="5" />
                    <circle cx="566" cy="72" r="5" />
                    <circle cx="698" cy="72" r="5" />
                    <circle cx="830" cy="72" r="5" />
                  </g>
                  <rect x="250" y="246" width="500" height="94" rx="6" fill="#F3EFE7" stroke="#1F3D2E" strokeWidth="1.4" />
                  <text x="500" y="288" textAnchor="middle" fontFamily="'Instrument Serif', serif" fontSize="27" fill="#1F3D2E">Price Genie</text>
                  {" "}
                  <text x="500" y="314" textAnchor="middle" fontFamily="'Hanken Grotesk', sans-serif" fontSize="12" letterSpacing="0.8" fill="#6F6A5F">Evaluates fulfilment across multiple signals</text>
                </g>
                <g className="pg-sys-dim">
                  <text className="node-txt" x="260" y="424" textAnchor="middle" fill="#1F3D2E">Availability</text>
                  {" "}
                  <text className="node-txt" x="420" y="424" textAnchor="middle" fill="#1F3D2E">Price</text>
                  {" "}
                  <text className="node-txt" x="580" y="424" textAnchor="middle" fill="#1F3D2E">Delivery</text>
                  {" "}
                  <text className="node-txt" x="740" y="424" textAnchor="middle" fill="#1F3D2E">Offers</text>
                </g>
                <g className="pg-sys-terminal">
                  <rect x="386" y="522" width="228" height="46" fill="none" stroke="#1b1a15" strokeWidth="1.2" />
                  <text className="node-txt" x="500" y="550" textAnchor="middle" fill="#1b1a15">Best options</text>
                  <rect x="430" y="620" width="140" height="46" rx="6" fill="#1F3D2E" />
                  <text className="node-txt" x="500" y="648" textAnchor="middle" fill="#F2EEE4">Cart</text>
                </g>
              </svg>
            </div>
            <p className="pg-cap" data-reveal="" style={{ textAlign: "center", maxWidth: "60ch", marginInline: "auto" }}>A complex system underneath, a simple decision surface above. Values illustrative.</p>
            <blockquote className="pg-quote" data-reveal="" style={{ maxWidth: "22ch", margin: "clamp(56px,8vw,110px) auto 0", textAlign: "center" }}>&ldquo;Expose complexity only when it helps the user make a decision.&rdquo;</blockquote>
          </div>
        </section>
        {/* ============================================================
           08 — INTERFACE (review list)
           ============================================================ */}
        <section className="pg-section" id="interface">
          <div className="pg-wrap">
            <p className="pg-eyebrow pg-chaptertag" data-reveal=""><span className="n">08</span> &mdash; Interface</p>
            <h2 className="pg-h pg-h--mixed" data-reveal="" style={{ maxWidth: "18ch" }}>The store-agnostic list is where the system begins.</h2>
            <div className="pg-review pg-hoverable" data-reveal="scale" style={{ "--d": "1", marginTop: "clamp(40px,5vw,64px)" } as CSSProperties}>
              <figure className="pg-screen pg-screen--wide" style={{ margin: "0" }}>
                <img src="/assets/img/price-genie/review-list.png" alt="Price Genie review list — a store-agnostic shopping list with a Find best stores action." loading="lazy" />
              </figure>
            </div>
            <div className="pg-tracked" data-reveal="" style={{ justifyContent: "center", marginTop: "26px" }}>
              <span>Product input</span>
              <span>Store-agnostic</span>
              <span>Find best stores</span>
            </div>
            <p className="pg-cap" data-reveal="" style={{ textAlign: "center", marginInline: "auto" }}>The list is the input the engine evaluates against every nearby store at once.</p>
          </div>
        </section>
        {/* ============================================================
           09–14 — DESIGN DECISIONS
           ============================================================ */}
        <section className="pg-section" id="design">
          <div className="pg-wrap">
            <p className="pg-eyebrow pg-chaptertag" data-reveal=""><span className="n">09</span> &mdash; Design decisions</p>
            <h2 className="pg-statement" data-reveal="">Six decisions, one principle.</h2>
          </div>
          {/* DD01 — Fulfilment at a glance (sticky) */}
          <div className="pg-wrap pg-dd" style={{ marginTop: "clamp(48px,7vw,90px)", paddingTop: "clamp(48px,6vw,80px)" }}>
            <div className="pg-dd-split">
              <div className="pg-dd-sticky pg-hoverable" data-reveal="scale">
                <figure className="pg-screen" style={{ margin: "0" }}>
                  <img src="/assets/img/price-genie/store-collapsed.png" alt="Collapsed store card — 6 of 6 items available, delivery, price, savings and a create-cart action." loading="lazy" />
                </figure>
              </div>
              <div className="pg-dd-copy">
                <div className="pg-dd-head">
                  <span className="pg-dd-tag" data-reveal="">Design decision 01</span>
                  <h3 className="pg-dd-title" data-reveal="" style={{ "--d": "1" } as CSSProperties}>Start with the store that can fulfil the whole basket.</h3>
                </div>
                <p className="pg-body" data-reveal="">When a store can fulfil 100% of the requested items, we collapse the details and make the fulfilment status immediately scannable.</p>
                <div className="pg-tracked" data-reveal="" style={{ "--d": "1" } as CSSProperties}>
                  <span>6 / 6 items</span>
                  <span>60 min</span>
                  <span>₹1,240</span>
                  <span>₹180 saved</span>
                </div>
                <p className="pg-body" data-reveal="" style={{ "--d": "1" } as CSSProperties}>Users don&rsquo;t need to inspect six individual products if the store already satisfies the entire basket. The only questions left are <em>when</em>, <em>how much</em>, and <em>what do I save</em>&mdash;so those are the only things the collapsed card shows.</p>
                <p className="pg-small" data-reveal="">Highlighted values are illustrative.</p>
              </div>
            </div>
          </div>
          {/* DD02 — Inventory on demand (collapse → expand) */}
          <div className="pg-wrap pg-dd" style={{ paddingTop: "clamp(56px,7vw,96px)" }}>
            <div className="pg-dd-head">
              <span className="pg-dd-tag" data-reveal="">Design decision 02</span>
              <h3 className="pg-dd-title" data-reveal="" style={{ "--d": "1" } as CSSProperties}>Expand only when comparison is useful.</h3>
            </div>
            <div className="pg-measure">
              <p className="pg-body" data-reveal="">Partial-fulfilment stores are where users actually have to think. Expanding a store gives them a quick inventory snapshot&mdash;which items it has, which it doesn&rsquo;t, at what price&mdash;without leaving the comparison. The card expands in place: comparison is a state of the list, not a separate screen.</p>
            </div>
            <div className="pg-states pg-hoverable">
              <div data-reveal="">
                <p className="lbl">Collapsed</p>
                <figure className="pg-screen" style={{ margin: "0" }}>
                  <img src="/assets/img/price-genie/store-collapsed.png" alt="Collapsed store card." loading="lazy" />
                </figure>
              </div>
              <div className="pg-states-arrow" data-reveal="" style={{ "--d": "1" } as CSSProperties} aria-hidden="true">→</div>
              <div data-reveal="" style={{ "--d": "2" } as CSSProperties}>
                <p className="lbl">Expanded</p>
                <figure className="pg-screen" style={{ margin: "0" }}>
                  <img src="/assets/img/price-genie/store-expanded.png" alt="Expanded store card — inventory snapshot with per-item prices and the missing item named." loading="lazy" />
                </figure>
              </div>
            </div>
            <p className="pg-cap" data-reveal="" style={{ textAlign: "center", marginInline: "auto" }}>Availability, price and delivery are the primary decision variables&mdash;so the expanded state is built entirely from them.</p>
          </div>
          {/* DD03 — Item-first, store-transparent */}
          <div className="pg-wrap pg-dd" style={{ paddingTop: "clamp(56px,7vw,96px)" }}>
            <div className="pg-dd-head">
              <span className="pg-dd-tag" data-reveal="">Design decision 03</span>
            </div>
            <h3 className="pg-bigline" data-reveal="">Item-first doesn&rsquo;t mean store-blind.</h3>
            <div className="pg-dd-split" style={{ marginTop: "clamp(40px,5vw,64px)" }}>
              <div className="pg-hoverable" data-reveal="scale">
                <figure className="pg-screen" style={{ margin: "0" }}>
                  <img src="/assets/img/price-genie/stores-partial.png" alt="Stores list stating that all items are not available in a single store, listing stores that carry some items." loading="lazy" />
                </figure>
              </div>
              <div className="pg-dd-copy">
                <p className="pg-body" data-reveal="">The system could have gone further&mdash;fully abstracting stores away and just delivering &ldquo;the basket.&rdquo; We deliberately didn&rsquo;t. Even though discovery begins with products, fulfilment stays transparent. At every step, four things are always answerable:</p>
                <dl className="pg-tracked" data-reveal="" style={{ "--d": "1", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" } as CSSProperties}>
                  <div>
                    <span style={{ display: "block", border: "1px solid var(--line-2)", padding: "14px 16px" }}><strong>Who</strong> &mdash; the store</span>
                  </div>
                  <div>
                    <span style={{ display: "block", border: "1px solid var(--line-2)", padding: "14px 16px" }}><strong>When</strong> &mdash; the delivery</span>
                  </div>
                  <div>
                    <span style={{ display: "block", border: "1px solid var(--line-2)", padding: "14px 16px" }}><strong>How much</strong> &mdash; final price</span>
                  </div>
                  <div>
                    <span style={{ display: "block", border: "1px solid var(--line-2)", padding: "14px 16px" }}><strong>Saved</strong> &mdash; the savings</span>
                  </div>
                </dl>
                <p className="pg-body" data-reveal="">When something goes wrong&mdash;a delay, a substitution&mdash;the user needs to know who is responsible for what. A system that hides the fulfilling store buys simplicity now and pays for it in the first support ticket.</p>
              </div>
            </div>
            <blockquote className="pg-bigline pg-quote--accent" data-reveal="" style={{ fontStyle: "normal", marginTop: "clamp(48px,7vw,92px)" }}>Abstract the complexity, not the accountability.</blockquote>
          </div>
          {/* DD04 — Multi-store cart */}
          <div className="pg-wrap pg-dd" style={{ paddingTop: "clamp(56px,7vw,96px)" }}>
            <div className="pg-dd-head">
              <span className="pg-dd-tag" data-reveal="">Design decision 04</span>
            </div>
            <h3 className="pg-bigline" data-reveal="" style={{ maxWidth: "16ch" }}>The cart had to stop pretending there was one store.</h3>
            <div className="pg-dd-split" style={{ marginTop: "clamp(40px,5vw,64px)" }}>
              <div className="pg-dd-copy">
                <p className="pg-body" data-reveal="">The multi-store cart is a consequence of the model, not the innovation itself. When no single store can serve the whole list well, the best basket spans stores&mdash;and the cart became a representation of how the order would actually be fulfilled.</p>
                <div className="pg-timeline" data-reveal="" style={{ "--d": "1" } as CSSProperties}>
                  <div className="pg-tl-stop">
                    <div className="pg-tl-when">Delivery 01</div>
                    <div className="pg-tl-meta">60 min · Simply Namdhari&rsquo;s</div>
                  </div>
                  <div className="pg-tl-stop">
                    <div className="pg-tl-when">Delivery 02</div>
                    <div className="pg-tl-meta">90 min · MK Retail</div>
                  </div>
                </div>
                <p className="pg-body" data-reveal="">We grouped by <em>delivery</em>, with the store named inside each group&mdash;not the other way around. Delivery time is what the user plans their day around; the store answers &ldquo;who is bringing it.&rdquo;</p>
              </div>
              <div className="pg-hoverable" data-reveal="scale" style={{ "--d": "1" } as CSSProperties}>
                <figure className="pg-screen" style={{ margin: "0" }}>
                  <img src="/assets/img/price-genie/cart-full.png" alt="Multi-store cart with items grouped under two deliveries, a savings banner and bill details." loading="lazy" />
                </figure>
              </div>
            </div>
          </div>
          {/* DD05 — Delivery & slots */}
          <div className="pg-wrap pg-dd" style={{ paddingTop: "clamp(56px,7vw,96px)" }}>
            <div className="pg-dd-head">
              <span className="pg-dd-tag" data-reveal="">Design decision 05</span>
              <h3 className="pg-dd-title" data-reveal="" style={{ "--d": "1" } as CSSProperties}>Make delivery complexity visible, but easy to scan.</h3>
            </div>
            <div className="pg-timeline" data-reveal="" role="img" aria-label="A timeline: now, then a delivery at sixty minutes, then a delivery at ninety minutes.">
              <div className="pg-tl-stop">
                <div className="pg-tl-when">Now</div>
                <div className="pg-tl-meta">Order placed</div>
              </div>
              <div className="pg-tl-stop">
                <div className="pg-tl-when">60 min</div>
                <div className="pg-tl-meta">Simply Namdhari&rsquo;s · 2 items</div>
              </div>
              <div className="pg-tl-stop">
                <div className="pg-tl-when">90 min</div>
                <div className="pg-tl-meta">MK Retail · 2 items</div>
              </div>
            </div>
            <div className="pg-dd-split" style={{ marginTop: "clamp(30px,4vw,52px)" }}>
              <div className="pg-hoverable" data-reveal="scale">
                <figure className="pg-screen" style={{ margin: "0" }}>
                  <img src="/assets/img/price-genie/cart-groups.png" alt="Cart showing a 60-minute delivery from one store and a 90-minute delivery from another, each with its own items." loading="lazy" />
                </figure>
              </div>
              <div className="pg-dd-copy">
                <p className="pg-body" data-reveal="">Users need immediate visibility into three things: where the order is coming from, what arrives when, and which items belong to each delivery. The discipline was in what we didn&rsquo;t show&mdash;routing, store handoffs, slot logic all stayed backstage.</p>
                <blockquote className="pg-quote" data-reveal="" style={{ "--d": "1", fontSize: "clamp(1.6rem,3vw,2.6rem)" } as CSSProperties}>These items.<br />This store.<br />This time.</blockquote>
              </div>
            </div>
          </div>
          {/* DD06 — Offers & savings */}
          <div className="pg-wrap pg-dd" style={{ paddingTop: "clamp(56px,7vw,96px)" }}>
            <div className="pg-dd-head">
              <span className="pg-dd-tag" data-reveal="">Design decision 06</span>
            </div>
            <h3 className="pg-bigline" data-reveal="">Make the payoff tangible.</h3>
            <div className="pg-payoff" style={{ marginTop: "clamp(40px,5vw,64px)" }}>
              <div data-reveal="">
                <div className="pg-payoff-fig">₹370</div>
                <div className="pg-payoff-sub">Saved on this order</div>
                <div className="pg-payoff-off">Multiple offers applied</div>
                <p className="pg-body" data-reveal="" style={{ "--d": "1", marginTop: "28px", maxWidth: "40ch" } as CSSProperties}>When users are comparing stores and fulfilment options, savings become part of the decision. We surfaced value throughout&mdash;on comparison cards, in the cart, at confirmation&mdash;instead of burying it in the bill. The offer engine stopped being a checkout footnote and became a decision input.</p>
                <p className="pg-small" data-reveal="" style={{ marginTop: "14px" }}>The ₹370 shown is illustrative of the treatment, not a measured result.</p>
              </div>
              <div className="pg-hoverable" data-reveal="scale" style={{ "--d": "1" } as CSSProperties}>
                <figure className="pg-screen" style={{ margin: "0" }}>
                  <img src="/assets/img/price-genie/cart-full.png" alt="Cart header showing savings including free delivery and a discount, with a multiple-offers-applied banner." loading="lazy" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        {/* ============================================================
           15 — THE WALKTHROUGH (sticky)
           ============================================================ */}
        <section className="pg-section" id="walkthrough">
          <div className="pg-wrap">
            <p className="pg-eyebrow pg-chaptertag" data-reveal=""><span className="n">15</span> &mdash; The walkthrough</p>
            <h2 className="pg-h pg-h--mixed" data-reveal="" style={{ maxWidth: "16ch", marginBottom: "clamp(20px,3vw,40px)" }}>From need, to basket, to fulfilment.</h2>
          </div>
          <div className="pg-wrap">
            <div className="pg-walk">
              <div className="pg-walk-stage" aria-hidden="true">
                <div className="pg-walk-device">
                  <div className="pg-walk-notch" />
                  <div className="pg-walk-frame">
                    <img src="/assets/img/price-genie/browse-beverages.png" alt="" data-w="0" />
                    {" "}
                    <img src="/assets/img/price-genie/stores-list.png" alt="" data-w="1" />
                    {" "}
                    <img src="/assets/img/price-genie/store-expanded.png" alt="" data-w="2" />
                    {" "}
                    <img src="/assets/img/price-genie/cart-groups.png" alt="" data-w="3" />
                    {" "}
                    <img src="/assets/img/price-genie/cart-full.png" alt="" data-w="4" />
                  </div>
                </div>
              </div>
              <div className="pg-walk-steps">
                <div className="pg-walk-step">
                  <img className="mobile-img" src="/assets/img/price-genie/browse-beverages.png" alt="Browsing beverages and adding products." loading="lazy" />
                  {" "}
                  <span className="n">01</span>
                  <h3>Discover products</h3>
                  <p className="pg-body">Shopping begins with what you need&mdash;browse categories and add products to a store-agnostic list.</p>
                </div>
                <div className="pg-walk-step">
                  <img className="mobile-img" src="/assets/img/price-genie/stores-list.png" alt="Comparing nearby stores." loading="lazy" />
                  {" "}
                  <span className="n">02</span>
                  <h3>Compare stores</h3>
                  <p className="pg-body">The system ranks nearby stores by how much of the list they fulfil, at what price, with what delivery.</p>
                </div>
                <div className="pg-walk-step">
                  <img className="mobile-img" src="/assets/img/price-genie/store-expanded.png" alt="Inspecting availability in an expanded store card." loading="lazy" />
                  {" "}
                  <span className="n">03</span>
                  <h3>Inspect availability</h3>
                  <p className="pg-body">Expand a store for an inventory snapshot&mdash;what it has, what it doesn&rsquo;t, at what price&mdash;without leaving the comparison.</p>
                </div>
                <div className="pg-walk-step">
                  <img className="mobile-img" src="/assets/img/price-genie/cart-groups.png" alt="Building a multi-store basket." loading="lazy" />
                  {" "}
                  <span className="n">04</span>
                  <h3>Build a multi-store basket</h3>
                  <p className="pg-body">When one store can&rsquo;t cover the list, the best basket spans stores&mdash;grouped by delivery, not hidden.</p>
                </div>
                <div className="pg-walk-step">
                  <img className="mobile-img" src="/assets/img/price-genie/cart-full.png" alt="Reviewing delivery and savings before payment." loading="lazy" />
                  {" "}
                  <span className="n">05</span>
                  <h3>See delivery + savings</h3>
                  <p className="pg-body">Each delivery reads like a promise&mdash;these items, this store, this time&mdash;with savings surfaced, not buried.</p>
                </div>
              </div>
              <div className="pg-walk-rail" aria-hidden="true">
                <span className="seg is-on" />
                <span className="seg" />
                <span className="seg" />
                <span className="seg" />
                <span className="seg" />
              </div>
            </div>
          </div>
        </section>
        {/* ============================================================
           16 — EXPERIMENT (quiet pause)
           ============================================================ */}
        <section className="pg-section" id="experiment">
          <div className="pg-wrap">
            <p className="pg-eyebrow pg-chaptertag" data-reveal=""><span className="n">16</span> &mdash; Experiment</p>
            <h2 className="pg-display" data-reveal="" style={{ maxWidth: "16ch" }}>We weren&rsquo;t redesigning a cart. We were testing a new shopping behaviour.</h2>
            <div className="pg-measure" style={{ marginTop: "clamp(40px,5vw,64px)" }}>
              <p className="pg-body" data-reveal="">The core question the experiment was built to answer: can item-first discovery increase product discovery without creating unacceptable fulfilment complexity?</p>
              <p className="pg-body" data-reveal="" style={{ "--d": "1" } as CSSProperties}>I&rsquo;m deliberately not publishing outcome numbers here. This was an internal experiment, and directional claims without the underlying data would be exactly the kind of portfolio inflation this page avoids. What I can speak to is what we observed while it ran.</p>
            </div>
            <div>
              <p className="pg-eyebrow" data-reveal="" style={{ marginTop: "clamp(30px,4vw,48px)", marginBottom: "14px" }}>Tracked</p>
              <div className="pg-tracked" data-reveal="" style={{ "--d": "1" } as CSSProperties}>
                <span>Items added</span>
                <span>Store fulfilment (N, N−1, N−2)</span>
                <span>Cart value</span>
                <span>Cancellations</span>
              </div>
            </div>
          </div>
        </section>
        {/* ============================================================
           17 — LEARNINGS (evidence timeline)
           ============================================================ */}
        <section className="pg-section" id="learnings">
          <div className="pg-wrap">
            <p className="pg-eyebrow pg-chaptertag" data-reveal=""><span className="n">17</span> &mdash; Learnings</p>
            <h2 className="pg-h pg-h--mixed" data-reveal="" style={{ maxWidth: "18ch" }}>The biggest learning wasn&rsquo;t about the cart.</h2>
            <div className="pg-evi">
              <span className="pg-evi-line" aria-hidden="true" />
              <div className="pg-evi-item">
                <p className="pg-evi-tag">Observed</p>
                <h4>Users care more about finding the right products than choosing a specific store.</h4>
                <p className="pg-body">Session after session, store choice was instrumental. Users engaged with the comparison surface to complete their list, not to browse merchants.</p>
              </div>
              <div className="pg-evi-item">
                <p className="pg-evi-tag">Observed</p>
                <h4>Multi-store fulfilment is acceptable when the value is clear.</h4>
                <p className="pg-body">Users didn&rsquo;t reject split deliveries outright&mdash;they weighed them. When the payoff was visible next to the cost of a second window, the trade was made willingly.</p>
              </div>
              <div className="pg-evi-item">
                <p className="pg-evi-tag">Learned</p>
                <h4>Marketplace complexity needs to stay behind a simple decision surface.</h4>
                <p className="pg-body">Every time backend complexity leaked into the interface&mdash;slot logic, partial matches, offer conditions&mdash;decision confidence dropped. The collapse/expand pattern existed to manage exactly this.</p>
              </div>
              <div className="pg-evi-item">
                <p className="pg-evi-tag">Learned</p>
                <h4>Price, availability and delivery are one decision, not three.</h4>
                <p className="pg-body">Users never evaluated these independently. A great price with a missing item isn&rsquo;t a great price. The card had to present them as a single fulfilment proposition.</p>
              </div>
              <div className="pg-evi-item">
                <p className="pg-evi-tag next">Next to test</p>
                <h4>Where the model breaks: basket sizes the marketplace can&rsquo;t cover.</h4>
                <p className="pg-body">How often nearby supply can genuinely serve a full basket determines whether item-first scales beyond dense areas. That&rsquo;s a supply question as much as a design one.</p>
              </div>
            </div>
          </div>
        </section>
        {/* ============================================================
           18 — REFLECTION
           ============================================================ */}
        <section className="pg-section" id="reflection">
          <div className="pg-wrap">
            <p className="pg-eyebrow pg-chaptertag" data-reveal=""><span className="n">18</span> &mdash; Reflection</p>
            <h2 className="pg-display" data-reveal="" style={{ maxWidth: "16ch" }}>Designing the interface was only half the problem.</h2>
            <div className="pg-measure" style={{ marginTop: "clamp(40px,5vw,64px)" }}>
              <p className="pg-body" data-reveal="">Price Genie taught me that marketplace UX isn&rsquo;t just about helping users navigate products. It&rsquo;s about making the underlying complexity of supply, fulfilment, price and delivery understandable enough for users to make confident choices.</p>
              <p className="pg-body" data-reveal="" style={{ "--d": "1" } as CSSProperties}>The design work that mattered most never looked like design: deciding what the system should evaluate versus what the user should decide, where complexity earns its place on screen, and what a cart even <em>is</em> when fulfilment spans stores. The interface was the last mile of a strategy argument.</p>
            </div>
          </div>
          <div className="pg-endspace" aria-hidden="true" />
        </section>
        {/* CTA */}
        <div className="pg-wrap">
          <div className="pg-cta">
            <span className="pg-cta-note">Want the full walkthrough with screens?</span>
            {" "}
            <a href="https://calendly.com/anandpatil19594/30min" target="_blank" rel="noopener">Book a call</a>
          </div>
        </div>
      </main>
      {/* FOOTER (preserved) */}
      <Footer />
      <PriceGenieBehaviour />
    </>
  );
}
