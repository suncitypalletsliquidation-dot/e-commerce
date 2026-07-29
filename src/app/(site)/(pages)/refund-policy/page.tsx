import { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Refund Policy | SUNCITY PALLETS LIQUIDATION STORE LLC",
  description:
    "Refund and Return Policy for SUNCITY PALLETS LIQUIDATION STORE LLC. Review our terms for closeouts, returns, and exchanges.",
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <PolicyLayout title="Refund Policy">
      <div className="space-y-8">
        <div>
          <h2 className="text-custom-2xl font-semibold text-dark mb-4">
            Refund &amp; Returns Policy
          </h2>
          <p className="text-base text-dark-3 leading-relaxed mb-4">
            Thank you for shopping at SUNCITY PALLETS LIQUIDATION STORE LLC. Because our
            inventory consists of wholesale liquidation, closeouts, overstocks,
            and customer return merchandise, our return policy differs
            significantly from traditional retail stores.
          </p>
          <p className="text-base leading-relaxed bg-red-light-6 p-4.5 rounded-xl border border-red-light-3 text-red-dark font-medium">
            Please read this policy carefully. By placing an order on our
            Website (https://firebrick-dugong-592049.hostingersite.com), you
            acknowledge and agree that all purchases are sold strictly AS-IS and
            all sales are final, subject to the limited exceptions detailed
            below.
          </p>
        </div>

        <hr className="border-gray-3" />

        <div className="space-y-6">
          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">
              1. All Sales Are Final (&ldquo;AS-IS&rdquo;)
            </h3>
            <p className="text-base text-dark-3 leading-relaxed">
              We sell merchandise in liquidation lots, pallets, and containers.
              The condition of these items can vary (ranging from brand new
              overstock to salvage customer returns). Unless otherwise
              explicitly stated in writing on the product page or invoice, all
              products are sold &ldquo;AS-IS&rdquo;. We do not accept returns,
              refunds, or exchanges for change of mind, buyer remorse, or if the
              merchandise condition does not meet your personal preferences.
            </p>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">
              2. Damaged or Lost Shipments in Transit
            </h3>
            <p className="text-base text-dark-3 leading-relaxed mb-3">
              While we pack cargo securely in cases, gaylords, or shrink-wrapped
              pallets, carrier accidents can occur.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-dark-3">
              <li>
                <span className="font-semibold text-dark">
                  Reporting Timeframe:
                </span>{" "}
                You must notify our customer support team of any transit damage
                or lost cargo within{" "}
                <span className="font-semibold text-dark">
                  7 days of delivery
                </span>
                .
              </li>
              <li>
                <span className="font-semibold text-dark">
                  Proof of Damage:
                </span>{" "}
                To process a claim, you must document the damage with
                photographs before unloading, and write a detailed description
                of the damage on the carrier&rsquo;s Delivery Receipt (POD /
                Bill of Lading) before signing off on the shipment.
              </li>
              <li>
                <span className="font-semibold text-dark">
                  Claims Processing:
                </span>{" "}
                If we determine the carrier is at fault and the damage is
                documented correctly on the carrier&rsquo;s paperwork, we will
                work with you to file a claim with the shipping company and
                issue a proportional credit or replacement if the claim is
                successful.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">
              3. Manifest Discrepancies
            </h3>
            <p className="text-base text-dark-3 leading-relaxed mb-3">
              Due to the wholesale nature of liquidation, manifests (if
              provided) are intended as approximate guides.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-dark-3">
              <li>
                <span className="font-semibold text-dark">
                  15% Discrepancy Margin:
                </span>{" "}
                We allow a standard variance of{" "}
                <span className="font-semibold text-dark">
                  15% in total value, quantity, or category breakdown
                </span>
                . Discrepancies under 15% are normal in the liquidation industry
                and are not eligible for refunds or adjustments.
              </li>
              <li>
                <span className="font-semibold text-dark">
                  Filing a Discrepancy Claim:
                </span>{" "}
                If a manifest discrepancy exceeds 15% in item value, you must
                submit a detailed claim to our support team within 7 days of
                delivery. The claim must include a spreadsheet detailing the
                missing/incorrect items, purchase price, and photographic
                evidence.
              </li>
              <li>
                <span className="font-semibold text-dark">Resolution:</span> If
                verified, we may at our sole discretion offer a partial refund,
                store credit, or a discount code on your next purchase to cover
                the verified deficit exceeding the 15% allowance.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">
              4. Exceptions and Approved Returns
            </h3>
            <p className="text-base text-dark-3 leading-relaxed mb-3">
              In rare instances where a return is authorized as an exceptional
              circumstance by our management in writing:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-dark-3">
              <li>
                <span className="font-semibold text-dark">Restocking Fee:</span>{" "}
                A restocking fee of{" "}
                <span className="font-semibold text-dark">20%</span> of the
                purchase price will be deducted from the refund.
              </li>
              <li>
                <span className="font-semibold text-dark">Shipping Costs:</span>{" "}
                The customer is solely responsible for arranging and paying for
                all return shipping and freight fees. Original shipping fees are
                non-refundable.
              </li>
              <li>
                <span className="font-semibold text-dark">
                  Merchandise Condition:
                </span>{" "}
                Authorized returns must be received in their original packaging,
                unopened, and in the exact condition they left our warehouse.
                Any items that have been opened, sorted, or altered will be
                rejected, and no refund will be issued.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">
              5. Cancellations
            </h3>
            <p className="text-base text-dark-3 leading-relaxed">
              Once an order has been paid and enters processing or shipping, it
              cannot be canceled or modified. If you request a cancellation
              before processing begins, please contact our support team
              immediately. We will do our best to stop the order, but we cannot
              guarantee cancellation. If a cancellation is successfully
              processed before shipment, it may be subject to a 5% merchant
              processing fee.
            </p>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">
              6. How to Submit a Claim
            </h3>
            <p className="text-base text-dark-3 leading-relaxed">
              To file a claim for damaged transit cargo or manifest
              discrepancies, please email{" "}
              <span className="font-semibold text-blue">
                info@suncitypalletsliquidation.com
              </span>{" "}
              with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-dark-3">
              <li>Your Name and Order / Invoice Number</li>
              <li>A description of the issue (damage, missing items, etc.)</li>
              <li>
                Clear photos of the pallets/boxes before unloading, photos of
                the individual damages, and a scan/photo of the signed Delivery
                Receipt detailing the issue.
              </li>
            </ul>
            <p className="text-sm text-dark-3 mt-4 leading-relaxed">
              We review all claims within 3-5 business days and will contact you
              via email with our determination.
            </p>
          </div>
        </div>
      </div>
    </PolicyLayout>
  );
}
