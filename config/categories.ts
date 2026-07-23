import {
  BookOpen,
  Drumstick,
  Heart,
  IceCream2,
  Salad,
} from "lucide-react";

export const CATEGORIES = [
  {
    value: "All",
    label: "All",
    icon: BookOpen,
  },
  {
    value: "Veg",
    label: "Veg",
    icon: Salad,
  },
  {
    value: "Non Veg",
    label: "Non Veg",
    icon: Drumstick,
  },
  {
    value: "Dessert",
    label: "Dessert",
    icon: IceCream2,
  },
  {
    value: "Favorites",
    label: "Favorites",
    icon: Heart,
  },
] as const;

export const RECIPE_CATEGORIES = [
  "Veg",
  "Non Veg",
  "Dessert",
] as const;

export const DIFFICULTIES = [
  "Easy",
  "Medium",
  "Hard",
] as const;

export const SORT_OPTIONS = [
  "Newest",
  "Oldest",
  "A-Z",
  "Z-A",
] as const;