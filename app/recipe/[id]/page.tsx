import RecipeDetailsClient from "@/components/recipe/RecipeDetailsClient";
import AuthGuard from "@/components/auth/AuthGuard";

export const dynamic = "force-dynamic";

export default async function RecipeDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <AuthGuard>
      <RecipeDetailsClient recipeId={id} />
    </AuthGuard>
  );
}
