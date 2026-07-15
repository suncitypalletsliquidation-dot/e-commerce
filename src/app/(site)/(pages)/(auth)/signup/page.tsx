import Signup from "@/components/Auth/Signup";
import React from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sign Up | Suncity Pallets Liquidation Store",
  description: "Create an account on Suncity Pallets Liquidation Store to purchase and track wholesale liquidation pallets.",
};

const SignupPage = () => {
  return (
    <main>
      <Signup />
    </main>
  );
};

export default SignupPage;
