import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import '@/styles/components.css';
import '@/styles/article.css';

export const metadata: Metadata = {
  title: "Bunny Carrot Chase — Brewed by Anand",
  description: "Bunny Carrot Chase — a Three.js character built from pure geometry. No Blender, no .obj files, one HTML file.",
};

export default function BunnyCarrotPage() {
  return (
    <>
      {/* NAV */}
      <Nav />
      {/* HERO */}
      <section className="blog-hero blog-hero--bunny-carrot" style={{ "--blog-hero-overlay": "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)" } as CSSProperties}>
        <div className="blog-hero-bg" />
        <div className="blog-hero-content">
          <p className="blog-hero-tag">Experiment &#8212; Three.js / Character Design</p>
          <h1 className="blog-hero-title">Bunny Carrot Chase</h1>
          <p className="blog-hero-subtitle">On building a clay bunny from pure geometry, and what the carrot designs reveal about the game underneath.</p>
          <p className="blog-hero-date">2026</p>
        </div>
      </section>
      {/* ARTICLE */}
      <article className="blog-article">
        {/* Intro */}
        <div className="blog-section fade-up">
          <p>When artists model a character, they drag vertices. They push and pull until the shape feels right. The feedback is immediate, physical, intuitive.</p>
          <p>When you model in Three.js, no Blender, no .obj files, primitives only none of that is available to you. You look at a reference image. You estimate a ratio. You write a number. You re-render. You look again.</p>
          <p>It is a different skill. Not better or worse. Slower in some directions, more precise in others. Every dimension is a decision you have to consciously make and write down.</p>
        </div>
        <div className="blog-pullquote fade-up">Modelling from a reference image in code means reasoning about proportions, not dragging vertices.</div>
        {/* The bunny */}
        <div className="blog-section fade-up">
          <h2>The bunny, piece by piece.</h2>
          <div className="blog-code">// SphereGeometry, CylinderGeometry, and a lot of 0.05 increments</div>
          <p>The brief was a clay-style render &#8212; round white body, stubby ears, two black dot eyes, sitting pose. Simple to look at. Harder to recreate without a sculpting tool.</p>
          <table className="blog-parts">
            <tbody>
              <tr>
                <td>Body</td>
                <td>SphereGeometry scaled (1, 0.85, 1.1). Slightly flat on the vertical, slightly deep front-to-back. What stops it reading as a perfect ball &#8212; which is what nobody looks like.</td>
              </tr>
              <tr>
                <td>Head</td>
                <td>Smaller sphere. 0.95 units up from centre, 0.3 units forward. The forward offset is everything &#8212; it makes the head sit in front of the body, not on top of it. That single number is the difference between a bunny and a snowman.</td>
              </tr>
              <tr>
                <td>Ears</td>
                <td>Two CylinderGeometry primitives, each rotated &#177;0.18 radians outward. Close enough to read as ears. Far enough apart to have personality. Any wider and they look alarmed. Any narrower and they look like a hat.</td>
              </tr>
              <tr>
                <td>Eyes</td>
                <td>Two spheres at 0.055 unit radius. Positioned entirely by feel. Not by formula. The face only clicked when the eyes were in the right place, and you know right when you see it.</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Four iterations */}
        <div className="blog-section fade-up">
          <h2>Four iterations.</h2>
          <p>Not twenty. Not two. Four. This is important because most people assume character modelling in code will take forever, and abandon it before discovering the iteration count is actually small &#8212; if you reason carefully between each one.</p>
          <div className="blog-iterations">
            <div className="blog-iter">
              <div className="blog-iter-num">01</div>
              <div className="blog-iter-text">A shape. Technically correct. Reads as a white blob with ears attached.</div>
            </div>
            <div className="blog-iter">
              <div className="blog-iter-num">02</div>
              <div className="blog-iter-text">An animal. The head offset started working. Something with intention was emerging.</div>
            </div>
            <div className="blog-iter">
              <div className="blog-iter-num">03</div>
              <div className="blog-iter-text">Close. The proportions were landing. The face still wasn&#8217;t right.</div>
            </div>
            <div className="blog-iter">
              <div className="blog-iter-num">04</div>
              <div className="blog-iter-text">The bunny in the reference image. Immediately. Not gradually &#8212; the moment the last proportion clicked, the whole thing resolved at once.</div>
            </div>
          </div>
        </div>
        <div className="blog-pullquote fade-up">The moment the proportions landed, it was immediately a bunny. Not before.</div>
        {/* Carrots */}
        <div className="blog-section fade-up">
          <h2>The carrots were the real design work.</h2>
          <div className="blog-code">// three types, three visual languages, recognisable from any angle at any scale</div>
          <p>The bunny needed to be charming. The carrots needed to be instantly legible mid-game, from any angle, at any scale, under movement. That is a harder problem than charm.</p>
          <p>Colour alone does not solve it. Colour helps, but if two carrots have the same silhouette, players hesitate. Hesitation in a 30-second game is a design failure. Each carrot needed a distinct shape language, not just a distinct hue.</p>
          <table className="blog-parts">
            <tbody>
              <tr>
                <td>Orange</td>
                <td>Cone inverted, three leaf spheres at the top. The most readable silhouette universally understood as carrot. It is the baseline. Familiar on purpose.</td>
              </tr>
              <tr>
                <td>Gold</td>
                <td>Rich yellow body with two spinning torus rings, one tilted. Five sparkle dots orbiting. Kinetic. You see it moving before you see its colour. Unmistakably different.</td>
              </tr>
              <tr>
                <td>Purple</td>
                <td>Deep violet with three ribbed bands, lilac leaves, a five-orb crown rotating at the top. Looks like a magical artefact. It should it only appears when you earn it.</td>
              </tr>
            </tbody>
          </table>
          <p>The visual design of each carrot is not decorative. It is functional documentation of the game&#8217;s rules. Orange means: always here, always available, standard effort. Gold means: fleeting, urgent, look fast. Purple means: you did something different to summon this.</p>
          <p>Players learn this without being told. That is the game design working correctly.</p>
        </div>
        {/* Why no external models */}
        <div className="blog-section fade-up">
          <h2>Why no external models.</h2>
          <p>The constraint was not a limitation it was a choice that held throughout the project. One HTML file. No build tools. No external assets. Open on any phone.</p>
          <p>Importing a .obj file breaks that contract. The moment you have an external dependency, you have a loading state, a failure state, a hosting problem. Three primitives and some math have none of those problems.</p>
          <p>There is a broader principle here. The projects that ship cleanly are usually the ones where every constraint was chosen deliberately, not inherited accidentally. Constraints you choose become features. Constraints you inherit become bugs.</p>
        </div>
        <div className="blog-pullquote fade-up">One .html file. Open on any phone. No install.</div>
        {/* Closing */}
        <div className="blog-section fade-up">
          <p>That sentence is the entire technical philosophy of the project. Every modelling decision, every geometry choice, every carrot design &#8212; it all serves that sentence. The bunny exists inside that sentence. So does the radar chart. So does the behavioural layer.</p>
          <p>When you know what you are making, you know what you are not making. That clarity is what makes the thing ship.</p>
        </div>
        {/* CTA */}
        <div className="blog-cta-wrap fade-up">
          <a className="blog-cta" href="#" target="_blank" rel="noopener">Play Bunny Carrot Chase &#8599;</a>
        </div>
      </article>
      {/* FOOTER */}
      <Footer variant="image" />
    </>
  );
}
