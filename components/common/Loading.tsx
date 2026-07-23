"use client";

import { LoaderCircle } from "lucide-react";

type Props = {
  text?: string;
};

export default function Loading({
  text = "Loading...",
}: Props) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center gap-5">
      <LoaderCircle
        size={42}
        className="animate-spin text-orange-500"
      />

      <p className="text-sm font-medium text-muted-foreground" role="status">
        {text}
      </p>
    </div>
  );
}
