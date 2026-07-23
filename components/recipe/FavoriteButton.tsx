"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { doc, updateDoc } from "firebase/firestore";
import { toast } from "sonner";

import { db } from "@/lib/firebase";

type Props = {
  recipeId: string;
  initialFavorite: boolean;
};

export default function FavoriteButton({
  recipeId,
  initialFavorite,
}: Props) {
  const [favorite, setFavorite] = useState(initialFavorite);
  const [loading, setLoading] = useState(false);

  async function toggleFavorite() {
    if (loading) return;

    try {
      setLoading(true);

      const newValue = !favorite;

      await updateDoc(doc(db, "recipes", recipeId), {
        favorite: newValue,
      });

      setFavorite(newValue);

      toast.success(
        newValue
          ? "Added to Favorites ❤️"
          : "Removed from Favorites"
      );
    } catch (error) {
      console.error(error);

      toast.error("Failed to update favorite");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      disabled={loading}
      onClick={toggleFavorite}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur transition-all duration-300 hover:scale-110"
    >
      <Heart
        className={`h-5 w-5 transition-all duration-300 ${
          favorite
            ? "fill-red-500 text-red-500"
            : "text-slate-500"
        }`}
      />
    </button>
  );
}