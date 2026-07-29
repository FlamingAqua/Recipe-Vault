"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb, Sparkles } from "lucide-react";

import { Recipe } from "@/types/recipe";
import InstructionTimeline from "@/components/recipe/InstructionTimeline";

type Props = {
  recipe: Recipe;
};

export default function RecipeDetailsContent({ recipe }: Props) {
  const hasNotes = Boolean(recipe.notes?.trim());
  const hasTips = Boolean(recipe.tips?.trim());
  const hasWarnings = Boolean(recipe.warnings?.trim());

  return (
    <div className="space-y-6">
      <section className="rounded-4xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-primary/10 p-2 text-primary">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-muted-foreground">Method</p>
            <h2 className="font-(family-name:--font-playfair) text-2xl font-semibold text-foreground">Step-by-step cooking guide</h2>
          </div>
        </div>

        <div className="mt-6">
          <InstructionTimeline instructions={recipe.instructions ?? []} />
        </div>
      </section>

      {(hasTips || hasWarnings || hasNotes) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid gap-4 xl:grid-cols-3"
        >
          {hasTips ? (
            <section className="rounded-[1.75rem] border border-amber-200/70 bg-amber-50/80 p-5 shadow-sm dark:border-amber-900/40 dark:bg-amber-950/30">
              <div className="flex items-center gap-2 text-amber-900 dark:text-amber-300">
                <Lightbulb className="h-5 w-5" />
                <h3 className="font-(family-name:--font-playfair) text-xl font-semibold">Pro tip</h3>
              </div>
              <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-amber-950/90 dark:text-amber-100/90">{recipe.tips}</p>
            </section>
          ) : null}

          {hasWarnings ? (
            <section className="rounded-[1.75rem] border border-rose-200/70 bg-rose-50/80 p-5 shadow-sm dark:border-rose-900/40 dark:bg-rose-950/30">
              <div className="flex items-center gap-2 text-rose-900 dark:text-rose-300">
                <AlertTriangle className="h-5 w-5" />
                <h3 className="font-(family-name:--font-playfair) text-xl font-semibold">Important</h3>
              </div>
              <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-rose-950/90 dark:text-rose-100/90">{recipe.warnings}</p>
            </section>
          ) : null}

          {hasNotes ? (
            <section className="rounded-[1.75rem] border border-border/70 bg-background/70 p-5 shadow-sm">
              <div className="flex items-center gap-2 text-foreground">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="font-(family-name:--font-playfair) text-xl font-semibold">Notes</h3>
              </div>
              <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-muted-foreground">{recipe.notes}</p>
            </section>
          ) : null}
        </motion.div>
      )}
    </div>
  );
}
