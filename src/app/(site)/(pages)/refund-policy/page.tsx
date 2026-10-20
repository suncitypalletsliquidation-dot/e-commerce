import { Metadata } from "next";
import Link from "next/link";
import PolicyLayout from "@/components/PolicyLayout";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Refund & Return Policy | SUNCITY PALLETS LIQUIDATION STORE LLC",
  description:
    "Refund and Return Policy for SUNCITY PALLETS LIQUIDATION STORE LLC in the United States. 30-day return window, returns by mail, exchanges, new condition only.",
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <PolicyLayout title="Refund & Return Policy">
      <div className="space-y-8">
        {/* Intro */}
        <div>
          <h2 className="text-custom-2xl font-semibold text-dark mb-3">
            Refund &amp; Return Policy
          </h2>
          <p className="text-base text-dark-3 leading-relaxed mb-4">
            Thank you for shopping at SUNCITY PALLETS LIQUIDATION STORE LLC. We are committed
            to providing transparent policies for all orders shipped within the United States.
            Please review our complete return, refund, and exchange guidelines below.
          </p>
          <div className="bg-blue-light-5 border border-blue-light-4 p-4.5 rounded-xl text-dark-2 text-sm leading-relaxed">
            <span className="font-semibold text-blue-dark">Official Policy URL:</span>{" "}
            <Link
              href="https://www.suncitypalletsliquidation.com/refund-policy"
              className="text-blue font-semibold hover:underline break-all"
            >
              https://www.suncitypalletsliquidation.com/refund-policy
            </Link>
          </div>
        </div>

        {/* Policy At-A-Glance Overview Grid */}
        <div className="bg-gray-1 rounded-2xl border border-gray-3 p-6 sm:p-8">
          <h3 className="text-custom-lg font-bold text-dark mb-4 pb-3 border-b border-gray-3">
            Return &amp; Refund Policy Summary
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl border border-gray-3 shadow-xs">
              <span className="text-xs uppercase tracking-wider text-dark-4 font-semibold block mb-1">
                Applicable Country
              </span>
              <span className="text-base font-bold text-dark">
                United States
              </span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gray-3 shadow-xs">
              <span className="text-xs uppercase tracking-wider text-dark-4 font-semibold block mb-1">
                Return Window
              </span>
              <span className="text-base font-bold text-blue">
                30 Days from Delivery
              </span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gray-3 shadow-xs">
              <span className="text-xs uppercase tracking-wider text-dark-4 font-semibold block mb-1">
                Product Condition
              </span>
              <span className="text-base font-bold text-dark">
                New Only (Unopened)
              </span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gray-3 shadow-xs">
              <span className="text-xs uppercase tracking-wider text-dark-4 font-semibold block mb-1">
                Returns Accepted
              </span>
              <span className="text-base font-bold text-dark">
                Defective &amp; Non-Defective
              </span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gray-3 shadow-xs">
              <span className="text-xs uppercase tracking-wider text-dark-4 font-semibold block mb-1">
                Exchanges
              </span>
              <span className="text-base font-bold text-dark">
                Accepted (Within 30 Days)
              </span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gray-3 shadow-xs">
              <span className="text-xs uppercase tracking-wider text-dark-4 font-semibold block mb-1">
                Return Method
              </span>
              <span className="text-base font-bold text-dark">
                By Mail
              </span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gray-3 shadow-xs">
              <span className="text-xs uppercase tracking-wider text-dark-4 font-semibold block mb-1">
                Return Shipping Label
              </span>
              <span className="text-base font-bold text-dark">
                Customer Responsibility
              </span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gray-3 shadow-xs">
              <span className="text-xs uppercase tracking-wider text-dark-4 font-semibold block mb-1">
                Restocking Fee
              </span>
              <span className="text-base font-bold text-dark">
                20% of Product Price
              </span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gray-3 shadow-xs">
              <span className="text-xs uppercase tracking-wider text-dark-4 font-semibold block mb-1">
                Refund Processing Time
              </span>
              <span className="text-base font-bold text-green">
                7 Days
              </span>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-8">
          {/* 1. Countries & Policy */}
          <div className="border border-gray-3 rounded-2xl p-6 sm:p-7 space-y-4">
            <h3 className="text-custom-xl font-bold text-dark">
              1. Countries &amp; Policy
            </h3>
            <ul className="space-y-3 text-base text-dark-3 leading-relaxed">
              <li>
                <span className="font-semibold text-dark">Applicable Country:</span>{" "}
                This return and refund policy exclusively applies to customers and shipments within the{" "}
                <span className="font-semibold text-dark">United States</span>.
              </li>
              <li>
                <span className="font-semibold text-dark">Policy URL:</span>{" "}
                The authoritative, up-to-date return policy is published at{" "}
                <Link
                  href="https://www.suncitypalletsliquidation.com/refund-policy"
                  className="text-blue font-semibold hover:underline break-all"
                >
                  https://www.suncitypalletsliquidation.com/refund-policy
                </Link>
                .
              </li>
              <li>
                <span className="font-semibold text-dark">Returns for Defective and Non-Defective Products:</span>{" "}
                We accept returns for both:
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm text-dark-3">
                  <li>
                    <span className="font-semibold text-dark">Defective Products:</span> Items that arrived damaged during transit, have manufacturing flaws, or were sent incorrectly.
                  </li>
                  <li>
                    <span className="font-semibold text-dark">Non-Defective Products:</span> Customer remorse, buyer change of mind, or unwanted merchandise, provided the product meets our &ldquo;New only&rdquo; condition requirements below.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-semibold text-dark">Exchanges:</span>{" "}
                We <span className="font-semibold text-dark">accept exchanges</span>. If you wish to exchange an item for another model, pallet, or product of equal value, please notify our customer support team within the 30-day window.
              </li>
            </ul>
          </div>

          {/* 2. Product Condition & Window */}
          <div className="border border-gray-3 rounded-2xl p-6 sm:p-7 space-y-5">
            <h3 className="text-custom-xl font-bold text-dark">
              2. Product Condition &amp; Window
            </h3>

            {/* Product Condition */}
            <div>
              <h4 className="text-custom-lg font-semibold text-dark mb-1">
                Product Condition
              </h4>
              <p className="text-base text-dark-3 mb-3">
                The product&rsquo;s condition that your store accepts for a return or exchange:
              </p>
              <div className="space-y-2.5">
                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border-2 border-blue bg-blue/5">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue text-white flex items-center justify-center text-xs font-bold mt-0.5">
                    ✓
                  </span>
                  <div>
                    <span className="font-semibold text-dark block text-base">
                      Only new products (New Only)
                    </span>
                    <p className="text-sm text-dark-3 mt-1 leading-relaxed">
                      This includes products that are unopened in original packaging or have never been used.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-3 opacity-60">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full border border-gray-4 flex items-center justify-center text-xs text-gray-5 mt-0.5">
                    ✕
                  </span>
                  <div>
                    <span className="font-medium text-dark block text-base">
                      New and slightly used products (Not Accepted)
                    </span>
                    <p className="text-sm text-dark-4 mt-1 leading-relaxed">
                      This includes products that are opened or have been slightly used. We do not accept returns for opened, unsealed, or used items.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Return Window */}
            <div className="border-t border-gray-2 pt-5">
              <h4 className="text-custom-lg font-semibold text-dark mb-1">
                Return Window
              </h4>
              <p className="text-base text-dark-3 mb-3">
                The amount of time a customer has to return a product?
              </p>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border-2 border-blue bg-blue/5">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue text-white flex items-center justify-center text-xs font-bold mt-0.5">
                  ✓
                </span>
                <div>
                  <span className="font-semibold text-dark block text-base">
                    Within a certain number of days: 30 days
                  </span>
                  <p className="text-sm text-dark-3 mt-1 leading-relaxed">
                    Customers have a <span className="font-semibold text-dark">30-day</span> return window from the date of delivery to request, initiate, and return eligible products.
                  </p>
                </div>
              </div>
            </div>

            {/* Window extension */}
            <div className="border-t border-gray-2 pt-5">
              <h4 className="text-custom-lg font-semibold text-dark mb-1">
                Window extension
              </h4>
              <p className="text-base text-dark-3 leading-relaxed mb-2">
                You can extend the return window during certain times of the year like holidays.
              </p>
              <p className="text-sm text-dark-4 italic leading-relaxed">
                Some retailers offer a longer return window around the holidays. Any seasonal or holiday extensions will be posted directly on our website during applicable promo periods.
              </p>
            </div>
          </div>

          {/* 3. Method & Fees */}
          <div className="border border-gray-3 rounded-2xl p-6 sm:p-7 space-y-4">
            <h3 className="text-custom-xl font-bold text-dark">
              3. Method &amp; Fees
            </h3>
            <ul className="space-y-4 text-base text-dark-3 leading-relaxed">
              <li>
                <span className="font-semibold text-dark">Return Method:</span>{" "}
                <span className="font-semibold text-blue">By Mail</span>. All returns and exchanges must be shipped by mail/freight carrier back to our authorized warehouse facility:
                <div className="bg-gray-1 p-3.5 rounded-xl border border-gray-3 text-sm font-medium text-dark mt-2">
                  SUNCITY PALLETS LIQUIDATION STORE LLC<br />
                  328 Thomas Pl, Everman, TX 76140, USA
                </div>
              </li>
              <li>
                <span className="font-semibold text-dark">Return Shipping Label:</span>{" "}
                <span className="font-semibold text-dark">Customer Responsibility</span>. Customers are solely responsible for obtaining, printing, and paying for the return shipping/freight label and transit fees. Original shipping fees are non-refundable.
              </li>
              <li>
                <span className="font-semibold text-dark">Restocking Fees:</span>{" "}
                A restocking fee of{" "}
                <span className="font-semibold text-dark">20% of the product price</span> will be deducted from the refund amount for returned merchandise.
              </li>
              <li>
                <span className="font-semibold text-dark">Refund Processing Time:</span>{" "}
                <span className="font-semibold text-green">7 Days</span>. Once your returned items arrive at our warehouse and pass quality inspection (confirming unopened, new condition), your refund will be processed within{" "}
                <span className="font-semibold text-dark">7 business days</span>. The refund will be automatically credited back to your original payment method.
              </li>
            </ul>
          </div>

          {/* 4. Damaged or Lost Shipments in Transit */}
          <div className="border border-gray-3 rounded-2xl p-6 sm:p-7 space-y-3">
            <h3 className="text-custom-xl font-bold text-dark">
              4. Damaged Shipments &amp; Manifest Discrepancies
            </h3>
            <p className="text-base text-dark-3 leading-relaxed">
              For cargo damaged during transit or substantial manifest discrepancies:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-dark-3 text-base">
              <li>
                <span className="font-semibold text-dark">Transit Damage Reporting:</span>{" "}
                Notify us within <span className="font-semibold text-dark">7 days of delivery</span> with clear photos before unloading and note the damage on the carrier&rsquo;s Delivery Receipt (POD / Bill of Lading).
              </li>
              <li>
                <span className="font-semibold text-dark">Manifest Discrepancy Margin:</span>{" "}
                Due to wholesale liquidation nature, a standard 15% variance in item count/value is customary. For discrepancies exceeding 15%, please submit a detailed spreadsheet claim within 7 days of delivery.
              </li>
            </ul>
          </div>

          {/* 5. How to Initiate a Return or Exchange */}
          <div className="border border-gray-3 rounded-2xl p-6 sm:p-7 space-y-4">
            <h3 className="text-custom-xl font-bold text-dark">
              5. How to Initiate a Return or Exchange
            </h3>
            <p className="text-base text-dark-3 leading-relaxed">
              To start a return or exchange within the 30-day window, please reach out to our customer support team:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-dark-3 text-base">
              <li>
                <span className="font-semibold text-dark">Email:</span>{" "}
                <a
                  href="mailto:info@suncitypalletsliquidation.com"
                  className="font-semibold text-blue hover:underline"
                >
                  info@suncitypalletsliquidation.com
                </a>
              </li>
              <li>
                <span className="font-semibold text-dark">Phone / WhatsApp:</span>{" "}
                <a
                  href="https://wa.me/18173309020"
                  target="_blank"
                  className="font-semibold text-blue hover:underline"
                >
                  +1 (817) 330-9020
                </a>
              </li>
              <li>
                <span className="font-semibold text-dark">Information Required:</span> Your Full Name, Order / Invoice Number, items being returned, and reason (defective or non-defective return / exchange request).
              </li>
            </ul>
            <p className="text-sm text-dark-3 mt-3 leading-relaxed">
              Our team will review your request and provide you with return instructions and return merchandise authorization (RMA) within 24-48 business hours.
            </p>
          </div>
        </div>
      </div>
    </PolicyLayout>
  );
}
