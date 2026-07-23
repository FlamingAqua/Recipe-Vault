"use client";

import { useEffect, useState } from "react";

import {
  doc,
  onSnapshot,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { Recipe } from "@/types/recipe";

export function useRecipe(id: string) {
  const [recipe, setRecipe] =
    useState<Recipe | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const unsubscribe = onSnapshot(
      doc(db, "recipes", id),
      (snapshot) => {
        if (!snapshot.exists()) {
          setRecipe(null);
          setLoading(false);
          return;
        }

        setRecipe({
          id: snapshot.id,
          ...(snapshot.data() as Omit<
            Recipe,
            "id"
          >),
        });

        setLoading(false);
      },
      () => {
        setError("Failed to load recipe.");
        setLoading(false);
      }
    );

    return unsubscribe;
  }, [id]);

  return {
    recipe,
    loading,
    error,
  };
}