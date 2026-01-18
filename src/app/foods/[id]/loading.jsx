export default function Loading() {
  return (
    <div className="min-h-screen bg-[#050505] overflow-hidden">
      <main className="max-w-6xl mx-auto px-6 py-10 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* LEFT: Image Skeleton */}
          <div className="lg:col-span-5">
            <div className="relative aspect-4/5 w-full rounded-[3rem] bg-zinc-900/50 overflow-hidden border border-zinc-800/50">
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent" />
            </div>
          </div>

          {/* RIGHT: Content Skeleton */}
          <div className="lg:col-span-7 space-y-10">
            {/* Badges */}
            <div className="flex gap-4">
              <div className="h-8 w-28 bg-zinc-900 rounded-full border border-zinc-800" />
              <div className="h-8 w-20 bg-zinc-800/40 rounded-full" />
            </div>

            {/* Title - Multi-line skeleton */}
            <div className="space-y-4">
              <div className="h-16 w-full bg-zinc-900 rounded-3xl" />
              <div className="h-16 w-3/4 bg-zinc-900 rounded-3xl opacity-60" />
            </div>

            {/* Price & Info */}
            <div className="flex items-center gap-8">
              <div className="h-14 w-36 bg-orange-500/10 rounded-2xl border border-orange-500/20" />
              <div className="h-6 w-32 bg-zinc-900 rounded-lg" />
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-28 bg-zinc-900/30 border border-zinc-800/50 rounded-4xl"
                />
              ))}
            </div>

            {/* Description Paragraph */}
            <div className="space-y-3">
              <div className="h-4 w-full bg-zinc-900 rounded-full" />
              <div className="h-4 w-full bg-zinc-900 rounded-full opacity-70" />
              <div className="h-4 w-2/3 bg-zinc-900 rounded-full opacity-40" />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <div className="h-20 flex-4 bg-zinc-900 rounded-4xl border border-zinc-800" />
              <div className="h-20 flex-1 bg-zinc-900 rounded-4xl border border-zinc-800" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
