import type { Timestamp } from "firebase/firestore";

export interface Recipe {
  id: string;
  userId: string;

  name: string;
  category: RecipeCategory;

  ingredients: string;
  method: string;
  warnings: string;
  tips: string;
  notes?: string;
  tags?: string[];

  prepTime: number;
  cookTime: number;
  servings: number;

  difficulty: "Easy" | "Medium" | "Hard";

  imageUrl: string;

  favorite: boolean;

  createdAt: Timestamp | null;
  updatedAt: Timestamp | null;
}

export type RecipeCategory = "Veg" | "Non Veg" | "Dessert";

export interface RecipeFormData {
  name: string;
  category: RecipeCategory;

  ingredients: string;
  method: string;
  warnings: string;
  tips: string;
  notes: string;
  tags: string[];

  prepTime: number;
  cookTime: number;
  servings: number;

  difficulty: "Easy" | "Medium" | "Hard";

  imageUrl: string;
}
