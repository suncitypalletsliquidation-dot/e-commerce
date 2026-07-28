import { structuredAlgoliaHtmlData } from "@/algolia/crawlIndex";
import ShopDetails from "@/components/ShopDetails";
import {
  getAllProducts,
  getProduct,
  imageBuilder,
} from "@/sanity/sanity-shop-utils";
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
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL;

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

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    author: "Suncity Pallets Liquidation Store",
    alternates: {
      canonical: `${siteURL}/products/${product?.slug?.current}`,
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
      url: `${siteURL}/products/${product?.slug?.current}`,
      siteName: "Suncity Pallets Liquidation Store",
      images: [
        {
          url: resolvedOgImage,
          width: 1800,
          height: 1600,
          alt: product?.name,
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
      url: `${siteURL}/products/${product?.slug?.current}`,
    },
  };
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

  return (
    <main>
      <ShopDetails product={product} />
    </main>
  );
};

export default ProductDetails;
