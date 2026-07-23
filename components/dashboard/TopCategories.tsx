"use client";

import { Salad, Drumstick, IceCream2 } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  veg: number;
  nonVeg: number;
  desserts: number;
};

export default function TopCategories({
  veg,
  nonVeg,
  desserts,
}: Props) {
  const categories = [
    {
      title: "Veg",
      count: veg,
      icon: Salad,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Non Veg",
      count: nonVeg,
      icon: Drumstick,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Dessert",
      count: desserts,
      icon: IceCream2,
      color: "bg-pink-100 text-pink-600",
    },
  ];

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Categories
      </h2>

      <div className="space-y-4">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <motion.div
              key={category.title}
              whileHover={{
                x: 6,
              }}
              className="flex items-center justify-between rounded-2xl border p-5 transition hover:bg-orange-50"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`rounded-2xl p-3 ${category.color}`}
                >
                  <Icon size={24} />
                </div>

                <div>
                  <h3 className="font-semibold">
                    {category.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Recipe Category
                  </p>
                </div>
              </div>

              <span className="text-3xl font-bold text-orange-500">
                {category.count}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}