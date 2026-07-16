import Image from "next/image";

export default function LiquidationInfo() {
  return (
    <section className="pt-15 pb-15 border-b border-gray-3">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 xl:px-0">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          <div className="inline-block border border-blue/20 bg-blue-light-5/50 px-5 py-2 rounded-full mb-6">
            <span className="font-semibold text-xs sm:text-custom-xs uppercase tracking-wider text-blue">
              SUNCITY PALLETS LIQUIDATION STORE LLC - Top Most Trusted Bulk
              Pallets Store
            </span>
          </div>

          <h2 className="font-bold text-dark text-xl lg:text-heading-4 xl:text-heading-3 mb-5 leading-tight">
            Pallets of New and Used Amazon Liquidation Stock
          </h2>

          <p className="text-custom-sm sm:text-base text-dark-3 leading-relaxed">
            Pickup pallets packed with a variety of liquidation stock. Pick up
            preschool toddler toys, a mixed selection of women's jumpers,
            kitchen essentials, or even near-new consumer electronics. Unearth
            brilliant deals on designer sunglasses, charming pet products,
            homeware, and last season's fashion. Stock your shop with an LTL
            shipment of hardlines, baby items, and office supplies. With every
            pallet, you never know what hidden gems await in our liquidation
            marketplace, but you can always expect quality products at fantastic
            liquidation prices. With warehouses across the country, from New
            Jersey to Washington State, you might even find a lot close to home.
          </p>
        </div>

        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-15 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-6 relative group">
            {/* Background decorative glow for a premium feel */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue/15 to-teal/15 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300" />

            <div className="relative rounded-2xl overflow-hidden shadow-2 aspect-[4/3] w-full bg-white border border-gray-3">
              <Image
                src="/images/warehouse-pallets.png"
                alt="Bulk liquidation pallets stacked in warehouse"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-102"
                priority
              />
            </div>
          </div>

          {/* Right Column: Key Details / FAQ */}
          <div className="lg:col-span-6 space-y-8 sm:space-y-10">
            <div className="border-l-2 border-blue/30 pl-4 sm:pl-5">
              <h3 className="font-semibold text-lg lg:text-custom-xl text-dark mb-2.5 leading-snug">
                What is the Amazon Bulk Liquidations Store?
              </h3>
              <p className="text-custom-sm text-dark-3 leading-relaxed">
                The Amazon Bulk Liquidations Store is a closed-beta programme
                offering 'lots' of items from Amazon or third-party sellers. A
                'lot' is a collection of items sold together as a single
                listing.
              </p>
            </div>

            <div className="border-l-2 border-blue/30 pl-4 sm:pl-5">
              <h3 className="font-semibold text-lg lg:text-custom-xl text-dark mb-2.5 leading-snug">
                What types of products are available?
              </h3>
              <p className="text-custom-sm text-dark-3 leading-relaxed">
                The lots may include either overstock items (new and unopened)
                or damaged items (returned by customers or damaged during
                processing). Each lot is exclusively sourced from either
                Amazon's inventory or from one or more third-party sellers.
              </p>
            </div>

            <div className="border-l-2 border-blue/30 pl-4 sm:pl-5">
              <h3 className="font-semibold text-lg lg:text-custom-xl text-dark mb-2.5 leading-snug">
                How do I place an order?
              </h3>
              <p className="text-custom-sm text-dark-3 leading-relaxed">
                Ordering a lot is similar to buying any item on Amazon. Simply
                add the lot to your basket and proceed to checkout. Each lot has
                a listing page displaying details such as items included,
                quantity, and price. Lots are sold at set prices and quantities
                for a limited time, 'as is,' with no customisation or price
                negotiation. All sales are final, with no returns or refunds.
                Please review the full Terms and Conditions for more details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
