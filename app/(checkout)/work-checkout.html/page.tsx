import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import QweenBehaviour from '@/components/behaviour/QweenBehaviour';
import CheckoutBehaviour from '@/components/behaviour/CheckoutBehaviour';
import '@/styles/qween.css';
import '@/styles/checkout.css';

export const metadata: Metadata = {
  title: "Simply Checkout | Brewed by Anand",
  description: "Simply Checkout: making checkout quick, fun and stress-free for Pincode, an ONDC-based 0 to 1 app, from the cart through to order tracking.",
};

export default function CheckoutPage() {
  return (
    <>
      {/* NAV (preserved) */}
      <Nav variant="case" />
      {/* PROGRESS INDEX */}
      <nav className="qw-progress" aria-label="Case study chapters">
        <a href="#team">
          <span className="lbl">Team</span>
          <span className="bar" />
        </a>
        {" "}
        <a href="#context">
          <span className="lbl">ONDC</span>
          <span className="bar" />
        </a>
        {" "}
        <a href="#problem">
          <span className="lbl">Problem</span>
          <span className="bar" />
        </a>
        {" "}
        <a href="#approach">
          <span className="lbl">Approach</span>
          <span className="bar" />
        </a>
        {" "}
        <a href="#research">
          <span className="lbl">Research</span>
          <span className="bar" />
        </a>
        {" "}
        <a href="#found">
          <span className="lbl">Findings</span>
          <span className="bar" />
        </a>
        {" "}
        <a href="#previous">
          <span className="lbl">Previous app</span>
          <span className="bar" />
        </a>
        {" "}
        <a href="#checkout">
          <span className="lbl">Checkout</span>
          <span className="bar" />
        </a>
        {" "}
        <a href="#orders">
          <span className="lbl">Order management</span>
          <span className="bar" />
        </a>
        {" "}
        <a href="#decisions">
          <span className="lbl">Decisions</span>
          <span className="bar" />
        </a>
        {" "}
        <a href="#iterations">
          <span className="lbl">Iterations</span>
          <span className="bar" />
        </a>
        {" "}
        <a href="#impact">
          <span className="lbl">Impact</span>
          <span className="bar" />
        </a>
      </nav>
      {/* ============================================================
       HERO
       ============================================================ */}
      <header className="qw-hero qw-hero--cover" id="top">
        <div className="co-cover">
          <div className="co-cover-copy">
            <h1 className="co-cover-title">
              <span className="w1" data-hero="" style={{ "--hd": "0" } as CSSProperties}>simply <s>freakout</s></span>
              {" "}
              <span className="w2" data-hero="" style={{ "--hd": "1" } as CSSProperties}>checkout</span>
            </h1>
            <p className="co-cover-lead" data-hero="" style={{ "--hd": "2" } as CSSProperties}>Checkout made quick, fun and totally stress-free for Pincode, an ONDC-based 0&rarr;1 app.</p>
            <p className="co-cover-sub" data-hero="" style={{ "--hd": "3" } as CSSProperties}>Pincode &nbsp;·&nbsp; Product Designer &nbsp;·&nbsp; Cart, checkout and order tracking</p>
          </div>
          <img className="co-cover-img" data-hero="" style={{ "--hd": "1" } as CSSProperties} src="/assets/img/checkout/box.webp" width="1452" height="1571" fetchPriority="high" alt="A dark delivery box strapped to the back of a cream scooter." />
        </div>
      </header>
      <main>
        {/* ============================================================
         01 — TEAM
         ============================================================ */}
        <section className="qw-section" id="team">
          <div className="qw-wrap co-team">
            <div>
              <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">01</span> The team</p>
              <h2 className="qw-statement" data-reveal="">Team members</h2>
              <dl className="co-people" data-reveal="" style={{ "--d": "1" } as CSSProperties}>
                <div>
                  <dt>Product manager</dt>
                  <dd>Akaas Jayaraj</dd>
                </div>
                <div>
                  <dt>Product designers</dt>
                  <dd>Siddharth Sreekumar</dd>
                  <dd>Anand Patil</dd>
                  <dd>Sarthak Joshi</dd>
                  <dd>Saptak Paul</dd>
                </div>
              </dl>
            </div>
            <div className="co-role" data-reveal="" style={{ "--d": "1" } as CSSProperties}>
              <h3 className="qw-h">My role</h3>
              <ul>
                <li>Conducting the research and proposing the project.</li>
                <li>Collaborating with cross-functional teams to identify key issues.</li>
                <li>Creating high-fidelity wireframes and interactive prototypes to demonstrate functionality, and delivering the final design assets.</li>
              </ul>
            </div>
          </div>
        </section>
        {/* ============================================================
         02 — ONDC & PINCODE
         ============================================================ */}
        <section className="qw-section" id="context">
          <div className="qw-wrap">
            <div className="qw-split qw-split--rev co-split-mid">
              <div className="qw-split-media">
                <div className="co-photo" data-reveal="scale">
                  <img src="/assets/img/checkout/store.webp" width="1600" height="1200" alt="The lit entrance of a Simpli Namdhari's supermarket inside a mall." loading="lazy" />
                </div>
              </div>
              <div className="qw-split-copy">
                <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">02</span> Context</p>
                <h2 className="qw-statement" data-reveal="">Okay, so what&rsquo;s ONDC and Pincode?</h2>
                <p className="qw-body" data-reveal="" style={{ "--d": "1" } as CSSProperties}>Launched by the Government of India, ONDC enables different e-commerce platforms to communicate with each other and creates an open, interoperable marketplace.</p>
                <p className="qw-body" data-reveal="" style={{ "--d": "2" } as CSSProperties}>It also standardises operations like cataloguing, inventory management and order fulfilment, making e-commerce simpler and more accessible. Pincode is the 0&rarr;1 app built on it.</p>
              </div>
            </div>
          </div>
        </section>
        {/* ============================================================
         03 — THE PROBLEM
         ============================================================ */}
        <section className="qw-section" id="problem">
          <div className="qw-wrap">
            <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">03</span> The problem</p>
            <h2 className="qw-display" data-reveal="" style={{ maxWidth: "20ch" }}>Checkout left people with more questions than answers.</h2>
            <div className="co-problem">
              <figure className="co-worry" data-reveal="scale">
                <img src="/assets/img/checkout/problem.webp" width="1400" height="1400" alt="A worried young woman frowning at her phone." loading="lazy" />
                <ul className="co-bubbles" aria-label="Questions users were asking">
                  <li style={{ "--x": "3%", "--y": "6%" } as CSSProperties}>Has the delivery rider picked up my order?</li>
                  <li style={{ "--x": "63%", "--y": "6%" } as CSSProperties}>Should I call the delivery rider?</li>
                  <li style={{ "--x": "7%", "--y": "23%" } as CSSProperties}>Where is my order?</li>
                  <li style={{ "--x": "65%", "--y": "22%" } as CSSProperties}>Why is there a delay for no reason?</li>
                  <li style={{ "--x": "3%", "--y": "41%" } as CSSProperties}>Will my order be safe?</li>
                  <li style={{ "--x": "67%", "--y": "38%" } as CSSProperties}>Should I just raise a ticket?</li>
                  <li style={{ "--x": "8%", "--y": "59%" } as CSSProperties}>Why has Pincode not accepted my order?</li>
                  <li style={{ "--x": "64%", "--y": "55%" } as CSSProperties}>What are the delivery options available?</li>
                  <li style={{ "--x": "12%", "--y": "77%" } as CSSProperties}>There is no map, how do I track?</li>
                  <li style={{ "--x": "60%", "--y": "73%" } as CSSProperties}>From where can I call or message the partner?</li>
                </ul>
              </figure>
              <div className="co-stats" role="list">
                <div className="co-stat" data-reveal="" role="listitem">
                  <span className="v">37%</span>
                  <span className="d">of users abandoned their shopping carts</span>
                </div>
                <div className="co-stat" data-reveal="" style={{ "--d": "1" } as CSSProperties} role="listitem">
                  <span className="v">40%</span>
                  <span className="d">of support tickets were related to unclear order details and missing tracking information</span>
                </div>
                <div className="co-stat" data-reveal="" style={{ "--d": "2" } as CSSProperties} role="listitem">
                  <span className="v">23%</span>
                  <span className="d">further decrease in conversions after showing delivery details</span>
                </div>
              </div>
            </div>
            <p className="qw-cap" data-reveal="">Based on reviews, guerrilla research and tickets raised.</p>
          </div>
        </section>
        {/* ============================================================
         04 — THE APPROACH
         ============================================================ */}
        <section className="qw-section" id="approach">
          <div className="qw-wrap qw-approach">
            <div className="qw-approach-head">
              <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">04</span> The approach</p>
              <h2 className="qw-statement" data-reveal="">Four steps, from the data to a tested design.</h2>
            </div>
            <div className="qw-pcards">
              <article className="qw-pcard" style={{ "--i": "0" } as CSSProperties}>
                <span className="qw-pcard-idx">01</span>
                <h3 className="qw-pcard-name">Digging deep</h3>
                <p className="qw-body">Analysing the data to see what was causing the drops, and observing the current cart patterns.</p>
              </article>
              <article className="qw-pcard" style={{ "--i": "1" } as CSSProperties}>
                <span className="qw-pcard-idx">02</span>
                <h3 className="qw-pcard-name">Deeper</h3>
                <p className="qw-body">Why do we need this? The impact beyond cart abandon rates, discussed with business and product against their intentions.</p>
              </article>
              <article className="qw-pcard" style={{ "--i": "2" } as CSSProperties}>
                <span className="qw-pcard-idx">03</span>
                <h3 className="qw-pcard-name">Identify and design</h3>
                <p className="qw-body">Identifying the low-hanging points to be solved, and setting the right context for the business.</p>
              </article>
              <article className="qw-pcard" style={{ "--i": "3" } as CSSProperties}>
                <span className="qw-pcard-idx">04</span>
                <h3 className="qw-pcard-name">Test, test, repeat</h3>
                <p className="qw-body">Testing with different approaches, then iterating again after feedback loops.</p>
              </article>
            </div>
          </div>
        </section>
        {/* ============================================================
         05 — RESEARCH
         ============================================================ */}
        <section className="qw-section" id="research">
          <div className="qw-wrap">
            <div className="qw-split co-split-mid">
              <div className="qw-split-copy">
                <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">05</span> Research</p>
                <h2 className="qw-statement" data-reveal="">Starting with everyone who touched the drop-off.</h2>
                <ul className="co-list" data-reveal="" style={{ "--d": "1" } as CSSProperties}>
                  <li>Collected all the data available regarding drops.</li>
                  <li>Selected a group of people from different age groups and strata.</li>
                  <li>Analysed multiple help and support tickets raised.</li>
                  <li>Understood the business requirement from the business team as well.</li>
                  <li>Discussed the tech constraints and the backend issues.</li>
                </ul>
              </div>
              <div className="qw-split-media">
                <div className="co-photo co-photo--tall" data-reveal="scale">
                  <img src="/assets/img/checkout/whiteboard.webp" width="1100" height="1467" alt="A whiteboard covered in hand-drawn notes and flow sketches from the research sessions." loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================================================
         06 — WHAT WE FOUND  (dark band)
         ============================================================ */}
        <section className="qw-section qw-band" id="found">
          <div className="qw-wrap">
            <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">06</span> Findings</p>
            <h2 className="qw-display" data-reveal="">What we found was&hellip;</h2>
            <ul className="co-chips">
              <li data-reveal="">Anxiety of delivery charges being offered in next steps</li>
              <li data-reveal="">Users frequently requested refunds or cancellations due to errors in their orders</li>
              <li data-reveal="">Customers kept raising tickets of &ldquo;where is my order?&rdquo;</li>
              <li data-reveal="" style={{ "--d": "1" } as CSSProperties}>Users contacted customer service more frequently</li>
              <li data-reveal="" style={{ "--d": "1" } as CSSProperties}>Users were unable to relate offers to the cart page</li>
              <li data-reveal="" style={{ "--d": "1" } as CSSProperties}>Users were thinking Pincode was delivering the order</li>
              <li data-reveal="" style={{ "--d": "2" } as CSSProperties}>The time shown to deliver was the bigger surprise</li>
              <li data-reveal="" style={{ "--d": "2" } as CSSProperties}>Users struggled to understand vague order statuses like &ldquo;Processing&rdquo; or &ldquo;Pending&rdquo;</li>
              <li data-reveal="" style={{ "--d": "2" } as CSSProperties}>Users were anxious about the order status</li>
              <li data-reveal="" style={{ "--d": "3" } as CSSProperties}>Due to confusion, users left the cart midway</li>
              <li data-reveal="" style={{ "--d": "3" } as CSSProperties}>Users double-checked payment confirmations</li>
              <li data-reveal="" style={{ "--d": "3" } as CSSProperties}>ETA was set the same as quick commerce, so the experience dropped suddenly</li>
            </ul>
          </div>
        </section>
        {/* ============================================================
         07 — PREVIOUS APP EXPERIENCE  (one combined flow, side by side)
         ============================================================ */}
        <section className="qw-section" id="previous">
          <div className="qw-wrap co-flow-head">
            <div>
              <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">07</span> Previous app experience</p>
              <h2 className="qw-display" data-reveal="" style={{ maxWidth: "18ch" }}>The whole journey, from home to payment.</h2>
            </div>
            <div className="co-flow-nav" data-reveal="" aria-hidden="false">
              <button type="button" className="co-flow-btn" data-dir="-1" aria-label="Previous screens">&larr;</button>
              {" "}
              <button type="button" className="co-flow-btn" data-dir="1" aria-label="Next screens">&rarr;</button>
            </div>
          </div>
          <div className="co-flow" data-reveal="fade" tabIndex={0} role="region" aria-label="Previous app flow: thirteen screens side by side. Scroll sideways to follow it.">
            <ol className="co-flow-track">
              <li>
                <span className="stage">Discover</span>
                <figure>
                  <div className="co-screen">
                    <img src="/assets/img/checkout/old-01.webp" width="720" height="1440" alt="Home: store search, categories and recent stores." loading="lazy" />
                  </div>
                  <figcaption><span>01</span>Home</figcaption>
                </figure>
              </li>
              <li>
                <span className="stage" />
                <figure>
                  <div className="co-screen">
                    <img src="/assets/img/checkout/old-02.webp" width="720" height="1440" alt="All categories, expanded by group." loading="lazy" />
                  </div>
                  <figcaption><span>02</span>Categories</figcaption>
                </figure>
              </li>
              <li>
                <span className="stage" />
                <figure>
                  <div className="co-screen">
                    <img src="/assets/img/checkout/old-03.webp" width="720" height="1440" alt="A store page with delivery and in-store tabs." loading="lazy" />
                  </div>
                  <figcaption><span>03</span>Store</figcaption>
                </figure>
              </li>
              <li>
                <span className="stage">Search</span>
                <figure>
                  <div className="co-screen">
                    <img src="/assets/img/checkout/old-04.webp" width="720" height="1440" alt="Search results for rice, grouped under stores with items." loading="lazy" />
                  </div>
                  <figcaption><span>04</span>Search: items</figcaption>
                </figure>
              </li>
              <li>
                <span className="stage" />
                <figure>
                  <div className="co-screen">
                    <img src="/assets/img/checkout/old-05.webp" width="720" height="1440" alt="Search results for rice, listed by store." loading="lazy" />
                  </div>
                  <figcaption><span>05</span>Search: stores</figcaption>
                </figure>
              </li>
              <li>
                <span className="stage">Add items</span>
                <figure>
                  <div className="co-screen">
                    <img src="/assets/img/checkout/old-06.webp" width="720" height="1440" alt="A beverages listing with add buttons." loading="lazy" />
                  </div>
                  <figcaption><span>06</span>Listing</figcaption>
                </figure>
              </li>
              <li>
                <span className="stage" />
                <figure>
                  <div className="co-screen">
                    <img src="/assets/img/checkout/old-07.webp" width="720" height="1440" alt="Items added, with a view cart bar and a discount unlocked message." loading="lazy" />
                  </div>
                  <figcaption><span>07</span>Items added</figcaption>
                </figure>
              </li>
              <li>
                <span className="stage" />
                <figure>
                  <div className="co-screen">
                    <img src="/assets/img/checkout/old-08.webp" width="720" height="1440" alt="Loading screen: Hang on, loading your cart." loading="lazy" />
                  </div>
                  <figcaption><span>08</span>Loading cart</figcaption>
                </figure>
              </li>
              <li>
                <span className="stage">Cart</span>
                <figure>
                  <div className="co-screen">
                    <img src="/assets/img/checkout/old-09.webp" width="720" height="1440" alt="Cart summary, still loading its call to action." loading="lazy" />
                  </div>
                  <figcaption><span>09</span>Cart summary</figcaption>
                </figure>
              </li>
              <li>
                <span className="stage" />
                <figure>
                  <div className="co-screen">
                    <img src="/assets/img/checkout/old-10.webp" width="720" height="1440" alt="Cart summary with a view delivery option button." loading="lazy" />
                  </div>
                  <figcaption><span>10</span>View delivery option</figcaption>
                </figure>
              </li>
              <li>
                <span className="stage" />
                <figure>
                  <div className="co-screen">
                    <img src="/assets/img/checkout/old-11.webp" width="720" height="1440" alt="A delivery and pickup sheet with charges and amount payable." loading="lazy" />
                  </div>
                  <figcaption><span>11</span>Choose delivery</figcaption>
                </figure>
              </li>
              <li>
                <span className="stage">Payment</span>
                <figure>
                  <div className="co-screen">
                    <img src="/assets/img/checkout/old-12.webp" width="720" height="1440" alt="Please hold on: double checking your order with the store." loading="lazy" />
                  </div>
                  <figcaption><span>12</span>Checking with store</figcaption>
                </figure>
              </li>
              <li>
                <span className="stage" />
                <figure>
                  <div className="co-screen">
                    <img src="/assets/img/checkout/old-13.webp" width="720" height="1440" alt="Initiating payment: finalising payment options." loading="lazy" />
                  </div>
                  <figcaption><span>13</span>Initiating payment</figcaption>
                </figure>
              </li>
            </ol>
          </div>
          <div className="qw-wrap">
            <div className="co-flow-bar" aria-hidden="true">
              <span />
            </div>
          </div>
        </section>
        {/* ============================================================
         08 — CHECKOUT
         ============================================================ */}
        <section className="qw-section" id="checkout">
          <div className="qw-wrap">
            <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">08</span> Checkout</p>
            <div className="qw-subchapter" data-reveal="">
              <span className="num">08.1</span>
              <span className="lbl">Before</span>
            </div>
            <h2 className="qw-display" data-reveal="">What wasn&rsquo;t working?</h2>
            <div className="co-annot">
              <ul className="co-notes co-notes--l" style={{ "--lead": "114" } as CSSProperties}>
                <li data-reveal="" style={{ "--g": "526" } as CSSProperties}>
                  <img className="co-arrow" src="/assets/img/checkout/arrows/p23-1.svg" width="89" height="48" alt="" style={{ "--w": "89", "--dy": "27" } as CSSProperties} />
                  <p>The large store callout reduced the visibility of added items in the viewport.</p>
                </li>
                <li data-reveal="" style={{ "--d": "1", "--g": "141" } as CSSProperties}>
                  <img className="co-arrow" src="/assets/img/checkout/arrows/p23-2.svg" width="75" height="64" alt="" style={{ "--w": "75", "--dy": "-7" } as CSSProperties} />
                  <p>Overall savings from the order were not displayed to users, likely contributing to the increased drop-offs.</p>
                </li>
              </ul>
              <div className="co-pair">
                <div className="co-screen" data-reveal="scale">
                  <img src="/assets/img/checkout/cart-before-1.webp" width="720" height="1562" alt="The old cart: a large store card, items and a delivery charges notice." loading="lazy" />
                </div>
                <div className="co-screen" data-reveal="scale" style={{ "--d": "1" } as CSSProperties}>
                  <img src="/assets/img/checkout/cart-before-2.webp" width="720" height="1558" alt="The old delivery option sheet over the cart." loading="lazy" />
                </div>
              </div>
              <ul className="co-notes co-notes--r" style={{ "--lead": "203" } as CSSProperties}>
                <li data-reveal="" style={{ "--g": "368" } as CSSProperties}>
                  <img className="co-arrow" src="/assets/img/checkout/arrows/p23-3.svg" width="77" height="167" alt="" style={{ "--w": "77", "--dy": "12" } as CSSProperties} />
                  <p>The high drop-off rate from viewing delivery options.</p>
                </li>
                <li data-reveal="" style={{ "--d": "1", "--g": "210" } as CSSProperties}>
                  <img className="co-arrow" src="/assets/img/checkout/arrows/p23-4.svg" width="77" height="112" alt="" style={{ "--w": "77", "--dy": "-71" } as CSSProperties} />
                  <p>Users had to select delivery slots before the final amount was calculated, causing variations in the final price.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="qw-section qw-band co-decide-band">
          <div className="qw-wrap">
            <div className="qw-subchapter" data-reveal="">
              <span className="num">08.2</span>
              <span className="lbl">Direction</span>
            </div>
            <h2 className="qw-display" data-reveal="">We set four priorities</h2>
            <ol className="co-decide">
              <li data-reveal=""><img src="/assets/img/checkout/icons/ghost.svg" alt="" />Reduce checkout anxiety</li>
              <li data-reveal="" style={{ "--d": "1" } as CSSProperties}><img src="/assets/img/checkout/icons/spark.svg" alt="" />Make savings visible</li>
              <li data-reveal="" style={{ "--d": "2" } as CSSProperties}><img src="/assets/img/checkout/icons/toggle.svg" alt="" />Show the final price upfront</li>
              <li data-reveal="" style={{ "--d": "3" } as CSSProperties}><img src="/assets/img/checkout/icons/check.svg" alt="" />Confirm the essentials before payment</li>
            </ol>
          </div>
        </section>
        <section className="qw-section">
          <div className="qw-wrap">
            <div className="qw-subchapter" data-reveal="">
              <span className="num">08.3</span>
              <span className="lbl">Iterations</span>
            </div>
            <h3 className="qw-display" data-reveal="">After rounds and rounds of iterations.</h3>
          </div>
          <div className="co-rounds" data-reveal="scale">
            <img src="/assets/img/checkout/cart-iterations.webp" width="1470" height="780" alt="Earlier cart iterations side by side, with an arrow marking the final cart design." loading="lazy" />
          </div>
          <div className="qw-wrap">
            <div className="co-gap">
              <div className="qw-subchapter" data-reveal="">
                <span className="num">08.4</span>
                <span className="lbl">The final cart</span>
              </div>
              <h3 className="qw-display" data-reveal="">And&hellip; how?</h3>
              <div className="co-annot">
                <ul className="co-notes co-notes--l" style={{ "--lead": "39" } as CSSProperties}>
                  <li data-reveal="" style={{ "--g": "148" } as CSSProperties}>
                    <img className="co-arrow" src="/assets/img/checkout/arrows/p26-1.svg" width="81" height="25" alt="" style={{ "--w": "81", "--dy": "-1" } as CSSProperties} />
                    <h4>Reconfirming address</h4>
                    <p>Validating the address is crucial to avoid any hassle.</p>
                  </li>
                  <li data-reveal="" style={{ "--d": "1", "--g": "305" } as CSSProperties}>
                    <img className="co-arrow" src="/assets/img/checkout/arrows/p26-2.svg" width="81" height="49" alt="" style={{ "--w": "81", "--dy": "-45" } as CSSProperties} />
                    <h4>Auto discount application</h4>
                    <p>A clearly visible discount to build excitement for checkout.</p>
                  </li>
                  <li data-reveal="" style={{ "--d": "2", "--g": "159" } as CSSProperties}>
                    <img className="co-arrow" src="/assets/img/checkout/arrows/p26-3.svg" width="83" height="51" alt="" style={{ "--w": "83", "--dy": "3" } as CSSProperties} />
                    <h4>Few important checks</h4>
                    <p>Upfront visibility of when the order is getting delivered and how much to pay as the final price.</p>
                  </li>
                </ul>
                <div className="co-pair">
                  <div className="co-screen" data-reveal="scale">
                    <img src="/assets/img/checkout/cart-final-1.webp" width="720" height="1488" alt="The final cart: address, an applied discount, items and a delivery estimate above the pay button." loading="lazy" />
                  </div>
                  <div className="co-screen" data-reveal="scale" style={{ "--d": "1" } as CSSProperties}>
                    <img src="/assets/img/checkout/cart-final-2.webp" width="720" height="1488" alt="The final cart scrolled to bill details and the cancellation policy." loading="lazy" />
                  </div>
                </div>
                <ul className="co-notes co-notes--r" style={{ "--lead": "74" } as CSSProperties}>
                  <li data-reveal="" style={{ "--g": "331" } as CSSProperties}>
                    <img className="co-arrow" src="/assets/img/checkout/arrows/p26-4.svg" width="35" height="41" alt="" style={{ "--w": "35", "--dy": "-28" } as CSSProperties} />
                    <h4>Direct store context</h4>
                    <p>Retaining the store context at a page level, even at scroll.</p>
                  </li>
                  <li data-reveal="" style={{ "--d": "1", "--g": "147" } as CSSProperties}>
                    <img className="co-arrow" src="/assets/img/checkout/arrows/p26-5.svg" width="63" height="148" alt="" style={{ "--w": "63", "--dy": "18" } as CSSProperties} />
                    <h4>Savings callout</h4>
                    <p>Repetitive overall savings callouts to bring in the value for a user.</p>
                  </li>
                  <li data-reveal="" style={{ "--d": "2", "--g": "99" } as CSSProperties}>
                    <img className="co-arrow" src="/assets/img/checkout/arrows/p26-6.svg" width="57" height="55" alt="" style={{ "--w": "57", "--dy": "14" } as CSSProperties} />
                    <h4>Positive CTA colour</h4>
                    <p>Bright green is more exciting and assuring for the user.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="co-gap">
              <div className="qw-subchapter" data-reveal="">
                <span className="num">08.5</span>
                <span className="lbl">Edge cases</span>
              </div>
              <h3 className="qw-display" data-reveal="">Few edge cases.</h3>
              <div className="co-row co-row--3">
                <figure data-reveal="scale">
                  <div className="co-screen">
                    <img src="/assets/img/checkout/cart-edge-1.webp" width="720" height="1442" alt="Items updated by the store, with an out of stock item and a remove button." loading="lazy" />
                  </div>
                  <figcaption>Items updated by the store</figcaption>
                </figure>
                <figure data-reveal="scale" style={{ "--d": "1" } as CSSProperties}>
                  <div className="co-screen">
                    <img src="/assets/img/checkout/cart-edge-2.webp" width="720" height="1527" alt="A saving banner with free delivery unlocked, and an exclusive offer item." loading="lazy" />
                  </div>
                  <figcaption>Savings and free delivery unlocked</figcaption>
                </figure>
                <figure data-reveal="scale" style={{ "--d": "2" } as CSSProperties}>
                  <div className="co-screen">
                    <img src="/assets/img/checkout/cart-edge-3.webp" width="720" height="1541" alt="An unlock special deals card with a claimed free item." loading="lazy" />
                  </div>
                  <figcaption>Special deal claimed</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
        {/* ============================================================
         09 — ORDER MANAGEMENT
         ============================================================ */}
        <section className="qw-section qw-band qw-section--fit" id="orders">
          <div className="qw-wrap co-move">
            <div>
              <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">09</span> Order management</p>
              <h2 className="qw-display" data-reveal="">Let&rsquo;s move to order management.</h2>
            </div>
            <div>
              <p className="co-flag" data-reveal="">Major challenge</p>
              <p className="qw-lead" data-reveal="" style={{ "--d": "1", color: "#fff" } as CSSProperties}>We lacked delivery partner details like names and photos due to third-party integrations, and didn&rsquo;t own the storefront either, but we still ensured a seamless, stress-free user experience.</p>
            </div>
          </div>
        </section>
        <section className="qw-section">
          <div className="qw-wrap">
            <div className="qw-subchapter" data-reveal="">
              <span className="num">09.1</span>
              <span className="lbl">Before</span>
            </div>
            <h2 className="qw-display" data-reveal="">What wasn&rsquo;t working?</h2>
            <div className="co-annot">
              <ul className="co-notes co-notes--l" style={{ "--lead": "210" } as CSSProperties}>
                <li data-reveal="" style={{ "--g": "195" } as CSSProperties}>
                  <img className="co-arrow" src="/assets/img/checkout/arrows/p30-1.svg" width="70" height="182" alt="" style={{ "--w": "70", "--dy": "8" } as CSSProperties} />
                  <h4>Progress state</h4>
                  <p>These 4 major progress chunks help convey order status and expectations to users.</p>
                </li>
                <li data-reveal="" style={{ "--d": "1", "--g": "181" } as CSSProperties}>
                  <img className="co-arrow" src="/assets/img/checkout/arrows/p30-2.svg" width="52" height="77" alt="" style={{ "--w": "52", "--dy": "39" } as CSSProperties} />
                  <h4>Live status of order</h4>
                  <p>Showing just the current state, with less priority given to the next step in the text hierarchy.</p>
                </li>
                <li data-reveal="" style={{ "--d": "2", "--g": "132" } as CSSProperties}>
                  <img className="co-arrow" src="/assets/img/checkout/arrows/p30-3.svg" width="48" height="43" alt="" style={{ "--w": "48", "--dy": "-25" } as CSSProperties} />
                  <h4>Very rigid tone of voice</h4>
                  <p>Initial communication relied on just showing the status without conversing with the user. That felt rude.</p>
                </li>
              </ul>
              <div className="co-pair">
                <div className="co-screen" data-reveal="scale">
                  <img src="/assets/img/checkout/order-before-1.webp" width="720" height="1436" alt="The old order details screen: an illustration, progress steps and a status line." loading="lazy" />
                </div>
                <div className="co-screen" data-reveal="scale" style={{ "--d": "1" } as CSSProperties}>
                  <img src="/assets/img/checkout/order-before-2.webp" width="720" height="1436" alt="The old order details screen scrolled to delivery details and items." loading="lazy" />
                </div>
              </div>
              <ul className="co-notes co-notes--r" style={{ "--lead": "60" } as CSSProperties}>
                <li data-reveal="" style={{ "--g": "226" } as CSSProperties}>
                  <img className="co-arrow" src="/assets/img/checkout/arrows/p30-4.svg" width="51" height="88" alt="" style={{ "--w": "51", "--dy": "6" } as CSSProperties} />
                  <h4>Quick action support</h4>
                  <p>Users should be able to raise concerns at any point in time, hence prominent support actions were given.</p>
                </li>
                <li data-reveal="" style={{ "--d": "1", "--g": "432" } as CSSProperties}>
                  <img className="co-arrow" src="/assets/img/checkout/arrows/p30-5.svg" width="59" height="25" alt="" style={{ "--w": "59", "--dy": "11" } as CSSProperties} />
                  <h4>Strong store context missing</h4>
                  <p>Users thought of Pincode as another quick-commerce app with its own dark store. It was important to establish the store context.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="qw-section qw-band co-decide-band">
          <div className="qw-wrap">
            <div className="qw-subchapter" data-reveal="">
              <span className="num">09.2</span>
              <span className="lbl">Direction</span>
            </div>
            <h2 className="qw-display" data-reveal="">We set four priorities</h2>
            <ol className="co-decide">
              <li data-reveal=""><img src="/assets/img/checkout/icons/store.svg" alt="" />Make the store&rsquo;s role clear</li>
              <li data-reveal="" style={{ "--d": "1" } as CSSProperties}><img src="/assets/img/checkout/icons/heart.svg" alt="" />Speak in a human voice</li>
              <li data-reveal="" style={{ "--d": "2" } as CSSProperties}><img src="/assets/img/checkout/icons/toggle.svg" alt="" />Set expectations at every step</li>
              <li data-reveal="" style={{ "--d": "3" } as CSSProperties}><img src="/assets/img/checkout/icons/cloud.svg" alt="" />Keep support within reach</li>
            </ol>
          </div>
        </section>
        <section className="qw-section">
          <div className="qw-wrap">
            <div className="qw-subchapter" data-reveal="">
              <span className="num">09.3</span>
              <span className="lbl">Iterations</span>
            </div>
            <h3 className="qw-display" data-reveal="">After rounds and rounds of iterations.</h3>
          </div>
          <div className="co-rounds" data-reveal="scale">
            <img src="/assets/img/checkout/order-iterations.webp" width="1530" height="815" alt="Earlier order tracking iterations side by side, with an arrow marking the final design." loading="lazy" />
          </div>
          <div className="qw-wrap">
            <div className="co-gap">
              <div className="qw-subchapter" data-reveal="">
                <span className="num">09.4</span>
                <span className="lbl">The final tracking</span>
              </div>
              <h3 className="qw-display" data-reveal="">An alive and sleek experience.</h3>
              <div className="co-row co-row--4">
                <figure data-reveal="scale">
                  <div className="co-screen">
                    <img src="/assets/img/checkout/order-live-1.webp" width="720" height="1440" alt="Hang tight: the store is reviewing your order." loading="lazy" />
                  </div>
                  <figcaption><span>01</span>Reviewing</figcaption>
                </figure>
                <figure data-reveal="scale" style={{ "--d": "1" } as CSSProperties}>
                  <div className="co-screen">
                    <img src="/assets/img/checkout/order-live-2.webp" width="720" height="1440" alt="All set: the store is carefully packing your order." loading="lazy" />
                  </div>
                  <figcaption><span>02</span>Packing</figcaption>
                </figure>
                <figure data-reveal="scale" style={{ "--d": "2" } as CSSProperties}>
                  <div className="co-screen">
                    <img src="/assets/img/checkout/order-live-3.webp" width="720" height="1440" alt="On the way: your order is with the delivery partner." loading="lazy" />
                  </div>
                  <figcaption><span>03</span>On the way</figcaption>
                </figure>
                <figure data-reveal="scale" style={{ "--d": "3" } as CSSProperties}>
                  <div className="co-screen">
                    <img src="/assets/img/checkout/order-live-4.webp" width="720" height="1440" alt="Almost there: your order will be delivered in a bit." loading="lazy" />
                  </div>
                  <figcaption><span>04</span>Almost there</figcaption>
                </figure>
              </div>
            </div>
            <div className="co-gap">
              <div className="qw-subchapter" data-reveal="">
                <span className="num">09.5</span>
                <span className="lbl">Why it works</span>
              </div>
              <div className="co-annot">
                <ul className="co-notes co-notes--l" style={{ "--lead": "71" } as CSSProperties}>
                  <li data-reveal="" style={{ "--g": "131" } as CSSProperties}>
                    <img className="co-arrow" src="/assets/img/checkout/arrows/p34-1.svg" width="72" height="57" alt="" style={{ "--w": "72", "--dy": "10" } as CSSProperties} />
                    <h4>Trust markers</h4>
                    <p>Ensuring and reiterating that the store is delivering the order.</p>
                  </li>
                  <li data-reveal="" style={{ "--d": "1", "--g": "131" } as CSSProperties}>
                    <img className="co-arrow" src="/assets/img/checkout/arrows/p34-2.svg" width="65" height="22" alt="" style={{ "--w": "65", "--dy": "5" } as CSSProperties} />
                    <h4>Enabling trust in delivery</h4>
                    <p>The most asked support ticket is answered first in the hierarchy.</p>
                  </li>
                  <li data-reveal="" style={{ "--d": "2", "--g": "186" } as CSSProperties}>
                    <img className="co-arrow" src="/assets/img/checkout/arrows/p34-3.svg" width="80" height="37" alt="" style={{ "--w": "80", "--dy": "-23" } as CSSProperties} />
                    <h4>Animation</h4>
                    <p>Animation makes the process more alive and removes any doubts from the user&rsquo;s mind.</p>
                  </li>
                  <li data-reveal="" style={{ "--d": "3", "--g": "228" } as CSSProperties}>
                    <img className="co-arrow" src="/assets/img/checkout/arrows/p34-4.svg" width="88" height="146" alt="" style={{ "--w": "88", "--dy": "-129" } as CSSProperties} />
                    <h4>Visual and text cues</h4>
                    <p>We made the conversation more human by adding dialogue, like in a natural environment.</p>
                  </li>
                </ul>
                <div className="co-pair">
                  <div className="co-screen" data-reveal="scale">
                    <img src="/assets/img/checkout/order-how-1.webp" width="720" height="1494" alt="The final tracking screen while the store packs the order." loading="lazy" />
                  </div>
                  <div className="co-screen" data-reveal="scale" style={{ "--d": "1" } as CSSProperties}>
                    <img src="/assets/img/checkout/order-how-2.webp" width="720" height="1494" alt="The final tracking screen scrolled to call actions, store and delivery details." loading="lazy" />
                  </div>
                </div>
                <ul className="co-notes co-notes--r" style={{ "--lead": "49" } as CSSProperties}>
                  <li data-reveal="" style={{ "--g": "222" } as CSSProperties}>
                    <img className="co-arrow" src="/assets/img/checkout/arrows/p34-5.svg" width="100" height="79" alt="" style={{ "--w": "100", "--dy": "12" } as CSSProperties} />
                    <h4>Clear actionables</h4>
                    <p>Helping users find support upfront, when they need it.</p>
                  </li>
                  <li data-reveal="" style={{ "--d": "1", "--g": "476" } as CSSProperties}>
                    <img className="co-arrow" src="/assets/img/checkout/arrows/p34-6.svg" width="114" height="56" alt="" style={{ "--w": "114", "--dy": "-41" } as CSSProperties} />
                    <h4>Store callout again</h4>
                    <p>A user can directly reach out to the store in case of delays or doubts.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="co-gap">
              <div className="qw-subchapter" data-reveal="">
                <span className="num">09.6</span>
                <span className="lbl">Edge cases</span>
              </div>
              <h3 className="qw-display" data-reveal="">Edge cases.</h3>
              <div className="co-annot">
                <ul className="co-notes co-notes--l" style={{ "--lead": "420" } as CSSProperties}>
                  <li data-reveal="" style={{ "--g": "300" } as CSSProperties}>
                    <img className="co-arrow" src="/assets/img/checkout/arrows/p35-1.svg" width="88" height="59" alt="" style={{ "--w": "88", "--dy": "10" } as CSSProperties} />
                    <h4>Alert notifications</h4>
                    <p>Updating users upfront if there are changes in the order, or updates that require their attention.</p>
                  </li>
                </ul>
                <div className="co-pair">
                  <div className="co-screen" data-reveal="scale">
                    <img src="/assets/img/checkout/order-edge-1.webp" width="720" height="1440" alt="An alert: the store is taking longer than usual to accept the order." loading="lazy" />
                  </div>
                  <div className="co-screen" data-reveal="scale" style={{ "--d": "1" } as CSSProperties}>
                    <img src="/assets/img/checkout/order-edge-2.webp" width="720" height="1445" alt="An order split into two shipments with separate delivery dates." loading="lazy" />
                  </div>
                </div>
                <ul className="co-notes co-notes--r" style={{ "--lead": "167" } as CSSProperties}>
                  <li data-reveal="" style={{ "--g": "553" } as CSSProperties}>
                    <img className="co-arrow" src="/assets/img/checkout/arrows/p35-2.svg" width="72" height="86" alt="" style={{ "--w": "72", "--dy": "13" } as CSSProperties} />
                    <h4>Multiple shipment callout</h4>
                    <p>Informing users upfront that their order is coming in two shipments.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* ============================================================
         10 — KEY DECISIONS & TRADE-OFFS  (dark band)
         ============================================================ */}
        <section className="qw-section qw-band" id="decisions">
          <div className="qw-wrap">
            <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">10</span> Decisions</p>
            <h2 className="qw-display" data-reveal="">Key decisions &amp; trade-offs</h2>
            <p className="qw-body qw-measure" data-reveal="" style={{ "--d": "1", marginTop: "20px" } as CSSProperties}>The checkout experience needed to reduce uncertainty without losing the context users needed to make informed decisions. These were the key design decisions that shaped the experience.</p>
            <div className="co-decisions">
              <article className="co-decision" data-reveal="">
                <div className="co-decision-head">
                  <span>01</span>
                  <h3 className="qw-h">Keep the originating store visible</h3>
                </div>
                <dl className="co-facts co-facts--2">
                  <div>
                    <dt>The challenge</dt>
                    <dd>Users could be unclear about which store was fulfilling their order and who was responsible for it. Pincode operated as a marketplace rather than owning the storefront or inventory.</dd>
                  </div>
                  <div>
                    <dt>Options considered</dt>
                    <dd>
                      <ul>
                        <li>Keep Pincode as the dominant identity throughout the journey.</li>
                        <li>Emphasise the delivery partner as the primary point of reference.</li>
                        <li className="is-chosen">Make the originating store more visible across the order journey.</li>
                      </ul>
                    </dd>
                  </div>
                  <div>
                    <dt>Decision</dt>
                    <dd>Reinforce the store identity so users could better understand where their order originated and who was fulfilling it.</dd>
                  </div>
                  <div>
                    <dt>Trade-off</dt>
                    <dd>This meant giving more prominence to the store within a Pincode experience. The aim was to make fulfilment ownership clearer without obscuring Pincode&rsquo;s role as the marketplace.</dd>
                  </div>
                </dl>
              </article>
              <article className="co-decision" data-reveal="">
                <div className="co-decision-head">
                  <span>02</span>
                  <h3 className="qw-h">Communicate order progress within integration constraints</h3>
                </div>
                <dl className="co-facts co-facts--2">
                  <div>
                    <dt>The challenge</dt>
                    <dd>Third-party integration limitations meant that delivery-partner details, such as the rider&rsquo;s name and photo, were not always available.</dd>
                  </div>
                  <div>
                    <dt>Options considered</dt>
                    <dd>
                      <ul>
                        <li>Continue relying on generic status labels.</li>
                        <li>Wait until richer delivery-partner information could be made available.</li>
                        <li className="is-chosen">Improve the progress experience using the order information already available.</li>
                      </ul>
                    </dd>
                  </div>
                  <div>
                    <dt>Decision</dt>
                    <dd>Make order progress and expectations clearer through more meaningful status communication and accessible support actions.</dd>
                  </div>
                  <div>
                    <dt>Trade-off</dt>
                    <dd>The experience could not provide complete delivery-person transparency in every case. Instead, it focused on reducing uncertainty with the information and controls available.</dd>
                  </div>
                </dl>
              </article>
              <article className="co-decision" data-reveal="">
                <div className="co-decision-head">
                  <span>03</span>
                  <h3 className="qw-h">Make delivery information easier to understand</h3>
                </div>
                <dl className="co-facts co-facts--2">
                  <div>
                    <dt>The challenge</dt>
                    <dd>Delivery charges, timelines and options could create uncertainty during checkout.</dd>
                  </div>
                  <div>
                    <dt>Options considered</dt>
                    <dd>
                      <ul>
                        <li>Present all delivery information together upfront.</li>
                        <li>Defer some details to a later step.</li>
                        <li className="is-chosen">Improve the hierarchy so the most important delivery information was easier to scan, with supporting details available when needed.</li>
                      </ul>
                    </dd>
                  </div>
                  <div>
                    <dt>Decision</dt>
                    <dd>Refine the presentation and hierarchy of delivery information to help users understand the implications of their choices before placing an order.</dd>
                  </div>
                  <div>
                    <dt>Trade-off</dt>
                    <dd>The design needed to balance a simpler checkout with enough information for users to make an informed decision.</dd>
                  </div>
                </dl>
              </article>
            </div>
          </div>
        </section>
        {/* ============================================================
         11 — ITERATIONS
         ============================================================ */}
        <section className="qw-section" id="iterations">
          <div className="qw-wrap">
            <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">11</span> Iterations</p>
            <h2 className="qw-display" data-reveal="">Iterations: from friction to clarity</h2>
            <p className="qw-body qw-measure" data-reveal="" style={{ "--d": "1", marginTop: "20px" } as CSSProperties}>These iterations show how the experience evolved in response to the issues identified.</p>
            <div className="co-iters">
              <article className="co-iter">
                <div className="co-ba">
                  <figure data-reveal="scale">
                    <div className="co-screen">
                      <img src="/assets/img/checkout/cart-before-1.webp" width="720" height="1562" alt="The earlier cart, with a large store card above the items." loading="lazy" />
                    </div>
                    <figcaption>Before</figcaption>
                  </figure>
                  <figure data-reveal="scale" style={{ "--d": "1" } as CSSProperties}>
                    <div className="co-screen">
                      <img src="/assets/img/checkout/cart-final-1.webp" width="720" height="1488" alt="The final cart, with the items in focus and a compact store header." loading="lazy" />
                    </div>
                    <figcaption>After</figcaption>
                  </figure>
                </div>
                <div className="co-iter-copy" data-reveal="">
                  <div className="qw-subchapter">
                    <span className="num">01</span>
                  </div>
                  <h3 className="qw-h">Rebalancing the cart hierarchy</h3>
                  <dl className="co-facts">
                    <div>
                      <dt>What wasn&rsquo;t working</dt>
                      <dd>The store information was taking up significant visual attention, reducing the prominence of the items users had added to their cart.</dd>
                    </div>
                    <div>
                      <dt>What changed</dt>
                      <dd>The cart hierarchy was refined to bring the added items back into focus while retaining the store context users needed.</dd>
                    </div>
                    <div>
                      <dt>Why</dt>
                      <dd>The cart&rsquo;s primary job is to help users review what they intend to purchase. Store context is useful, but it should not compete with that task.</dd>
                    </div>
                    <div>
                      <dt>What we learned</dt>
                      <dd>Supporting information needs to be visible without overpowering the user&rsquo;s primary task.</dd>
                    </div>
                  </dl>
                </div>
              </article>
              <article className="co-iter">
                <div className="co-ba">
                  <figure data-reveal="scale">
                    <div className="co-screen">
                      <img src="/assets/img/checkout/cart-before-2.webp" width="720" height="1558" alt="The earlier delivery option sheet." loading="lazy" />
                    </div>
                    <figcaption>Before</figcaption>
                  </figure>
                  <figure data-reveal="scale" style={{ "--d": "1" } as CSSProperties}>
                    <div className="co-screen">
                      <img src="/assets/img/checkout/cart-final-2.webp" width="720" height="1488" alt="The final cart, with bill details and the delivery estimate shown above the pay button." loading="lazy" />
                    </div>
                    <figcaption>After</figcaption>
                  </figure>
                </div>
                <div className="co-iter-copy" data-reveal="">
                  <div className="qw-subchapter">
                    <span className="num">02</span>
                  </div>
                  <h3 className="qw-h">Clarifying delivery options and information</h3>
                  <dl className="co-facts">
                    <div>
                      <dt>What wasn&rsquo;t working</dt>
                      <dd>Users were dropping off while viewing delivery options, suggesting that the information or choice presentation was creating friction.</dd>
                    </div>
                    <div>
                      <dt>What changed</dt>
                      <dd>The delivery information and options were reorganised to make the important details easier to understand and compare.</dd>
                    </div>
                    <div>
                      <dt>Why</dt>
                      <dd>Users need to understand delivery implications, such as timing and charges, before they commit to an order.</dd>
                    </div>
                    <div>
                      <dt>What we learned</dt>
                      <dd>Reducing friction is not simply about removing information. It is about presenting the right information at the point where it helps users make a decision.</dd>
                    </div>
                  </dl>
                </div>
              </article>
              <article className="co-iter">
                <div className="co-ba">
                  <figure data-reveal="scale">
                    <div className="co-screen">
                      <img src="/assets/img/checkout/order-before-1.webp" width="720" height="1436" alt="The earlier order details screen with generic progress steps." loading="lazy" />
                    </div>
                    <figcaption>Before</figcaption>
                  </figure>
                  <figure data-reveal="scale" style={{ "--d": "1" } as CSSProperties}>
                    <div className="co-screen">
                      <img src="/assets/img/checkout/order-how-1.webp" width="720" height="1494" alt="The final tracking screen, with a delivery date, a conversational status and the store named." loading="lazy" />
                    </div>
                    <figcaption>After</figcaption>
                  </figure>
                </div>
                <div className="co-iter-copy" data-reveal="">
                  <div className="qw-subchapter">
                    <span className="num">03</span>
                  </div>
                  <h3 className="qw-h">Making order tracking more reassuring</h3>
                  <dl className="co-facts">
                    <div>
                      <dt>What wasn&rsquo;t working</dt>
                      <dd>Generic order statuses did not always explain what was happening or what users should expect next. Third-party integration constraints also limited the delivery-partner information available.</dd>
                    </div>
                    <div>
                      <dt>What changed</dt>
                      <dd>The tracking experience was refined to communicate order progress more clearly and make relevant support actions easier to access.</dd>
                    </div>
                    <div>
                      <dt>Why</dt>
                      <dd>When fulfilment is distributed across stores and delivery partners, users need clarity about progress and where to seek help.</dd>
                    </div>
                    <div>
                      <dt>What we learned</dt>
                      <dd>A useful tracking experience is not only about showing a status. It should set expectations and help users understand what they can do next.</dd>
                    </div>
                  </dl>
                </div>
              </article>
            </div>
            <div className="co-takeaway" data-reveal="">
              <p className="co-flag">Iteration takeaway</p>
              <p className="qw-h">Across the cart, delivery and tracking experiences, the direction was consistent: preserve the information users need, reduce competing visual noise, and make the next step easier to understand.</p>
            </div>
          </div>
        </section>
        {/* ============================================================
         12 — RECEPTION AND IMPACT  (dark band)
         ============================================================ */}
        <section className="qw-section qw-band" id="impact">
          <div className="qw-wrap co-impact">
            <div>
              <p className="qw-eyebrow qw-chaptertag" data-reveal=""><span className="n">12</span> Reception and impact</p>
              <div className="qw-metrics co-metrics" role="list" aria-label="Reception and impact">
                <div className="qw-metric" data-reveal="" role="listitem">
                  <span className="v">7%</span>
                  <span className="d">increase in cart to order conversion</span>
                </div>
                <div className="qw-metric" data-reveal="" style={{ "--d": "1" } as CSSProperties} role="listitem">
                  <span className="v">11%</span>
                  <span className="d">decrease in order issues related tickets</span>
                </div>
                <div className="qw-metric" data-reveal="" style={{ "--d": "2" } as CSSProperties} role="listitem">
                  <span className="v">+ve</span>
                  <span className="d">improvement in customer satisfaction (survey from the closed user group)</span>
                </div>
              </div>
              <h2 className="qw-statement" data-reveal="" style={{ marginTop: "clamp(40px,6vw,72px)" }}>Takeaways</h2>
              <p className="qw-body" data-reveal="" style={{ marginTop: "18px" }}>A refined tone of voice and subtle motion can guide users effectively, creating a more persuasive and reassuring checkout experience.</p>
              <p className="qw-body" data-reveal="" style={{ "--d": "1" } as CSSProperties}>Adding offer nudges on the cart page increased excitement to check out, and showing delivery information upfront reduced user hesitation.</p>
            </div>
            <img className="co-bag" data-reveal="scale" src="/assets/img/checkout/bag.webp" width="1300" height="1442" alt="A paper grocery bag with bread, cabbage, an apple and crisps." loading="lazy" />
          </div>
        </section>
        {/* CTA */}
        <div className="qw-wrap">
          <div className="qw-cta">
            <span className="co-fin">fin.</span>
            {" "}
            <a href="https://calendly.com/anandpatil19594/30min" target="_blank" rel="noopener">Book a call</a>
          </div>
        </div>
      </main>
      {/* FOOTER (preserved) */}
      <Footer />
      <QweenBehaviour />
      <CheckoutBehaviour />
    </>
  );
}
