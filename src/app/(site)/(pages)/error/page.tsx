import React from "react";
import Error from "@/components/Error";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Error | Suncity Pallets Liquidation Store",
  description: "An error occurred on Suncity Pallets Liquidation Store.",
};

const ErrorPage = () => {
  return (
    <main>
      <Error />
    </main>
  );
};

export default ErrorPage;
