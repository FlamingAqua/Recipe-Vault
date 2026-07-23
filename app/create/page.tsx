"use client";

import RecipeForm from "@/components/recipe/RecipeForm";
import { useRecipes } from "@/hooks/useRecipes";
import BackButton from "@/components/common/BackButton";
export default function CreateRecipePage() {
  const { addRecipe } = useRecipes();

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <BackButton />

      <section className="overflow-hidden rounded-[2rem] border border-border/80 bg-card px-6 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:px-8 sm:py-10">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Recipe vault
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Add a recipe worth remembering
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Give your favorite dishes a beautiful, useful home in your personal
            cookbook.
          </p>
        </div>
      </section>

      <div className="mt-10">
        <RecipeForm onSubmit={addRecipe} />
      </div>
    </main>
  );
}
