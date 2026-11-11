import type { ReactNode } from 'react';
import Document from '@/components/Document';

/* Own root layout only because the case study styles hang off body.qw. */
export default function QweenLayout({ children }: { children: ReactNode }) {
  return <Document bodyClassName="qw">{children}</Document>;
}
