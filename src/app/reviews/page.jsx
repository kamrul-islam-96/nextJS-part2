import React from "react";
import ReviewsPage from "./ReviewsPage";

export const metadata = {
  title: "All Reviews",
  description: "Browse all reviews available",
};

export default function page() {
  return (
    <div>
      <ReviewsPage />
    </div>
  );
}
