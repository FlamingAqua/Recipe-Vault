"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpenText, Plus, Sparkles } from "lucide-react";

type EmptyStateProps = { title?: string; description?: string; buttonText?: string; buttonHref?: string };

export default function EmptyState({ title = "Your recipe collection is empty", description = "Start saving the dishes you love and build a cookbook that is entirely your own.", buttonText = "Add your first recipe", buttonHref = "/create" }: EmptyStateProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="relative overflow-hidden rounded-[2rem] border border-dashed border-primary/30 bg-card px-6 py-16 text-center shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:px-10"
    >
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
      <div className="relative mx-auto flex max-w-lg flex-col items-center">
        <div className="relative mb-7 rounded-3xl bg-primary/10 p-7 text-primary shadow-sm shadow-primary/10">
          <BookOpenText size={48} strokeWidth={1.35} aria-hidden="true" />
          <Sparkles className="absolute -right-2 -top-2 h-5 w-5 text-amber-400" aria-hidden="true" />
        </div>

        <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-md leading-8 text-muted-foreground">
          {description}
        </p>
        <Link
          href={buttonHref}
          className="mt-8 inline-flex h-12 items-center rounded-2xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm shadow-orange-300/30 transition hover:-translate-y-0.5 hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Plus className="mr-2 h-4 w-4" aria-hidden="true" />
          {buttonText}
        </Link>
      </div>
    </motion.section>
  );
}
