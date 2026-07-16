import { Metadata } from "next";
import AboutUsContent from "@/components/AboutUsContent";

export const metadata: Metadata = {
  title: "About Us | SUNCITY PALLETS LIQUIDATION STORE LLC",
  description:
    "Learn more about SUNCITY PALLETS LIQUIDATION STORE LLC, Texas' premier partner in wholesale surplus, store returns, and liquidation pallets.",
};

export default function AboutUsPage() {
  return (
    <main>
      <AboutUsContent />
    </main>
  );
}
