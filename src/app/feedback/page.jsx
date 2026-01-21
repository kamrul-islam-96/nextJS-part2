import FeedbackCard from "@/components/card/FeedbackCard";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "All Feedbacks",
  description: "Browse All Feedbacks",
};

const getFeedback = async () => {
  const res = await fetch("http://localhost:3000/api/feedback", {
    cache: "force-cache",
    next: { revalidate: 60 },
  });
  return await res.json();
};

export default async function FeedbackPage() {
  const feedbacks = await getFeedback();
  return (
    <div>
      <h1 className="text-2xl font-bold">{feedbacks.length} Feedbacks Found</h1>

      <div className="my-10">
        <Link href="/feedback/add" className="btn">
          Add Feedback
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-4 my-5">
        {feedbacks.map((feedback) => (
          <FeedbackCard feedback={feedback} key={feedback._id} />
        ))}
      </div>
    </div>
  );
}
