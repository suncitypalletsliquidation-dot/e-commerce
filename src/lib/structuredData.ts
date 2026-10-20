import { imageBuilder } from "@/sanity/sanity-shop-utils";
import { Category } from "@/types/category";
import { Product } from "@/types/product";
import { SiteSettings } from "@/types/siteSettings";
import { portableTextToPlainText } from "./portableText";

const SITE_NAME = "Suncity Pallets Liquidation Store";

const CONDITION_TO_SCHEMA_ORG: Record<string, string> = {
  New: "https://schema.org/NewCondition",
  UsedLikeNew: "https://schema.org/UsedCondition",
  UsedGood: "https://schema.org/UsedCondition",
  Refurbished: "https://schema.org/RefurbishedCondition",
  Damaged: "https://schema.org/DamagedCondition",
};

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

type FaqItem = {
  question: string;
  answer: string;
};

export function buildFaqPageJsonLd(faqs: FaqItem[] | undefined) {
  const validFaqs = (faqs || []).filter((faq) => faq.question && faq.answer);
  if (validFaqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: validFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Sitewide Store node, meant to be injected once (root layout) alongside
 * buildWebSiteJsonLd(). Per-page nodes (buildCategoryPageJsonLd, etc.)
 * reference this by its @id rather than repeating the business details.
 */
export function buildStoreJsonLd(
  siteSettings: SiteSettings | null,
  siteUrl: string
) {
  const org = siteSettings?.organization;

  return {
    "@type": "Store",
    "@id": `${siteUrl}/#store`,
    name: siteSettings?.siteName || SITE_NAME,
    legalName: org?.legalName,
    url: siteUrl,
    image: siteSettings?.logo
      ? imageBuilder(siteSettings.logo).url()
      : `${siteUrl}/suncity_full_logo.png`,
    telephone: org?.phone,
    email: org?.email,
    priceRange: org?.priceRange,
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

export function buildWebSiteJsonLd(
  siteSettings: SiteSettings | null,
  siteUrl: string
) {
  return {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteSettings?.siteName || SITE_NAME,
    publisher: { "@id": `${siteUrl}/#store` },
  };
}

/**
 * CollectionPage (+ FAQPage when the category has FAQs) for a category
 * page, plus its own ImageObject node. References the sitewide Store/
 * WebSite nodes by @id instead of repeating them per page.
 */
export function buildCategoryPageJsonLd({
  category,
  siteUrl,
}: {
  category: Category;
  siteUrl: string;
}) {
  const url = `${siteUrl}/categories/${category.slug?.current}`;
  const imageUrl = category.image
    ? imageBuilder(category.image).url()
    : undefined;
  const faqs = (category.faqs || []).filter(
    (faq) => faq.question && faq.answer
  );

  const nodes: Record<string, any>[] = [];

  if (imageUrl) {
    nodes.push({
      "@type": "ImageObject",
      "@id": `${url}#primaryimage`,
      url: imageUrl,
      contentUrl: imageUrl,
      caption: category.title,
    });
  }

  nodes.push({
    "@type": faqs.length > 0 ? ["CollectionPage", "FAQPage"] : "CollectionPage",
    "@id": `${url}#webpage`,
    url,
    name: category.seo?.metaTitle || category.title,
    description:
      category.seo?.metaDescription ||
      portableTextToPlainText(category.description),
    isPartOf: { "@id": `${siteUrl}/#website` },
    publisher: { "@id": `${siteUrl}/#store` },
    about: { "@type": "Thing", name: category.title },
    ...(imageUrl && {
      primaryImageOfPage: { "@id": `${url}#primaryimage` },
      image: { "@id": `${url}#primaryimage` },
    }),
    ...(faqs.length > 0 && {
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    }),
  });

  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export type ReviewStats = {
  average: number;
  count: number;
};

export type ProductReview = {
  name: string;
  comment: string;
  ratings: number;
};

export function buildProductJsonLd({
  product,
  siteUrl,
  reviewStats,
  reviews,
  siteSettings,
}: {
  product: Product;
  siteUrl: string;
  reviewStats?: ReviewStats | null;
  reviews?: ProductReview[];
  siteSettings?: SiteSettings | null;
}) {
  const url = `${siteUrl}/products/${product.slug?.current}`;
  const images = (product.previewImages || [])
    .map((preview: any) => preview?.image && imageBuilder(preview.image).url())
    .filter(Boolean);

  const effectivePrice =
    product.discountedPrice && product.discountedPrice < product.price
      ? product.discountedPrice
      : product.price;

  // 30-day return policy for new, unopened items (see /refund-policy)
  const hasMerchantReturnPolicy = {
    "@type": "MerchantReturnPolicy",
    applicableCountry: "US",
    returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
    merchantReturnDays: 30,
    returnMethod: "https://schema.org/ReturnByMail",
    returnFees: "https://schema.org/ReturnCustomerResponsibility",
    customerRemorseReturnFees: "https://schema.org/ReturnCustomerResponsibility",
    itemCondition: "https://schema.org/NewCondition",
    returnPolicyPage: "https://www.suncitypalletsliquidation.com/refund-policy",
  };

  // Delivery times come from the published /shipping-policy (processing
  // 2-4 business days, Standard Shipping 5-7 business days). Cost is
  // "calculated at checkout" there, not fixed - shippingRate is only
  // included when a starting rate has been set in Site Settings.
  const shippingDetails =
    siteSettings?.shippingRate != null
      ? {
          "@type": "OfferShippingDetails",
          shippingRate: {
            "@type": "MonetaryAmount",
            value: siteSettings.shippingRate,
            currency: "USD",
          },
          shippingDestination: {
            "@type": "DefinedRegion",
            addressCountry: "US",
          },
          deliveryTime: {
            "@type": "ShippingDeliveryTime",
            handlingTime: {
              "@type": "QuantitativeValue",
              minValue: 2,
              maxValue: 4,
              unitCode: "DAY",
            },
            transitTime: {
              "@type": "QuantitativeValue",
              minValue: 5,
              maxValue: 7,
              unitCode: "DAY",
            },
          },
        }
      : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    sku: product.sku || product._id,
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
      itemCondition: product.condition
        ? CONDITION_TO_SCHEMA_ORG[product.condition]
        : undefined,
      hasMerchantReturnPolicy,
      shippingDetails,
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
    ...(reviews && reviews.length > 0
      ? {
          review: reviews.map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.name },
            reviewBody: r.comment,
            reviewRating: {
              "@type": "Rating",
              ratingValue: r.ratings,
              bestRating: 5,
              worstRating: 1,
            },
          })),
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
