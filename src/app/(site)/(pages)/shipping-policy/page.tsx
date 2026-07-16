import { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Shipping Policy | SUNCITY PALLETS LIQUIDATION STORE LLC",
  description: "Shipping Policy, delivery timeframes, rates, and customs guidelines for SUNCITY PALLETS LIQUIDATION STORE LLC.",
};

export default function ShippingPolicyPage() {
  return (
    <PolicyLayout title="Shipping Policy">
      <div className="space-y-8">
        <div>
          <h2 className="text-custom-2xl font-semibold text-dark mb-4">Delivery Policy</h2>
          <p className="text-base text-dark-3 leading-relaxed mb-4">
            Shipping wholesale liquidation pallets is often not as straightforward as shipping regular goods. At SUNCITY PALLETS LIQUIDATION STORE LLC we use a variety of materials to package and ship our merchandise, the most common being cases, bins, gaylords, or shrink-wrapped pallets. Our clients typically ship their goods by Courier (UPS/FedEx), LTL (Less than Load) Carriers, Full Trailers, or Containers.
          </p>
          <p className="text-base text-dark-3 leading-relaxed">
            This Shipping Policy (&ldquo;Policy&rdquo;) outlines the terms and conditions governing the shipping of products purchased from SUNCITY PALLETS LIQUIDATION STORE LLC (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) through our website <span className="font-semibold text-blue">https://firebrick-dugong-592049.hostingersite.com</span> (&ldquo;Website&rdquo;). SUNCITY PALLETS LIQUIDATION STORE LLC is a Limited Liability Company incorporated in the United States on 2025-05-03 with registry number 0806021894. Our legal address is 328 Thomas Pl, Everman, TX 76140, USA. By placing an order and using our services, you (&ldquo;Customer,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) agree to comply with this Policy.
          </p>
        </div>

        <hr className="border-gray-3" />

        <div className="space-y-6">
          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">1. Shipping Methods and Timeframes</h3>
            <p className="text-base text-dark-3 leading-relaxed mb-3">
              We strive to provide efficient and reliable shipping services to our customers. We currently offer the following shipping methods within the United States:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-dark-3">
              <li>
                <span className="font-semibold text-dark">Standard Shipping:</span> Orders shipped via Standard Shipping are typically delivered within <span className="font-semibold">5-7 business days</span> from the date of shipment.
              </li>
              <li>
                <span className="font-semibold text-dark">Express Shipping:</span> For customers who require expedited delivery, we offer Express Shipping. Orders shipped via Express Shipping are typically delivered within <span className="font-semibold">1-3 business days</span> from the date of shipment.
              </li>
            </ul>
            <p className="text-sm text-gray-6 mt-3 italic">
              Please note that the delivery timeframes mentioned above are estimates and may be subject to occasional delays beyond our control, such as during peak seasons or unforeseen circumstances.
            </p>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">2. Shipping Charges</h3>
            <p className="text-base text-dark-3 leading-relaxed">
              Shipping charges are determined based on various factors, including the weight, dimensions, and destination of the package. The applicable shipping charges will be calculated and displayed at checkout before you confirm your purchase. Additional charges may apply for expedited shipping options. We reserve the right to update our shipping charges at any time without prior notice, but such changes will not affect orders that have already been placed.
            </p>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">3. Order Processing Time</h3>
            <p className="text-base text-dark-3 leading-relaxed">
              Once your order has been successfully placed and payment has been verified, we will process your order within <span className="font-semibold text-dark">2 to 4 business days</span>. Processing times may vary depending on factors such as order volume and product availability. Orders placed on weekends or public holidays will be processed on the next business day.
            </p>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">4. Shipment Confirmation and Tracking</h3>
            <p className="text-base text-dark-3 leading-relaxed">
              Once your order has been shipped, we will send you a shipment confirmation email containing the tracking number and a link to track your package. You can also find this information by logging into your account on our Website. It is your responsibility to ensure that the shipping address provided is accurate and complete. We are not responsible for any delays or issues caused by incorrect shipping information provided by the customer.
            </p>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">5. Domestic vs. International Shipping</h3>
            <p className="text-base text-dark-3 leading-relaxed mb-4">
              Standard checkout shipping through our Website is only offered within the United States. We do not provide automatic international shipping at checkout (including U.S. territories and APO/FPO addresses) for standard orders.
            </p>
            <p className="text-base text-dark-3 leading-relaxed">
              However, because we deal with wholesale pallets and bulk containers, international freight shipping is available upon custom inquiry. Please refer to Section 11 (International Freight Shipping) for detailed rules, rates, and compliance terms.
            </p>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">6. Order Modifications and Cancellations</h3>
            <p className="text-base text-dark-3 leading-relaxed">
              Once an order has been placed, modifications or cancellations may not be possible. If you need to make any changes to your order, please contact our customer support team immediately. We will do our best to accommodate your request, but we cannot guarantee that changes can be made after an order has been processed.
            </p>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">7. Lost or Damaged Shipments</h3>
            <p className="text-base text-dark-3 leading-relaxed">
              While we take great care in packing and shipping your orders, there may be rare instances where a package is lost or damaged during transit. If your package is lost or arrives damaged, please contact our customer support team within <span className="font-semibold text-dark">7 days</span> of receiving your order. We will work with you to resolve the issue and initiate a claim with the shipping carrier if necessary.
            </p>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">8. Returns and Exchanges</h3>
            <p className="text-base text-dark-3 leading-relaxed">
              For information on our return and exchange policy, please refer to our <a href="/refund-policy" className="text-blue hover:underline font-semibold">Refund Policy</a> page.
            </p>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">9. Compliance with Laws and Regulations</h3>
            <p className="text-base text-dark-3 leading-relaxed">
              We comply with all applicable laws and regulations regarding the shipping of products. It is your responsibility to ensure that any products you purchase comply with the laws and regulations of your jurisdiction. We reserve the right to refuse or cancel an order if we believe it violates any laws or regulations.
            </p>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2">10. Shipping Cost Calculations</h3>
            <p className="text-base text-dark-3 leading-relaxed">
              The cost of shipping by Courier or LTL is typically determined by the distance between the origin and destination of the goods, the type of destination, the type of merchandise, and the weight or quantity of the merchandise being shipped. The cost of shipping by Full Truckload or Ocean Container is typically determined by the distance between the origin and the destination of the goods.
            </p>
          </div>

          <div>
            <h3 className="text-custom-lg font-semibold text-dark mb-2 text-purple-700">11. International Freight Shipping</h3>
            <div className="bg-gray-1 p-6 rounded-xl border border-gray-3 space-y-4">
              <p className="text-base text-dark-3 leading-relaxed">
                For international wholesale shipments, please take note of the following rules:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-dark-3">
                <li>
                  <span className="font-semibold text-dark">Ocean Freight Rates:</span> Ocean freight charges can run from <span className="font-semibold">$300 to $700 per pallet</span>, depending on the destination. These rates are typically uneconomical in our industry for lower-value pallets.
                </li>
                <li>
                  <span className="font-semibold text-dark">Container Shipping:</span> Container Loads are the most cost-effective way to ship larger amounts of merchandise overseas. Ocean freight can cost between <span className="font-semibold">$2,500 to $6,500 for a full container</span>, depending on the container size (20&prime;, 40&prime;, 45&prime;) and the destination.
                </li>
                <li>
                  <span className="font-semibold text-dark">Import Restrictions:</span> Many countries restrict what types of goods can be imported. Furthermore, brand protection and agency rights in place may prohibit the importation of certain brands into the country other than from the authorized importer.
                </li>
                <li>
                  <span className="font-semibold text-dark">Buyer&rsquo;s Responsibility:</span> It is the buyer&rsquo;s sole responsibility to be informed of particular restrictions in the destination country. SUNCITY PALLETS LIQUIDATION STORE LLC cannot be held responsible for merchandise seized or refused at customs. Please familiarize yourself with these costs and ensure you can clear customs before placing an order.
                </li>
                <li>
                  <span className="font-semibold text-dark">CBP Inspections and Customs Duties:</span> U.S. Customs &amp; Border Protection (CBP) has broad authority to inspect export cargo. The cost of inspections ordered by CBP is the responsibility of the consignee. All customs clearance fees, import duties, and related taxes are also the responsibility of the consignee. When appropriate, please verify that the Seal # matches the paperwork and has not been tampered with.
                </li>
                <li>
                  <span className="font-semibold text-dark font-mono text-xs">Manifest Limitations:</span> We export dozens of orders weekly, and in over 98% of cases, orders clear customs without issue. However, due to the nature of liquidation, we are usually unable to provide detailed manifests and country of origin details. Clearing customs with such goods can on rare occasions be problematic, and SUNCITY PALLETS LIQUIDATION STORE LLC does not control that aspect of the sale.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PolicyLayout>
  );
}
