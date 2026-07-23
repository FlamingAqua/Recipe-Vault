import Link from "next/link";
import { ChefHat, Home } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
          <ChefHat className="h-12 w-12 text-primary" />
        </div>

        <h1 className="font-[family-name:var(--font-playfair)] text-7xl font-bold">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold">
          Recipe Not Found
        </h2>

        <p className="mt-4 text-muted-foreground">
          Looks like this recipe has gone missing or never existed.
        </p>

        <Button
          asChild
          className="mt-8 rounded-xl"
        >
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
      </div>
    </main>
  );
}