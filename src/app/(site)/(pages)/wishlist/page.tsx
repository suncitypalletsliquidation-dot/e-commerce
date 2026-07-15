import React from "react";
import { Wishlist } from "@/components/Wishlist";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wishlist | Suncity Pallets Liquidation Store",
  description: "View your saved items and liquidation pallets in your Suncity Pallets Liquidation Store wishlist.",
};

const WishlistPage = () => {
  return (
    <main>
      <Wishlist />
    </main>
  );
};

export default WishlistPage;
