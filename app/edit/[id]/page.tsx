import EditRecipeClient from "@/components/recipe/EditRecipeClient";
import AdminGuard from "@/components/auth/AdminGuard";

export const dynamic = "force-dynamic";

export default async function EditRecipePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <AdminGuard>
      <EditRecipeClient recipeId={id} />
    </AdminGuard>
  );
}
