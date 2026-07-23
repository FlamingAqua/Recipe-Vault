import Link from "next/link";
import { ChefHat } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <div className="rounded-full bg-orange-100 p-6">
        <ChefHat
          size={64}
          className="text-orange-600"
        />
      </div>

      <h1 className="mt-6 font-[family-name:var(--font-playfair)] text-5xl font-bold">
        Recipe Not Found
      </h1>

      <p className="mt-4 text-muted-foreground">
        The recipe you are trying to edit does not exist.
      </p>

      <Button
        asChild
        className="mt-8 rounded-full px-8"
      >
        <Link href="/">
          Back to Dashboard
        </Link>
      </Button>
    </main>
  );
}