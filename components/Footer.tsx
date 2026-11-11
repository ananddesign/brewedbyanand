/* Site footer. "rule" is the plain hairline footer; "image" sits the
   tagline over the footer photograph. The homepage adds footer--home and
   lets the tagline fade up. */
export default function Footer({ variant = 'rule', home = false }: { variant?: 'rule' | 'image'; home?: boolean }) {
  if (variant === 'rule') {
    return (
      <footer className="footer--rule">
        <p className="footer-tagline">Always brewing something new</p>
      </footer>
    );
  }
  return (
    <footer className={home ? 'footer--image footer--home' : 'footer--image'}>
      <picture>
        <source srcSet="/assets/img/footer.webp" type="image/webp" />
        <img className="footer-bg" src="/assets/img/footer.jpg" alt="" width="2560" height="1509" loading="lazy" />
      </picture>
      <p className={home ? 'footer-tagline fade-up' : 'footer-tagline'}>Always brewing something new</p>
    </footer>
  );
}
