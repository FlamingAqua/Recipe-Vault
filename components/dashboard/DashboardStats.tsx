"use client";

import { motion } from "framer-motion";
import { BookOpen, Drumstick, IceCream2, Salad } from "lucide-react";

type DashboardStatsProps = { total: number; veg: number; nonVeg: number; desserts: number };

const stats = (total: number, veg: number, nonVeg: number, desserts: number) => [
  { title: "Recipes saved", description: "Your complete collection", value: total, icon: BookOpen, color: "text-orange-700", bg: "bg-orange-100/80" },
  { title: "Vegetarian collection", description: "Fresh, plant-forward favorites", value: veg, icon: Salad, color: "text-emerald-700", bg: "bg-emerald-100/80" },
  { title: "Non-vegetarian collection", description: "Hearty mains and more", value: nonVeg, icon: Drumstick, color: "text-rose-700", bg: "bg-rose-100/80" },
  { title: "Sweet finishes", description: "Desserts worth saving room for", value: desserts, icon: IceCream2, color: "text-pink-700", bg: "bg-pink-100/80" },
];

export default function DashboardStats({ total, veg, nonVeg, desserts }: DashboardStatsProps) {
  return (
    <section aria-label="Recipe collection overview" className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats(total, veg, nonVeg, desserts).map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.35 }}
            whileHover={{ y: -4 }}
            className="group rounded-2xl border border-border/80 bg-card p-5 shadow-[0_8px_30px_rgb(91,46,23,0.06)] transition-shadow hover:shadow-[0_16px_38px_rgb(91,46,23,0.11)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{item.title}</p>
                <motion.p key={item.value} initial={{ scale: 0.88 }} animate={{ scale: 1 }} className="mt-2 font-[family-name:var(--font-playfair)] text-4xl font-bold tracking-tight">
                  {item.value}
                </motion.p>
              </div>
              <div className={`rounded-2xl p-3.5 transition-transform group-hover:scale-110 ${item.bg}`}>
                <Icon className={item.color} size={27} aria-hidden="true" />
              </div>
            </div>
            <p className="mt-4 text-xs leading-5 text-muted-foreground">{item.description}</p>
          </motion.div>
        );
      })}
    </section>
  );
}
