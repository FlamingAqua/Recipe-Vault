"use client";

import { useEffect, useMemo, useState } from "react";

import {
  createRecipe,
  editRecipe,
  removeRecipe,
  subscribeRecipes,
} from "@/lib/firestore";
import {
  Recipe,
  RecipeCategory,
  RecipeFormData,
} from "@/types/recipe";

export function useRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeRecipes((recipes) => {
      setRecipes(recipes);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  async function addRecipe(recipe: RecipeFormData) {
    await createRecipe(recipe);
  }

  async function updateRecipe(id: string, recipe: RecipeFormData) {
    await editRecipe(id, recipe);
  }

  async function deleteRecipe(id: string) {
    await removeRecipe(id);
  }

  const favorites = useMemo(
    () =>
      recipes.filter(
        (recipe) => recipe.favorite
      ),
    [recipes]
  );

  function filterRecipes(
    search: string,
    category: RecipeCategory | "All"
  ) {
    return recipes.filter((recipe) => {
      const matchesSearch =
        recipe.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        recipe.ingredients
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        recipe.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );
    });
  }

  return {
    recipes,
    favorites,
    loading,
    addRecipe,
    updateRecipe,
    deleteRecipe,
    filterRecipes,
  };
}