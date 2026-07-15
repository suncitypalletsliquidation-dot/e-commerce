import React from "react";
import Cart from "@/components/Cart";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Cart | Suncity Pallets Liquidation Store",
  description: "View and edit your shopping cart before checking out at Suncity Pallets Liquidation Store.",
};

const CartPage = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export default CartPage;
