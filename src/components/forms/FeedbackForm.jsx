"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function FeedbackForm() {
    const route = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    const res = await fetch("http://localhost:3000/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    if (data.insertedId) {
      alert("success");
      route.push('/feedback')
    }
  };
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Share your thoughts
        </h2>
        <p className="text-gray-500 text-sm">
          We value your feedback and suggestions.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="relative">
          <textarea
            required
            name="message"
            id="feedback"
            rows="4"
            placeholder="Write your message here..."
            className="w-full p-4 text-gray-700 bg-gray-50 rounded-xl border border-gray-200 outline-none transition-all duration-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-white resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="cursor-pointer w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 active:scale-[0.98] transition-all duration-200 focus:ring-4 focus:ring-indigo-200"
        >
          Post Feedback
        </button>
      </form>
    </div>
  );
}
