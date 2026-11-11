import type { ReactNode } from 'react';
import SiteBehaviour from './behaviour/SiteBehaviour';
import '@/styles/base.css';

/* The <html>/<body> shell every root layout renders. Pages are full
   document loads (plain <a> links, as on the static site), so each route
   group owns its own root layout and can set its own body class.
   suppressHydrationWarning: the intro gate and the behaviour scripts add
   classes to <html>/<body> outside React, exactly as the static site did. */
export default function Document({
  bodyClassName,
  head,
  children,
}: {
  bodyClassName?: string;
  head?: ReactNode;
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>{head}</head>
      <body className={bodyClassName} suppressHydrationWarning>
        {/* Renders nothing; placed first so its effect runs before the
            page's own behaviour, matching the original script order. */}
        <SiteBehaviour />
        {children}
      </body>
    </html>
  );
}
