"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { CallIcon, EmailIcon, MapIcon } from "@/assets/icons";

interface PolicyLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function PolicyLayout({ title, children }: PolicyLayoutProps) {
  const pathname = usePathname();

  const links = [
    {
      name: "Privacy Policy",
      href: "/privacy-policy",
      icon: (
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      name: "Terms of Use",
      href: "/terms-of-use",
      icon: (
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      name: "Refund Policy",
      href: "/refund-policy",
      icon: (
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
            d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"
          />
        </svg>
      ),
    },
    {
      name: "Shipping Policy",
      href: "/shipping-policy",
      icon: (
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
            d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V14a1 1 0 00-1-1h-2m-3-7h3l3 4v3"
          />
        </svg>
      ),
    },
    {
      name: "FAQs",
      href: "/faq",
      icon: (
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
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Breadcrumb title={title} pages={["policies", title.toLowerCase()]} />

      <section className="py-20 overflow-hidden bg-gray-2">
        <div className="w-full px-4 mx-auto relative max-w-7xl sm:px-6 xl:px-0">
          <div className="flex flex-col items-start lg:flex-row gap-8 xl:gap-10">
            {/* Sidebar Column */}
            <div className="w-full lg:w-1/4 shrink-0">
              {/* Sticky container */}
              <div className=" flex flex-col gap-6">
                {/* Navigation links card */}
                <div className="bg-white rounded-2xl shadow-1 p-5 border border-gray-3 sticky top-0">
                  <h3 className="mb-4 text-custom-sm font-semibold text-dark uppercase tracking-wider">
                    Policy Center
                  </h3>
                  <nav className="flex flex-col gap-2">
                    {links.map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`flex items-center gap-3.5 px-4 py-3 rounded-xl transition duration-200 text-custom-sm font-medium ${
                            isActive
                              ? "bg-blue text-white shadow-2"
                              : "text-dark-3 hover:bg-gray-1 hover:text-blue"
                          }`}
                        >
                          <span
                            className={
                              isActive
                                ? "text-white"
                                : "text-gray-5 hover:text-blue"
                            }
                          >
                            {link.icon}
                          </span>
                          {link.name}
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                {/* Help support card */}
                <div className="bg-blue-light-5 rounded-2xl p-6 border border-blue-light-4">
                  <h4 className="mb-2 text-custom-lg font-semibold text-blue-dark">
                    Need Assistance?
                  </h4>
                  <p className="mb-4 text-custom-xs text-dark-3 leading-relaxed">
                    Have questions about our policies or orders? Our customer
                    support team is here to assist you.
                  </p>

                  <div className="flex flex-col gap-3.5">
                    <Link
                      href="tel:+099 532-786-9843"
                      className="flex items-center gap-3 text-custom-xs text-dark font-medium transition duration-200 hover:text-blue-dark"
                    >
                      <CallIcon className="w-5 h-5 text-blue shrink-0" />
                      (+099) 532-786-9843
                    </Link>

                    <Link
                      href="mailto:support@example.com"
                      className="flex items-center gap-3 text-custom-xs text-dark font-medium transition duration-200 hover:text-blue-dark"
                    >
                      <EmailIcon className="w-5 h-5 text-blue shrink-0" />
                      support@example.com
                    </Link>

                    <div className="flex gap-3 text-custom-xs text-dark font-medium">
                      <MapIcon className="w-5 h-5 text-blue shrink-0" />
                      <span>
                        685 Market Street, Las Vegas, NV 89128, United States
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="w-full lg:w-3/4">
              <div className="bg-white rounded-2xl shadow-1 p-6 sm:p-10 border border-gray-3">
                <div className="prose max-w-none prose-blue text-dark-3">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
