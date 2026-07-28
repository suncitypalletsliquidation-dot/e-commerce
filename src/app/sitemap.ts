import { MetadataRoute } from "next";
import { getAllProducts, getCategories } from "@/sanity/sanity-shop-utils";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "daily" },
  { path: "/shop", priority: 0.8, changeFrequency: "daily" },
  { path: "/shop-without-sidebar", priority: 0.7, changeFrequency: "daily" },
  { path: "/about-us", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.4, changeFrequency: "monthly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/refund-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/shipping-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms-of-use", priority: 0.3, changeFrequency: "yearly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [products, categories] = await Promise.all([
    getAllProducts().catch(() => []),
    getCategories().catch(() => []),
  ]);

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const productEntries: MetadataRoute.Sitemap = (products || [])
    .filter((product) => product.slug?.current)
    .map((product) => ({
      url: `${siteUrl}/products/${product.slug!.current}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    }));

  const categoryEntries: MetadataRoute.Sitemap = (categories || [])
    .filter((category) => category.slug?.current)
    .map((category) => ({
      url: `${siteUrl}/categories/${category.slug.current}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    }));

  return [...staticEntries, ...productEntries, ...categoryEntries];
}
