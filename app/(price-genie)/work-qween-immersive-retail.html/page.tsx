import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PriceGenieBehaviour from '@/components/behaviour/PriceGenieBehaviour';
import VrCarousel from '@/components/behaviour/VrCarousel';
import PaperCard from '@/components/behaviour/PaperCard';
import LocatorScroller from '@/components/behaviour/LocatorScroller';
import ProgressContrast from '@/components/behaviour/ProgressContrast';import { CALENDLY_URL } from '@/lib/site';
import '@/styles/pg.css';
import './immersive-retail.css';

/* ============================================================
   QWEEN — IMMERSIVE RETAIL
   Built on the Price Genie editorial system (pg.css + its behaviour).

   Narrative: problem → shared objective (two paths) → the experience
   (VR store + PDP locator, with design rationale beside the screens)
   → outcomes → reflection.

   CONTENT: everything shown was supplied by Anand: the VR and locator
   recordings, the ground-floor plan, the photos, and the pop-up results
   (30 tried it, 25 wanted to visit, 3–4 visits). Role and the decision
   rationales were never supplied, so they're left out rather than
   guessed. Don't add figures beyond those supplied.
   ============================================================ */

export const metadata: Metadata = {
  title: 'QWEEN Immersive Retail — Brewed by Anand',
  description:
    'Connecting immersive jewellery discovery with physical retail for QWEEN, through a VR showroom, mixed-reality try-on and product-level store navigation.',
  /* Kept out of search results (and the sitemap) until the page is
     signed off. Remove this, and add the URL to PAGES in lib/site.ts,
     to publish it. */
  robots: { index: false, follow: true },
};

const v = (vars: Record<string, string | number>) => vars as CSSProperties;

/* ---------- content ---------- */

const ASSET_DIR = '/assets/img/qween-immersive/';

/* Design rationale shown beside the screens it explains. */
const DECISIONS = {
  explore: { n: '01', title: 'Designing for exploration.', focus: 'Navigation, spatial presence and movement through the showroom.' },
  tangible: { n: '02', title: 'Making jewellery tangible.', focus: 'Product selection, manipulation, scale, rotation and inspection.' },
  actionable: { n: '03', title: 'Making physical discovery actionable.', focus: 'The locator’s entry point, availability information, store navigation and location precision.' },
};

/** Inline design-decision note, placed next to the work it explains. */
function Decision({ d, ink }: { d: (typeof DECISIONS)[keyof typeof DECISIONS]; ink?: boolean }) {
  return (
    <aside className={ink ? 'qr-why qr-why--ink' : 'qr-why'} aria-label={`Design decision ${d.n}`}>
      <p className="qr-why-tag">Design decision {d.n}</p>
      <p className="qr-why-title">{d.title}</p>
      <p className="qr-why-focus">{d.focus}</p>
    </aside>
  );
}

/* Each frame is a VR recording in VIDEO_DIR: `<file>.mp4`, poster `<file>.jpg`. */
const VIDEO_DIR = '/assets/video/qween-immersive/';

const VR_SEQUENCE = [
  { title: 'Enter the experience', body: 'The moment the headset goes on and the experience begins.', file: 'vr-01-enter' },
  { title: 'Arrive at the store entrance', body: 'A welcome panel explains the controls (turn to look around, point and pinch), then the customer stands at the QWEEN storefront, ready to step inside.', file: 'vr-02-transition' },
  { title: 'Explore the first floor', body: 'Moving through the ground-floor displays.', file: 'vr-03-first-floor' },
  { title: 'Select and pick up jewellery', body: 'Choosing a piece from a display and taking it in hand.', file: 'vr-04-pick-up' },
  { title: 'Inspect from every angle', body: 'Turning the piece to see detail, finish and scale.', file: 'vr-05-inspect' },
  { title: 'Switch between pieces', body: 'Tapping Next moves from one piece on the display to the next, without leaving your spot.', file: 'vr-06-switch' },
  { title: 'Go up to the second floor', body: 'Navigating between floors of the showroom.', file: 'vr-07-second-floor' },
  /* Mixed-reality try-on (vr-08-mr-try-on) is left out until there's footage. */
];

/* Snippets of one mobile screen recording, in VIDEO_DIR (`<file>.mp4` and
   poster `<file>.jpg`). Titles describe what each snippet shows. */
