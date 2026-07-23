"use client";

import {
  Award,
  BookOpen,
  Clock3,
  Heart,
} from "lucide-react";

import { Recipe } from "@/types/recipe";

type Props = {
  recipes: Recipe[];
};

export default function RecipeInsights({
  recipes,
}: Props) {
  const total = recipes.length;

  const favorites = recipes.filter(
    (recipe) => recipe.favorite
  ).length;

  const totalCookTime = recipes.reduce(
    (sum, recipe) =>
      sum + recipe.prepTime + recipe.cookTime,
    0
  );

  const avgCookTime =
    total === 0
      ? 0
      : Math.round(totalCookTime / total);

  const hardest =
    recipes.filter(
      (recipe) =>
        recipe.difficulty === "Hard"
    ).length;

  const cards = [
    {
      title: "Total Recipes",
      value: total,
      icon: BookOpen,
    },
    {
      title: "Favorites",
      value: favorites,
      icon: Heart,
    },
    {
      title: "Avg. Time",
      value: `${avgCookTime} min`,
      icon: Clock3,
    },
    {
      title: "Hard Recipes",
      value: hardest,
      icon: Award,
    },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-[2rem] border border-border/70 bg-card p-6 shadow-[0_18px_48px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
              <Icon className="h-6 w-6" />
            </div>

            <p className="text-sm text-muted-foreground">
              {card.title}
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              {card.value}
            </h3>
          </div>
        );
      })}
    </section>
  );
}