import React from "react";
import { formatDistanceToNow } from "date-fns";
import { Trash2, Edit3, MessageSquare } from "lucide-react"; // Optional icons

const FeedbackCard = ({ feedback, onUpdate, onDelete }) => {
  const { message, date } = feedback;

  // Formatting the ISO date to "time ago" format
  const formattedDate = formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2 text-blue-600">
          <MessageSquare size={18} />
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Feedback
          </span>
        </div>
        <span className="text-xs text-gray-400">{formattedDate}</span>
      </div>

      <p className="text-gray-800 text-lg font-medium mb-6 leading-relaxed">
        "{message}"
      </p>

      <div className="flex gap-3">
        <button
        //   onClick={() => onUpdate(data._id)}
          className="flex-1 flex items-center justify-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-100 transition-colors"
        >
          <Edit3 size={16} />
          Update
        </button>
        <button
        //   onClick={() => onDelete(data._id)}
          className="flex-1 flex items-center justify-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-lg font-medium hover:bg-red-100 transition-colors"
        >
          <Trash2 size={16} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;
