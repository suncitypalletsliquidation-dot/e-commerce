"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open the first one

  const faqs: FAQItem[] = [
    {
      question: "Where does Amazon Liquidation Express source their products?",
      answer:
        "Amazon Liquidation Express partners with top retailers from all over the United States. Our team sources product directly from the source so we can provide you with the most competitive pricing in the industry.",
    },
    {
      question: "Is a resale certificate required for purchase?",
      answer:
        "No, Amazon Liquidation Express does not require a resale certificate to make a purchase.",
    },
    {
      question: "What payment methods does Amazon Liquidation Express accept?",
      answer:
        "Amazon Liquidation Express accepts CashApp, Zelle, Venmo and PayPal.",
    },
    {
      question: "Do you accept returns?",
      answer:
        "All sales at Amazon Liquidation Express are final, due to the nature of the products.",
    },
    {
      question: "Is your checkout secure?",
      answer:
        "Yes, we use industry-standard SSL (secure socket layer) technology to encrypt and keep your personal and financial data safe when it is transmitted during the checkout process.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-custom-2xl font-semibold text-dark mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-base text-dark-3 leading-relaxed mb-6">
          Find answers to common questions about sourcing, buying guidelines, payments, and checkout security.
        </p>
      </div>

      <hr className="border-gray-3" />

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`border rounded-xl transition duration-200 ${
                isOpen ? "border-blue/30 bg-blue/5" : "border-gray-3 bg-white"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left p-5 focus:outline-hidden"
              >
                <span className="font-medium text-dark text-base sm:text-custom-lg pr-4">
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 transition-transform duration-300 w-6 h-6 flex items-center justify-center rounded-full bg-gray-2 text-dark ${
                    isOpen ? "rotate-180 bg-blue/10 text-blue" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-[300px] border-t border-gray-3/50" : "max-h-0"
                }`}
              >
                <div className="p-5 text-dark-3 text-base leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
