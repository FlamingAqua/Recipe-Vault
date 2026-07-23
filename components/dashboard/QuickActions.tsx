"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, BookOpen, Heart, Sparkles } from "lucide-react";

const actions = [
  {
    title: "Create Recipe",
    description: "Add a brand new recipe",
    href: "/create",
    icon: Plus,
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Browse Recipes",
    description: "View your full collection",
    href: "/recipes",
    icon: BookOpen,
    color: "from-sky-500 to-cyan-500",
  },
  {
    title: "Favorites",
    description: "Saved recipes you love",
    href: "/recipes?category=Favorites",
    icon: Heart,
    color: "from-rose-500 to-pink-500",
  },
  {
    title: "Discover",
    description: "Explore the recipe library",
    href: "/recipes",
    icon: Sparkles,
    color: "from-violet-500 to-purple-500",
  },
];

export default function QuickActions() {
  return (
    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {actions.map((action, index) => {
        const Icon = action.icon;

        return (
          <motion.div
            key={action.title}
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
          >
            <Link
              href={action.href}
              className="group block overflow-hidden rounded-3xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`mb-5 inline-flex rounded-2xl bg-gradient-to-br ${action.color} p-4 text-white`}
              >
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="text-xl font-bold">{action.title}</h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {action.description}
              </p>
            </Link>
          </motion.div>
        );
      })}
    </section>
  );
}
