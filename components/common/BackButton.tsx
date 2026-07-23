"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      variant="outline"
      onClick={() => router.back()}
      className="mb-8 rounded-2xl px-4 py-3 text-sm shadow-sm shadow-slate-900/5 transition hover:-translate-y-px"
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      Back
    </Button>
  );
}