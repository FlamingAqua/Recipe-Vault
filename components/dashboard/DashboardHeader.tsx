"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

type Props = {
  totalRecipes: number;
};

export default function DashboardHeader({ totalRecipes }: Props) {
  const { isAdmin } = useAuth();
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="flex flex-col gap-6 rounded-3xl border bg-white p-8 shadow-sm lg:flex-row lg:items-center lg:justify-between"
    >
      <div>
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold">
          Recipe Vault
        </h1>

        <p className="mt-3 text-lg text-muted-foreground">
          {totalRecipes} recipes in your collection
        </p>
      </div>

      {isAdmin ? (
        <Button asChild size="lg" className="rounded-2xl">
          <Link href="/create">
            <Plus className="mr-2 h-5 w-5" />
            Create Recipe
          </Link>
        </Button>
      ) : null}
    </motion.div>
  );
}