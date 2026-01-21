import React from "react";
import Link from "next/link";
import {
  Play,
  ShoppingCart,
  Heart,
  Clock,
  Utensils,
  Globe,
  Sparkles,
  ArrowLeft,
} from "lucide-react";

export function generateStaticParams() {
  return [{ id: "52898" }, { id: "52955" }, { id: "52926" }];
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
  );

  const { details = {} } = await res.json();

  return {
    title: details.title,
  }
}

const getSingleFood = async (id) => {
  try {
    const res = await fetch(
      `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    );
    const data = await res.json();
    return data.details;
  } catch (error) {
    return null;
  }
};

export default async function FoodDetailsPage({ params }) {
  const { id } = await params;
  const food = await getSingleFood(id);

  if (!food.title) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#050505]">
        <div className="text-center space-y-4">
          <p className="text-zinc-600 font-black uppercase tracking-[0.3em] text-xs">
            Error 404
          </p>
          <h1 className="text-white text-3xl font-light">Dish not found</h1>
          <Link
            href="/foods"
            className="text-orange-500 text-sm hover:underline block pt-4"
          >
            Return to Menu
          </Link>
        </div>
      </div>
    );
  }

  const videoId = food.video?.split("v=")[1];

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-orange-500 selection:text-white font-sans antialiased">
      {/* Top Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <Link
          href="/"
          className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors"
        >
          <div className="p-2 rounded-full border border-zinc-800 group-hover:border-zinc-600">
            <ArrowLeft size={18} />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest">
            Back
          </span>
        </Link>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pb-20 lg:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* LEFT: Image Section */}
          <div className="lg:col-span-5 sticky top-10">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-800/50 aspect-4/5 bg-zinc-900 group">
              <img
                src={food.foodImg}
                alt={food.title}
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
              />

              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-2xl">
                <p className="text-orange-500 font-black text-xl">
                  ${food.price}
                </p>
              </div>

              {/* Play Button Overlay */}
              {videoId && (
                <Link
                  href={food.video}
                  target="_blank"
                  className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/40 transition-all duration-500"
                >
                  <div className="relative bg-white/10 backdrop-blur-2xl p-8 rounded-full border border-white/20 group-hover:scale-110 group-hover:bg-orange-600 transition-all duration-500">
                    <Play className="text-white fill-white" size={32} />
                    <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping -z-10 opacity-30" />
                  </div>
                </Link>
              )}
            </div>
          </div>

          {/* RIGHT: Details Content */}
          <div className="lg:col-span-7 pt-4">
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="bg-orange-500/10 text-orange-500 border border-orange-500/20 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                <Sparkles size={12} /> {food.category}
              </span>
              <span className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em]">
                {food.area} • Signature Dish
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-10 tracking-tighter">
              {food.title.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={i % 2 !== 0 ? "text-zinc-800" : "text-white"}
                >
                  {word}{" "}
                </span>
              ))}
            </h1>

            {/* Glassmorphism Stats */}
            <div className="grid grid-cols-3 gap-4 mb-12">
              {[
                { icon: <Clock size={20} />, label: "Prep", val: "25m" },
                {
                  icon: <Utensils size={20} />,
                  label: "Cuisine",
                  val: food.category,
                },
                { icon: <Globe size={20} />, label: "Origin", val: food.area },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-zinc-900/40 border border-zinc-800/50 p-6 rounded-4xl hover:bg-zinc-900/80 transition-all"
                >
                  <div className="text-orange-500 mb-4">{item.icon}</div>
                  <p className="text-[9px] font-black uppercase text-zinc-500 tracking-widest mb-1">
                    {item.label}
                  </p>
                  <p className="font-bold text-white text-sm">{item.val}</p>
                </div>
              ))}
            </div>

            <p className="text-zinc-400 text-xl leading-relaxed mb-14 font-light max-w-xl">
              Experience the harmony of flavors in our{" "}
              <span className="text-white font-medium">{food.title}</span>. A
              culinary masterpiece from the heart of {food.area}, crafted with
              seasonal ingredients and traditional techniques.
            </p>

            {/* Futuristic Actions */}
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="flex-3 bg-white hover:bg-orange-500 text-black hover:text-white rounded-4xl py-6 font-black text-xl transition-all duration-500 flex items-center justify-center gap-4 shadow-xl">
                <ShoppingCart size={24} />
                Order Dish
              </button>
              <button className="flex-1 bg-zinc-900 border border-zinc-800 rounded-4xl py-6 font-black text-white hover:bg-zinc-800 hover:text-red-500 transition-all flex items-center justify-center">
                <Heart size={28} />
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-zinc-900">
              <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
                Trusted by 2,000+ Foodies this month
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
