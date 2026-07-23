"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { useRecipes } from "@/hooks/useRecipes";
import SearchBar from "@/components/dashboard/SearchBar";
import Footer from "@/components/common/Footer";
import RecipeGrid from "@/components/recipe/RecipeGrid";
import BackButton from "@/components/common/BackButton";
import { Category } from "@/components/dashboard/CategoryFilter";
import EmptyState from "@/components/common/EmptyState";

const categoryLabels: Category[] = [
  "All",
  "Veg",
  "Non Veg",
  "Dessert",
  "Favorites",
];

export default function RecipesPage() {
  const { recipes = [], loading } = useRecipes();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("All");

  const filteredRecipes = useMemo(() => {
    let data = [...recipes];

    if (search.trim()) {
      const query = search.toLowerCase().trim();
      data = data.filter((recipe) =>
        [recipe.name, recipe.ingredients, recipe.category, ...(recipe.tags ?? [])]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(query)
      );
    }

    if (category !== "All") {
      if (category === "Favorites") {
        data = data.filter((recipe) => recipe.favorite === true);
      } else {
        data = data.filter(
          (recipe) => recipe.category?.toLowerCase() === category.toLowerCase()
        );
      }
    }

    return data;
  }, [recipes, search, category]);

  return (
    <>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Browse recipes
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Explore your cookbook
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Search, filter, and manage every recipe in your collection.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <BackButton />
          </div>
        </div>

        <div className="space-y-6">
          <SearchBar value={search} onChange={setSearch} />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {categoryLabels.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${
                  category === item
                    ? "border-primary bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                    : "border-border bg-card text-foreground hover:border-primary/70 hover:bg-primary/5"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <section className="rounded-[2rem] border border-border/70 bg-card p-6 shadow-[0_18px_48px_rgba(15,23,42,0.06)]">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Showing</p>
                <h2 className="text-2xl font-bold">{filteredRecipes.length} recipes</h2>
              </div>
              <Link
                href="/"
                className="inline-flex items-center rounded-2xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:bg-muted"
              >
                Back to Dashboard
              </Link>
            </div>

            {loading ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="rounded-3xl border border-border/70 bg-muted p-8 shadow-sm animate-pulse" />
                ))}
              </div>
            ) : filteredRecipes.length === 0 ? (
              <EmptyState
                title="No recipes found"
                description="Try a different search term or choose another category."
                buttonText="Create a recipe"
                buttonHref="/create"
              />
            ) : (
              <RecipeGrid recipes={filteredRecipes} />
            )}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
