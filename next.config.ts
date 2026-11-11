import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* The static site served a directory index for /butter-style-site/ and
     relied on the trailing slash for its relative asset paths, so Next's
     default slash-stripping redirect must not run. */
  skipTrailingSlashRedirect: true,

  async redirects() {
    return [
      /* The homepage was also reachable as /index.html (internal links used
         it). Send it to the canonical / rather than serving a duplicate. */
      { source: '/index.html', destination: '/', permanent: true },
    ];
  },

  async rewrites() {
    return [
      /* Standalone demo copied verbatim into public/butter-style-site/. */
      { source: '/butter-style-site', destination: '/butter-style-site/index.html' },
      { source: '/butter-style-site/', destination: '/butter-style-site/index.html' },
    ];
  },
};

export default nextConfig;
