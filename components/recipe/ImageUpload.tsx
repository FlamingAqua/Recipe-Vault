"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ImagePlus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { uploadRecipeImage } from "@/lib/storage";

type Props = {
  value: string;
  onChange: (url: string) => void;
};

export default function ImageUpload({
  value,
  onChange,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [uploading, setUploading] =
    useState(false);

  async function handleUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    setUploading(true);

    try {
      const url = await uploadRecipeImage(file);

      onChange(url);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-4">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleUpload}
      />

      {value ? (
        <div className="relative h-72 overflow-hidden rounded-3xl border">
          <Image
            src={value}
            alt="Recipe"
            fill
            className="object-cover"
            unoptimized
          />

          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="absolute right-4 top-4"
            onClick={() => onChange("")}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <button
          type="button"
          disabled={uploading}
          onClick={() => inputRef.current?.click()}
          className="flex h-72 w-full flex-col items-center justify-center rounded-3xl border border-border bg-card px-8 text-center transition hover:-translate-y-0.5 hover:border-primary/70 hover:bg-primary/5"
        >
          <ImagePlus className="mb-4 h-12 w-12 text-primary" />

          <p className="text-sm font-semibold text-foreground">
            {uploading ? "Uploading..." : "Upload recipe cover image"}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            JPG, PNG or GIF — max 5MB.
          </p>
        </button>
      )}
    </div>
  );
}