"use client";

import Link from "next/link";
import { Clock3 } from "lucide-react";
import { motion } from "framer-motion";

import { Recipe } from "@/types/recipe";

type Props = {
  recipes: Recipe[];
};

export default function RecentRecipes({ recipes }: Props) {
  const recent = [...recipes]
    .sort((a, b) => (b.createdAt?.seconds ?? 0) - (a.createdAt?.seconds ?? 0))
    .slice(0, 5);

  if (recent.length === 0) return null;

  return (
    <section className="rounded-[2rem] border border-border/70 bg-card p-6 shadow-[0_18px_48px_rgba(15,23,42,0.06)]">
      <h2 className="mb-6 font-[family-name:var(--font-playfair)] text-3xl font-bold">
        Recently Added
      </h2>

      <div className="space-y-4">
        {recent.map((recipe, index) => (
          <motion.div
            key={recipe.id}
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * 0.08,
            }}
          >
            <Link
              href={`/recipe/${recipe.id}`}
              className="flex items-center justify-between rounded-3xl border border-border/70 bg-card px-5 py-4 transition hover:bg-muted"
            >
              <div>
                <h3 className="font-semibold">{recipe.name}</h3>

                <p className="text-sm text-muted-foreground">
                  {recipe.category}
                </p>
              </div>

              <Clock3 className="h-5 w-5 text-muted-foreground" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
