"use client";
import { EmptyCartIcon } from "@/assets/icons";
import { useCart } from "@/hooks/useCart";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Billing from "./Billing";
import CheckoutAreaWithoutStripe from "./CheckoutAreaWithoutStripe";
import Coupon from "./Coupon";
import { CheckoutFormProvider, CheckoutInput } from "./form";
import Login from "./Login";
import Notes from "./Notes";
import Orders from "./orders";
import Shipping from "./Shipping";
import ShippingMethod from "./ShippingMethod";

const Checkout = () => {
  const { data: session } = useSession();
  const { cartItems, totalPrice } = useCart();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
    setValue,
  } = useForm<CheckoutInput>({
    defaultValues: {
      shippingMethod: {
        name: "free",
        price: 0,
      },
      paymentMethod: "cashapp",
      couponDiscount: 0,
    },
  });

  // Autofill session details when they become available
  useEffect(() => {
    if (session?.user) {
      if (session.user.name) {
        setValue("billing.firstName", session.user.name);
      }
      if (session.user.email) {
        setValue("billing.email", session.user.email);
      }
    }
  }, [session, setValue]);

  const cartIsEmpty = cartItems.length === 0;

  const shippingFee = watch("shippingMethod");
  const couponDiscount = ((watch("couponDiscount") || 0) * totalPrice) / 100;

  const amount = totalPrice + (shippingFee?.price || 0) * 100 - couponDiscount;

  return (
    <>
      <section className="overflow-hidden py-20 bg-gray-2 text-dark">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          {!cartIsEmpty ? (
            <CheckoutFormProvider
              value={{
                register,
                errors,
                watch,
                control,
                setValue,
                handleSubmit,
              }}
            >
              <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-11">
                {/* <!-- Checkout Form --> */}
                <div className="lg:max-w-[670px] w-full flex flex-col gap-6">
                  {!Boolean(session?.user) && <Login />}

                  <Billing />
                  <Shipping />
                  <Notes />
                  <Coupon />
                </div>

                {/* <!-- Order Summary --> */}
                <div className="flex-1">
                  <Orders />
                  <ShippingMethod />
                  <CheckoutAreaWithoutStripe amount={amount} />
                </div>
              </div>
            </CheckoutFormProvider>
          ) : (
            <div className="bg-white rounded-[10px] shadow-1 py-20 px-4">
              <div className="text-center">
                <div className="mx-auto pb-7.5">
                  <EmptyCartIcon className="mx-auto" />
                </div>
                <h2 className="font-medium text-dark text-2xl mb-4">
                  Your cart is empty
                </h2>
                <p className="mb-10">
                  Please add some products to your cart before checking out.
                </p>
                <Link
                  href="/shop"
                  className="inline-flex justify-center font-medium text-white bg-blue py-3 px-10 rounded-full ease-out duration-200 hover:bg-blue-dark"
                >
                  Return To Shop
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Checkout;
