"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Clock3, Heart, History, Sparkles } from "lucide-react";
import { Recipe } from "@/types/recipe";
import { getRecentlyViewedIds } from "@/hooks/useRecentlyViewed";

type Props = { recipes: Recipe[] };
type Section = { title: string; description: string; icon: typeof Heart; recipes: Recipe[] };

export default function DiscoveryRail({ recipes }: Props) {
  const [recentIds] = useState<string[]>(getRecentlyViewedIds);
  const sections = useMemo<Section[]>(() => [
    { title: "Recently added", description: "Freshly saved to your cookbook", icon: Sparkles, recipes: recipes.slice(0, 4) },
    { title: "Your favorites", description: "The ones you return to most", icon: Heart, recipes: recipes.filter((recipe) => recipe.favorite).slice(0, 4) },
    { title: "Quick recipes", description: "Ready in under 30 minutes", icon: Clock3, recipes: recipes.filter((recipe) => recipe.prepTime + recipe.cookTime <= 30).slice(0, 4) },
    { title: "Continue exploring", description: "Recently opened recipes", icon: History, recipes: recentIds.map((id) => recipes.find((recipe) => recipe.id === id)).filter((recipe): recipe is Recipe => Boolean(recipe)).slice(0, 4) },
  ], [recentIds, recipes]);
  return <div className="grid gap-4 md:grid-cols-2">{sections.map(({ title, description, icon: Icon, recipes: items }) => <section key={title} className="rounded-2xl border border-border/80 bg-card p-5 shadow-sm"><div className="flex items-start gap-3"><div className="rounded-xl bg-accent p-2.5 text-primary"><Icon className="size-5" aria-hidden="true" /></div><div><h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold">{title}</h2><p className="mt-0.5 text-xs text-muted-foreground">{description}</p></div></div>{items.length ? <div className="mt-5 space-y-2">{items.map((recipe) => <Link key={recipe.id} href={`/recipe/${recipe.id}`} className="flex items-center justify-between rounded-xl border border-border/70 px-3 py-2.5 text-sm transition hover:border-primary/30 hover:bg-accent"><span className="truncate font-semibold">{recipe.name}</span><span className="ml-3 shrink-0 text-xs text-muted-foreground">{recipe.prepTime + recipe.cookTime} min</span></Link>)}</div> : <p className="mt-5 rounded-xl bg-muted/60 px-3 py-4 text-sm text-muted-foreground">Nothing here yet—keep exploring your collection.</p>}</section>)}</div>;
}
