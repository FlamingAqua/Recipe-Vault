export const COLLECTIONS = {
  recipes: "recipes",
} as const;

export const RECIPE_FIELDS = {
  name: "name",
  category: "category",
  ingredients: "ingredients",
  method: "method",
  warnings: "warnings",
  tips: "tips",
  prepTime: "prepTime",
  cookTime: "cookTime",
  servings: "servings",
  difficulty: "difficulty",
  favorite: "favorite",
  imageUrl: "imageUrl",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
} as const;

export const DEFAULT_RECIPE = {
  name: "",
  category: "Veg",
  ingredients: "",
  method: "",
  warnings: "",
  tips: "",
  prepTime: 15,
  cookTime: 30,
  servings: 2,
  difficulty: "Easy",
  favorite: false,
  imageUrl: "",
};

export const QUERY_LIMITS = {
  dashboard: 50,
  search: 100,
} as const;