import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import '@/styles/components.css';
import '@/styles/case-study.css';
import './cityscope.css';

export const metadata: Metadata = {
  title: "CityScope — Brewed by Anand",
  description: "CityScope — a spatial exploration product that turns property search into spatial decision-making, where the map is the product.",
};

export default function CityScopePage() {
  return (
    <>
      {/* NAV */}
      <Nav />
      {/* 01 — HERO */}
      <section className="cs-hero" style={{ "--cs-hero-bg": "linear-gradient(150deg, #0E1620 0%, #10202A 55%, #0C1A24 100%)", "--cs-hero-tint": "radial-gradient(120% 90% at 80% 12%, rgba(94,168,196,0.20) 0%, rgba(11,11,12,0) 60%)", "--cs-hero-overlay": "linear-gradient(to top, rgba(8,12,16,0.82) 0%, rgba(8,12,16,0.1) 60%)" } as CSSProperties}>
        <div className="cs-hero-bg" />
        <div className="cs-hero-content">
          <p className="cs-hero-tag">Case Study &#8212; CityScope</p>
          <h1 className="cs-hero-title">Turning property search into spatial decision-making.</h1>
          <p className="cs-hero-subtitle">Most property platforms treat the city as a catalogue of listings. CityScope takes the opposite view: the map is the product. A property is understood in relation to commute, infrastructure, pricing, neighbourhoods and what the area is becoming&#8212;not in isolation.</p>
          <div className="cx-hero-flow" aria-label="What is this, then what is around it, then how confident should I be">
            <span>What is this?</span>
            <em>&#8594;</em>
            {" "}
            <span>What is around it?</span>
            <em>&#8594;</em>
            {" "}
            <span>How confident should I be?</span>
          </div>
          <div className="cs-hero-meta">
            <div>
              <h4>Role</h4>
              <p>Product Design &#183; UX &#183;<br />Interaction Design</p>
            </div>
            <div>
              <h4>Platform</h4>
              <p>Web</p>
            </div>
            <div>
              <h4>Stack</h4>
              <p>Next.js &#183; React &#183; TypeScript &#183;<br />MapLibre &#183; Turf.js &#183; Zustand &#183; PostGIS</p>
            </div>
            <div>
              <h4>Type</h4>
              <p>Spatial decision system</p>
            </div>
          </div>
        </div>
        <span className="cs-hero-scroll">Scroll</span>
      </section>
      {/* ARTICLE */}
      <article className="cs-article">
        {/* 02 — PROBLEM */}
        <div className="cs-section fade-up">
          <p className="cs-kicker">02 &#8212; The problem</p>
          <h2>Buying a property is rarely just about the property.</h2>
          <p>A &#8377;1&#8202;Cr apartment can look attractive on a listing page. But its real value depends on questions the listing never answers:</p>
          <div className="cs-cards">
            <div className="cs-card">
              <h4>How far from my office?</h4>
              <p>The property&#8217;s worth is bound to a commute that no listing photo shows.</p>
            </div>
            <div className="cs-card">
              <h4>What infrastructure is confirmed?</h4>
              <p>A promised metro line and an operational one are not the same asset.</p>
            </div>
            <div className="cs-card">
              <h4>How does the price compare?</h4>
              <p>&#8377;/sq.ft only means something against the surrounding area.</p>
            </div>
            <div className="cs-card">
              <h4>What will this become?</h4>
              <p>The neighbourhood in a few years is part of the decision today.</p>
            </div>
          </div>
          <p>Existing platforms make people stitch this together themselves&#8212;jumping between listings, maps, news and infrastructure pages to reconstruct a picture the product should have given them.</p>
          <div className="cs-pullquote">The information exists. It just doesn&#8217;t live in the same place, or speak the same language.</div>
        </div>
        {/* 03 — THE IDEA */}
        <div className="cs-section fade-up">
          <p className="cs-kicker">03 &#8212; The idea</p>
          <h2>Make every piece of city information an entity on one living map.</h2>
          <p>Properties, metro stations, IT parks, lakes, hospitals, government projects&#8212;even news events&#8212;become part of the same spatial system. Nothing is a static page; everything is a place you can point at.</p>
          <p>Clicking any entity opens a consistent bottom-sheet experience, so the interaction to learn about a lake is the same as the interaction to learn about a tender. That consistency lets a user move fluidly:</p>
          <div className="cs-flow">
            <span className="cs-flow-step">What is this?</span>
            {" "}
            <span className="cs-flow-arrow">&#8594;</span>
            {" "}
            <span className="cs-flow-step">What is around it?</span>
            {" "}
            <span className="cs-flow-arrow">&#8594;</span>
            {" "}
            <span className="cs-flow-step">How confident should I be?</span>
          </div>
          <p>
            <strong>The map stops being a way to view listings and becomes the interface to the city itself.</strong>
          </p>
        </div>
        {/* 04 — CONFIDENCE */}
        <div className="cs-section fade-up">
          <p className="cs-kicker">04 &#8212; Designing for confidence</p>
          <h2>Separating what exists today from what might exist tomorrow.</h2>
          <p>The most valuable&#8212;and most abused&#8212;word in property is &#8220;upcoming.&#8221; A speculative promise and a confirmed advantage look identical on a brochure. CityScope refuses to let them look identical. Every piece of infrastructure carries a confidence lifecycle:</p>
          <div className="cx-lifecycle" aria-label="Confidence lifecycle from proposal to operational">
            <div className="cx-lifecycle-step">
              <span className="n">01</span>
              <span className="l">Proposal</span>
            </div>
            <div className="cx-lifecycle-step">
              <span className="n">02</span>
              <span className="l">Approved</span>
            </div>
            <div className="cx-lifecycle-step">
              <span className="n">03</span>
              <span className="l">Tender</span>
            </div>
            <div className="cx-lifecycle-step">
              <span className="n">04</span>
              <span className="l">Construction</span>
            </div>
            <div className="cx-lifecycle-step">
              <span className="n">05</span>
              <span className="l">Operational</span>
            </div>
          </div>
          <p className="cs-img-caption">The same axis every infrastructure entity is measured on&#8212;so a buyer can tell a genuine advantage from a hopeful one at a glance.</p>
          <div className="cs-statement">&#8220;Show the promise, but never let it wear the costume of a fact.&#8221;</div>
        </div>
        {/* 05 — WAYS OF SEEING */}
        <div className="cs-section fade-up">
          <p className="cs-kicker">05 &#8212; Ways of seeing the city</p>
          <h2>One map, several lenses.</h2>
          <p>A single base map can&#8217;t answer every question, so CityScope layers different ways of reading the same space. Each lens turns the map into an argument about a specific decision.</p>
          <div className="cs-cards cs-cards-3">
            <div className="cs-card">
              <h4>Price heatmap</h4>
              <p>Understand &#8377;/sq.ft across areas&#8212;where you&#8217;re paying for the place, and where for the postcode.</p>
            </div>
            <div className="cs-card">
              <h4>Confidence heatmap</h4>
              <p>See where confirmed infrastructure is actually concentrated, not merely announced.</p>
            </div>
            <div className="cs-card">
              <h4>Commute rings</h4>
              <p>Evaluate properties as bands of travel time drawn around your office.</p>
            </div>
            <div className="cs-card">
              <h4>Influence radius</h4>
              <p>Understand the real catchment of a station, park or hospital&#8212;its reach, not its dot.</p>
            </div>
            <div className="cs-card">
              <h4>Project density</h4>
              <p>Identify areas experiencing genuine residential growth versus isolated launches.</p>
            </div>
            <div className="cs-card">
              <h4>Entity bottom-sheet</h4>
              <p>The consistent detail surface behind every lens&#8212;what it is, what&#8217;s around it, how sure to be.</p>
            </div>
          </div>
        </div>
        {/* 06 — SHIFT */}
        <div className="cs-section fade-up">
          <p className="cs-kicker">06 &#8212; From listing platform to decision system</p>
          <h2>Changing the question the product answers.</h2>
          <p>CityScope is, at its core, an experiment in changing a mental model. Property search has trained people to ask one question&#8212;and it&#8217;s the wrong one to start with.</p>
          <div className="cs-flow-vertical">
            <span className="cs-flow-step">&#8220;Which property should I buy?&#8221;</span>
            {" "}
            <span className="cs-flow-arrow">&#8595;</span>
            {" "}
            <span className="cs-flow-step">&#8220;Which part of the city makes the most sense for me?&#8221;</span>
          </div>
          <p>That shift turns property discovery from a listing-browsing exercise into a spatial decision-making experience&#8212;the buyer reasons about the city first, and the property falls out of that reasoning as a consequence.</p>
        </div>
        {/* 07 — REFLECTION */}
        <div className="cs-section fade-up">
          <p className="cs-kicker">07 &#8212; Reflection</p>
          <h2>The map was never the feature. It was the argument.</h2>
          <p>Building CityScope reinforced that the hardest design work was deciding what deserved to be an entity, how confidence should be expressed without a paragraph of caveats, and when to switch from showing a place to helping someone judge it. The interface was the last mile of a stance about how people should decide where to live.</p>
          <div className="cs-pullquote">Don&#8217;t answer &#8220;which property?&#8221; Help someone answer &#8220;which part of the city?&#8221;</div>
        </div>
        {/* CTA */}
        <div className="cs-cta-wrap fade-up">
          <span className="cs-cta-note">Want the full walkthrough with screens?</span>
          {" "}
          <a className="cs-cta" href="https://calendly.com/anandpatil19594/30min" target="_blank" rel="noopener">Book a call</a>
        </div>
      </article>
      {/* FOOTER */}
      <Footer />
    </>
  );
}
