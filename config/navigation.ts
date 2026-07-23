import {
  BookOpen,
  PlusCircle,
  Home,
} from "lucide-react";

export const NAVIGATION = [
  {
    title: "Dashboard",
    href: "/",
    icon: Home,
  },
  {
    title: "Create Recipe",
    href: "/create",
    icon: PlusCircle,
  },
  {
    title: "All Recipes",
    href: "/",
    icon: BookOpen,
  },
] as const;