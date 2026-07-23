"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const dark = typeof window !== "undefined" ? resolvedTheme === "dark" : false;

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="rounded-full border border-border bg-card shadow-sm shadow-slate-900/5"
      aria-label="Toggle theme"
    >
      {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}
