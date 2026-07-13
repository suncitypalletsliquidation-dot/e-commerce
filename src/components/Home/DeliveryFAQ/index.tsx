import Image from "next/image";

export default function DeliveryFAQ() {
  return (
    <section className="pt-15 pb-15 border-b border-gray-3">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 xl:px-0">
        {/* FAQs Section */}
        <div className="max-w-4xl mx-auto space-y-8 mb-12 sm:mb-16">
          <div>
            <h2 className="font-bold text-lg lg:text-heading-6 text-dark mb-3">
              How does delivery work?
            </h2>
            <p className="text-custom-sm sm:text-base text-dark-3 leading-relaxed">
              Depending on the size of the order, lots may arrive on pallets, which require a forklift 
              or delivery dock, or they may arrive in smaller parcels. Each lot listing will indicate the 
              estimated shipment size. Delivery timelines are at Amazon's discretion. You'll receive an 
              updated delivery date and tracking information by email once your order ships. Not all items 
              in your order may ship together, but Amazon aims to deliver in as few shipments as possible.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-lg lg:text-heading-6 text-dark mb-3">
              How do I contact customer support?
            </h2>
            <p className="text-custom-sm sm:text-base text-dark-3 leading-relaxed">
              The Bulk Liquidations Store has a dedicated customer support team reachable at{" "}
              <a href="mailto:info@amazonliquidationexpress.com" className="font-bold text-dark hover:text-blue transition-colors">
                info@amazonliquidationexpress.com
              </a>
              . For any questions, feedback, or order issues, please contact them directly, as Amazon's 
              general customer service team may not be able to assist with this programme.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-lg lg:text-heading-6 text-dark mb-3">
              Can I return my lot if I change my mind?
            </h2>
            <p className="text-custom-sm sm:text-base text-dark-3 leading-relaxed">
              No, all sales are final and are not eligible for return or refund.
            </p>
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10 max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2 aspect-[4/3] w-full bg-white border border-gray-3 group">
            <Image
              src="/images/warehouse-racks.png"
              alt="Cardboard boxes stacked on warehouse racking"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-102"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2 aspect-[4/3] w-full bg-white border border-gray-3 group">
            <Image
              src="/images/blue-wrapped-pallets.png"
              alt="Blue plastic wrapped pallets in warehouse"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-102"
            />
          </div>
        </div>

        {/* Bottom Explanatory Paragraphs */}
        <div className="max-w-4xl mx-auto space-y-6 text-custom-sm sm:text-base text-dark-3 leading-relaxed">
          <p>
            Buyers can bid or purchase online to acquire bulk quantities of inventory sourced directly from 
            top retailer manufacturers across the United States. Pallets may include returned items, new 
            items directly from the retailers, and even mystery packages that have not been opened yet.
          </p>
          <p>
            <span className="font-bold text-dark">How do we do it?</span> On top of what you're already 
            saving by participating in an auction - you'll also cut your costs by eliminating shipping 
            and transit fees. We store all of our pallets in a centrally located warehouse in Texas where 
            you can pick up your winnings yourself.
          </p>
        </div>
      </div>
    </section>
  );
}
