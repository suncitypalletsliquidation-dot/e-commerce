"use client";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { loadCartFromStorage as loadCartAction } from "@/redux/features/cart-slice";
import { useAppSelector } from "@/redux/store";
import { loadCartFromStorage, saveCartToStorage } from "@/lib/cartStorage";

function CartProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const isInitialMount = useRef(true);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedItems = loadCartFromStorage();
    if (savedItems.length > 0) {
      dispatch(loadCartAction(savedItems));
    }
  }, [dispatch]);

  // Persist cart to localStorage whenever it changes, BUT skip initial mount to avoid wiping data before load
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    saveCartToStorage(cartItems);
  }, [cartItems]);

  return <>{children}</>;
}

export default CartProvider;
