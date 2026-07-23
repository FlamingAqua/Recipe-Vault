"use client";

import { useState } from "react";
import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import DeleteRecipeDialog from "@/components/common/DeleteRecipeDialog";

type Props = {
  id: string;
  name: string;
  onDelete: (id: string) => Promise<void>;
};

export default function RecipeActions({
  id,
  name,
  onDelete,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex gap-3">
        <Button
          asChild
          className="flex-1 rounded-xl"
        >
          <Link href={`/edit/${id}`}>
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </Link>
        </Button>

        <Button
          variant="destructive"
          className="flex-1 rounded-xl"
          onClick={() => setOpen(true)}
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </Button>
      </div>

      <DeleteRecipeDialog
        open={open}
        onOpenChange={setOpen}
        recipeName={name}
        onConfirm={() => onDelete(id)}
      />
    </>
  );
}