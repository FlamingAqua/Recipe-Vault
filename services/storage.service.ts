import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";

import { storage } from "@/lib/firebase";

export async function uploadRecipeImage(
  file: File
) {
  const extension = file.name.split(".").pop();

  const fileName = `recipes/${Date.now()}.${extension}`;

  const storageRef = ref(storage, fileName);

  await uploadBytes(storageRef, file);

  const downloadURL = await getDownloadURL(
    storageRef
  );

  return {
    url: downloadURL,
    path: fileName,
  };
}

export async function deleteRecipeImage(
  path: string
) {
  if (!path) return;

  const storageRef = ref(storage, path);

  await deleteObject(storageRef);
}