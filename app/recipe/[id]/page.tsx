import RecipeDetailsClient from "@/components/recipe/RecipeDetailsClient";

export const dynamic = "force-dynamic";

export default async function RecipeDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <RecipeDetailsClient recipeId={id} />;
}
