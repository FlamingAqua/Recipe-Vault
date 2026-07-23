"use client";

import { useEffect } from "react";

const storageKey = "recipe-vault:recently-viewed";

export function useRecentlyViewed(recipeId: string) {
  useEffect(() => {
    if (!recipeId) return;
    const existing = JSON.parse(localStorage.getItem(storageKey) ?? "[]") as string[];
    const next = [recipeId, ...existing.filter((id) => id !== recipeId)].slice(0, 6);
    localStorage.setItem(storageKey, JSON.stringify(next));
  }, [recipeId]);
}

export function getRecentlyViewedIds() {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(storageKey) ?? "[]") as string[]; } catch { return []; }
}
