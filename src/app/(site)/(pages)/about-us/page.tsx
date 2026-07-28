import { Metadata } from "next";
import AboutUsContent from "@/components/AboutUsContent";

export const metadata: Metadata = {
  title: "About Us | SUNCITY PALLETS LIQUIDATION STORE LLC",
  description:
    "Learn more about SUNCITY PALLETS LIQUIDATION STORE LLC, Texas' premier partner in wholesale surplus, store returns, and liquidation pallets.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us | SUNCITY PALLETS LIQUIDATION STORE LLC",
    description:
      "Learn more about SUNCITY PALLETS LIQUIDATION STORE LLC, Texas' premier partner in wholesale surplus, store returns, and liquidation pallets.",
    url: "/about-us",
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
    title: "About Us | SUNCITY PALLETS LIQUIDATION STORE LLC",
    description:
      "Learn more about SUNCITY PALLETS LIQUIDATION STORE LLC, Texas' premier partner in wholesale surplus, store returns, and liquidation pallets.",
    images: ["/suncity_full_logo.png"],
  },
};

export default function AboutUsPage() {
  return (
    <main>
      <AboutUsContent />
    </main>
  );
}
