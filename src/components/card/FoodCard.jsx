import Link from "next/link";

export const FoodCard = ({ food }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 transition-all duration-300 hover:shadow-2xl group">
      <div className="relative h-56 overflow-hidden">
        <img
          src={food.foodImg}
          alt={food.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-orange-600 uppercase tracking-wider shadow-sm">
            {food.category}
          </span>
        </div>
      </div>


      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800 leading-tight">
            {food.title}
          </h3>
          <p className="text-2xl font-black text-green-600">${food.price}</p>
        </div>

        <p className="text-gray-500 text-sm mb-6 line-clamp-2">
          Experience the authentic taste of this premium{" "}
          {food.category.toLowerCase()} dish, prepared with the finest
          ingredients.
        </p>

        <div className="flex gap-3">
          <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors shadow-md shadow-orange-200 text-sm">
            Add to Cart
          </button>
          <Link href={`/foods/${food.id}`} className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold py-3 rounded-xl border border-gray-200 transition-colors text-sm cursor-pointer text-center">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
