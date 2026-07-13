import { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Terms of Use | Amazon Liquidation Express",
  description:
    "Terms of Use and conditions for accessing and purchasing from Amazon Liquidation Express.",
};

export default function TermsOfUsePage() {
  return (
    <PolicyLayout title="Terms of Use">
      <div className="space-y-8">
        <div>
          <h2 className="text-custom-2xl font-semibold text-dark mb-4">
            Terms &amp; Conditions of Use
          </h2>
          <p className="text-base text-dark-3 leading-relaxed mb-4">
            Welcome to Amazon Liquidation Express (&ldquo;Company&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). These
            Terms of Use govern your access to and use of our website located at{" "}
            <span className="font-semibold text-blue">
              https://firebrick-dugong-592049.hostingersite.com
            </span>{" "}
            (the &ldquo;Website&rdquo;), including any purchases made, content,
            or services offered on or through the Website.
          </p>
          <p className="text-base text-dark-3 leading-relaxed">
            By accessing or using our Website, registering an account, or
            placing an order, you agree to be bound by these Terms of Use and
            our Shipping and Refund Policies. If you do not agree to all of
            these terms, do not access or use this Website.
          </p>
        </div>

        <hr className="border-gray-3" />

        <div className="space-y-6">
          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">
              1. Eligibility and Accounts
            </h3>
            <p className="text-base text-dark-3 leading-relaxed">
              This Website is intended solely for businesses, wholesale buyers,
              and individuals who are at least 18 years of age. By creating an
              account or checking out, you represent that you meet these
              eligibility requirements. You are responsible for maintaining the
              confidentiality of your account credentials and for all activities
              that occur under your account. We reserve the right to terminate
              accounts or refuse service at our sole discretion.
            </p>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">
              2. Liquidation &ldquo;AS-IS&rdquo; Disclaimer
            </h3>
            <p className="text-base text-dark-3 leading-relaxed mb-3">
              You acknowledge and agree that Amazon Liquidation Express is a
              wholesale liquidation seller.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-dark-3">
              <li>
                <span className="font-semibold text-dark">
                  No Warranty or Representation:
                </span>{" "}
                We sell store returns, overstocks, closeouts, and salvage goods.
                All merchandise is sold strictly &ldquo;AS-IS&rdquo; without any
                warranty, express or implied, including warranties of
                merchantability, fitness for a particular purpose, or functional
                completeness.
              </li>
              <li>
                <span className="font-semibold text-dark">Manifests:</span> Any
                product manifests provided are approximations. By purchasing,
                you accept a standard industry variance of up to 15% in
                quantity, value, or merchandise category.
              </li>
              <li>
                <span className="font-semibold text-dark">
                  Retail Packaging:
                </span>{" "}
                Products may arrive without retail packaging, in damaged boxes,
                or missing accessories/manuals. We make no representations
                regarding the retail shelf-readiness of any item.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">
              3. Purchases and Payments
            </h3>
            <p className="text-base leading-relaxed font-semibold text-dark mb-2">
              By submitting an order on our Website, you agree that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-dark-3">
              <li>
                You will pay all charges incurred, including shipping, freight
                fees, and applicable taxes.
              </li>
              <li>
                All payments are processed securely via third-party processors
                (such as Stripe).
              </li>
              <li>
                We reserve the right to cancel or refuse any order at any time,
                including after payment is made, due to pricing errors,
                inventory discrepancies, or compliance concerns. In such cases,
                we will issue a full refund to your original payment method.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">
              4. Shipping and Customs Compliance
            </h3>
            <p className="text-base text-dark-3 leading-relaxed">
              All deliveries are subject to our Shipping Policy. For bulk
              freight and international cargo shipping, the buyer is solely
              responsible for arranging freight forwarders (if applicable),
              clearing customs in the destination country, and paying all import
              taxes, duties, and CBP inspection fees. Amazon Liquidation Express
              is not responsible for shipments seized, delayed, or rejected by
              customs authorities.
            </p>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">
              5. Intellectual Property
            </h3>
            <p className="text-base text-dark-3 leading-relaxed">
              Unless otherwise indicated, the Website and all source code,
              databases, design layout, text, graphics, and logo assets are
              owned or licensed by us and are protected by copyright, trademark,
              and other intellectual property laws. You are granted a limited
              license to access the Website for personal or business shopping.
              You may not copy, extract, scrape, or redistribute any content
              from this Website without our prior written consent.
            </p>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">
              6. Prohibited Activities
            </h3>
            <p className="text-base text-dark-3 leading-relaxed mb-3">
              You agree not to engage in any of the following prohibited
              behaviors:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-dark-3">
              <li>
                Using scrapers, bots, or automated scripts to collect product
                prices or manifests
              </li>
              <li>
                Interfering with or disrupting the security and performance of
                the Website servers
              </li>
              <li>
                Attempting to bypass access controls or gain unauthorized access
                to other user accounts
              </li>
              <li>
                Submitting fraudulent claims, chargebacks, or false
                documentation regarding damages or discrepancies
              </li>
              <li>
                Using our product descriptions or photographs to resell items
                without our authorization
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">
              7. Limitation of Liability
            </h3>
            <p className="text-base text-dark-3 leading-relaxed">
              To the fullest extent permitted by law, in no event shall Amazon
              Liquidation Express, its directors, employees, or agents be liable
              to you or any third party for any direct, indirect, consequential,
              exemplary, incidental, special, or punitive damages (including
              lost profits, lost revenue, loss of data, or damages arising from
              purchasing liquidation merchandise), even if we have been advised
              of the possibility of such damages. Our cumulative liability to
              you for any cause whatsoever shall at all times be limited to the
              amount paid by you to us during the six (6) month period prior to
              the cause of action arising.
            </p>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">
              8. Governing Law
            </h3>
            <p className="text-base text-dark-3 leading-relaxed">
              These Terms of Use and your use of the Website are governed by and
              construed in accordance with the laws of the State of Nevada,
              United States, without regard to its conflict of law principles.
              Any legal action or proceeding arising out of or related to these
              Terms shall be brought exclusively in the state or federal courts
              located in Las Vegas, Nevada.
            </p>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">
              9. Modifications to Terms and Website
            </h3>
            <p className="text-base text-dark-3 leading-relaxed">
              We reserve the right to change, modify, or update these Terms of
              Use at any time. Any changes will be posted on this page and will
              become effective immediately upon posting. Your continued use of
              the Website after updates are posted constitutes your acceptance
              of the revised terms. We also reserve the right to modify,
              suspend, or discontinue any part of the Website or products
              offered at any time without notice.
            </p>
          </div>
        </div>
      </div>
    </PolicyLayout>
  );
}
