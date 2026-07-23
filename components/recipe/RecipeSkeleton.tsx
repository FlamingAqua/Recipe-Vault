"use client";

export default function RecipeSkeleton() {
  return (
    <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
      <div className="h-56 animate-pulse bg-slate-200" />

      <div className="space-y-5 p-6">
        <div className="space-y-3">
          <div className="h-7 w-3/4 animate-pulse rounded bg-slate-200" />

          <div className="h-4 w-1/3 animate-pulse rounded bg-slate-200" />
        </div>

        <div className="grid grid-cols-3 gap-3 rounded-2xl bg-slate-100 p-4">
          <div className="h-12 animate-pulse rounded bg-slate-200" />
          <div className="h-12 animate-pulse rounded bg-slate-200" />
          <div className="h-12 animate-pulse rounded bg-slate-200" />
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="h-10 animate-pulse rounded-xl bg-slate-200" />
          <div className="h-10 animate-pulse rounded-xl bg-slate-200" />
          <div className="h-10 animate-pulse rounded-xl bg-slate-200" />
        </div>
      </div>
    </div>
  );
}