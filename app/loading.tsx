import RecipeGridSkeleton from "@/components/recipe/RecipeGridSkeleton";

export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-8">
      <RecipeGridSkeleton />
    </main>
  );
}