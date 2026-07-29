import { imageBuilder } from "@/sanity/sanity-shop-utils";
import { Product } from "@/types/product";
import { SiteSettings } from "@/types/siteSettings";

const SITE_NAME = "Suncity Pallets Liquidation Store";

type BreadcrumbItem = {
  name: string;
  url: string;
};

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildOrganizationJsonLd(
  siteSettings: SiteSettings | null,
  siteUrl: string
) {
  const org = siteSettings?.organization;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteSettings?.siteName || SITE_NAME,
    legalName: org?.legalName,
    url: siteUrl,
    logo: siteSettings?.logo ? imageBuilder(siteSettings.logo).url() : undefined,
    telephone: org?.phone,
    address:
      org?.streetAddress || org?.addressLocality
        ? {
            "@type": "PostalAddress",
            streetAddress: org?.streetAddress,
            addressLocality: org?.addressLocality,
            addressRegion: org?.addressRegion,
            postalCode: org?.postalCode,
            addressCountry: org?.addressCountry,
          }
        : undefined,
    sameAs: siteSettings?.sameAs?.length ? siteSettings.sameAs : undefined,
  };
}

export type ReviewStats = {
  average: number;
  count: number;
};

export function buildProductJsonLd({
  product,
  siteUrl,
  reviewStats,
}: {
  product: Product;
  siteUrl: string;
  reviewStats?: ReviewStats | null;
}) {
  const url = `${siteUrl}/products/${product.slug?.current}`;
  const images = (product.previewImages || [])
    .map((preview: any) => preview?.image && imageBuilder(preview.image).url())
    .filter(Boolean);

  const effectivePrice =
    product.discountedPrice && product.discountedPrice < product.price
      ? product.discountedPrice
      : product.price;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    sku: product._id,
    image: images,
    url,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "USD",
      price: effectivePrice,
      availability: product.status
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
    },
    ...(reviewStats && reviewStats.count > 0
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: reviewStats.average,
            reviewCount: reviewStats.count,
          },
        }
      : {}),
  };
}

export function buildArticleJsonLd({
  post,
  siteUrl,
}: {
  post: any;
  siteUrl: string;
}) {
  const url = `${siteUrl}/blogs/${post?.slug?.current}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post?.title,
    description: post?.metadata,
    image: post?.mainImage ? [imageBuilder(post.mainImage).url()] : undefined,
    url,
    datePublished: post?.publishedAt,
    author: post?.author?.name
      ? {
          "@type": "Person",
          name: post.author.name,
        }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };
}
