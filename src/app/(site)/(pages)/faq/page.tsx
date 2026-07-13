import { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";
import FAQContent from "@/components/FAQContent";

export const metadata: Metadata = {
  title: "FAQs | Amazon Liquidation Express",
  description: "Frequently Asked Questions about purchasing, sourcing, payments, and returns with Amazon Liquidation Express.",
};

export default function FAQPage() {
  return (
    <PolicyLayout title="FAQs">
      <FAQContent />
    </PolicyLayout>
  );
}
