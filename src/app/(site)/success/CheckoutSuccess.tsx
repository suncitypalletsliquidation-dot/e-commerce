"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { ArrowLeftIcon } from "./_components/icons";
import { useCart } from "@/hooks/useCart";

const CheckoutSuccess = () => {
  const { clearCart } = useCart();
  const [loading, setLoading] = React.useState(true);

  const { data: session } = useSession();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      clearCart();
    }, 1000);
    return () => clearTimeout(timer);
  }, [clearCart]);

  return (
    <section className="overflow-hidden py-20 bg-gray-2 text-dark">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {loading ? (
          <div className="bg-white rounded-xl shadow-1 px-4 py-10 sm:py-15 lg:py-20 xl:py-25">
            <div className="text-center">
              <h2 className="font-bold text-blue text-4xl lg:text-[45px] lg:leading-[57px] mb-5">
                Successful!
              </h2>

              <h3 className="font-medium text-dark text-xl sm:text-2xl mb-3">
                Order Placed Successfully!
              </h3>

              <p className="max-w-[491px] w-full mx-auto mb-7.5 text-dark-2">
                Wait a second while we save the order. You will receive an email
                with details of your order.
              </p>

              <div className="flex justify-center gap-5">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue animate-spin"
                >
                  <path
                    d="M12 4V2M12 22V20M4 12H2M22 12H20M17.657 17.657L19.071 19.071M4.929 4.929L6.34305 6.34305M17.657 6.34305L19.071 4.929M4.929 19.071L6.34305 17.657"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-1 px-4 py-10 sm:py-15 lg:py-20 xl:py-25 text-dark">
            <div className="text-center">
              <h2 className="font-bold text-blue text-4xl lg:text-[45px] lg:leading-[57px] mb-5">
                Successful!
              </h2>

              <h3 className="font-medium text-dark text-xl sm:text-2xl mb-3">
                Order Placed Successfully!
              </h3>

              <p className="max-w-[491px] w-full mx-auto mb-7.5 text-dark-2">
                Sign In with & Track the order. If you are not already Signed Up
                use the purchase email to Sign up.
              </p>

              <div className="flex justify-center flex-wrap gap-5">
                <Link
                  href={`${session?.user ? "/my-account" : "/signin"}`}
                  className="inline-flex items-center gap-2 font-medium text-white bg-dark py-3 px-8 rounded-full ease-out duration-200 hover:bg-opacity-90 transition-all shadow-md active:scale-95"
                >
                  <ArrowLeftIcon />
                  {`${session?.user ? "Account" : "Sign In"}`}
                </Link>

                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 font-medium text-white bg-blue py-3 px-8 rounded-full ease-out duration-200 hover:bg-blue-dark transition-all shadow-md active:scale-95"
                >
                  Continue Shopping
                  <ArrowLeftIcon className="rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CheckoutSuccess;