const LOCATOR_FLOW = [
  { title: 'Discover the locator on the PDP', body: 'A “Find this item in store” entry sits on the product page, set into the storefront.', file: 'loc-01-pdp-entry' },
  { title: 'Step into the store', body: 'A short loading moment carries the customer from the product page into the store.', file: 'loc-02-store' },
  { title: 'See where the piece is kept', body: 'The view opens on the piece’s display, with a note of the floor it’s on.', file: 'loc-03-availability' },
  { title: 'Preview the piece in 3D', body: 'Tapping the marker opens the piece in 3D, with its price and a link to full detail.', file: 'loc-04-location' },
  { title: 'Look around the floor', body: 'Dragging to look around, with markers pointing to other displays.', file: 'loc-05-navigate' },
  { title: 'Switch floors', body: 'Moving between floors from the in-store view.', file: 'loc-06-in-store' },
];

export default function QweenImmersiveRetailPage() {
  return (
    <>
      <Nav variant="case" onLight />
      {/* PROGRESS INDEX */}
      <nav className="pg-progress" aria-label="Case study sections">
        {[
          ['problem', 'Problem'],
          ['system', 'System'],
          ['interface', 'Experience'],
          ['results', 'Outcomes'],
          ['reflection', 'Reflection'],
        ].map(([id, label]) => (
          <a key={id} href={`#${id}`}>
            <span className="lbl">{label}</span>
            <span className="bar" />
          </a>
        ))}
      </nav>

      {/* ============================================================
         01 — HERO
         ============================================================ */}
      <header className="pg-hero qr-hero" id="top">
        <div className="pg-hero-bg qr-hero-bg">
          <img src={`${ASSET_DIR}hero.webp`} width={1800} height={946} alt="A woman wearing a VR headset holds up a virtual amethyst earring between her fingers, its pair worn on her ear." />
        </div>
        <div className="pg-hero-inner">
          <div className="pg-hero-content">
            <p className="pg-hero-eyebrow" data-hero="" style={v({ '--hd': 0 })}>QWEEN · Immersive Retail</p>
            <h1 className="pg-hero-title" data-hero="" style={v({ '--hd': 1 })}>Taking jewellery discovery beyond the screen.</h1>
            <p className="pg-hero-desc" data-hero="" style={v({ '--hd': 2 })}>Connecting immersive jewellery discovery with physical retail through VR, mixed reality and product-level store navigation.</p>
            <dl className="pg-hero-meta" data-hero="" style={v({ '--hd': 3 })}>
              <div><dt>Scope</dt><dd>Spatial UX · Interaction · E-commerce</dd></div>
              <div><dt>Platform</dt><dd>VR headset · Mobile web</dd></div>
              <div><dt>Status</dt><dd>Live · QWEEN pop-ups and activations</dd></div>
            </dl>
          </div>
        </div>
        <div className="pg-hero-scroll" aria-hidden="true"><span>Scroll</span></div>
      </header>

      <main>
        {/* ============================================================
           02 — THE PROBLEM (context, the two challenges with their
           starting hypotheses, and the design question)
           ============================================================ */}
        <section className="pg-section" id="problem">
          <div className="pg-wrap">
            <p className="pg-eyebrow pg-chaptertag" data-reveal=""><span className="n">02</span> &mdash; The problem</p>
            <h2 className="pg-display" data-reveal="" style={{ maxWidth: '16ch' }}>Digital discovery has its limits.</h2>
            <div className="pg-measure" style={{ marginTop: '24px' }}>
              <p className="pg-body" data-reveal="">Jewellery is bought on detail: finish, scale, how a piece sits and catches light. Most of that is hard to judge from product images alone, and most of the decision still happens in front of the real thing.</p>
              <p className="pg-body" data-reveal="" style={v({ '--d': 1 })}>That leaves an opportunity in the space between the two: helping customers get closer to a piece before they visit, and making the step from a product page to the shop floor more direct. The project set out two connected design challenges.</p>
            </div>
            <div className="qr-challenges">
              <div className="qr-challenge" data-reveal="">
                <div className="qr-challenge-num">01</div>
                <p className="qr-challenge-tag">Design challenge</p>
                <h3 className="qr-challenge-title">Experience the product.</h3>
                <p className="pg-body">How could an immersive environment offer a different way to discover and inspect jewellery, beyond conventional product images?</p>
                <p className="qr-hyp-tag">Starting hypotheses</p>
                <ul className="qr-hyp">
                  <li>Spatial exploration could offer a more engaging way to discover jewellery.</li>
                  <li>Interacting with 3D products could help customers inspect jewellery from different angles.</li>
                </ul>
              </div>
              <div className="qr-challenge" data-reveal="" style={v({ '--d': 1 })}>
                <div className="qr-challenge-num">02</div>
                <p className="qr-challenge-tag">Design challenge</p>
                <h3 className="qr-challenge-title">Find the product.</h3>
                <p className="pg-body">After discovering a piece online, how could a customer locate that specific piece inside a physical showroom?</p>
                <p className="qr-hyp-tag">Starting hypothesis</p>
                <ul className="qr-hyp">
                  <li>Product-level location information could make in-store discovery more actionable.</li>
                </ul>
              </div>
            </div>
            <p className="pg-small" data-reveal="" style={{ marginTop: '22px' }}>Challenges and hypotheses frame the work; they are not research findings.</p>
            <blockquote className="pg-quote pg-quote--accent" data-reveal="" style={{ maxWidth: '30ch', marginTop: 'clamp(48px,7vw,88px)' }}>&ldquo;What if digital commerce could take customers beyond browsing, helping them experience jewellery in immersive environments and discover the exact piece inside a physical store?&rdquo;</blockquote>
          </div>
        </section>

        {/* ============================================================
           03 — SHARED OBJECTIVE / TWO PATHS
           ============================================================ */}
        <section className="pg-section" id="system">
          <div className="pg-wrap">
            <p className="pg-eyebrow pg-chaptertag" data-reveal=""><span className="n">03</span> &mdash; The system</p>
            <h2 className="pg-h pg-h--mixed" data-reveal="" style={{ maxWidth: '20ch' }}>One retail vision. Two experiences.</h2>
            <div className="qr-sys" role="group" aria-label="A shared retail objective served by two independent pathways: immersive discovery and physical discovery.">
              {/* Path card · the jewellery itself · path card, laid out like a
                  print mock-up. The cards are three.js paper (PaperCard). */}
              <div className="qr-sys-board" data-reveal="fade">
                <PaperCard
                  side={-1}
                  tag="Path A"
                  title={['Immersive', 'discovery.']}
                  steps={['Virtual showroom', 'Store navigation', '3D product inspection', 'Mixed-reality try-on']}
                  mark="VR Headset"
                />
                <figure className="qr-sys-centre">
                  <img src={`${ASSET_DIR}system-rings-clean.png`} width={412} height={866} loading="lazy" alt="A stack of six gold and diamond QWEEN rings." />
                  <figcaption>
                    <span className="qr-sys-centre-tag">Shared objective</span>
                    Help customers discover jewellery and find the exact piece they want, beyond the screen.
                  </figcaption>
                </figure>
                <PaperCard
                  side={1}
                  accent
                  tag="Path B"
                  title={['Physical', 'discovery.']}
                  steps={['Jewellery PDP', 'Store selection', 'Availability information', 'Product location', 'Physical discovery']}
                  mark="Mobile Web"
                />
              </div>
              <p className="pg-small qr-sys-note" data-reveal="">Two complementary pathways towards the same objective. They meet the customer at different moments rather than as one continuous flow, and neither depends on the other.</p>
            </div>
          </div>
        </section>

        {/* ============================================================
           04 — THE EXPERIENCE (wrapper carries the anchor so the progress
           index tracks both chapters, not just the intro heading)
           ============================================================ */}
        <div id="interface">
        <section className="pg-section" style={{ paddingBottom: 0 }}>
          <div className="pg-wrap">
            <p className="pg-eyebrow pg-chaptertag" data-reveal=""><span className="n">04</span> &mdash; The experience</p>
            <h2 className="pg-display" data-reveal="" style={{ maxWidth: '14ch' }}>Designing beyond the screen.</h2>
          </div>
        </section>

        {/* 04A — Immersive store (cinematic) */}
        <section className="qr-band" data-dark="" aria-labelledby="ch-vr" style={{ marginTop: 'clamp(48px,7vw,90px)' }}>
          <div className="pg-wrap">
            <div className="qr-chapter-head">
              <div>
                <p className="qr-chapter-letter" data-reveal="">A</p>
                <h3 className="pg-h" id="ch-vr" data-reveal="" style={{ marginTop: '14px' }}>The immersive store</h3>
              </div>
              <div>
                <p className="pg-body" data-reveal="">Seven moments from putting the headset on to moving between floors of the showroom.</p>
                <p data-reveal="" style={{ marginTop: '16px' }}><span className="qr-status">Scroll to move through the VR recordings</span></p>
              </div>
            </div>
          </div>
          <VrCarousel
            bg={`${ASSET_DIR}vr-stage-bg.jpg`}
            cards={VR_SEQUENCE.map((s, i) => ({
              n: String(i + 1).padStart(2, '0'),
              title: s.title,
              body: s.body,
              src: `${VIDEO_DIR}${s.file}.mp4`,
              poster: `${VIDEO_DIR}${s.file}.jpg`,
            }))}
          />
          <div className="pg-wrap">
            <div className="qr-vr-why">
              <div data-reveal=""><Decision d={DECISIONS.explore} ink /></div>
              <div data-reveal="" style={v({ '--d': 1 })}><Decision d={DECISIONS.tangible} ink /></div>
            </div>
          </div>
        </section>

        {/* 04B — PDP product locator (precise, functional) */}
        <section className="pg-section" aria-labelledby="ch-loc">
          <div className="pg-wrap">
            <div className="qr-chapter-head">
              <div>
                <p className="qr-chapter-letter qr-chapter-letter--light" data-reveal="">B</p>
                <h3 className="pg-h" id="ch-loc" data-reveal="" style={{ marginTop: '14px' }}>The PDP product locator</h3>
              </div>
              <div>
                <p className="pg-body" data-reveal="">Six moments from a product page to the piece’s place in the store.</p>
                <p data-reveal="" style={{ marginTop: '16px' }}><span className="qr-status">Scroll to step through the recording</span></p>
              </div>
            </div>
          </div>
          <LocatorScroller
            steps={LOCATOR_FLOW.map((s, i) => ({
              n: String(i + 1).padStart(2, '0'),
              title: s.title,
              body: s.body,
              src: `${VIDEO_DIR}${s.file}.mp4`,
              poster: `${VIDEO_DIR}${s.file}.jpg`,
            }))}
          />
          <div className="pg-wrap">
            <div data-reveal="scale" style={{ marginTop: 'clamp(56px,7vw,96px)' }}>
              <figure className="qr-map">
                <img
                  src={`${ASSET_DIR}loc-store-map.webp`}
                  width={1182}
                  height={350}
                  loading="lazy"
                  alt="Top-down plan of the QWEEN ground floor, divided into six numbered zones: 01 entrance, 02 service counter, 03 central display, 04 display table, 05 lounge, 06 stairs and lift."
                />
              </figure>
            </div>
            <div className="qr-loc-detail">
              <div data-reveal="">
                <p className="qr-map-tag">Mapping the floor</p>
                <p className="pg-body">Each floor is split into numbered zones, and every display belongs to one. A piece’s location is then its floor plus its zone. It’s the same reference the locator shows the customer and staff see on the shop floor.</p>
                <ol className="qr-zones">
                  {['Entrance', 'Service counter', 'Central display', 'Display table', 'Lounge', 'Stairs and lift'].map((z, i) => (
                    <li key={z}><span>{String(i + 1).padStart(2, '0')}</span>{z}</li>
                  ))}
                </ol>
              </div>
              <div data-reveal="" style={v({ '--d': 1 })}>
                <Decision d={DECISIONS.actionable} />
              </div>
            </div>
          </div>
        </section>
        </div>

        {/* ============================================================
           05 — OUTCOMES (pop-up results as supplied: intent vs. visits)
           ============================================================ */}
        <section className="pg-section" id="results">
          <div className="pg-wrap">
            <p className="pg-eyebrow pg-chaptertag" data-reveal=""><span className="n">05</span> &mdash; Outcomes</p>
            <h2 className="pg-statement" data-reveal="">Measuring the experience.</h2>
            <figure className="qr-photo" data-reveal="scale">
              <img
                src={`${ASSET_DIR}outcome-vr-demo.webp`}
                width={1575}
                height={999}
                loading="lazy"
                alt="A visitor wearing a VR headset in a QWEEN showroom while a member of the team guides her through the experience."
              />
              <figcaption className="pg-cap">A visitor in the immersive store, guided by the team at the QWEEN pop-up, Prateek Wisteria, Noida, 19&ndash;20 September.</figcaption>
            </figure>
            <div className="pg-measure" style={{ marginTop: 'clamp(40px,5vw,64px)' }}>
              <p className="pg-body" data-reveal="">Project status: live. The VR experience runs at every QWEEN pop-up and brand activation.</p>
              <p className="pg-body" data-reveal="" style={v({ '--d': 1 })}>The VR experience was tested with visitors at a two-day QWEEN pop-up at Prateek Wisteria, Noida, on 19&ndash;20 September. It generated real curiosity and a clear intent to visit the store. But intent and visits turned out to be two different things.</p>
            </div>
            <ol className="qr-funnel" aria-label="From the VR pop-up to the store">
              <li data-reveal="" style={v({ '--d': 0 })}><span className="qr-funnel-n">30</span><span className="qr-funnel-l">people tried the VR experience</span></li>
              <li data-reveal="" style={v({ '--d': 1 })}><span className="qr-funnel-n">25</span><span className="qr-funnel-l">said they wanted to explore the physical store</span></li>
              <li data-reveal="" style={v({ '--d': 2 })}><span className="qr-funnel-n">3&ndash;4</span><span className="qr-funnel-l">follow-up store visits observed</span></li>
            </ol>
            <div className="pg-measure" style={{ marginTop: 'clamp(40px,5vw,64px)' }}>
              <p className="pg-body" data-reveal="">The first half worked. The project never set out to replace the store; it set out to connect immersive discovery to it, and walking through a virtual QWEEN made most people want to see the real one.</p>
              <p className="pg-body" data-reveal="" style={v({ '--d': 1 })}>The second half didn&rsquo;t follow on its own. Interest at the pop-up rarely became a visit, which showed where the work still was: not in making the virtual store more compelling, but in strengthening the bridge between the virtual experience and the in-store journey. That is the same gap the product locator is built to close, from wanting a piece to standing in front of it.</p>
              <p data-reveal="" style={v({ '--d': 1, marginTop: '18px' })}><span className="qr-status">Small sample, observed at the pop-up</span></p>
            </div>
          </div>
        </section>

        {/* ============================================================
           06 — REFLECTION (learnings folded in)
           ============================================================ */}
        <section className="pg-section" id="reflection">
          <div className="pg-wrap">
            <p className="pg-eyebrow pg-chaptertag" data-reveal=""><span className="n">06</span> &mdash; Reflection</p>
            <h2 className="pg-display" data-reveal="" style={{ maxWidth: '16ch' }}>Beyond the transaction.</h2>
            <div className="pg-measure" style={{ marginTop: 'clamp(40px,5vw,64px)' }}>
              <p className="pg-body" data-reveal="">Most jewellery commerce ends at the product page. This project asked what happens if the page is only one of the places a customer meets a piece, alongside a showroom they can step into and a store they can walk to.</p>
            </div>
          </div>
          <div className="pg-endspace" aria-hidden="true" />
        </section>

        {/* NEXT PROJECT — real, existing case studies only. A div, not <nav>:
            base.css pins every bare <nav> to the top as the site header. */}
        <div className="pg-wrap">
          <div className="qr-next" role="navigation" aria-label="More case studies">
            <a href="/work-qween.html">
              <span className="qr-next-lbl">Also at QWEEN</span>
              <span className="qr-next-title">Designing confidence for luxury jewellery commerce</span>
              <span className="qr-next-sub">How the product page became a confidence-building experience.</span>
            </a>
            <a href="/work-price-genie.html">
              <span className="qr-next-lbl">Next case study</span>
              <span className="qr-next-title">Price Genie</span>
              <span className="qr-next-sub">Challenging store-first commerce with an item-first shopping model.</span>
            </a>
          </div>
          <div className="pg-cta">
            <span className="pg-cta-note">Want the full walkthrough?</span>
            <a href={CALENDLY_URL} target="_blank" rel="noopener">Book a call</a>
          </div>
        </div>
      </main>
      <Footer />
      <PriceGenieBehaviour />
      <ProgressContrast />
    </>
  );
}
