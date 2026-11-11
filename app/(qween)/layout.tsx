import type { ReactNode } from 'react';
import Document from '@/components/Document';
import GoogleFonts from '@/components/GoogleFonts';

/* Own root layout only because the case study styles hang off body.qw.
   Caveat and Playfair Display come from Google Fonts, as on the static page. */
export default function QweenLayout({ children }: { children: ReactNode }) {
  return (
    <Document
      bodyClassName="qw"
      head={<GoogleFonts href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;600&family=Playfair+Display:ital,wght@1,400;1,500&display=swap" />}
    >
      {children}
    </Document>
  );
}
