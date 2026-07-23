"use client";

import { useMemo } from "react";

import DashboardHero from "@/components/dashboard/DashboardHero";
import DashboardStats from "@/components/dashboard/DashboardStats";
import QuickActions from "@/components/dashboard/QuickActions";
import RecipeAnalytics from "@/components/dashboard/RecipeAnalytics";
import Footer from "@/components/common/Footer";
import { useRecipes } from "@/hooks/useRecipes";
import RecentRecipes from "@/components/dashboard/RecentRecipes";

export default function HomePage() {
  const { recipes = [] } = useRecipes();

  const stats = useMemo(
    () =>
      recipes.reduce(
        (acc, recipe) => {
          const recipeCategory =
            recipe.category?.toLowerCase().trim() ?? "";

          if (recipeCategory === "veg") {
            acc.veg++;
          } else if (
            recipeCategory === "non veg" ||
            recipeCategory === "non-veg"
          ) {
            acc.nonVeg++;
          } else if (recipeCategory === "dessert") {
            acc.desserts++;
          }

          acc.total++;

          return acc;
        },
        {
          total: 0,
          veg: 0,
          nonVeg: 0,
          desserts: 0,
        }
      ),
    [recipes]
  );

  return (
    <>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="space-y-8">
          <DashboardHero />

          <QuickActions />

          <DashboardStats
            total={stats.total}
            veg={stats.veg}
            nonVeg={stats.nonVeg}
            desserts={stats.desserts}
          />

          <RecentRecipes recipes={recipes} />

          <RecipeAnalytics
            veg={stats.veg}
            nonVeg={stats.nonVeg}
            desserts={stats.desserts}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}