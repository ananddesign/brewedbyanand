import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

/* The static site had no robots.txt (everything crawlable). This keeps
   that behaviour and points crawlers at the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
