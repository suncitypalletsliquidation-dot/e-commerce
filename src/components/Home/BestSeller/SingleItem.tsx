"use client";
import React from "react";
import { Product } from "@/types/product";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector, RootState } from "@/redux/store";
import { updateQuickView } from "@/redux/features/quickView-slice";
import Image from "next/image";
import Link from "next/link";
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from "@/redux/features/wishlist-slice";
import { imageBuilder } from "@/sanity/sanity-shop-utils";
import { useAutoOpenCart } from "../../Providers/AutoOpenCartProvider";
import toast from "react-hot-toast";
import ActionBtn from "./ActionBtn";
import { useCart } from "@/hooks/useCart";

const SingleItem = ({ item }: { item: Product }) => {
  const { openModal } = useModalContext();
  const dispatch = useDispatch<AppDispatch>();
  const { cartItems } = useCart();
  const { addItemWithAutoOpen } = useAutoOpenCart();
  const wishlistItems = useAppSelector(
    (state: RootState) => state.wishlistReducer.items,
  );

  const isAlreadyInCart = cartItems.some(
    (cartItem) => cartItem.id?.toString() === item._id?.toString(),
  );

  const isAlreadyInWishlist = Object.values(wishlistItems ?? {}).some(
    (wishlistItem) => wishlistItem._id?.toString() === item._id?.toString(),
  );

  const cartItem = {
    id: item._id,
    name: item.name,
    price: item.discountedPrice * 100,
    image: item?.previewImages
      ? imageBuilder(item?.previewImages[0]?.image).url() || ""
      : "",
    slug: item?.slug?.current,
    quantity: 1,
  };

  // update the QuickView state
  const handleQuickViewUpdate = () => {
    dispatch(updateQuickView({ ...item }));
    openModal();
  };

  // add to cart
  const handleAddToCart = () => {
    addItemWithAutoOpen(cartItem);
    toast.success("Product added to cart!");
  };

  async function handleCheckoutClick(event: any) {
    event.preventDefault();

    const checkoutData = cartItems.map((i) => ({
      id: i.id,
      name: i.name,
      price: i.price,
      quantity: i.quantity,
      image: i.image,
      slug: i.slug,
    }));

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        body: JSON.stringify(checkoutData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data?.url) {
        window.location.href = data?.url;
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }

  const handleToggleWishlist = () => {
    if (isAlreadyInWishlist) {
      dispatch(removeItemFromWishlist(item._id));
      toast.success("Product removed from wishlist!");
    } else {
      dispatch(
        addItemToWishlist({
          ...item,
          quantity: 1,
        }),
      );
      toast.success("Product added to wishlist!");
    }
  };

  const hasDiscount = item.discountedPrice < item.price;

  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg border border-gray-2 bg-[#F6F7FB] min-h-[403px]">
        <div className="text-center px-4 py-7.5">
          <h3 className="font-medium text-dark ease-out text-base duration-200 hover:text-blue mb-1.5 line-clamp-1">
            <Link href={`/products/${item?.slug?.current}`}>{item.name}</Link>
          </h3>

          <span className="flex items-center justify-center gap-2 text-lg font-medium">
            {hasDiscount ? (
              <>
                <span className="line-through text-dark-4">${item.price}</span>
                <span className="text-dark">${item.discountedPrice}</span>
              </>
            ) : (
              <span className="text-dark">${item.price}</span>
            )}
          </span>
        </div>
        <div className="flex items-center justify-center">
          <Link href={`/products/${item?.slug?.current}`}>
            <Image
              src={
                item?.previewImages
                  ? imageBuilder(item?.previewImages[0]?.image).url() || ""
                  : ""
              }
              alt={item.name}
              width={280}
              height={280}
            />
          </Link>
        </div>

        <div className="absolute right-0 bottom-0 u-w-full flex flex-col gap-2 p-5.5 ease-linear duration-300 group-hover:translate-x-0 translate-x-full">
          <ActionBtn
            handleClick={handleQuickViewUpdate}
            text="Quick View"
            icon={"quick-view"}
          />

          {isAlreadyInCart ? (
            <ActionBtn
              handleClick={handleCheckoutClick}
              text="Checkout"
              icon="check-out"
            />
          ) : (
            <ActionBtn
              handleClick={() => handleAddToCart()}
              text="Add to cart"
              icon="cart"
            />
          )}

          <ActionBtn
            handleClick={handleToggleWishlist}
            text={
              isAlreadyInWishlist ? "Remove from Wishlist" : "Add to Wishlist"
            }
            icon="wishlist"
            addedToWishlist={isAlreadyInWishlist}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
