"use client";

import { motion } from "framer-motion";
import { BookOpenText } from "lucide-react";

import { normalizeRecipeInstructions, RecipeInstruction } from "@/types/recipe";

type Props = {
  instructions: RecipeInstruction[];
};

export default function InstructionTimeline({ instructions }: Props) {
  const normalizedInstructions = normalizeRecipeInstructions(instructions);

  return (
    <div className="space-y-4">
      {normalizedInstructions.map((instruction, index) => {
        const stepNumber = instruction.step ?? index + 1;
        const isEven = index % 2 === 0;

        return (
          <motion.div
            key={`${instruction.step}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className={`flex gap-4 rounded-[1.5rem] border border-border/70 bg-card/70 p-4 shadow-sm sm:p-5 ${isEven ? "ml-0 mr-0 lg:ml-4" : "ml-0 mr-0 lg:mr-4"}`}
          >
            <div className="flex shrink-0 flex-col items-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20">
                {stepNumber}
              </div>
              {index < normalizedInstructions.length - 1 ? <div className="mt-3 h-full w-px bg-linear-to-b from-primary/50 to-transparent" /> : null}
            </div>

            <div className="flex-1 rounded-[1.25rem] border border-border/60 bg-background/70 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <BookOpenText className="h-4 w-4 text-primary" />
                <span>Step {stepNumber}</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{instruction.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
