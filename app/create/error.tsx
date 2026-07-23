"use client";

import { Button } from "@/components/ui/button";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold">
        Something went wrong
      </h1>

      <p className="mt-4 text-muted-foreground">
        An unexpected error occurred while loading this page.
      </p>

      <Button onClick={reset} className="mt-8 rounded-full px-8">
        Try Again
      </Button>
    </main>
  );
}
