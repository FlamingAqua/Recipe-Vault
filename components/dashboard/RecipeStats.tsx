"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Salad,
  Drumstick,
  IceCream2,
  Heart,
} from "lucide-react";

type Props = {
  total: number;
  veg: number;
  nonVeg: number;
  desserts: number;
  favorites: number;
};

const cards = [
  {
    title: "Recipes",
    key: "total",
    icon: BookOpen,
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Veg",
    key: "veg",
    icon: Salad,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Non Veg",
    key: "nonVeg",
    icon: Drumstick,
    color: "from-red-500 to-rose-500",
  },
  {
    title: "Desserts",
    key: "desserts",
    icon: IceCream2,
    color: "from-pink-500 to-fuchsia-500",
  },
  {
    title: "Favorites",
    key: "favorites",
    icon: Heart,
    color: "from-violet-500 to-purple-500",
  },
] as const;

export default function RecipeStats(props: Props) {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.08,
            }}
            className={`rounded-3xl bg-gradient-to-br ${card.color} p-6 text-white shadow-xl`}
          >
            <div className="flex items-center justify-between">
              <Icon className="h-8 w-8" />

              <span className="text-4xl font-bold">
                {props[card.key]}
              </span>
            </div>

            <p className="mt-6 text-lg font-medium">
              {card.title}
            </p>
          </motion.div>
        );
      })}
    </section>
  );
}