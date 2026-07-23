"use client";

import RecipeForm from "@/components/recipe/RecipeForm";
import { useRecipes } from "@/hooks/useRecipes";
import BackButton from "@/components/common/BackButton";

interface Props {
  recipeId: string;
}

export default function EditRecipeClient({ recipeId }: Props) {
  const { recipes, loading, updateRecipe } = useRecipes();

  if (loading) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12" role="status">
        Loading recipe...
      </main>
    );
  }

  const recipe = recipes.find((recipeItem) => recipeItem.id === recipeId);

  if (!recipe) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
        Recipe not found.
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <BackButton />

      <div className="mb-8 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          Recipe vault
        </p>

        <h1 className="mt-3 font-[family-name:var(--font-playfair)] text-4xl font-bold tracking-tight sm:text-5xl">
          Refine your recipe
        </h1>

        <p className="mt-2 text-muted-foreground">
          Keep every detail clear for the next time you make it.
        </p>
      </div>

      <RecipeForm
        initialValues={{
          name: recipe.name,
          category: recipe.category,
          ingredients: recipe.ingredients,
          method: recipe.method,
          warnings: recipe.warnings,
          tips: recipe.tips,
          notes: recipe.notes ?? "",
          tags: recipe.tags ?? [],
          prepTime: recipe.prepTime,
          cookTime: recipe.cookTime,
          servings: recipe.servings,
          difficulty: recipe.difficulty,
          imageUrl: recipe.imageUrl,
        }}
        onSubmit={(data) => updateRecipe(recipe.id, data)}
      />
    </main>
  );
}
