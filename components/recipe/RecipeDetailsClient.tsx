"use client";

import { ChefHat, Clock3, Lightbulb, Printer, Share2, ShieldAlert, Users } from "lucide-react";

import { useRecipe } from "@/hooks/useRecipe";
import { useRecentlyViewed } from "@/hooks/useRecentlyViewed";
import { Badge } from "@/components/ui/badge";
import FavoriteButton from "@/components/recipe/FavoriteButton";
import BackButton from "@/components/common/BackButton";

type Props = {
  recipeId: string;
};

export default function RecipeDetailsClient({ recipeId }: Props) {
  const { recipe, loading } = useRecipe(recipeId);

  useRecentlyViewed(recipeId);

  if (loading) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6" role="status">
        Loading recipe...
      </main>
    );
  }

  if (!recipe) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="rounded-[2rem] border border-border/80 bg-card p-10 text-center shadow-sm">
          <p className="text-lg font-semibold">Recipe not found.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <BackButton />

      <header className="mt-8 overflow-hidden rounded-[2rem] border border-border/80 bg-card shadow-sm">
        <div className="bg-gradient-to-br from-orange-100 via-amber-50 to-rose-100 px-6 py-10 sm:px-10 sm:py-12">
          <div className="flex items-start justify-between gap-4">
            <Badge className="border-0 bg-white/80 text-primary shadow-sm">
              {recipe.category}
            </Badge>

            <div className="flex gap-2">
              <FavoriteButton
                recipeId={recipe.id}
                initialFavorite={recipe.favorite}
              />

              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(window.location.href)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-sm transition hover:bg-white"
                aria-label="Copy recipe link"
              >
                <Share2 className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-sm transition hover:bg-white"
                aria-label="Print recipe"
              >
                <Printer className="h-4 w-4" />
              </button>
            </div>
          </div>

          <h1 className="mt-5 max-w-3xl font-[family-name:var(--font-playfair)] text-4xl font-bold tracking-tight sm:text-6xl">
            {recipe.name}
          </h1>

          {recipe.tags && recipe.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {recipe.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-white/75 px-2.5 py-1 text-xs font-semibold text-primary"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-7 flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center rounded-xl bg-white/70 px-3.5 py-2 font-medium">
              <Clock3 className="mr-2 h-4 w-4 text-primary" />
              {recipe.prepTime + recipe.cookTime} min total
            </span>

            <span className="inline-flex items-center rounded-xl bg-white/70 px-3.5 py-2 font-medium">
              <Users className="mr-2 h-4 w-4 text-primary" />
              Serves {recipe.servings}
            </span>

            <span className="inline-flex items-center rounded-xl bg-white/70 px-3.5 py-2 font-medium">
              <ChefHat className="mr-2 h-4 w-4 text-primary" />
              {recipe.difficulty}
            </span>
          </div>
        </div>
      </header>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <section className="rounded-[2rem] border border-border/80 bg-card p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3 text-primary">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              🍅
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold">
              Ingredients
            </h2>
          </div>
          <pre className="mt-6 whitespace-pre-wrap font-sans text-sm leading-8 text-muted-foreground">
            {recipe.ingredients}
          </pre>
        </section>

        <section className="rounded-[2rem] border border-border/80 bg-card p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3 text-primary">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              👨‍🍳
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold">
              Method
            </h2>
          </div>
          <pre className="mt-6 whitespace-pre-wrap font-sans text-sm leading-8 text-muted-foreground">
            {recipe.method}
          </pre>
        </section>
      </div>

      {(recipe.tips || recipe.warnings || recipe.notes) && (
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {recipe.tips && (
            <section className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6">
              <div className="flex items-center gap-2 text-emerald-800">
                <Lightbulb className="h-5 w-5" />
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold">Kitchen notes</h2>
              </div>

              <pre className="mt-4 whitespace-pre-wrap font-sans text-sm leading-7 text-emerald-950">{recipe.tips}</pre>
            </section>
          )}

          {recipe.warnings && (
            <section className="rounded-2xl border border-amber-200 bg-amber-50/70 p-6">
              <div className="flex items-center gap-2 text-amber-900">
                <ShieldAlert className="h-5 w-5" />
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold">Good to know</h2>
              </div>

              <pre className="mt-4 whitespace-pre-wrap font-sans text-sm leading-7 text-amber-950">{recipe.warnings}</pre>
            </section>
          )}

          {recipe.notes && (
            <section className="rounded-2xl border bg-muted/50 p-6">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold">Personal notes</h2>
              <pre className="mt-4 whitespace-pre-wrap font-sans text-sm leading-7">{recipe.notes}</pre>
            </section>
          )}
        </div>
      )}
    </main>
  );
}
