"use client";

import { ChangeEvent } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type SearchBarProps = { value: string; onChange: (value: string) => void };

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative rounded-[2rem] border border-border/70 bg-card/95 px-4 py-3 shadow-[0_28px_70px_rgba(15,23,42,0.06)] transition focus-within:ring-2 focus-within:ring-primary/20">
      <Search size={20} aria-hidden="true" className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
        placeholder="Search recipes, ingredients, tags..."
        aria-label="Search your recipes"
        className="h-14 rounded-[1.75rem] border-none bg-transparent pl-12 pr-12 text-base shadow-none focus-visible:ring-0"
      />
      {value && (
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={() => onChange("")}
          aria-label="Clear recipe search"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full"
        >
          <X size={18} aria-hidden="true" />
        </Button>
      )}
    </div>
  );
}
