import { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | SUNCITY PALLETS LIQUIDATION STORE LLC",
  description: "Privacy Policy for SUNCITY PALLETS LIQUIDATION STORE LLC. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | SUNCITY PALLETS LIQUIDATION STORE LLC",
    description: "Privacy Policy for SUNCITY PALLETS LIQUIDATION STORE LLC. Learn how we collect, use, and protect your personal information.",
    url: "/privacy-policy",
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
    title: "Privacy Policy | SUNCITY PALLETS LIQUIDATION STORE LLC",
    description: "Privacy Policy for SUNCITY PALLETS LIQUIDATION STORE LLC. Learn how we collect, use, and protect your personal information.",
    images: ["/suncity_full_logo.png"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout title="Privacy Policy">
      <div className="space-y-8">
        <div>
          <h2 className="text-custom-2xl font-semibold text-dark mb-4">Privacy Policy</h2>
          <p className="text-base text-dark-3 leading-relaxed">
            At SUNCITY PALLETS LIQUIDATION STORE LLC, accessible from <span className="font-semibold text-blue">https://firebrick-dugong-592049.hostingersite.com</span>, one of our main priorities is the privacy of our visitors. SUNCITY PALLETS LIQUIDATION STORE LLC is a Limited Liability Company incorporated in the United States on 2025-05-03 with registry number 0806021894. Our legal address is 328 Thomas Pl, Everman, TX 76140, USA. This Privacy Policy document contains types of information that is collected and recorded by SUNCITY PALLETS LIQUIDATION STORE LLC and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
          </p>
        </div>

        <hr className="border-gray-3" />

        <div className="space-y-6">
          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">1. Consent</h3>
            <p className="text-base text-dark-3 leading-relaxed">
              By using our Website, you hereby consent to our Privacy Policy and agree to its terms.
            </p>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">2. Information We Collect</h3>
            <p className="text-base text-dark-3 leading-relaxed mb-3">
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-dark-3">
              <li>
                <span className="font-semibold text-dark">Account Information:</span> If you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
              </li>
              <li>
                <span className="font-semibold text-dark">Order and Checkout Data:</span> When you purchase products, we collect transaction information, shipping address, billing address, and items ordered to process and deliver your cargo.
              </li>
              <li>
                <span className="font-semibold text-dark">Payment Processing:</span> Your payment information is collected and processed securely by our third-party payment gateways (such as Stripe). We do not store or retain your full credit/debit card numbers on our servers.
              </li>
              <li>
                <span className="font-semibold text-dark">Direct Communications:</span> If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">3. How We Use Your Information</h3>
            <p className="text-base text-dark-3 leading-relaxed mb-3">
              We use the information we collect in various ways, including to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-dark-3">
              <li>Provide, operate, and maintain our Website and e-commerce services</li>
              <li>Improve, personalize, and expand our Website</li>
              <li>Understand and analyze how you use our Website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Process your transactions and arrange standard or freight shipping</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the Website, and for marketing and promotional purposes</li>
              <li>Send you emails, invoice confirmations, and shipment tracking numbers</li>
              <li>Find and prevent fraud and secure our web systems</li>
            </ul>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">4. Log Files</h3>
            <p className="text-base text-dark-3 leading-relaxed">
              SUNCITY PALLETS LIQUIDATION STORE LLC follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&rsquo; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&rsquo; movement on the website, and gathering demographic information.
            </p>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">5. Cookies and Web Beacons</h3>
            <p className="text-base text-dark-3 leading-relaxed">
              Like any other website, SUNCITY PALLETS LIQUIDATION STORE LLC uses &ldquo;cookies.&rdquo; These cookies are used to store information including visitors&rsquo; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&rsquo; experience by customizing our web page content based on visitors&rsquo; browser type and/or other information.
            </p>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">6. Third-Party Partners and Services</h3>
            <p className="text-base text-dark-3 leading-relaxed mb-3">
              We share relevant data with trusted third-party service providers to perform functions on our behalf:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-dark-3">
              <li>
                <span className="font-semibold text-dark">Payment Gateways:</span> We use Stripe for secure payment processing. Stripe handles card data in compliance with PCI-DSS standards.
              </li>
              <li>
                <span className="font-semibold text-dark">Logistics and Freight Carriers:</span> Shipping and freight information is shared with LTL carriers, UPS, FedEx, or shipping forwarders to arrange delivery of liquidation pallets.
              </li>
              <li>
                <span className="font-semibold text-dark">Search and Analytics Providers:</span> We utilize search indexers (such as Algolia) and analytics tools to index products and improve site navigation.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">7. GDPR &amp; CCPA Data Protection Rights</h3>
            <p className="text-base text-dark-3 leading-relaxed mb-3">
              We want to ensure you are fully aware of all of your data protection rights. Every user is entitled to the following:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-dark-3">
              <li>
                <span className="font-semibold text-dark">The right to access:</span> You have the right to request copies of your personal data.
              </li>
              <li>
                <span className="font-semibold text-dark">The right to rectification:</span> You have the right to request that we correct any information you believe is inaccurate.
              </li>
              <li>
                <span className="font-semibold text-dark">The right to erasure:</span> You have the right to request that we erase your personal data, under certain conditions.
              </li>
              <li>
                <span className="font-semibold text-dark">The right to restrict processing:</span> You have the right to request that we restrict the processing of your personal data, under certain conditions.
              </li>
              <li>
                <span className="font-semibold text-dark">The right to object to processing:</span> You have the right to object to our processing of your personal data, under certain conditions.
              </li>
              <li>
                <span className="font-semibold text-dark">The right to data portability:</span> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">8. Children&rsquo;s Information</h3>
            <p className="text-base text-dark-3 leading-relaxed">
              Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. SUNCITY PALLETS LIQUIDATION STORE LLC does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
            </p>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">9. Security</h3>
            <p className="text-base text-dark-3 leading-relaxed">
              We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. We utilize Secure Socket Layer (SSL) technology to encrypt data in transit. However, no electronic transmission over the internet or database storage is 100% secure, and we cannot guarantee its absolute safety.
            </p>
          </div>
        </div>
      </div>
    </PolicyLayout>
  );
}
