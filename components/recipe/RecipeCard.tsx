"use client";

import { useState } from "react";
import type { Timestamp } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChefHat, Clock3, Eye, Pencil, Users, ZoomIn } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Recipe } from "@/types/recipe";

import FavoriteButton from "./FavoriteButton";
import DeleteRecipeButton from "./DeleteRecipeButton";
import ImageLightbox from "./ImageLightbox";

type Props = {
  recipe: Recipe;
};

const categoryStyles = {
  Veg: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  "Non Veg": "bg-rose-50 text-rose-800 ring-rose-200",
  Dessert: "bg-pink-50 text-pink-800 ring-pink-200",
} as const;

function formatDate(createdAt: Timestamp | null) {
  if (!createdAt) return "";

  if (createdAt.toDate) {
    return createdAt.toDate().toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  return "";
}

export default function RecipeCard({ recipe }: Props) {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <>
      <motion.article
        whileHover={{ y: -4, scale: 1.003 }}
        whileTap={{ scale: 0.995 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="group overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-0.5"
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-rose-100">
          {recipe.imageUrl ? (
            <>
              <Image
                src={recipe.imageUrl}
                alt={recipe.name}
                fill
                sizes="100vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-105"
                unoptimized
              />

              <button
                type="button"
                onClick={() => setPreviewOpen(true)}
                className="absolute bottom-4 right-4 rounded-2xl bg-white/95 p-2 shadow-xl shadow-slate-900/10 transition hover:scale-105"
              >
                <ZoomIn className="h-5 w-5 text-slate-700" />
              </button>
            </>
          ) : (
            <div className="flex h-full items-center justify-center">
              <ChefHat
                size={52}
                strokeWidth={1.35}
                className="text-primary/60"
              />
            </div>
          )}

          <Badge
            className={`absolute left-4 top-4 border-0 ring-1 ${
              categoryStyles[recipe.category]
            }`}
          >
            {recipe.category}
          </Badge>

          <div className="absolute right-4 top-4">
            <FavoriteButton
              recipeId={recipe.id}
              initialFavorite={recipe.favorite}
            />
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </div>

        {/* Content */}
        <div className="p-5">
          <div>
            <h2 className="truncate font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight">
              <Link
                href={`/recipe/${recipe.id}`}
                className="rounded-sm outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-ring"
              >
                {recipe.name}
              </Link>
            </h2>

            <p className="mt-1.5 text-xs text-muted-foreground">
              Saved {formatDate(recipe.createdAt)}
            </p>

            {recipe.tags && recipe.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {recipe.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-muted px-2 py-1 text-[11px] font-medium text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Metadata */}
          <dl className="mt-5 grid grid-cols-3 divide-x divide-border rounded-xl border border-border/70 bg-muted/55 px-2 py-3 text-center">
            <div>
              <dt className="flex justify-center">
                <Clock3 className="h-4 w-4 text-primary" />
              </dt>

              <dd className="mt-1 text-xs font-semibold">
                {recipe.prepTime} min
              </dd>

              <span className="text-[10px] text-muted-foreground">Prep</span>
            </div>

            <div>
              <dt className="flex justify-center">
                <Users className="h-4 w-4 text-primary" />
              </dt>

              <dd className="mt-1 text-xs font-semibold">{recipe.servings}</dd>

              <span className="text-[10px] text-muted-foreground">
                Servings
              </span>
            </div>

            <div>
              <dt className="flex justify-center">
                <ChefHat className="h-4 w-4 text-primary" />
              </dt>

              <dd className="mt-1 text-xs font-semibold">
                {recipe.difficulty}
              </dd>

              <span className="text-[10px] text-muted-foreground">Level</span>
            </div>
          </dl>

          {/* Actions */}
          <div className="mt-5 grid grid-cols-2 gap-2">
            <Link
              href={`/recipe/${recipe.id}`}
              className="inline-flex h-10 items-center justify-center rounded-xl border border-border bg-card px-3 text-sm font-semibold transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Eye className="mr-2 h-4 w-4" />
              View Recipe
            </Link>

            <Link
              href={`/edit/${recipe.id}`}
              className="inline-flex h-10 items-center justify-center rounded-xl bg-primary px-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </Link>

            <div className="col-span-2">
              <DeleteRecipeButton
                recipeId={recipe.id}
                recipeName={recipe.name}
              />
            </div>
          </div>
        </div>
      </motion.article>

      {recipe.imageUrl && (
        <ImageLightbox
          image={recipe.imageUrl}
          open={previewOpen}
          onClose={() => setPreviewOpen(false)}
        />
      )}
    </>
  );
}
