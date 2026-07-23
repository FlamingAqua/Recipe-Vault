import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { db } from "./firebase";
import { auth } from "./firebase";
import { Recipe, RecipeFormData } from "@/types/recipe";

const recipesCollection = collection(db, "recipes");

export async function createRecipe(recipe: RecipeFormData) {
  if (!auth.currentUser) {
    throw new Error("Please login first");
  }

  await addDoc(recipesCollection, {
    ...recipe,

    userId: auth.currentUser.uid,

    favorite: false,

    createdAt: serverTimestamp(),

    updatedAt: serverTimestamp(),
  });
}

export async function editRecipe(id: string, recipe: Partial<RecipeFormData>) {
  await updateDoc(doc(db, "recipes", id), {
    ...recipe,
    updatedAt: serverTimestamp(),
  });
}

export async function removeRecipe(id: string) {
  await deleteDoc(doc(db, "recipes", id));
}

export function subscribeRecipes(callback: (recipes: Recipe[]) => void) {
  const q = query(recipesCollection, orderBy("createdAt", "desc"));

  return onSnapshot(q, (snapshot) => {
    const recipes = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Recipe, "id">),
    }));

    callback(recipes);
  });
}
