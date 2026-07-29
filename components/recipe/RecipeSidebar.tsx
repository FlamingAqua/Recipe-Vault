"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { CalendarDays, Clock3, ChefHat, Layers3, NotebookPen, Users, Printer, Share2, PencilLine, Heart } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Badge } from "@/components/ui/badge";
import FavoriteButton from "@/components/recipe/FavoriteButton";
import { normalizeRecipeIngredients, Recipe } from "@/types/recipe";

type Props = {
  recipe: Recipe;
};

function formatDate(value: Date | null | undefined) {
  if (!value) return "—";
  return value.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function RecipeSidebar({ recipe }: Props) {
  const router = useRouter();
  const { isAdmin } = useAuth();

  const createdAt = recipe.createdAt?.toDate?.();
  const updatedAt = recipe.updatedAt?.toDate?.();
  const ingredients = normalizeRecipeIngredients(recipe.ingredients);

  return (
    <motion.aside
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
      className="space-y-4 lg:sticky lg:top-24"
    >
      <div className="rounded-[1.75rem] border border-border/70 bg-background/70 p-5 shadow-sm backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-muted-foreground">Ingredients</p>
            <h2 className="mt-2 font-(family-name:--font-playfair) text-2xl font-semibold text-foreground">What you need</h2>
          </div>
          <div className="rounded-2xl bg-primary/10 p-2 text-primary">
            <Layers3 className="h-4 w-4" />
          </div>
        </div>

        <ul className="mt-5 space-y-2.5">
          {ingredients.map((ingredient, index) => (
            <li key={`${ingredient.name}-${index}`} className="flex items-start gap-2 rounded-2xl border border-border/70 bg-card/70 px-3 py-2.5 text-sm text-muted-foreground">
              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
              <span className="flex-1">
                {ingredient.amount ? `${ingredient.amount} ` : ""}
                {ingredient.unit && ingredient.unit !== "optional" ? `${ingredient.unit} ` : ""}
                {ingredient.name || "Ingredient"}
                {ingredient.unit === "optional" ? " (optional)" : ""}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-[1.75rem] border border-border/70 bg-background/70 p-5 shadow-sm backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-muted-foreground">Recipe info</p>
            <h2 className="mt-2 font-(family-name:--font-playfair) text-2xl font-semibold text-foreground">At a glance</h2>
          </div>
          <div className="rounded-2xl bg-primary/10 p-2 text-primary">
            <NotebookPen className="h-4 w-4" />
          </div>
        </div>

        <div className="mt-5 space-y-3 text-sm text-muted-foreground">
          <div className="flex items-center justify-between rounded-2xl bg-card/70 px-3 py-2.5">
            <span className="inline-flex items-center gap-2"><ChefHat className="h-4 w-4 text-primary" /> Difficulty</span>
            <Badge variant="secondary">{recipe.difficulty}</Badge>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-card/70 px-3 py-2.5">
            <span className="inline-flex items-center gap-2"><Layers3 className="h-4 w-4 text-primary" /> Category</span>
            <span className="font-medium text-foreground">{recipe.category}</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-card/70 px-3 py-2.5">
            <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-primary" /> Prep</span>
            <span className="font-medium text-foreground">{recipe.prepTime} min</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-card/70 px-3 py-2.5">
            <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-primary" /> Cook</span>
            <span className="font-medium text-foreground">{recipe.cookTime} min</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-card/70 px-3 py-2.5">
            <span className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> Servings</span>
            <span className="font-medium text-foreground">{recipe.servings}</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-card/70 px-3 py-2.5">
            <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-primary" /> Created</span>
            <span className="font-medium text-foreground">{formatDate(createdAt)}</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-card/70 px-3 py-2.5">
            <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-primary" /> Updated</span>
            <span className="font-medium text-foreground">{formatDate(updatedAt)}</span>
          </div>
        </div>
      </div>

      <div className="rounded-[1.75rem] border border-border/70 bg-background/70 p-5 shadow-sm backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-muted-foreground">Quick actions</p>
            <h2 className="mt-2 font-(family-name:--font-playfair) text-2xl font-semibold text-foreground">Cook with ease</h2>
          </div>
          <div className="rounded-2xl bg-primary/10 p-2 text-primary">
            <PencilLine className="h-4 w-4" />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {isAdmin ? (
            <button type="button" onClick={() => router.push(`/edit/${recipe.id}`)} className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-border bg-card px-3 py-2.5 text-sm font-medium text-foreground transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5">
              <PencilLine className="h-4 w-4" /> Edit Recipe
            </button>
          ) : null}

          <button type="button" onClick={() => window.print()} className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-border bg-card px-3 py-2.5 text-sm font-medium text-foreground transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5">
            <Printer className="h-4 w-4" /> Print Recipe
          </button>

          <button type="button" onClick={() => navigator.clipboard.writeText(window.location.href)} className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-border bg-card px-3 py-2.5 text-sm font-medium text-foreground transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5">
            <Share2 className="h-4 w-4" /> Share Recipe
          </button>

          <div className="flex w-full items-center justify-between gap-2 rounded-2xl border border-border/70 bg-card/70 px-3 py-2.5 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-primary" />
              <span className="font-medium text-foreground">Favorite</span>
            </div>
            <FavoriteButton recipeId={recipe.id} initialFavorite={recipe.favorite} />
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
