"use client";

import RecipeSkeleton from "./RecipeSkeleton";

export default function RecipeGridSkeleton() {
  return (
    <section className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <RecipeSkeleton key={index} />
      ))}
    </section>
  );
}