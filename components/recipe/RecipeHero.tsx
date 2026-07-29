"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChefHat, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Recipe } from "@/types/recipe";

type Props = {
  recipe: Recipe;
  description: string;
};

export default function RecipeHero({ recipe, description }: Props) {
  const hasImage = Boolean(recipe.imageUrl);

  return (
    <motion.header
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="overflow-hidden rounded-4xl border border-border/70 bg-card shadow-[0_20px_70px_-35px_rgba(15,23,42,0.35)]"
    >
      <div className="relative min-h-85 sm:min-h-105">
        {hasImage ? (
          <Image
            src={recipe.imageUrl}
            alt={recipe.name}
            fill
            priority
            unoptimized
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.25),transparent_45%),linear-gradient(135deg,rgba(255,244,214,0.95),rgba(255,247,237,0.65))]" />
        )}

        <div className="absolute inset-0 bg-linear-to-t from-slate-950/75 via-slate-950/20 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="border-white/20 bg-white/15 text-white backdrop-blur-sm">
              {recipe.category}
            </Badge>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-white/90 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Crafted recipe
            </span>
          </div>

          <div className="mt-4 max-w-3xl">
            <h1 className="font-(family-name:--font-playfair) text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {recipe.name}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200/95 sm:text-base">
              {description}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/90">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-sm">
              <ChefHat className="h-4 w-4" />
              {recipe.difficulty}
            </div>
            <div className="rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-sm">
              {recipe.prepTime + recipe.cookTime} min total
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
