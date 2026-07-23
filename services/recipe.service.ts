import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

import {
  Recipe,
  RecipeFormData,
} from "@/types/recipe";

const recipesRef = collection(db, "recipes");

export async function getRecipes() {
  const q = query(
    recipesRef,
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Recipe, "id">),
  }));
}

export async function getRecipe(
  id: string
) {
  const snapshot = await getDoc(
    doc(db, "recipes", id)
  );

  if (!snapshot.exists()) return null;

  return {
    id: snapshot.id,
    ...(snapshot.data() as Omit<
      Recipe,
      "id"
    >),
  };
}

export async function createRecipe(
  recipe: RecipeFormData
) {
  await addDoc(recipesRef, {
    ...recipe,
    favorite: false,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

export async function updateRecipe(
  id: string,
  recipe: Partial<RecipeFormData>
) {
  await updateDoc(doc(db, "recipes", id), {
    ...recipe,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteRecipe(
  id: string
) {
  await deleteDoc(doc(db, "recipes", id));
}