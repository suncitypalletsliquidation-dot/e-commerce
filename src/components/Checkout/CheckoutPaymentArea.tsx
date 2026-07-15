"use client";
import React, { useEffect, useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useCheckoutForm } from "./form";
import { useSession } from "next-auth/react";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { useRouter } from "nextjs-toploader/app";
import toast from "react-hot-toast";
import { useCart } from "@/hooks/useCart";
import PaymentMethod from "./PaymentMethod";

const CheckoutPaymentArea = ({ amount }: { amount: number }) => {
  const { handleSubmit, watch } = useCheckoutForm();
  const paymentMethod = watch("paymentMethod");
  const stripe = useStripe();
  const elements = useElements();
  const { data: session } = useSession();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const { cartItems, clearCart } = useCart();

  // Create a PaymentIntent as soon as the page loads
  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount / 100) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  // Handle checkout
  const handleCheckout = async (data: any) => {
    if (paymentMethod === "bank" && (!stripe || !elements)) {
      return;
    }

    setLoading(true);

    if (paymentMethod === "bank") {
      const { error: submitError } = await elements!.submit();

      if (submitError) {
        setErrorMessage(submitError.message);
        setLoading(false);
        return;
      }
    }

    const orderId = `ORDER-${Math.floor(Math.random() * 1000000)}`;

    const orderData = {
      orderId,
      status: "pending",
      totalPrice: amount, // total order price (integer)
      userId: session?.user?.id || "", // user ID (string)
      userEmail: session?.user?.email || data.billing?.email, // user email
      productQuantity: cartItems
        .reduce((sum, item) => sum + item.quantity, 0)
        .toString(),
      orderTitle: "Order from Suncity Pallets Liquidation Store",
      country: data.billing?.country,
      city: data.billing?.town,
      line1: data.billing?.address?.street,
      line2: data.billing?.address?.apartment || "",
      products: cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        color: item?.color || "",
        size: item?.size || "",
        attribute: item?.attribute || "",
      })),
    };

    try {
      // Save order to your database via your API
      const saveOrderResponse = await fetch("/api/order/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!saveOrderResponse.ok) {
        throw new Error("Failed to save order");
      }

      if (paymentMethod === "bank") {
        const { error } = await stripe!.confirmPayment({
          elements: elements!,
          clientSecret,
          confirmParams: {
            return_url: `${window.location.origin}/success`,
          },
        });

        if (error) {
          setErrorMessage(error.message);
        } else {
          // success redirect
          router.push("/success");
        }
      } else {
        toast.success("Order placed successfully!");
        clearCart();
        router.push("/success");
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center py-5">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-blue">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(handleCheckout)}>
      <PaymentMethod amount={amount} />

      {errorMessage && <div className="text-red mb-4">{errorMessage}</div>}

      <button
        type="submit"
        disabled={(paymentMethod === "bank" && !stripe) || loading}
        className="w-full h-max font-medium text-white bg-blue py-3 px-6 rounded-full ease-out duration-200 hover:bg-blue-dark disabled:opacity-50 mt-7.5"
      >
        {loading
          ? "Processing..."
          : paymentMethod === "cod"
            ? "Place Order"
            : `Pay Now`}
      </button>
    </form>
  );
};

export default CheckoutPaymentArea;
