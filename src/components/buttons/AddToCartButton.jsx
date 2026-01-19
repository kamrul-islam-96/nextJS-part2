"use client";
import { CartContext } from "@/context/CartProvider";
import React, { use, useState } from "react";

export const AddToCartButton = ({food}) => {
  const [inCart, setInCart] = useState(false);
  const {addToCart} = use(CartContext) 

  const handleAddToCart = () => {
    addToCart(food);
    setInCart(true);
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}
        disabled={inCart}
        className="cursor-pointer bg-orange-500 hover:bg-orange-600 px-10 text-white font-bold py-3 rounded-xl transition-colors shadow-md shadow-orange-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {inCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
};
