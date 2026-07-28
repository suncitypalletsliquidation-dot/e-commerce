import Breadcrumb from "@/components/Common/Breadcrumb";
import JsonLd from "@/components/Common/JsonLd";
import ShopWithoutSidebar from "@/components/ShopWithoutSidebar";
import { buildBreadcrumbJsonLd } from "@/lib/structuredData";
import {
  getCategories,
  getCategoryBySlug,
  getProductsByFilter,
  imageBuilder,
} from "@/sanity/sanity-shop-utils";

type Params = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    date: string;
    sort: string;
  }>;
};

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({
    slug: category.slug.current,
  }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const categoryData = await getCategoryBySlug(slug);
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL;

  if (categoryData) {
    const resolvedTitle =
      categoryData.seo?.metaTitle ||
      `${categoryData?.title || "Category Page"} | Suncity Pallets Liquidation Store`;
    const resolvedDescription =
      categoryData.seo?.metaDescription ||
      `${categoryData?.description?.slice(0, 136)}...`;
    const resolvedOgImage = categoryData.seo?.ogImage
      ? imageBuilder(categoryData.seo.ogImage).url()
      : imageBuilder(categoryData.image).url();

    return {
      title: resolvedTitle,
      description: resolvedDescription,
      author: "Suncity Pallets Liquidation Store",
      alternates: {
        canonical: `${siteURL}/categories/${categoryData?.slug?.current}`,
        languages: {
          "en-US": "/en-US",
          "de-DE": "/de-DE",
        },
      },

      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },

      openGraph: {
        title: resolvedTitle,
        description: resolvedDescription,
        url: `${siteURL}/categories/${categoryData?.slug?.current}`,
        siteName: "Suncity Pallets Liquidation Store",
        images: [
          {
            url: resolvedOgImage,
            width: 1800,
            height: 1600,
            alt: categoryData?.title,
          },
        ],
        locale: "en_US",
        type: "article",
      },

      twitter: {
        card: "summary_large_image",
        title: resolvedTitle,
        description: resolvedDescription,
        creator: "Suncity Pallets Liquidation Store",
        site: "Suncity Pallets Liquidation Store",
        images: [resolvedOgImage],
        url: `${siteURL}/categories/${categoryData?.slug?.current}`,
      },
    };
  } else {
    return {
      title: "Not Found",
      description: "No product category has been found",
    };
  }
}

const CategoryPage = async ({ params, searchParams }: Params) => {
  const { slug } = await params;
  const { date, sort } = await searchParams;

  const categoryFilter = slug ? `&& category->slug.current == "${slug}"` : "";

  const dateOrder = date ? `| order(_createdAt ${date})` : "";
  const sortOrder = sort ? `| order(count(reviews) desc)` : "";
  const order = `${dateOrder}${sortOrder}`;
  const query = `*[_type == "product" ${categoryFilter}] ${order} `;

  const categoryData = await getCategoryBySlug(slug);

  const data = await getProductsByFilter(query, ["product"]);

  // Clean slug by removing hyphens and symbol characters
  const cleanSlug = slug
    ? slug
        .replace(/[^a-zA-Z0-9\s]/g, "  ")
        .replace(/\s+/g, " ")
        .trim()
    : "Category Page";

  const siteURL = process.env.NEXT_PUBLIC_SITE_URL || "";
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: siteURL },
    {
      name: categoryData?.title || cleanSlug,
      url: `${siteURL}/categories/${slug}`,
    },
  ]);

  return (
    <main>
      <JsonLd data={breadcrumbJsonLd} />
      <Breadcrumb title={cleanSlug} pages={["category", "/", cleanSlug]} />
      <ShopWithoutSidebar shopData={data} />
    </main>
  );
};

export default CategoryPage;
