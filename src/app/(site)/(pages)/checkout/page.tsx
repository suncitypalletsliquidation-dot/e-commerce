import React from "react";
import Checkout from "@/components/Checkout";

import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
export const metadata: Metadata = {
  title: "Checkout | Suncity Pallets Liquidation Store",
  description: "Secure checkout page for Suncity Pallets Liquidation Store.",
};

const CheckoutPage = () => {
  return (
    <main>
      <Breadcrumb title={"Checkout"} pages={["checkout"]} />
      <Checkout />
    </main>
  );
};

export default CheckoutPage;
