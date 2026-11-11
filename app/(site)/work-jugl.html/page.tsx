import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import '@/styles/components.css';
import '@/styles/case-study.css';
import './jugl.css';

export const metadata: Metadata = {
  title: "JUGL — Brewed by Anand",
  description: "JUGL — a lightweight business OS for small sellers and pop-up businesses, built and shipped 0 to 1.",
};

export default function JuglPage() {
  return (
    <>
      {/* NAV */}
      <Nav />
      {/* 01 — HERO */}
      <section className="cs-hero" style={{ "--cs-hero-bg": "linear-gradient(150deg, #0E1A14 0%, #12241A 55%, #0B1510 100%)", "--cs-hero-tint": "radial-gradient(120% 90% at 80% 14%, rgba(126,185,150,0.20) 0%, rgba(11,11,12,0) 60%)", "--cs-hero-overlay": "linear-gradient(to top, rgba(7,12,9,0.82) 0%, rgba(7,12,9,0.08) 60%)" } as CSSProperties}>
        <div className="cs-hero-bg" />
        <div className="cs-hero-content">
          <p className="cs-hero-tag">Case Study &#8212; JUGL</p>
          <h1 className="cs-hero-title">Your business, beautifully tracked.</h1>
          <p className="cs-hero-subtitle">A lightweight business OS for small sellers and pop-up businesses. JUGL is built around the loudest, hardest moment of a small business&#8212;the pop-up itself&#8212;where the owner is also the salesperson, cashier, inventory manager and accountant, all at once.</p>
          <div className="jg-hero-flow" aria-label="Prepare, sell, track, understand">
            <span>Prepare</span>
            <em>&#8594;</em>
            {" "}
            <span>Sell</span>
            <em>&#8594;</em>
            {" "}
            <span>Track</span>
            <em>&#8594;</em>
            {" "}
            <span>Understand</span>
          </div>
          <div className="cs-hero-meta">
            <div>
              <h4>Role</h4>
              <p>Product Designer &#183;<br />Product Builder</p>
            </div>
            <div>
              <h4>Platform</h4>
              <p>Web App</p>
            </div>
            <div>
              <h4>Type</h4>
              <p>0&#8594;1 independent product</p>
            </div>
            <div>
              <h4>Status</h4>
              <p>Shipped &#183; <a href="https://jugl.vercel.app/" target="_blank" rel="noopener" style={{ color: "inherit", textDecoration: "underline" }}>Live</a></p>
            </div>
          </div>
        </div>
        <span className="cs-hero-scroll">Scroll</span>
      </section>
      {/* ARTICLE */}
      <article className="cs-article">
        {/* 02 — ORIGIN */}
        <div className="cs-section fade-up">
          <p className="cs-kicker">02 &#8212; It started with a pop-up</p>
          <h2>The selling was easy. Everything around it was broken.</h2>
          <p>My wife runs a small jewellery business and, like many small sellers, a lot of it happens at pop-ups. Watching her work, I noticed something that felt surprisingly broken: the actual selling was the easy part. The hard part was everything happening around it.</p>
          <div className="cs-flow-vertical">
            <span className="cs-flow-step">Stock had to be tracked</span>
            {" "}
            <span className="cs-flow-arrow">&#8595;</span>
            {" "}
            <span className="cs-flow-step">Sales had to be recorded</span>
            {" "}
            <span className="cs-flow-arrow">&#8595;</span>
            {" "}
            <span className="cs-flow-step">Cash and UPI had to be reconciled</span>
            {" "}
            <span className="cs-flow-arrow">&#8595;</span>
            {" "}
            <span className="cs-flow-step">Customers and expenses had to be remembered</span>
            {" "}
            <span className="cs-flow-arrow">&#8595;</span>
            {" "}
            <span className="cs-flow-step">Afterwards, someone had to figure out what happened</span>
          </div>
          <p>Most tools I found were built around &#8220;running a business&#8221; as an office activity. But small sellers don&#8217;t experience their business that way&#8212;they are the owner, salesperson, cashier, inventory manager and accountant, often at the same time.</p>
          <div className="cs-pullquote">That became the problem I wanted to solve.</div>
        </div>
        {/* 03 — OPPORTUNITY */}
        <div className="cs-section fade-up">
          <p className="cs-kicker">03 &#8212; The opportunity</p>
          <h2>They don&#8217;t need an ERP. They need speed.</h2>
          <p>Thinking beyond my wife&#8217;s business, there are thousands of small sellers running jewellery, fashion, food and craft businesses through pop-ups, markets and small stores. They don&#8217;t need another complicated ERP. They need something that works at the speed of their business.</p>
          <div className="cs-statement">&#8220;A simple operating system for small businesses&#8212;especially when they&#8217;re out there selling.&#8221;</div>
        </div>
        {/* 04 — MOMENT OF SALE */}
        <div className="cs-section fade-up">
          <p className="cs-kicker">04 &#8212; Designing around the moment of sale</p>
          <h2>The most important screen wasn&#8217;t the dashboard.</h2>
          <p>The biggest insight was that the pivotal moment wasn&#8217;t the dashboard&#8212;it was the pop-up itself. When a customer is standing in front of you, there isn&#8217;t time to navigate a complicated system. So I structured JUGL around the complete business loop.</p>
          <div className="cs-flow">
            <span className="cs-flow-step">Prepare</span>
            {" "}
            <span className="cs-flow-arrow">&#8594;</span>
            {" "}
            <span className="cs-flow-step">Sell</span>
            {" "}
            <span className="cs-flow-arrow">&#8594;</span>
            {" "}
            <span className="cs-flow-step">Track</span>
            {" "}
            <span className="cs-flow-arrow">&#8594;</span>
            {" "}
            <span className="cs-flow-step">Understand</span>
          </div>
          <div className="cs-cards cs-cards-3">
            <div className="cs-card">
              <h4>Before the pop-up</h4>
              <p>Add inventory, create the event, and know exactly what you&#8217;re taking with you.</p>
            </div>
            <div className="cs-card">
              <h4>During the pop-up</h4>
              <p>Log sales quickly, identify products, record quantity and payment method, keep a running total.</p>
            </div>
            <div className="cs-card">
              <h4>After the pop-up</h4>
              <p>Understand revenue, expenses, customers and what happened to your inventory.</p>
            </div>
          </div>
          <p>The product therefore isn&#8217;t just an inventory manager. It&#8217;s an <strong>event-to-business system.</strong></p>
        </div>
        {/* 05 — ONE PRODUCT, MANY JOBS */}
        <div className="cs-section fade-up">
          <p className="cs-kicker">05 &#8212; One product, multiple jobs</p>
          <h2>Bringing the operational pieces together.</h2>
          <p>A small seller wears every hat, so JUGL had to cover every job&#8212;without ever feeling like six apps stitched together.</p>
          <div className="cs-cards cs-cards-3">
            <div className="cs-card">
              <h4>Inventory</h4>
              <p>Products, pricing, cost, margins, stock levels and SKUs.</p>
            </div>
            <div className="cs-card">
              <h4>Pop-ups</h4>
              <p>Create events, track stall costs, and manage upcoming, live and completed events.</p>
            </div>
            <div className="cs-card">
              <h4>Live selling</h4>
              <p>Scan or log a product manually, record quantity and payment method, keep a live sales log.</p>
            </div>
            <div className="cs-card">
              <h4>Expenses</h4>
              <p>Capture business expenses and import existing data through CSV.</p>
            </div>
            <div className="cs-card">
              <h4>Customers</h4>
              <p>Capture customer information at the point of sale, including through QR.</p>
            </div>
            <div className="cs-card">
              <h4>Checkout</h4>
              <p>A customer-facing QR checkout experience supporting UPI and cash.</p>
            </div>
          </div>
        </div>
        {/* 06 — SCAN ITEM */}
        <div className="cs-section fade-up">
          <p className="cs-kicker">06 &#8212; Making selling faster</p>
          <h2>Logging a sale shouldn&#8217;t mean scrolling a list.</h2>
          <p>One place I wanted to remove friction was logging a sale. Instead of forcing a seller to search through a long inventory list mid-conversation, JUGL introduces <strong>Scan Item.</strong></p>
          <div className="cs-flow">
            <span className="cs-flow-step">Photograph the product</span>
            {" "}
            <span className="cs-flow-arrow">&#8594;</span>
            {" "}
            <span className="cs-flow-step">AI identifies the item</span>
            {" "}
            <span className="cs-flow-arrow">&#8594;</span>
            {" "}
            <span className="cs-flow-step">Seller verifies</span>
            {" "}
            <span className="cs-flow-arrow">&#8594;</span>
            {" "}
            <span className="cs-flow-step">Sale recorded</span>
          </div>
          <p>Because AI isn&#8217;t always right, low-confidence results are surfaced for manual verification rather than being silently trusted. That small interaction reflects a larger principle:</p>
          <div className="cs-statement">&#8220;Automate the tedious part. Keep the human in control.&#8221;</div>
        </div>
        {/* 07 — SYSTEM */}
        <div className="cs-section fade-up">
          <p className="cs-kicker">07 &#8212; The system behind the simplicity</p>
          <h2>A sale isn&#8217;t just a sale.</h2>
          <p>One sale touches many parts of the business. JUGL connects these pieces so sellers don&#8217;t have to maintain separate spreadsheets or remember what changed where.</p>
          <div className="cs-flow">
            <span className="cs-flow-step">Sale</span>
            {" "}
            <span className="cs-flow-arrow">&#8594;</span>
            {" "}
            <span className="cs-flow-step">Revenue</span>
            {" "}
            <span className="cs-flow-arrow">&#8594;</span>
            {" "}
            <span className="cs-flow-step">Payment method</span>
            {" "}
            <span className="cs-flow-arrow">&#8594;</span>
            {" "}
            <span className="cs-flow-step">Inventory</span>
            {" "}
            <span className="cs-flow-arrow">&#8594;</span>
            {" "}
            <span className="cs-flow-step">Customer</span>
            {" "}
            <span className="cs-flow-arrow">&#8594;</span>
            {" "}
            <span className="cs-flow-step">Event performance</span>
          </div>
          <p>The goal wasn&#8217;t to create more dashboards. It was to make the underlying business <strong>feel more connected.</strong></p>
        </div>
        {/* 08 — SHIPPED */}
        <div className="cs-section fade-up">
          <p className="cs-kicker">08 &#8212; What I shipped</p>
          <h2>A working product, not a concept.</h2>
          <ul className="jg-shipped">
            <li>Inventory management</li>
            <li>Live pop-up sales</li>
            <li>AI-assisted product recognition</li>
            <li>Cash / UPI tracking</li>
            <li>Expense management</li>
            <li>Customer records</li>
            <li>QR-based customer capture</li>
            <li>Customer checkout</li>
            <li>Business dashboard</li>
            <li>Event history</li>
            <li>Low-stock alerts</li>
            <li>CSV expense import</li>
          </ul>
          <div className="cs-cta-wrap" style={{ marginTop: "44px" }}>
            <span className="cs-cta-note">JUGL is live and in use.</span>
            {" "}
            <a className="cs-cta" href="https://jugl.vercel.app/" target="_blank" rel="noopener">Explore the live product</a>
          </div>
        </div>
        {/* 09 — WHAT I LEARNED */}
        <div className="cs-section fade-up">
          <p className="cs-kicker">09 &#8212; What I learned</p>
          <h2>The product had to almost disappear.</h2>
          <p>Building JUGL changed how I think about small-business products. The biggest opportunity isn&#8217;t always adding more functionality&#8212;it&#8217;s understanding <strong>when</strong> the product is being used, <strong>who</strong> is using it, and <strong>what else</strong> that person is doing at that exact moment.</p>
          <p>For a small seller at a busy pop-up, the product has to almost disappear. It needs to help them sell&#8212;not make them manage software. And that started with something very personal:</p>
          <div className="cs-pullquote">I wasn&#8217;t researching a hypothetical user. I was watching someone close to me try to run a real business.</div>
          <p>That made the problem impossible to ignore.</p>
        </div>
        {/* CTA */}
        <div className="cs-cta-wrap fade-up">
          <span className="cs-cta-note">Want to talk through how it was built?</span>
          {" "}
          <a className="cs-cta" href="https://calendly.com/anandpatil19594/30min" target="_blank" rel="noopener">Book a call</a>
        </div>
      </article>
      {/* FOOTER */}
      <Footer />
    </>
  );
}
