import Breadcrumb from "@/components/Common/Breadcrumb";
import JsonLd from "@/components/Common/JsonLd";
import ShopWithoutSidebar from "@/components/ShopWithoutSidebar";
import { buildBreadcrumbJsonLd, buildCategoryPageJsonLd } from "@/lib/structuredData";
import { buildPageMetadata } from "@/lib/seo";
import { getSiteUrl } from "@/lib/siteUrl";
import { portableTextToPlainText } from "@/lib/portableText";
import {
  getCategories,
  getCategoryBySlug,
  getProductsByFilter,
  imageBuilder,
} from "@/sanity/sanity-shop-utils";
import { PortableText } from "@portabletext/react";

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
    `${portableTextToPlainText(categoryData?.description).slice(0, 136)}...`;
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

  const siteURL = getSiteUrl();
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: siteURL },
    {
      name: categoryData?.title || cleanSlug,
      url: `${siteURL}/categories/${slug}`,
    },
  ]);
  const categoryPageJsonLd = categoryData
    ? buildCategoryPageJsonLd({ category: categoryData, siteUrl: siteURL })
    : null;

  return (
    <main>
      <JsonLd data={breadcrumbJsonLd} />
      {categoryPageJsonLd && <JsonLd data={categoryPageJsonLd} />}
      <Breadcrumb
        title={categoryData?.title || cleanSlug}
        pages={["category", "/", categoryData?.title || cleanSlug]}
      />

      {categoryData?.description && categoryData.description.length > 0 && (
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 xl:px-0 pt-7.5">
          <div className="text-custom-sm sm:text-base text-dark-3 leading-relaxed max-w-3xl">
            <PortableText value={categoryData.description as any} />
          </div>
        </div>
      )}

      <ShopWithoutSidebar shopData={data} />

      {categoryData?.bottomContent && (
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 xl:px-0 pb-15">
          <div className="blog-details max-w-3xl">
            <PortableText value={categoryData.bottomContent as any} />
          </div>
        </div>
      )}
    </main>
  );
};

export default CategoryPage;
