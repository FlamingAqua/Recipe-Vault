"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Save, Trash2 } from "lucide-react";

import ImageUpload from "@/components/recipe/ImageUpload";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  normalizeRecipeIngredients,
  normalizeRecipeInstructions,
  RecipeFormData,
  RecipeIngredient,
  RecipeInstruction,
} from "@/types/recipe";

type Props = {
  initialValues?: RecipeFormData;
  onSubmit: (recipe: RecipeFormData) => Promise<void>;
};

type FormErrors = {
  name?: string;
  ingredients?: string;
  ingredientName?: string;
  instructions?: string;
};

const unitOptions = [
  "tsp",
  "tbsp",
  "cup",
  "ml",
  "l",
  "g",
  "kg",
  "oz",
  "lb",
  "pinch",
  "piece",
  "cloves",
  "slices",
  "optional",
];

const blank: RecipeFormData = {
  name: "",
  category: "Veg",
  ingredients: [{ amount: "", unit: "tsp", name: "" }],
  instructions: [{ step: 1, description: "" }],
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
  "h-12 w-full rounded-2xl border border-border/70 bg-background/70 px-4 shadow-sm shadow-slate-900/5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30";
const textareaClass =
  "min-h-[6rem] w-full rounded-2xl border border-border/70 bg-background/70 px-4 py-3 shadow-sm shadow-slate-900/5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30";

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
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-foreground">
      {children}
      {optional && (
        <span className="ml-1.5 font-normal text-muted-foreground">Optional</span>
      )}
    </label>
  );
}

function createIngredient(): RecipeIngredient {
  return { amount: "", unit: "tsp", name: "" };
}

function createInstruction(step: number): RecipeInstruction {
  return { step, description: "" };
}

