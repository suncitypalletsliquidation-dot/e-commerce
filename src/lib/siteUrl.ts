// Resolves the site's base URL for server-only files (sitemap, robots, layout, etc).
// Sanitizes URLs by trimming whitespace/quotes, auto-prepending https:// if
// missing, stripping trailing slashes, and catching invalid URLs safely.
export function getSiteUrl(): string {
  const candidate =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.URL ||
    process.env.DEPLOY_PRIME_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL;

  if (candidate && typeof candidate === "string") {
    let clean = candidate.trim().replace(/^["']|["']$/g, "");
    if (clean) {
      if (!clean.startsWith("http://") && !clean.startsWith("https://")) {
        clean = `https://${clean}`;
      }
      clean = clean.replace(/\/$/, "");
      try {
        new URL(clean);
        return clean;
      } catch {
        // Fall back to default if invalid
      }
    }
  }

  return "http://localhost:3000";
}

export function getMetadataBaseUrl(): URL {
  const urlStr = getSiteUrl();
  try {
    return new URL(urlStr);
  } catch {
    return new URL("http://localhost:3000");
  }
}
