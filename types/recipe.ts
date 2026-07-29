import type { Timestamp } from "firebase/firestore";

export interface RecipeIngredient {
  amount: string;
  unit: string;
  name: string;
}

export interface RecipeInstruction {
  step: number;
  description: string;
}

export interface Recipe {
  id: string;
  userId: string;

  name: string;
  category: RecipeCategory;

  ingredients: RecipeIngredient[];
  instructions: RecipeInstruction[];
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

  ingredients: RecipeIngredient[];
  instructions: RecipeInstruction[];
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

export function normalizeRecipeIngredients(value: unknown): RecipeIngredient[] {
  if (Array.isArray(value)) {
    return value
      .filter(
        (item): item is Record<string, unknown> =>
          typeof item === "object" && item !== null,
      )
      .map((item) => ({
        amount: typeof item.amount === "string" ? item.amount : "",
        unit: typeof item.unit === "string" ? item.unit : "tsp",
        name: typeof item.name === "string" ? item.name : "",
      }))
      .filter((item) => item.name.trim() || item.amount.trim() || item.unit.trim());
  }

  if (typeof value === "string" && value.trim()) {
    return [{ amount: "", unit: "tsp", name: value.trim() }];
  }

  return [{ amount: "", unit: "tsp", name: "" }];
}

export function normalizeRecipeInstructions(value: unknown): RecipeInstruction[] {
  if (Array.isArray(value)) {
    return value
      .filter(
        (item): item is Record<string, unknown> =>
          typeof item === "object" && item !== null,
      )
      .map((item, index) => ({
        step: typeof item.step === "number" ? item.step : index + 1,
        description:
          typeof item.description === "string" ? item.description : "",
      }))
      .filter((item) => item.description.trim());
  }

  if (typeof value === "string" && value.trim()) {
    return [{ step: 1, description: value.trim() }];
  }

  return [{ step: 1, description: "" }];
}
