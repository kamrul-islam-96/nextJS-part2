"use client";
import { useState } from "react";
import { Heart, Star, MessageSquare } from "lucide-react";

export default function ReviewCard({ reviewData }) {
  const { user, photo, rating, review, likes, date } = reviewData;

  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes.length);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <div className="group relative bg-[#0a0a0a] border border-zinc-800/50 rounded-[2.5rem] p-8 transition-all duration-500 hover:border-orange-500/20">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className="relative shrink-0">
            <img
              src={photo}
              alt={user}
              className="relative w-14 h-14 rounded-full object-cover border-2 border-zinc-800 group-hover:border-orange-500/50 transition-colors duration-500"
            />
          </div>
          <div>
            <h4 className="text-white font-bold text-lg tracking-tight">
              {user}
            </h4>
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">
              {new Date(date).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex gap-1 bg-zinc-900/80 px-3 py-1.5 rounded-full border border-zinc-800">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={10}
              className={`${i < rating ? "text-orange-500 fill-orange-500" : "text-zinc-800"}`}
            />
          ))}
        </div>
      </div>

      <p className="text-zinc-400 leading-relaxed text-base font-light italic mb-8">
        "{review}"
      </p>

      <div className="pt-6 border-t border-zinc-900/50 flex items-center gap-6">
        {/* LIKE BUTTON */}
        <button
          onClick={handleLike}
          className="flex items-center gap-2 group/btn transition-all active:scale-90"
        >
          <div
            className={`p-2.5 rounded-full transition-all duration-300 ${
              isLiked
                ? "bg-red-500/20"
                : "bg-zinc-900 group-hover/btn:bg-zinc-800"
            }`}
          >
            <Heart
              size={18}
              className={`transition-all duration-300 ${
                isLiked ? "text-red-500 fill-red-500" : "text-zinc-600"
              }`}
            />
          </div>
          <span
            className={`text-xs font-black transition-colors ${
              isLiked ? "text-white" : "text-zinc-500"
            }`}
          >
            {likeCount}
          </span>
        </button>

        <button className="flex items-center gap-2 group/btn">
          <div className="p-2.5 rounded-full bg-zinc-900 group-hover/btn:bg-orange-500/10 transition-all">
            <MessageSquare
              size={18}
              className="text-zinc-600 group-hover/btn:text-orange-500 transition-colors"
            />
          </div>
          <span className="text-xs font-black text-zinc-500 group-hover/btn:text-zinc-300 uppercase tracking-widest">
            Reply
          </span>
        </button>
      </div>
    </div>
  );
}
