import type { ReactNode } from 'react';
import Document from '@/components/Document';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return <Document>{children}</Document>;
}
