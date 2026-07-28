import Breadcrumb from "@/components/Common/Breadcrumb";
import ShopWithoutSidebar from "@/components/ShopWithoutSidebar";
import { getProductsByFilter } from "@/sanity/sanity-shop-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Without Sidebar | Suncity Pallets Liquidation Store",
  description: "Browse all wholesale liquidation pallets on Suncity Pallets Liquidation Store.",
  alternates: {
    canonical: "/shop-without-sidebar",
  },
  openGraph: {
    title: "Shop Without Sidebar | Suncity Pallets Liquidation Store",
    description: "Browse all wholesale liquidation pallets on Suncity Pallets Liquidation Store.",
    url: "/shop-without-sidebar",
    siteName: "Suncity Pallets Liquidation Store",
    images: [
      {
        url: "/suncity_full_logo.png",
        width: 1328,
        height: 404,
        alt: "Suncity Pallets Liquidation Store",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop Without Sidebar | Suncity Pallets Liquidation Store",
    description: "Browse all wholesale liquidation pallets on Suncity Pallets Liquidation Store.",
    images: ["/suncity_full_logo.png"],
  },
};

type PageProps = {
  searchParams: Promise<{
    sort: string;
  }>;
};

const ShopWithoutSidebarPage = async ({ searchParams }: PageProps) => {
  const { sort } = await searchParams;

  let sortQuery = "| order(publishedAt desc)";

  if (sort === "popular") {
    sortQuery = "| order(length(reviews) desc)";
  }

  const query = `*[_type == "product"] ${sortQuery}`;

  const data = await getProductsByFilter(query, ["product"]);

  return (
    <main>
      <Breadcrumb
        title={"Explore All Products"}
        pages={["shop", "/", "shop without sidebar"]}
      />
      <ShopWithoutSidebar key={sort} shopData={data} />
    </main>
  );
};

export default ShopWithoutSidebarPage;
