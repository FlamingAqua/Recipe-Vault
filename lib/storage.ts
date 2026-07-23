import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";

import { storage } from "./firebase";

export async function uploadRecipeImage(
  file: File
): Promise<string> {
  const fileName = `recipes/${Date.now()}-${file.name}`;

  const storageRef = ref(storage, fileName);

  await uploadBytes(storageRef, file);

  return await getDownloadURL(storageRef);
}

export async function deleteRecipeImage(
  imageUrl: string
) {
  if (!imageUrl) return;

  try {
    const path = decodeURIComponent(
      imageUrl.split("/o/")[1].split("?")[0]
    );

    await deleteObject(ref(storage, path));
  } catch {
    console.log("Image already deleted.");
  }
}