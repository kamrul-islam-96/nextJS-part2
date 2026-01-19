"use client";
import ReviewCard from "@/components/card/ReviewCard";
import React, { useEffect, useState } from "react";
import ReviewsLoading from "./ReviewsLoading";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(" https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews || []);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ReviewsLoading />;
  }

  return (
    <div>
      <div>
        <h2 className="text-3xl text-center font-bold">
          Total <span className="text-yellow-600">{reviews.length}</span>{" "}
          Reviews Founds
        </h2>
        <div className="container grid grid-cols-4 gap-5 mx-auto my-6">
          {reviews.map((reviewData) => (
            <ReviewCard reviewData={reviewData} key={reviewData.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
