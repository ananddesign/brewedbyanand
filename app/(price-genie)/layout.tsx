import type { ReactNode } from 'react';
import Document from '@/components/Document';

/* Own root layout only because the case study styles hang off body.pg. */
export default function PriceGenieLayout({ children }: { children: ReactNode }) {
  return <Document bodyClassName="pg">{children}</Document>;
}
