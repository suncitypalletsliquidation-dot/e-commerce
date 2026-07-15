import Signin from "@/components/Auth/Signin";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sign In | Suncity Pallets Liquidation Store",
  description: "Sign in to your Suncity Pallets Liquidation Store account to track your orders and manage details.",
};

const SigninPage = () => {
  return (
    <main>
      <Signin />
    </main>
  );
};

export default SigninPage;
