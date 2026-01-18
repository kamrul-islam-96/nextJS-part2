export default function ReviewCardSkeleton() {
  return (
    <div className="bg-[#0a0a0a] border border-zinc-800/50 rounded-[2.5rem] p-8 animate-pulse">
      <div className="flex justify-between mb-6">
        <div className="flex gap-4">
          <div className="w-14 h-14 rounded-full bg-zinc-900" />
          <div className="space-y-2 py-2">
            <div className="h-3 w-24 bg-zinc-900 rounded" />
            <div className="h-2 w-16 bg-zinc-900/50 rounded" />
          </div>
        </div>
        <div className="h-6 w-16 bg-zinc-900 rounded-full" />
      </div>
      <div className="space-y-3 mb-8">
        <div className="h-3 w-full bg-zinc-900 rounded" />
        <div className="h-3 w-4/5 bg-zinc-900 rounded" />
      </div>
      <div className="pt-6 border-t border-zinc-900/50 flex gap-6">
        <div className="h-10 w-16 bg-zinc-900 rounded-full" />
        <div className="h-10 w-24 bg-zinc-900 rounded-full" />
      </div>
    </div>
  );
}
