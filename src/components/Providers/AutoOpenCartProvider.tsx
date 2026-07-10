"use client";
import React, { createContext, useContext, useState } from "react";
import { useCart } from "@/hooks/useCart";
import { CartItem } from "@/redux/features/cart-slice";

interface AutoOpenCartContextType {
  addItemWithAutoOpen: (product: CartItem, count?: number) => void;
  isAutoOpenEnabled: boolean;
  setAutoOpenEnabled: (enabled: boolean) => void;
}

const AutoOpenCartContext = createContext<AutoOpenCartContextType | undefined>(
  undefined
);

export const AutoOpenCartProvider: React.FC<{
  children: React.ReactNode;
  defaultAutoOpen?: boolean;
}> = ({ children, defaultAutoOpen = true }) => {
  const { addItem, handleCartClick } = useCart();
  const [isAutoOpenEnabled, setAutoOpenEnabled] = useState(defaultAutoOpen);

  const addItemWithAutoOpen = (product: CartItem, count: number = 1) => {
    addItem(product, count);

    if (isAutoOpenEnabled) {
      setTimeout(() => {
        handleCartClick();
      }, 100);
    }
  };

  return (
    <AutoOpenCartContext.Provider
      value={{
        addItemWithAutoOpen,
        isAutoOpenEnabled,
        setAutoOpenEnabled,
      }}
    >
      {children}
    </AutoOpenCartContext.Provider>
  );
};

export const useAutoOpenCart = (): AutoOpenCartContextType => {
  const context = useContext(AutoOpenCartContext);
  if (!context) {
    throw new Error(
      "useAutoOpenCart must be used within an AutoOpenCartProvider"
    );
  }
  return context;
};
