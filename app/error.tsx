"use client";

import { useEffect } from "react";
import { RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({
  error,
  reset,
}: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <h1 className="text-5xl font-bold">
          Something went wrong
        </h1>

        <p className="mt-5 text-muted-foreground">
          An unexpected error occurred while loading this page.
        </p>

        <Button
          onClick={reset}
          className="mt-8 rounded-xl"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Try Again
        </Button>
      </div>
    </main>
  );
}