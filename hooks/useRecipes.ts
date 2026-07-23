"use client";

import { useEffect, useMemo, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import {
  Recipe,
  RecipeCategory,
  RecipeFormData,
} from "@/types/recipe";

export function useRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, "recipes"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setRecipes(
        snapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as Recipe
        )
      );

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  async function addRecipe(
    recipe: RecipeFormData
  ) {
    await addDoc(collection(db, "recipes"), {
      ...recipe,
      favorite: false,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  }

  async function updateRecipe(
    id: string,
    recipe: RecipeFormData
  ) {
    await updateDoc(doc(db, "recipes", id), {
      ...recipe,
      updatedAt: serverTimestamp(),
    });
  }

  async function deleteRecipe(id: string) {
    await deleteDoc(doc(db, "recipes", id));
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