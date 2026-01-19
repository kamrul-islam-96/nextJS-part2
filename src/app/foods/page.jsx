import { FoodCard } from "@/components/card/FoodCard";
import React from "react";
import { CartItems } from "./CartItems";
import { InputSearch } from "@/components/search/InputSearch";

const getFoods = async (search) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
  );
  const data = await res.json();
  new Promise((resolve) => setTimeout(resolve, 2000));
  return data.foods || [];
};

export default async function FoodPage({searchParams}) {
  const {search = ""} = await searchParams;
  const foods = await getFoods(search);
  return (
    <div>
      <h2 className="text-3xl text-center font-bold">
        Total <span className="text-yellow-600">{foods.length}</span> Foods Founds
      </h2>
      <div>
        <InputSearch />
      </div>
      <div className="container  mx-auto flex gap-5">
        <div className="grid grid-cols-3 gap-5 my-6">
          {foods.map((food) => (
            <FoodCard food={food} key={food.id} />
          ))}
        </div>
        <div className="flex-1 border-2 border-amber-600 rounded-xl p-4">
            <h2 className="text-2xl font-semibold text-center my-2">Cart Items</h2> 
            <hr />
            <CartItems />
        </div>
      </div>
    </div>
  );
}
