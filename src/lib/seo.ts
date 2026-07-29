import { Metadata } from "next";

const SITE_NAME = "Suncity Pallets Liquidation Store";
const DEFAULT_IMAGE = "/suncity_full_logo.png";

type PageMetadataInput = {
  title: string;
  description: string;
  /** Path relative to the site root, e.g. "/shop" or "/products/my-slug". */
  path: string;
  /** Absolute image URL (e.g. from Sanity's imageBuilder) or a path under /public. */
  image?: string;
  type?: "website" | "article";
  /** Set false to noindex a page (defaults to indexable). */
  index?: boolean;
};

/**
 * Single source of truth for a page's <title>, description, canonical link,
 * robots tag, and Open Graph / Twitter tags. Every page on the site should
 * build its metadata through this function so all of the above stay
 * consistent and only need to be changed in one place.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = "website",
  index = true,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    authors: [{ name: SITE_NAME }],
    alternates: {
      canonical: path,
    },
    robots: {
      index,
      follow: true,
      googleBot: {
        index,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      images: [
        {
          url: image,
          width: 1328,
          height: 404,
          alt: title,
        },
      ],
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
