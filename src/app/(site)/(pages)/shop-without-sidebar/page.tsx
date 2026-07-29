import Breadcrumb from "@/components/Common/Breadcrumb";
import ShopWithoutSidebar from "@/components/ShopWithoutSidebar";
import { getProductsByFilter } from "@/sanity/sanity-shop-utils";
import { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Shop Without Sidebar | Suncity Pallets Liquidation Store",
  description: "Browse all wholesale liquidation pallets on Suncity Pallets Liquidation Store.",
  path: "/shop-without-sidebar",
});

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
