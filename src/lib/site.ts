/**
 * Site URL configuration for SEO (sitemap, robots, metadata).
 * Set SITE_URL or NEXT_PUBLIC_SITE_URL in Vercel env vars to override.
 */
export const SITE_URL =
  process.env.SITE_URL ??
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://pavliukweb.com";
