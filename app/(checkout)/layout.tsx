import type { ReactNode } from 'react';
import Document from '@/components/Document';
import GoogleFonts from '@/components/GoogleFonts';

/* Simply Checkout is built on the QWEEN case-study system (qween.css,
   body.qw) plus its own layer (checkout.css, body.co). */
export default function CheckoutLayout({ children }: { children: ReactNode }) {
  return (
    <Document
      bodyClassName="qw co"
      head={<GoogleFonts href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,500&display=swap" />}
    >
      {children}
    </Document>
  );
}
