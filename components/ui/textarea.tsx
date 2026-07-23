import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-20 w-full rounded-2xl border border-border bg-card px-4 py-4 text-base leading-7 transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 disabled:cursor-not-allowed disabled:bg-muted/50 disabled:opacity-60 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/30 md:text-sm dark:bg-slate-950/70 dark:disabled:bg-slate-950/50 dark:aria-invalid:border-destructive/70 dark:aria-invalid:ring-destructive/30",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
