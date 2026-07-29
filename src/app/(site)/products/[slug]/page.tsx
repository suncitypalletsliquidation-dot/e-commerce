import { structuredAlgoliaHtmlData } from "@/algolia/crawlIndex";
import ShopDetails from "@/components/ShopDetails";
import JsonLd from "@/components/Common/JsonLd";
import {
  getAllProducts,
  getProduct,
  imageBuilder,
} from "@/sanity/sanity-shop-utils";
import { getProductReviewStats } from "@/lib/reviews";
import { buildBreadcrumbJsonLd, buildProductJsonLd } from "@/lib/structuredData";
import { buildPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({
    slug: product?.slug?.current,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return {
      title: "Not Found",
      description: "No blog article has been found",
    };
  }

  const resolvedTitle =
    product.seo?.metaTitle ||
    `${product.name || "Single Product Page"} | Suncity Pallets Liquidation Store`;
  const resolvedDescription =
    product.seo?.metaDescription ||
    `${product?.shortDescription?.slice(0, 136)}...`;
  const resolvedOgImage = product.seo?.ogImage
    ? imageBuilder(product.seo.ogImage).url()
    : imageBuilder(product?.previewImages[0]?.image).url();

  return buildPageMetadata({
    title: resolvedTitle,
    description: resolvedDescription,
    path: `/products/${product?.slug?.current}`,
    image: resolvedOgImage,
    type: "article",
    index: !product.seo?.noIndex,
  });
}

const ProductDetails = async ({ params }: Props) => {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) notFound();

  await structuredAlgoliaHtmlData({
    type: "products",
    title: product?.name,
    htmlString: product?.shortDescription,
    pageUrl: `${process.env.SITE_URL}/products/${product?.slug?.current}`,
    imageURL: imageBuilder(product?.previewImages[0]?.image).url() as string,
    price: product?.price,
    discountedPrice: product?.discountedPrice,
    category: product?.category,
    colors: product?.colors as [],
    sizes: (product?.sizeVariants?.map((v) => v.size) ?? []) as [],
    _id: product?._id,
    status: product?.status,
    previewImages: product?.previewImages,
  });

  const siteURL = process.env.NEXT_PUBLIC_SITE_URL || "";
  const reviewStats = await getProductReviewStats(product._id).catch(
    () => null
  );
  const productJsonLd = buildProductJsonLd({ product, siteUrl: siteURL, reviewStats });

  const category = product.category as unknown as
    | { title?: string; slug?: { current?: string } }
    | undefined;
  const breadcrumbItems = [
    { name: "Home", url: siteURL },
    ...(category?.title && category?.slug?.current
      ? [
          {
            name: category.title,
            url: `${siteURL}/categories/${category.slug.current}`,
          },
        ]
      : []),
    {
      name: product.name,
      url: `${siteURL}/products/${product.slug?.current}`,
    },
  ];
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(breadcrumbItems);

  return (
    <main>
      <JsonLd data={productJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <ShopDetails product={product} />
    </main>
  );
};

export default ProductDetails;
