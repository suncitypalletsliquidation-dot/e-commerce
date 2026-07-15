"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";

export default function AboutUsContent() {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  const stats = [
    {
      value: "2008",
      label: "Established",
      description: "Serving wholesale liquidations in commerce since 2008",
      icon: (
        <svg
          className="w-8 h-8 text-blue"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      value: "Class 35",
      label: "Registered Service Mark",
      description: "Freight liquidation and secondary retail store services",
      icon: (
        <svg
          className="w-8 h-8 text-blue"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
          />
        </svg>
      ),
    },
    {
      value: "100%",
      label: "Corporate Transparency",
      description: "Official federal registry & legal compliance assured",
      icon: (
        <svg
          className="w-8 h-8 text-blue"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h3.75M9 15h3.375M9 9h3.75m3.51 0H18M18 12h-1.812M18 15h-1.812M4.875 3h14.25c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125H4.875A1.125 1.125 0 013.75 19.875V4.125C3.75 3.504 4.254 3 4.875 3z"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Breadcrumb title="About Us" pages={["about-us"]} />

      <section className="py-20 bg-gray-2 text-dark-3">
        <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 xl:px-0">
          
          {/* Main About Section */}
          <div className="bg-white rounded-2xl shadow-1 border border-gray-3 p-8 sm:p-12 mb-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-blue font-semibold text-custom-sm uppercase tracking-wider block mb-3">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-6">
                Suncity Pallets Liquidation
              </h2>
              <p className="text-base sm:text-custom-lg leading-relaxed text-dark-3 mb-4">
                SUNCITY PALLETS LIQUIDATION STORE LLC is El Paso's premier wholesale liquidator,
                specializing in high-yield liquidation pallets, freight-ready surplus merchandise,
                and retail store services featuring secondary products.
              </p>
              <p className="text-base leading-relaxed text-dark-3">
                Operating under our parent company, <strong>Vendovi, Inc.</strong> (a Washington Corporation),
                we have been serving the wholesale liquidation industry since 2008. We pride ourselves
                on brand authenticity, legal transparency, and providing consistent sourcing opportunities 
                for retailers and buyers nationwide.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="bg-gray-2 rounded-2xl p-6 border border-gray-3 hover:border-blue/30 hover:shadow-sm transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center border border-gray-3 mb-5 group-hover:scale-110 group-hover:border-blue/10 transition-all duration-300">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-dark mb-1 group-hover:text-blue transition-colors">
                    {stat.value}
                  </h3>
                  <p className="font-semibold text-dark text-base mb-2">
                    {stat.label}
                  </p>
                  <p className="text-custom-sm text-dark-3">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Trademark Section */}
          <div className="bg-white rounded-2xl shadow-1 border border-gray-3 p-8 sm:p-12">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              
              {/* Text column */}
              <div className="w-full lg:w-1/3">
                <span className="text-blue font-semibold text-custom-sm uppercase tracking-wider block mb-3">
                  Federal Trademark
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-5">
                  USPTO Service Mark Registration
                </h3>
                <p className="text-base leading-relaxed text-dark-3 mb-4">
                  SUNCITY PALLETS LIQUIDATION is a federally registered service mark (Reg. No. 0,806,021,894 / RN # 6717534)
                  issued on the Principal Register of the United States Patent and Trademark Office (USPTO).
                </p>
                <p className="text-base leading-relaxed text-dark-3 mb-6">
                  The mark covers <strong>Class 35</strong>: Freight liquidation of goods of others, and retail store services
                  featuring secondary products (overstock, box damaged, returns, shelf pulls, and short dated merchandise).
                  First used in commerce on September 15, 2008.
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    id="btn-download-pdf"
                    href="/documents/SUNCITY_PALLETS_LIQUIDATION.pdf"
                    download="SUNCITY_PALLETS_LIQUIDATION.pdf"
                    className="inline-flex items-center justify-center gap-2.5 font-medium text-white bg-blue py-3.5 px-6 rounded-full transition-all duration-200 hover:bg-blue-dark shadow-sm hover:shadow"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                    Download Certificate (PDF)
                  </a>

                  <a
                    id="btn-view-pdf-tab"
                    href="/documents/SUNCITY_PALLETS_LIQUIDATION.pdf"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2.5 font-medium text-blue bg-blue/5 border border-blue/20 py-3.5 px-6 rounded-full transition-all duration-200 hover:bg-blue/10"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                    Open in New Tab
                  </a>
                </div>

                <div className="mt-8 p-5 bg-blue-light-5 rounded-2xl border border-blue-light-4 text-custom-sm text-dark-3">
                  <div className="flex gap-3">
                    <svg
                      className="w-5 h-5 text-blue shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 111.084 1.085l-.041.02H11.25v1.5a.75.75 0 11-1.5 0v-2.25a.75.75 0 01.75-.75h.096zM12 8.25a.75.75 0 100-1.5.75.75 0 000 1.5zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p>
                      <strong>Note:</strong> Some mobile devices may not render PDF documents directly in the browser frame. If the viewer below is blank, please tap <em>Download Certificate (PDF)</em> to view offline.
                    </p>
                  </div>
                </div>
              </div>

              {/* Iframe column with custom browser mockup frame */}
              <div className="w-full lg:w-2/3">
                <div className="border border-gray-3 rounded-2xl overflow-hidden shadow-2 bg-gray-1">
                  
                  {/* Browser Mockup Titlebar */}
                  <div className="bg-gray-3/40 border-b border-gray-3 px-5 py-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] inline-block shadow-sm"></span>
                      <span className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] inline-block shadow-sm"></span>
                      <span className="w-3.5 h-3.5 rounded-full bg-[#27C93F] inline-block shadow-sm"></span>
                    </div>
                    <div className="text-2xs font-semibold text-dark-4 bg-white/70 border border-gray-3/60 rounded-md py-1 px-4 max-w-[280px] sm:max-w-[400px] truncate text-center select-none shadow-3">
                      📄 SUNCITY_PALLETS_LIQUIDATION_TRADEMARK.pdf (131 KB)
                    </div>
                    <div className="w-14"></div>
                  </div>

                  {/* Browser Body / Viewer */}
                  <div className="relative bg-white" style={{ height: "650px" }}>
                    {!isIframeLoaded && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-2 z-10">
                        <div className="w-10 h-10 border-4 border-blue border-t-transparent rounded-full animate-spin mb-3"></div>
                        <p className="text-custom-sm font-medium text-dark-3">Loading Certificate Viewer...</p>
                      </div>
                    )}
                    <iframe
                      id="pdf-trademark-iframe"
                      src="/documents/SUNCITY_PALLETS_LIQUIDATION.pdf#toolbar=1"
                      className="w-full h-full border-0"
                      onLoad={() => setIsIframeLoaded(true)}
                    >
                      <p className="p-10 text-center text-dark-3">
                        Your browser does not support embedded PDF files. Please{" "}
                        <a
                          href="/documents/SUNCITY_PALLETS_LIQUIDATION.pdf"
                          className="text-blue font-semibold underline"
                        >
                          download the PDF document
                        </a>{" "}
                        to view it.
                      </p>
                    </iframe>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