export default function RecipeForm({ initialValues, onSubmit }: Props) {
  const router = useRouter();
  const [recipe, setRecipe] = useState<RecipeFormData>(() => {
    if (!initialValues) {
      return blank;
    }

    return {
      ...blank,
      ...initialValues,
      ingredients: normalizeRecipeIngredients(initialValues.ingredients),
      instructions: normalizeRecipeInstructions(initialValues.instructions),
      tags: initialValues.tags ?? [],
    };
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const set = <K extends keyof RecipeFormData>(
    key: K,
    value: RecipeFormData[K],
  ) => setRecipe((current) => ({ ...current, [key]: value }));

  function updateIngredient(index: number, field: keyof RecipeIngredient, value: string) {
    setRecipe((current) => {
      const nextIngredients = [...current.ingredients];
      nextIngredients[index] = { ...nextIngredients[index], [field]: value };
      return { ...current, ingredients: nextIngredients };
    });
  }

  function addIngredient() {
    setRecipe((current) => ({
      ...current,
      ingredients: [...current.ingredients, createIngredient()],
    }));
  }

  function removeIngredient(index: number) {
    setRecipe((current) => {
      if (current.ingredients.length === 1) {
        return { ...current, ingredients: [createIngredient()] };
      }

      return {
        ...current,
        ingredients: current.ingredients.filter((_, ingredientIndex) => ingredientIndex !== index),
      };
    });
  }

  function validateRecipe(data: RecipeFormData) {
    const nextErrors: FormErrors = {};

    if (!data.name.trim()) {
      nextErrors.name = "Recipe title is required.";
    }

    const hasIngredientName = data.ingredients.some((ingredient) => ingredient.name.trim());
    if (!hasIngredientName) {
      nextErrors.ingredients = "Add at least one ingredient.";
    }

    const hasIngredientRowWithNameMissing = data.ingredients.some(
      (ingredient) =>
        [ingredient.amount, ingredient.unit, ingredient.name].some((value) => value.trim()) && !ingredient.name.trim(),
    );

    if (hasIngredientRowWithNameMissing) {
      nextErrors.ingredientName = "Each ingredient row needs a name.";
    }

    const hasInstruction = data.instructions[0]?.description.trim();
    if (!hasInstruction) {
      nextErrors.instructions = "Add the cooking instructions.";
    }

    return nextErrors;
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateRecipe(recipe);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setLoading(true);
    try {
      await onSubmit({
        ...recipe,
        name: recipe.name.trim(),
        ingredients: recipe.ingredients
          .filter((ingredient) => ingredient.name.trim())
          .map((ingredient) => ({
            amount: ingredient.amount.trim(),
            unit: ingredient.unit.trim(),
            name: ingredient.name.trim(),
          })),
        instructions: recipe.instructions[0]?.description?.trim()
          ? [{ step: 1, description: recipe.instructions[0].description.trim() }]
          : [],
        tips: recipe.tips.trim(),
        warnings: recipe.warnings.trim(),
        notes: recipe.notes.trim(),
        tags: recipe.tags.filter(Boolean),
      });
      router.push("/");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="mx-auto w-full max-w-[900px] space-y-8">
      <section className="rounded-[2rem] border border-border/70 bg-card p-6 shadow-[0_30px_80px_rgba(15,23,42,0.06)] sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-foreground">
              Recipe essentials
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Start with the details that make the dish easy to recognize and easy to revisit.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-muted/50 px-4 py-3 text-sm text-muted-foreground shadow-sm">
            Tip: a polished cover image makes the recipe feel special.
          </div>
        </div>

        <div className="mt-6 space-y-5">
          <div>
            <Label htmlFor="recipe-name">Recipe name</Label>
            <Input
              id="recipe-name"
              value={recipe.name}
              placeholder="e.g. Sunday tomato basil pasta"
              onChange={(event) => {
                set("name", event.target.value);
                if (errors.name) {
                  setErrors((current) => ({ ...current, name: undefined }));
                }
              }}
              className={inputClass}
            />
            {errors.name && <p className="mt-2 text-sm text-destructive">{errors.name}</p>}
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
              Separate tags with commas to make your collection easier to browse.
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
                  className="h-12 w-full rounded-2xl border-border bg-background/70 shadow-sm"
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
                  className="h-12 w-full rounded-2xl border-border bg-background/70 shadow-sm"
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
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-foreground">
              Timing & servings
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Helpful timing cues keep the cook confident from the first chop to the last garnish.
            </p>
          </div>
        </div>

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
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-foreground">
              Ingredients & steps
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Capture every ingredient and each cooking move in a format that feels effortless to follow.
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="ingredients">Ingredients</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addIngredient}
                className="rounded-2xl"
              >
                <Plus className="h-4 w-4" />
                Add Ingredient
              </Button>
            </div>

            <div className="space-y-3">
              <AnimatePresence initial={false}>
                {recipe.ingredients.map((ingredient, index) => (
                  <motion.div
                    key={`ingredient-${index}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.18 }}
                    className="rounded-[1.25rem] border border-border/70 bg-background/70 p-3"
                  >
                    <div className="grid gap-3 md:grid-cols-[0.8fr_1fr_2fr_auto]">
                      <Input
                        value={ingredient.amount}
                        placeholder="1"
                        onChange={(event) => updateIngredient(index, "amount", event.target.value)}
                        className={inputClass}
                      />

                      <select
                        value={ingredient.unit}
                        onChange={(event) => updateIngredient(index, "unit", event.target.value)}
                        className="h-12 w-full rounded-2xl border border-border/70 bg-background/70 px-3 text-sm shadow-sm shadow-slate-900/5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                      >
                        {unitOptions.map((unit) => (
                          <option key={unit} value={unit}>
                            {unit}
                          </option>
                        ))}
                      </select>

                      <Input
                        value={ingredient.name}
                        placeholder="Ingredient name"
                        onChange={(event) => updateIngredient(index, "name", event.target.value)}
                        className={inputClass}
                      />

                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeIngredient(index)}
                        className="h-12 w-12 rounded-2xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                        aria-label={`Remove ingredient ${index + 1}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {errors.ingredients && <p className="mt-3 text-sm text-destructive">{errors.ingredients}</p>}
            {errors.ingredientName && <p className="mt-2 text-sm text-destructive">{errors.ingredientName}</p>}
          </div>

          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="instructions">Instructions</Label>
            </div>

            <Textarea
              id="instructions"
              rows={8}
              value={recipe.instructions[0]?.description ?? ""}
              placeholder="Write the full cooking instructions here..."
              onChange={(event) => {
                setRecipe((current) => ({
                  ...current,
                  instructions: [{ step: 1, description: event.target.value }],
                }));
              }}
              className={textareaClass}
            />

            {errors.instructions && <p className="mt-3 text-sm text-destructive">{errors.instructions}</p>}
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

      <div className="flex flex-col-reverse justify-end gap-3 sm:flex-row">
        <Button type="button" variant="outline" size="lg" onClick={() => router.back()} className="sm:min-w-32">
          Cancel
        </Button>
        <Button type="submit" size="lg" disabled={loading} className="sm:min-w-44">
          {loading ? (
            "Saving Recipe..."
          ) : (
            <>
              <Save className="h-4 w-4" aria-hidden="true" />
              Save Recipe
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
