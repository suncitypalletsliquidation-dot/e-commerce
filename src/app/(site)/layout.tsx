import PreLoader from "@/components/Common/PreLoader";
import ScrollToTop from "@/components/Common/ScrollToTop";
import CacheRefreshButton from "@/components/Common/CacheRefreshButton";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
// import "../css/euclid-circular-a-font.css";
import "../css/style.css";
import Providers from "./Providers";
import Script from "next/script";
import type { Metadata } from "next";
import JsonLd from "@/components/Common/JsonLd";
import { buildStoreJsonLd, buildWebSiteJsonLd } from "@/lib/structuredData";
import { getSiteUrl, getMetadataBaseUrl } from "@/lib/siteUrl";
import { getSiteSettings } from "@/sanity/sanity-settings-utils";

const siteURL = getSiteUrl();
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: getMetadataBaseUrl(),
  // Every page in this app already sets its own full title (e.g. "X | Suncity
  // Pallets Liquidation Store"), so this is a plain fallback default rather
  // than a `template` — a template would double up the site-name suffix.
  title: "Suncity Pallets Liquidation Store | Bulk Pallets & Liquidation Stock",
  description:
    "Suncity Pallets Liquidation Store — buy wholesale liquidation pallets of new and used stock directly from top manufacturers.",
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  }),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteSettings = await getSiteSettings().catch(() => null);
  const siteGraphJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildStoreJsonLd(siteSettings, siteURL),
      buildWebSiteJsonLd(siteSettings, siteURL),
    ],
  };

  return (
    <html lang="en" className="font-inter" suppressHydrationWarning>
      <body>
        <JsonLd data={siteGraphJsonLd} />

        {gaMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        )}

        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            window.googleTranslateElementInit = function() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,fr,es',
                autoDisplay: false
              }, 'google_translate_element');
            }
          `}
        </Script>
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <div id="google_translate_element" style={{ display: "none" }} />

        <PreLoader />

        <Providers>
          <NextTopLoader
            color="#3C50E0"
            crawlSpeed={300}
            showSpinner={false}
            shadow="none"
          />

          <Header />

          <Toaster position="top-center" reverseOrder={false} />

          {children}
        </Providers>

        <ScrollToTop />
        <CacheRefreshButton />
        <Footer />
      </body>
    </html>
  );
}
