"use client";
import { CartContext } from "@/context/CartProvider";
import React, { use } from "react";

export const CartItems = () => {
  const { cart } = use(CartContext);
  return (
    <div>
      <h1 className="py-3">{cart.length} Cart Items Added</h1>

      <div className="mt-4">
        {cart.map((item, index) => (
          <div key={index} className="p-2 border-b">
            <p>
              {item.title} - ${item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
