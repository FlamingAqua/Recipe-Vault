"use client";

import { useMemo } from "react";

import { useRecipe } from "@/hooks/useRecipe";
import { useRecentlyViewed } from "@/hooks/useRecentlyViewed";
import BackButton from "@/components/common/BackButton";
import RecipeHero from "@/components/recipe/RecipeHero";
import RecipeSidebar from "@/components/recipe/RecipeSidebar";
import RecipeDetailsContent from "@/components/recipe/RecipeDetailsContent";

type Props = {
  recipeId: string;
};

export default function RecipeDetailsClient({ recipeId }: Props) {
  const { recipe, loading } = useRecipe(recipeId);

  useRecentlyViewed(recipeId);

  const summary = useMemo(() => {
    const fromTips = recipe?.tips?.trim();
    const fromNotes = recipe?.notes?.trim();

    if (fromTips) return fromTips;
    if (fromNotes) return fromNotes;

    return `A ${recipe?.category?.toLowerCase() ?? "delicious"} recipe for ${recipe?.servings ?? 2} servings with a polished, easy-to-follow cooking flow.`;
  }, [recipe]);

  if (loading) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6" role="status">
        <div className="rounded-[2rem] border border-border/70 bg-card/70 p-10 text-center text-sm text-muted-foreground shadow-sm">
          Loading recipe experience...
        </div>
      </main>
    );
  }

  if (!recipe) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="rounded-4xl border border-border/70 bg-card p-10 text-center shadow-sm">
          <p className="text-lg font-semibold">Recipe not found.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <BackButton />

      <div className="mt-3 space-y-6">
        <RecipeHero recipe={recipe} description={summary} />

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_360px]">
          <section className="space-y-4">
            <div className="rounded-4xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                  Premium recipe view
                </span>
                {recipe.tags?.slice(0, 3).map((tag) => (
                  <span key={tag} className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3 text-sm text-muted-foreground">
                <div className="rounded-2xl border border-border/70 bg-background/70 px-3.5 py-2.5">
                  Prep: <span className="ml-1 font-semibold text-foreground">{recipe.prepTime} min</span>
                </div>
                <div className="rounded-2xl border border-border/70 bg-background/70 px-3.5 py-2.5">
                  Cook: <span className="ml-1 font-semibold text-foreground">{recipe.cookTime} min</span>
                </div>
                <div className="rounded-2xl border border-border/70 bg-background/70 px-3.5 py-2.5">
                  Servings: <span className="ml-1 font-semibold text-foreground">{recipe.servings}</span>
                </div>
              </div>
            </div>

            <RecipeDetailsContent recipe={recipe} />
          </section>

          <RecipeSidebar recipe={recipe} />
        </div>
      </div>
    </main>
  );
}
