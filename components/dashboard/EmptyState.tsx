"use client";

import { motion } from "framer-motion";
import { ChefHat, Plus } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

type EmptyStateProps = {
  title?: string;
  description?: string;
};

export default function EmptyState({
  title = "No recipes found",
  description = "Start building your personal cookbook by adding your first recipe.",
}: EmptyStateProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="flex flex-col items-center justify-center rounded-3xl border bg-white px-6 py-16 text-center shadow-sm"
    >
      <div className="mb-6 rounded-full bg-orange-100 p-6">
        <ChefHat
          size={64}
          className="text-orange-600"
        />
      </div>

      <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold">
        {title}
      </h2>

      <p className="mt-3 max-w-md text-muted-foreground">
        {description}
      </p>

      <Button
        asChild
        className="mt-8 rounded-full px-8"
      >
        <Link href="/create">
          <Plus className="mr-2 h-4 w-4" />
          Create Recipe
        </Link>
      </Button>
    </motion.div>
  );
}