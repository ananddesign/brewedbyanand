# Brewed by Anand

Portfolio site for Anand Patil — https://www.brewedbyanand.com

Next.js 16 (App Router) + React 19 + TypeScript, plain global CSS. Migrated
1:1 from the original hand-written static site: same markup, same CSS, same
URLs (including the `.html` suffixes).

## Commands

Requires Node.js 20.9+ (developed on Node 24 LTS).

```bash
npm install        # install dependencies
npm run dev        # dev server on http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
```

Append `?intro=true` to the homepage URL to replay the counter intro (it
otherwise plays once per browser session). `&slow=N` slows it down and
`&freeze=SECONDS` pins it at one moment.

## Layout

```
app/
  (home)/            homepage — root layout includes the intro gate script
  (site)/            resume, JUGL/Imagio/CityScope case studies, write-ups
  (price-genie)/     Price Genie — own root layout for <body class="pg">
  (qween)/           QWEEN — own root layout for <body class="qw">
  robots.ts, sitemap.ts
components/
  Document.tsx       <html>/<body> shell shared by every root layout
  Nav.tsx, Footer.tsx
  behaviour/         client-only scripts ported from the old assets/js:
                     site-wide (nav, reveals, carousel), intro, 3D cup,
                     Price Genie and QWEEN scroll choreography
lib/site.ts          shared URLs and the page list used by the sitemap
styles/              the original stylesheets, unchanged apart from
                     root-relative asset paths
public/              images, fonts, model, resume PDF, logos, and the
                     standalone /butter-style-site/ demo — all at their
                     original paths
```

Notes for future work:

- Route folders are named after the live URLs (`work-qween.html/`), so
  existing links and search results keep working.
- Internal links are plain `<a>` tags, so every navigation is a full page
  load like the static site. Each page loads its own stylesheet set; with
  client-side `<Link>` navigation those page stylesheets would leak between
  pages. Revisit this together with the styling during the redesign.
- Behaviour components drive the server-rendered markup directly (class
  toggles, observers), mirroring the original scripts. They clean up after
  themselves, so they are safe under React Strict Mode.
- `components/behaviour/hero/marble-texture.js` was unused in the original
  site and is still unused.
