import { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";
import FAQContent from "@/components/FAQContent";

export const metadata: Metadata = {
  title: "FAQs | SUNCITY PALLETS LIQUIDATION STORE LLC",
  description: "Frequently Asked Questions about purchasing, sourcing, payments, and returns with SUNCITY PALLETS LIQUIDATION STORE LLC.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQs | SUNCITY PALLETS LIQUIDATION STORE LLC",
    description: "Frequently Asked Questions about purchasing, sourcing, payments, and returns with SUNCITY PALLETS LIQUIDATION STORE LLC.",
    url: "/faq",
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
    title: "FAQs | SUNCITY PALLETS LIQUIDATION STORE LLC",
    description: "Frequently Asked Questions about purchasing, sourcing, payments, and returns with SUNCITY PALLETS LIQUIDATION STORE LLC.",
    images: ["/suncity_full_logo.png"],
  },
};

export default function FAQPage() {
  return (
    <PolicyLayout title="FAQs">
      <FAQContent />
    </PolicyLayout>
  );
}
