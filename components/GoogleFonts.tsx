/* The Google Fonts <head> links the static case studies used: two
   preconnects, then the stylesheet for the given families. */
export default function GoogleFonts({ href }: { href: string }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="stylesheet" href={href} />
    </>
  );
}
