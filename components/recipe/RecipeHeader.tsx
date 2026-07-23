"use client";

import { CalendarDays, ChefHat, Clock3, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { Recipe } from "@/types/recipe";

type Props = {
  recipe: Recipe;
};

export default function RecipeHeader({
  recipe,
}: Props) {
  const createdAt =
    recipe.createdAt?.toDate?.()?.toLocaleDateString(
      "en-IN",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    ) ?? "-";

  return (
    <header className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <Badge>{recipe.category}</Badge>

        <Badge variant="secondary">
          {recipe.difficulty}
        </Badge>
      </div>

      <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold">
        {recipe.name}
      </h1>

      <div className="mt-8 flex flex-wrap gap-8 text-muted-foreground">
        <div className="flex items-center gap-2">
          <Clock3 size={18} />
          <span>
            {recipe.prepTime + recipe.cookTime} mins
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Users size={18} />
          <span>{recipe.servings} Servings</span>
        </div>

        <div className="flex items-center gap-2">
          <ChefHat size={18} />
          <span>{recipe.difficulty}</span>
        </div>

        <div className="flex items-center gap-2">
          <CalendarDays size={18} />
          <span>{createdAt}</span>
        </div>
      </div>
    </header>
  );
}