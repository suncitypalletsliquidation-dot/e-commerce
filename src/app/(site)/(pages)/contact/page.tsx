import Contact from "@/components/Contact";

import { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Us | Suncity Pallets Liquidation Store",
  description: "Get in touch with Suncity Pallets Liquidation Store for any inquiries about bulk pallets and shipping details.",
  path: "/contact",
});

const ContactPage = () => {
  return (
    <main>
      <Contact />
    </main>
  );
};

export default ContactPage;
