import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import '@/styles/components.css';
import '@/styles/case-study.css';
import './imagio.css';

export const metadata: Metadata = {
  title: "Imagio — Brewed by Anand",
  description: "Imagio — an AI-powered photography studio that lets jewellery brands create new product shots without organising another photoshoot.",
};

export default function ImagioPage() {
  return (
    <>
      {/* NAV */}
      <Nav variant="case" />
      {/* 01 — HERO */}
      <section className="cs-hero" style={{ "--cs-hero-bg": "linear-gradient(150deg, #1B1610 0%, #241C12 55%, #17120C 100%)", "--cs-hero-tint": "radial-gradient(120% 90% at 78% 14%, rgba(185,163,126,0.26) 0%, rgba(11,11,12,0) 60%)", "--cs-hero-overlay": "linear-gradient(to top, rgba(12,10,7,0.82) 0%, rgba(12,10,7,0.08) 60%)" } as CSSProperties}>
        <div className="cs-hero-bg" />
        <div className="cs-hero-content">
          <p className="cs-hero-tag">Case Study &#8212; Imagio</p>
          <h1 className="cs-hero-title">Reimagining jewellery photography with AI.</h1>
          <p className="cs-hero-subtitle">Imagio is an AI-powered photography studio that lets jewellery brands create new product shots without organising another photoshoot. Upload one photograph, then change the shoot as easily as you&#8217;d change a setting.</p>
          <div className="im-hero-flow" aria-label="Controllable dimensions of the studio">
            <span>Angle</span>
            <span>Lighting</span>
            <span>Lens</span>
            <span>Pose</span>
            <span>Background</span>
            <span>Presentation</span>
          </div>
          <div className="cs-hero-meta">
            <div>
              <h4>Role</h4>
              <p>Product Design &#183; UX &#183;<br />Product Build</p>
            </div>
            <div>
              <h4>Platform</h4>
              <p>Web &#183; <a href="https://vstudio-kappa.vercel.app/" target="_blank" rel="noopener" style={{ color: "inherit", textDecoration: "underline" }}>See it live</a></p>
            </div>
            <div>
              <h4>Stack</h4>
              <p>Next.js &#183; TypeScript &#183; Three.js &#183;<br />Supabase &#183; Polar &#183; OpenAI</p>
            </div>
            <div>
              <h4>Type</h4>
              <p>0&#8594;1 AI product, built end to end</p>
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
          <h2>Jewellery photography is expensive and repetitive.</h2>
          <p>A single product may need multiple angles, lighting setups, lenses, poses and backgrounds&#8212;often requiring new shoots, new models and fresh production time for what is, essentially, the same piece seen differently.</p>
          <p>So I wanted to explore a simple question:</p>
          <div className="cs-pullquote">What if changing a photoshoot was as easy as changing a setting?</div>
        </div>
        {/* 03 — THE IDEA */}
        <div className="cs-section fade-up">
          <p className="cs-kicker">03 &#8212; The idea</p>
          <h2>A digital photography studio, not a prompt box.</h2>
          <p>Instead of treating generative AI as a text field to wish into, I designed Imagio as a studio. A user uploads an existing jewellery photograph and experiments with the same variables a real shoot would&#8212;except every dial is now immediate.</p>
          <div className="im-controls" aria-label="Studio controls">
            <div className="im-control">
              <span className="n">Control</span>
              <span className="l">Camera angle</span>
            </div>
            <div className="im-control">
              <span className="n">Control</span>
              <span className="l">Lighting</span>
            </div>
            <div className="im-control">
              <span className="n">Control</span>
              <span className="l">Lens</span>
            </div>
            <div className="im-control">
              <span className="n">Control</span>
              <span className="l">Pose</span>
            </div>
            <div className="im-control">
              <span className="n">Control</span>
              <span className="l">Background</span>
            </div>
            <div className="im-control">
              <span className="n">Control</span>
              <span className="l">Presentation</span>
            </div>
          </div>
          <p>The AI generates a new version, but the studio is what gives the user real authorship over the creative direction&#8212;rather than the lottery of a single prompt.</p>
        </div>
        {/* 04 — DESIGNING THE STUDIO */}
        <div className="cs-section fade-up">
          <p className="cs-kicker">04 &#8212; Designing the studio</p>
          <h2>Familiar photography concepts, generative underneath.</h2>
          <p>A 3D camera and lighting viewport helps users understand and manipulate the scene the way a photographer thinks about it&#8212;where the camera sits, where the light falls. Presets, reusable poses and recipes then make repeatable workflows possible, so a look developed once can be applied across a catalogue.</p>
          <p>Around the creative core, the studio handles the practical parts of an actual product:</p>
          <div className="cs-flow">
            <span className="cs-flow-step">Projects</span>
            {" "}
            <span className="cs-flow-arrow">&#8594;</span>
            {" "}
            <span className="cs-flow-step">Upload</span>
            {" "}
            <span className="cs-flow-arrow">&#8594;</span>
            {" "}
            <span className="cs-flow-step">Configure</span>
            {" "}
            <span className="cs-flow-arrow">&#8594;</span>
            {" "}
            <span className="cs-flow-step">Generate</span>
            {" "}
            <span className="cs-flow-arrow">&#8594;</span>
            {" "}
            <span className="cs-flow-step">Compare</span>
            {" "}
            <span className="cs-flow-arrow">&#8594;</span>
            {" "}
            <span className="cs-flow-step">Save</span>
          </div>
          <p>Generations are stored in history, projects auto-save, and a credit-based system supports different subscription tiers&#8212;the unglamorous scaffolding that separates a demo from something a brand can actually rely on.</p>
        </div>
        {/* 05 — BUILDING */}
        <div className="cs-section fade-up">
          <p className="cs-kicker">05 &#8212; Building the product</p>
          <h2>Beyond a prototype, into a working product.</h2>
          <p>I took Imagio past a visual prototype and built the working product with Next.js, TypeScript, Three.js, Supabase, Polar and OpenAI&#8217;s image-generation model. That meant designing for the states a real generative product lives in&#8212;not just the happy path.</p>
          <div className="cs-cards cs-cards-3">
            <div className="cs-card">
              <h4>Generation states</h4>
              <p>Queued, generating, ready&#8212;the wait is part of the experience, not an error screen.</p>
            </div>
            <div className="cs-card">
              <h4>Failed generations</h4>
              <p>The model doesn&#8217;t always cooperate; the product has to fail gracefully and keep credits honest.</p>
            </div>
            <div className="cs-card">
              <h4>Credits &amp; tiers</h4>
              <p>A credit system that maps cleanly onto subscription tiers and real generation cost.</p>
            </div>
            <div className="cs-card">
              <h4>Storage &amp; history</h4>
              <p>Every generation kept and retrievable, so iteration has a memory.</p>
            </div>
            <div className="cs-card">
              <h4>Auth &amp; persistence</h4>
              <p>Accounts, and projects that auto-save so nothing creative is lost between sessions.</p>
            </div>
            <div className="cs-card">
              <h4>Studio architecture</h4>
              <p>The underlying model that makes angle, light and lens composable rather than hard-coded.</p>
            </div>
          </div>
        </div>
        {/* 06 — TAKEAWAY */}
        <div className="cs-section fade-up">
          <p className="cs-kicker">06 &#8212; The takeaway</p>
          <h2>What happens when AI becomes the studio itself?</h2>
          <p>Imagio explores what happens when the model isn&#8217;t just another tool inside the studio&#8212;it becomes the studio. The goal was to move away from &#8220;write a prompt and hope for the result&#8221; toward a familiar creative workflow where designers can direct, experiment and iterate.</p>
          <div className="cs-statement">&#8220;Direct the shoot. Don&#8217;t gamble on a sentence.&#8221;</div>
          <div className="cs-cta-wrap" style={{ marginTop: "44px" }}>
            <span className="cs-cta-note">Imagio is live.</span>
            {" "}
            <a className="cs-cta" href="https://vstudio-kappa.vercel.app/" target="_blank" rel="noopener">See it live</a>
          </div>
        </div>
        {/* CTA */}
        <div className="cs-cta-wrap fade-up">
          <span className="cs-cta-note">Want a walkthrough of the studio?</span>
          {" "}
          <a className="cs-cta" href="https://calendly.com/anandpatil19594/30min" target="_blank" rel="noopener">Book a call</a>
        </div>
      </article>
      {/* FOOTER */}
      <Footer />
    </>
  );
}
