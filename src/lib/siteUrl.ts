// Resolves the site's base URL for server-only files (sitemap, robots, etc).
// Prefers an explicit NEXT_PUBLIC_SITE_URL (set this once you have a custom
// domain). Otherwise falls back to Vercel's auto-provided domain env vars,
// so preview/production deploys don't fall through to localhost. Vercel's
// vars come without a protocol, so https:// is prepended.
export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  const vercelUrl =
    process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (vercelUrl) {
    return `https://${vercelUrl}`;
  }

  return "http://localhost:3000";
}
