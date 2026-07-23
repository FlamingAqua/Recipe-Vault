"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { db } from "@/lib/firebase";

type Props = {
  recipeId: string;
  recipeName: string;
};

export default function DeleteRecipeButton({
  recipeId,
  recipeName,
}: Props) {
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    try {
      setLoading(true);

      await deleteDoc(doc(db, "recipes", recipeId));

      toast.success(`"${recipeName}" deleted successfully`);
    } catch (error) {
      console.error(error);

      toast.error("Failed to delete recipe");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <Button variant="destructive" className="w-full rounded-xl">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>
        }
      />

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Delete {recipeName}?
          </AlertDialogTitle>

          <AlertDialogDescription>
            This action cannot be undone. This recipe will be permanently removed from your Recipe Vault.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}