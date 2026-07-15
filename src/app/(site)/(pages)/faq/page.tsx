import { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";
import FAQContent from "@/components/FAQContent";

export const metadata: Metadata = {
  title: "FAQs | SUNCITY PALLETS LIQUIDATION STORE LLC",
  description: "Frequently Asked Questions about purchasing, sourcing, payments, and returns with SUNCITY PALLETS LIQUIDATION STORE LLC.",
};

export default function FAQPage() {
  return (
    <PolicyLayout title="FAQs">
      <FAQContent />
    </PolicyLayout>
  );
}
