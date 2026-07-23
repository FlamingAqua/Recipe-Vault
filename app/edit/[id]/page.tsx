import EditRecipeClient from "@/components/recipe/EditRecipeClient";

export const dynamic = "force-dynamic";

export default async function EditRecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <EditRecipeClient recipeId={id} />;
}
