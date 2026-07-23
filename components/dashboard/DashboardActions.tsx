"use client";

import CategoryFilter, {
  Category,
} from "@/components/dashboard/CategoryFilter";
import SortDropdown, {
  SortOption,
} from "@/components/dashboard/SortDropdown";
import SearchBar from "@/components/dashboard/SearchBar";

type Props = {
  search: string;
  onSearchChange: (value: string) => void;

  category: Category;
  onCategoryChange: (category: Category) => void;

  sort: SortOption;
  onSortChange: (sort: SortOption) => void;
};

export default function DashboardActions({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sort,
  onSortChange,
}: Props) {
  return (
    <section className="space-y-6">
      <SearchBar
        value={search}
        onChange={onSearchChange}
      />

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <CategoryFilter
          value={category}
          onChange={onCategoryChange}
        />

        <SortDropdown
          value={sort}
          onChange={onSortChange}
        />
      </div>
    </section>
  );
}