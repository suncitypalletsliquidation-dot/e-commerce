import { Metadata } from "next";
import AboutUsContent from "@/components/AboutUsContent";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us | SUNCITY PALLETS LIQUIDATION STORE LLC",
  description:
    "Learn more about SUNCITY PALLETS LIQUIDATION STORE LLC, Texas' premier partner in wholesale surplus, store returns, and liquidation pallets.",
  path: "/about-us",
});

export default function AboutUsPage() {
  return (
    <main>
      <AboutUsContent />
    </main>
  );
}
