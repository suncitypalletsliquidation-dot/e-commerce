import Contact from "@/components/Contact";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us | Suncity Pallets Liquidation Store",
  description: "Get in touch with Suncity Pallets Liquidation Store for any inquiries about bulk pallets and shipping details.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Suncity Pallets Liquidation Store",
    description: "Get in touch with Suncity Pallets Liquidation Store for any inquiries about bulk pallets and shipping details.",
    url: "/contact",
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
    title: "Contact Us | Suncity Pallets Liquidation Store",
    description: "Get in touch with Suncity Pallets Liquidation Store for any inquiries about bulk pallets and shipping details.",
    images: ["/suncity_full_logo.png"],
  },
};

const ContactPage = () => {
  return (
    <main>
      <Contact />
    </main>
  );
};

export default ContactPage;
