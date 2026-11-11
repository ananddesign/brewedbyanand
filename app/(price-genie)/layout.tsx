import type { ReactNode } from 'react';
import Document from '@/components/Document';
import GoogleFonts from '@/components/GoogleFonts';

/* Own root layout only because the editorial case-study system (pg.css)
   hangs off body.pg. Used by Price Genie and QWEEN Immersive Retail.
   Playfair Display (the cover's italic lines) comes from Google Fonts. */
export default function PriceGenieLayout({ children }: { children: ReactNode }) {
  return (
    <Document
      bodyClassName="pg"
      head={<GoogleFonts href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400&display=swap" />}
    >
      {children}
    </Document>
  );
}
