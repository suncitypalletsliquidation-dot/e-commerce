import Contact from "@/components/Contact";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us | Suncity Pallets Liquidation Store",
  description: "Get in touch with Suncity Pallets Liquidation Store for any inquiries about bulk pallets and shipping details.",
};

const ContactPage = () => {
  return (
    <main>
      <Contact />
    </main>
  );
};

export default ContactPage;
