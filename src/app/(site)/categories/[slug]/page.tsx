import Breadcrumb from "@/components/Common/Breadcrumb";
import JsonLd from "@/components/Common/JsonLd";
import ShopWithoutSidebar from "@/components/ShopWithoutSidebar";
import { buildBreadcrumbJsonLd } from "@/lib/structuredData";
import { buildPageMetadata } from "@/lib/seo";
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

  if (!categoryData) {
    return {
      title: "Not Found",
      description: "No product category has been found",
    };
  }

  const resolvedTitle =
    categoryData.seo?.metaTitle ||
    `${categoryData?.title || "Category Page"} | Suncity Pallets Liquidation Store`;
  const resolvedDescription =
    categoryData.seo?.metaDescription ||
    `${categoryData?.description?.slice(0, 136)}...`;
  const resolvedOgImage = categoryData.seo?.ogImage
    ? imageBuilder(categoryData.seo.ogImage).url()
    : imageBuilder(categoryData.image).url();

  return buildPageMetadata({
    title: resolvedTitle,
    description: resolvedDescription,
    path: `/categories/${categoryData?.slug?.current}`,
    image: resolvedOgImage,
    type: "article",
    index: !categoryData.seo?.noIndex,
  });
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
