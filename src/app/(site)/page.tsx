import Newsletter from "@/components/Common/Newsletter";
import BestSeller from "@/components/Home/BestSeller";
import Categories from "@/components/Home/Categories";
import Hero from "@/components/Home/Hero";
import NewArrival from "@/components/Home/NewArrivals";
import LiquidationInfo from "@/components/Home/LiquidationInfo";
import DeliveryFAQ from "@/components/Home/DeliveryFAQ";
import PurchaseFAQ from "@/components/Home/PurchaseFAQ";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Suncity Pallets Liquidation Store | Bulk Pallets & Liquidation Stock",
  description: "Welcome to Suncity Pallets Liquidation Store. Buy wholesale liquidation pallets of new and used stock directly from top manufacturers.",
  path: "/",
});

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Categories />
      <LiquidationInfo />
      <NewArrival />
      <DeliveryFAQ />
      <BestSeller />
      <PurchaseFAQ />
      <Newsletter />
    </main>
  );
}
