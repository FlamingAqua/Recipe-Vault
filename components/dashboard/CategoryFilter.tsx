"use client";

import { motion } from "framer-motion";
import { BookOpen, Drumstick, Heart, IceCream2, Salad } from "lucide-react";

export type Category = "All" | "Veg" | "Non Veg" | "Dessert" | "Favorites";
type CategoryFilterProps = { value: Category; onChange: (category: Category) => void };
const categories = [{ label: "All", icon: BookOpen }, { label: "Veg", icon: Salad }, { label: "Non Veg", icon: Drumstick }, { label: "Dessert", icon: IceCream2 }, { label: "Favorites", icon: Heart }] as const;

export default function CategoryFilter({ value, onChange }: CategoryFilterProps) {
  return (
    <fieldset className="space-y-3">
      <legend className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
        Explore categories
      </legend>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Recipe category">
        {categories.map((category) => {
          const Icon = category.icon;
          const active = value === category.label;
          return (
            <motion.button
              key={category.label}
              type="button"
              whileTap={{ scale: 0.96 }}
              onClick={() => onChange(category.label)}
              aria-pressed={active}
              className={`inline-flex h-12 items-center gap-2 rounded-[1.5rem] border px-4 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${active ? "border-primary bg-primary text-primary-foreground shadow-sm shadow-primary/20" : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-primary/5"}`}
            >
              <Icon size={16} aria-hidden="true" />
              {category.label}
            </motion.button>
          );
        })}
      </div>
    </fieldset>
  );
}
