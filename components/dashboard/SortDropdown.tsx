"use client";

import { ArrowDownUp } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select";

export type SortOption = "Newest" | "Oldest" | "A-Z" | "Z-A";
type SortDropdownProps = { value: SortOption; onChange: (value: SortOption) => void };

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  return <div className="shrink-0"><p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Organize by</p><Select value={value} onValueChange={(next) => { if (next !== null) onChange(next); }}><SelectTrigger aria-label="Organize recipes by" className="h-10 w-full min-w-48 rounded-xl border-border bg-card px-3 shadow-sm sm:w-52"><ArrowDownUp className="mr-1 h-4 w-4 text-muted-foreground" aria-hidden="true" /><SelectValue /></SelectTrigger><SelectContent><SelectItem value="Newest">Newest added</SelectItem><SelectItem value="Oldest">Oldest added</SelectItem><SelectItem value="A-Z">Name: A to Z</SelectItem><SelectItem value="Z-A">Name: Z to A</SelectItem></SelectContent></Select></div>;
}
