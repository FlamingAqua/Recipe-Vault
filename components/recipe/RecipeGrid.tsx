"use client";

import RecipeCard from "./RecipeCard";
import { Recipe } from "@/types/recipe";

type Props = {
  recipes: Recipe[];
};

export default function RecipeGrid({
  recipes,
}: Props) {
  return (
    <section
      id="recipes"
      aria-label="Recipe collection"
      className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
    >
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
        />
      ))}
    </section>
  );
}