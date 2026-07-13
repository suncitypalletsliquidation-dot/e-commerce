import Newsletter from "@/components/Common/Newsletter";
import BestSeller from "@/components/Home/BestSeller";
import Categories from "@/components/Home/Categories";
import Hero from "@/components/Home/Hero";
import NewArrival from "@/components/Home/NewArrivals";
import LiquidationInfo from "@/components/Home/LiquidationInfo";
import DeliveryFAQ from "@/components/Home/DeliveryFAQ";
import PurchaseFAQ from "@/components/Home/PurchaseFAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextMerce | Next.js E-commerce Boilerplate",
  description: "This is Home for NextMerce Template",
  // other metadata
};

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
