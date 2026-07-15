import Image from "next/image";

export default function PurchaseFAQ() {
  return (
    <section className="pt-15 pb-15">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 xl:px-0">
        {/* Top Part: First set of FAQs */}
        <div className="max-w-4xl mx-auto space-y-8 mb-12 sm:mb-16">
          <div>
            <h2 className="font-bold text-lg lg:text-heading-6 text-dark mb-3">
              What should I do if my lot arrives damaged or has missing items?
            </h2>
            <p className="text-custom-sm sm:text-base text-dark-3 leading-relaxed">
              If your lot arrives damaged or with missing items, please contact{" "}
              <a
                href="mailto:info@suncitypalletsliquidation.com"
                className="font-bold text-dark hover:text-blue transition-colors"
              >
                info@suncitypalletsliquidation.com
              </a>{" "}
              for assistance.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-lg lg:text-heading-6 text-dark mb-3">
              Will the storefront be restocked?
            </h2>
            <p className="text-custom-sm sm:text-base text-dark-3 leading-relaxed">
              New lots will be added periodically. Once enrolled, you'll be
              notified when new lots become available.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-lg lg:text-heading-6 text-dark mb-3">
              Why can't I add a lot to my cart?
            </h2>
            <p className="text-custom-sm sm:text-base text-dark-3 leading-relaxed">
              Purchases are limited to enrolled customers. If you're not
              enrolled in the programme, you won't be able to add lots to your
              cart.
            </p>
          </div>

          <div className="bg-gray-1 p-5 sm:p-6 rounded-2xl border border-gray-3">
            <p className="text-custom-sm sm:text-base text-dark-3 leading-relaxed">
              This programme is currently available only within the contiguous
              United States. Enrolled customers must have an Amazon customer
              account that is registered in the Amazon Tax Exemption Programme
              (ATEP). For more information on ATEP, please refer to the{" "}
              <a href="#" className="font-medium text-blue hover:underline">
                ATEP Help Page
              </a>
              .
            </p>
          </div>
        </div>

        {/* Bottom Part: 2-Column Responsive Layout (FAQs on Left, Delivery Image on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-15 items-center max-w-4xl mx-auto">
          {/* Left Column: Remaining FAQs */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10">
            <div className="border-l-2 border-blue/30 pl-4 sm:pl-5">
              <h3 className="font-semibold text-lg lg:text-custom-xl text-dark mb-2.5 leading-snug">
                How do I confirm my shipping address in my Amazon account?
              </h3>
              <p className="text-custom-sm text-dark-3 leading-relaxed">
                For guidance on adding, editing, or deleting addresses in your
                Amazon account, please visit the{" "}
                <a href="#" className="font-medium text-blue hover:underline">
                  Address Help Page
                </a>
                .
              </p>
            </div>

            <div className="border-l-2 border-blue/30 pl-4 sm:pl-5">
              <h3 className="font-semibold text-lg lg:text-custom-xl text-dark mb-2.5 leading-snug">
                Why do I need to provide a phone number with my shipping
                address?
              </h3>
              <p className="text-custom-sm text-dark-3 leading-relaxed">
                After purchasing a lot, the carrier may need to contact you
                about your order using the phone number provided with your
                shipping address.
              </p>
            </div>
          </div>

          {/* Right Column: Loading Delivery Image */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue/15 to-teal/15 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300" />

            <div className="relative rounded-2xl overflow-hidden shadow-2 aspect-[4/3] w-full bg-white border border-gray-3">
              <Image
                src="/images/delivery-pickup.png"
                alt="Delivery person loading packages onto a trolley from a pickup truck"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-102"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
