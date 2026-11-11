import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import '@/styles/components.css';
import '@/styles/resume.css';

export const metadata: Metadata = {
  title: "Resume — Brewed by Anand",
  description: "Anand Patil — Product Designer. 9+ years across fintech, luxury/D2C and enterprise SaaS. Qween, PhonePe, Lollypop Design, Fractal Ink, Startup Farms.",
};

export default function ResumePage() {
  return (
    <>
      {/* NAV */}
      <Nav onLight />
      {/* HEAD */}
      <header className="resume-head">
        <p className="resume-kicker fade-up">Resume</p>
        <h1 className="resume-name fade-up fade-up-d1">Anand Patil</h1>
        <p className="resume-lead fade-up fade-up-d1">Product Designer with 9+ years of experience across fintech, luxury/D2C, and enterprise SaaS, combining 0&#8594;1 product design, design systems leadership, and data-driven design strategy.</p>
        <div className="resume-actions fade-up fade-up-d2">
          <a className="book-call-btn" href="https://calendly.com/anandpatil19594/30min" target="_blank" rel="noopener"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="1" y="2" width="12" height="11" rx="1" stroke="white" strokeWidth="1.2" /> <path d="M1 5.5H13" stroke="white" strokeWidth="1.2" /> <path d="M4 1V3.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" /> <path d="M10 1V3.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" /> </svg> Book a call</a>
          {" "}
          <a className="btn-ghost" href="/assets/anand-patil-resume.pdf" download="Anand-Patil-Resume.pdf"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> <path d="M7 1V9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /> <path d="M3.5 6.5L7 10L10.5 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /> <path d="M1.5 12.5H12.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /> </svg> Download PDF</a>
          {" "}
          <a className="btn-ghost" href="mailto:anandpatil19594@gmail.com">Email</a>
          {" "}
          <a className="btn-ghost" href="https://www.linkedin.com/in/anandzyn94/" target="_blank" rel="noopener">LinkedIn</a>
        </div>
        <div className="resume-facts fade-up fade-up-d2">
          <div>
            <h4>Open to</h4>
            <p>Senior / Staff Product Design<br />Europe</p>
          </div>
          <div>
            <h4>Experience</h4>
            <p>9+ years &#8212; fintech, luxury/D2C,<br />enterprise SaaS</p>
          </div>
        </div>
      </header>
      <main className="resume-body">
        {/* EXPERIENCE */}
        <section className="resume-section fade-up">
          <h2>Experience</h2>
          <div className="worked-list">
            <div className="worked-item">
              <div className="worked-row">
                <div>
                  <p className="worked-company">Qween</p>
                  <p className="worked-role">Staff Product Designer</p>
                </div>
                <p className="worked-date">SEP 2025 &#8212; CURRENT</p>
              </div>
              <ul className="worked-points">
                <li>Authored Qween's design manifesto, setting the north-star principles for an emotion-led, experience-first luxury jewellery platform across web, app, and in-store touchpoints.</li>
                <li>Led 0&#8594;1 design of the brand's full digital product suite &#8212; consumer website, e-commerce platform, and in-store experiential systems &#8212; from concept through pre-launch.</li>
                <li>Built and scaled Qween DS 2.0, a dedicated design system, to keep visual and interaction language consistent across every surface as the product suite grew.</li>
                <li>Leading and mentoring a 3-person design team, moving from individual craft ownership into structured delivery, design QA, and component ownership.</li>
                <li>Prototyped AI-augmented design workflows, including generative styling and avatar-based try-on concepts, to explore new interaction models for luxury e-commerce.</li>
              </ul>
            </div>
            <div className="worked-item">
              <div className="worked-row">
                <div>
                  <p className="worked-company">PhonePe</p>
                  <p className="worked-role">Lead Product Designer</p>
                </div>
                <p className="worked-date">2023 &#8212; 2025</p>
              </div>
              <ul className="worked-points">
                <li>Led the 0&#8594;1 design for Pincode App, a hyperlocal e-commerce platform competing in the quick commerce space.</li>
                <li>Helped scale the app from launch to 20,000+ orders, improving conversion rates by 37% through intuitive and frictionless checkout experiences.</li>
                <li>Emphasized hyperlocal personalization to boost user retention and drive repeat purchases.</li>
                <li>Played a key role in refining lending KYC application flows, reducing drop-offs by 8%.</li>
              </ul>
            </div>
            <div className="worked-item">
              <div className="worked-row">
                <div>
                  <p className="worked-company">Lollypop Design</p>
                  <p className="worked-role">Sr Product Designer</p>
                </div>
                <p className="worked-date">2021 &#8212; 2023</p>
              </div>
              <ul className="worked-points">
                <li>HDFC Securities: Led the pivotal design change for the stocks app of India's largest bank, making it more appealing and accessible for young traders.</li>
                <li>Played a key role in projects for HDFC Bank, Boombox, and Tenacity, contributing to improved user engagement and business growth.</li>
                <li>Redesigned the Bookster ERP system, streamlining workflows and reducing user friction, leading to a 30% reduction in task completion time.</li>
              </ul>
            </div>
            <div className="worked-item">
              <div className="worked-row">
                <div>
                  <p className="worked-company">Fractal Ink</p>
                  <p className="worked-role">Product Designer</p>
                </div>
                <p className="worked-date">2019 &#8212; 2021</p>
              </div>
              <ul className="worked-points">
                <li>Revamped the insurance journey for Bajaj Finserv, resulting in an 18% increase in conversions and a 32% decrease in drop-offs.</li>
                <li>Simplified complex ERP apps for Axis Bank &amp; Nissan workflows, reducing task completion time by 20%.</li>
                <li>Designed interactive digital kiosks for Croma in-store interfaces, driving a 9% increase in assisted sales.</li>
              </ul>
            </div>
            <div className="worked-item">
              <div className="worked-row">
                <div>
                  <p className="worked-company">Startup Farms</p>
                  <p className="worked-role">Product Designer</p>
                </div>
                <p className="worked-date">2017 &#8212; 2019</p>
              </div>
              <ul className="worked-points">
                <li>Worked with leading brands like TATA Sky and 50+ regional and international brands across product design, branding, advertising, and visual storytelling.</li>
              </ul>
            </div>
          </div>
        </section>
        {/* SKILLS */}
        <section className="resume-section fade-up">
          <h2>What I do</h2>
          <div className="skill-grid">
            <div className="skill-block">
              <h3>Product</h3>
              <div className="tech-tags">
                <span className="tech-tag">0-1 journeys</span>
                {" "}
                <span className="tech-tag">Information architecture</span>
                {" "}
                <span className="tech-tag">Experience strategy</span>
                {" "}
                <span className="tech-tag">Discovery research</span>
                {" "}
                <span className="tech-tag">Design QA</span>
              </div>
            </div>
            <div className="skill-block">
              <h3>Craft</h3>
              <div className="tech-tags">
                <span className="tech-tag">Design systems</span>
                {" "}
                <span className="tech-tag">Design tokens</span>
                {" "}
                <span className="tech-tag">Interaction design</span>
                {" "}
                <span className="tech-tag">Motion</span>
                {" "}
                <span className="tech-tag">Responsive</span>
              </div>
            </div>
            <div className="skill-block">
              <h3>Tools &amp; code</h3>
              <div className="tech-tags">
                <span className="tech-tag">Figma</span>
                {" "}
                <span className="tech-tag">Figma plugin API</span>
                {" "}
                <span className="tech-tag">HTML / CSS</span>
                {" "}
                <span className="tech-tag">Three.js</span>
              </div>
            </div>
          </div>
        </section>
        <div className="resume-note fade-up">
          <p>Prefer the long version? The case studies carry the reasoning behind the work.</p>
          <div className="link-row">
            <a href="/#work">Featured work</a>
            {" "}
            <a href="https://github.com/ananddesign" target="_blank" rel="noopener">GitHub</a>
            {" "}
            <a href="https://www.linkedin.com/in/anandzyn94/" target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </div>
      </main>
      {/* FOOTER */}
      <Footer />
    </>
  );
}
