"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save } from "lucide-react";
import ImageUpload from "@/components/recipe/ImageUpload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { RecipeFormData } from "@/types/recipe";
type Props = {
  initialValues?: RecipeFormData;
  onSubmit: (recipe: RecipeFormData) => Promise<void>;
};
const blank: RecipeFormData = {
  name: "",
  category: "Veg",
  ingredients: "",
  method: "",
  warnings: "",
  tips: "",
  notes: "",
  tags: [],
  prepTime: 30,
  cookTime: 30,
  servings: 2,
  difficulty: "Easy",
  imageUrl: "",
};
const inputClass =
  "h-12 w-full rounded-3xl border border-border/70 bg-card px-4 shadow-sm shadow-slate-900/5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30";
const textareaClass =
  "min-h-[4.5rem] w-full rounded-3xl border border-border/70 bg-card px-4 py-3 shadow-sm shadow-slate-900/5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30";

function Label({
  htmlFor,
  children,
  optional = false,
}: {
  htmlFor: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold">
      {children}
      {optional && (
        <span className="ml-1.5 font-normal text-muted-foreground">
          Optional
        </span>
      )}
    </label>
  );
}

export default function RecipeForm({ initialValues, onSubmit }: Props) {
  const router = useRouter();
  const [recipe, setRecipe] = useState<RecipeFormData>(
    () => initialValues ?? blank,
  );
  const [loading, setLoading] = useState(false);
  const set = <K extends keyof RecipeFormData>(
    key: K,
    value: RecipeFormData[K],
  ) => setRecipe((current) => ({ ...current, [key]: value }));
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    try {
      await onSubmit(recipe);
      router.push("/");
    } finally {
      setLoading(false);
    }
  }
  return (
    <form onSubmit={submit} className="space-y-8">
      <section className="rounded-[2rem] border border-border/70 bg-card p-6 shadow-[0_30px_80px_rgba(15,23,42,0.06)] sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold">
              Recipe basics
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
              The details that make this dish easy to recognize.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-muted/50 px-4 py-3 text-sm text-muted-foreground shadow-sm">
            Tip: add an image to make your recipe stand out.
          </div>
        </div>
        <div className="mt-6 space-y-5">
          <div>
            <Label htmlFor="recipe-name">Recipe name</Label>
            <Input
              id="recipe-name"
              value={recipe.name}
              placeholder="e.g. Sunday tomato basil pasta"
              onChange={(event) => set("name", event.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <Label htmlFor="recipe-tags" optional>
              Tags
            </Label>
            <Input
              id="recipe-tags"
              value={recipe.tags.join(", ")}
              placeholder="Breakfast, quick meal, family favorite"
              onChange={(event) =>
                set(
                  "tags",
                  event.target.value
                    .split(",")
                    .map((tag) => tag.trim())
                    .filter(Boolean),
                )
              }
              className={inputClass}
            />
            <p className="mt-2 text-xs text-muted-foreground">
              Separate tags with commas to make recipes easier to find.
            </p>
          </div>
          <div>
            <Label htmlFor="recipe-image" optional>
              Cover image
            </Label>
            <ImageUpload
              value={recipe.imageUrl}
              onChange={(url) => set("imageUrl", url)}
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="recipe-category">Category</Label>
              <Select
                value={recipe.category}
                onValueChange={(value) =>
                  set("category", value as RecipeFormData["category"])
                }
              >
                <SelectTrigger
                  id="recipe-category"
                  className="h-11 w-full rounded-xl border-border bg-card shadow-sm"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Veg">Vegetarian</SelectItem>
                  <SelectItem value="Non Veg">Non-vegetarian</SelectItem>
                  <SelectItem value="Dessert">Dessert</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="recipe-difficulty">Difficulty</Label>
              <Select
                value={recipe.difficulty}
                onValueChange={(value) =>
                  set("difficulty", value as RecipeFormData["difficulty"])
                }
              >
                <SelectTrigger
                  id="recipe-difficulty"
                  className="h-11 w-full rounded-xl border-border bg-card shadow-sm"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Easy">Easy</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>
      <section className="rounded-[2rem] border border-border/70 bg-card p-6 shadow-[0_30px_80px_rgba(15,23,42,0.06)] sm:p-8">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold">
          Timing & servings
        </h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
          Set clear expectations before cooking begins.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          <div>
            <Label htmlFor="prep-time">Prep time (min)</Label>
            <Input
              id="prep-time"
              type="number"
              min="0"
              value={recipe.prepTime}
              onChange={(event) => set("prepTime", Number(event.target.value))}
              className={inputClass}
            />
          </div>
          <div>
            <Label htmlFor="cook-time">Cook time (min)</Label>
            <Input
              id="cook-time"
              type="number"
              min="0"
              value={recipe.cookTime}
              onChange={(event) => set("cookTime", Number(event.target.value))}
              className={inputClass}
            />
          </div>
          <div>
            <Label htmlFor="servings">Servings</Label>
            <Input
              id="servings"
              type="number"
              min="1"
              value={recipe.servings}
              onChange={(event) => set("servings", Number(event.target.value))}
              className={inputClass}
            />
          </div>
        </div>
      </section>
      <section className="rounded-[2rem] border border-border/70 bg-card p-6 shadow-[0_30px_80px_rgba(15,23,42,0.06)] sm:p-8">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold">
          The recipe
        </h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
          Write it so your future self can cook with confidence.
        </p>
        <div className="mt-6 space-y-5">
          <div>
            <Label htmlFor="ingredients">Ingredients</Label>
            <Textarea
              id="ingredients"
              rows={7}
              value={recipe.ingredients}
              placeholder="List ingredients, quantities, and preparation notes."
              onChange={(event) => set("ingredients", event.target.value)}
              className={textareaClass}
            />
          </div>
          <div>
            <Label htmlFor="method">Method</Label>
            <Textarea
              id="method"
              rows={9}
              value={recipe.method}
              placeholder="Describe each step in a clear, cookable order."
              onChange={(event) => set("method", event.target.value)}
              className={textareaClass}
            />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <Label htmlFor="tips" optional>
                Kitchen tips
              </Label>
              <Textarea
                id="tips"
                rows={4}
                value={recipe.tips}
                placeholder="Substitutions, serving ideas, or shortcuts."
                onChange={(event) => set("tips", event.target.value)}
                className={textareaClass}
              />
            </div>
            <div>
              <Label htmlFor="warnings" optional>
                Allergy notes & warnings
              </Label>
              <Textarea
                id="warnings"
                rows={4}
                value={recipe.warnings}
                placeholder="Allergens or dietary notes to keep in mind."
                onChange={(event) => set("warnings", event.target.value)}
                className={textareaClass}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="notes" optional>
              Personal notes
            </Label>
            <Textarea
              id="notes"
              rows={4}
              value={recipe.notes}
              placeholder="What would you change next time? These notes are just for you."
              onChange={(event) => set("notes", event.target.value)}
              className={textareaClass}
            />
          </div>
        </div>
      </section>
      <div className="flex justify-end">
        <Button type="submit" size="lg" disabled={loading} className="min-w-44">
          {loading ? (
            "Saving recipe..."
          ) : (
            <>
              <Save className="h-4 w-4" aria-hidden="true" />
              Save recipe
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
