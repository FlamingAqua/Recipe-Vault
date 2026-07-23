"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { Recipe } from "@/types/recipe";

type Props = {
  recipes: Recipe[];
};

export default function RecipeOfTheDay({
  recipes,
}: Props) {
  if (recipes.length === 0) return null;

  const day =
    new Date().getDate() % recipes.length;

  const recipe = recipes[day];

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 p-8 text-white shadow-xl"
    >
      <div className="flex items-center gap-3">
        <Sparkles className="h-7 w-7" />

        <span className="font-semibold uppercase tracking-widest">
          Recipe of the Day
        </span>
      </div>

      <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl font-bold">
        {recipe.name}
      </h2>

      <p className="mt-3 max-w-xl text-white/90">
        {recipe.category} • {recipe.prepTime + recipe.cookTime} mins •{" "}
        {recipe.servings} servings
      </p>

      <Link
        href={`/recipe/${recipe.id}`}
        className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-orange-600 transition hover:scale-105"
      >
        View Recipe
      </Link>
    </motion.section>
  );
}