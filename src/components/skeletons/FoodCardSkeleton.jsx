export const FoodCardSkeleton = () => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100 animate-pulse">
      <div className="h-56 bg-gray-200"></div>

      <div className="p-6">
        <div className="flex justify-between mb-4">
          <div className="h-6 bg-gray-200 rounded-md w-3/5"></div>
          <div className="h-6 bg-gray-200 rounded-md w-1/5"></div>
        </div>

        <div className="space-y-2 mb-8">
          <div className="h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-4/5"></div>
        </div>

        <div className="flex gap-3">
          <div className="h-12 bg-gray-200 rounded-xl flex-1"></div>
          <div className="h-12 bg-gray-200 rounded-xl flex-1"></div>
        </div>
      </div>
    </div>
  );
};
