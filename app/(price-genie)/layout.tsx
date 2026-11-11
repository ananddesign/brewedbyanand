import type { ReactNode } from 'react';
import Document from '@/components/Document';

/* Own root layout only because the editorial case-study system (pg.css)
   hangs off body.pg. Used by Price Genie and QWEEN Immersive Retail. */
export default function PriceGenieLayout({ children }: { children: ReactNode }) {
  return <Document bodyClassName="pg">{children}</Document>;
}
