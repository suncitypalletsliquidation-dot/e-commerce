"use client";
import { useCheckoutForm } from "./form";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useCart } from "@/hooks/useCart";
import PaymentMethod from "./PaymentMethod";

const CheckoutAreaWithoutStripe = ({ amount }: { amount: number }) => {
  const { handleSubmit } = useCheckoutForm();
  const { data: session } = useSession();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [loading, setLoading] = useState(false);
  const { cartItems, clearCart } = useCart();

  // Handle checkout
  const handleCheckout = async (data: any) => {
    setLoading(true);

    const orderId = `ORDER-${Math.floor(Math.random() * 1000000)}`;

    const orderData = {
        orderId,
        status: "pending",
        totalPrice: amount, // total order price (integer)
        userId: session?.user?.id || "", // user ID (string)
        userEmail: session?.user?.email || data.billing?.email, // user email
        productQuantity: cartItems.reduce((sum, item) => sum + item.quantity, 0).toString(),
        orderTitle: "Order from NextMerce",
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

      toast.success("Order placed successfully!");
      clearCart();
      router.push("/success");
    } catch (error: any) {
      toast.error(error.message);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleCheckout)}>
      <PaymentMethod amount={amount} />

      {errorMessage && <div className="text-red mb-4 mt-4">{errorMessage}</div>}

      <button
        type="submit"
        disabled={loading}
        className="w-full h-max font-medium text-white bg-blue py-3 px-6 rounded-full ease-out duration-200 hover:bg-blue-dark disabled:opacity-50 mt-7.5"
      >
        {loading ? "Processing..." : `Place Order`}
      </button>
    </form>
  );
};

export default CheckoutAreaWithoutStripe;
