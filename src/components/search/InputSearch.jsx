"use client";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export const InputSearch = () => {
  const router = useRouter()
  const params = useSearchParams()

    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const query = form.search.value;
        
        const newParams = new URLSearchParams(params.toString())
        newParams.set('search', query)
        router.push(`?${newParams.toString()}`)
    }
  return (
    <div>
      <form onSubmit={handleSearch} className="relative w-1/4 mx-auto block my-4">
        <input
          type="text"
          name="search"
          placeholder="Enter Your Food Name"
          className="border p-2 rounded-lg w-full"
        />
        <button className="absolute top-2 right-2 cursor-pointer">
          <Search />
        </button>
      </form>
    </div>
  );
};
