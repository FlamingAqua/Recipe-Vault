import Link from "next/link";
import { ChefHat, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-primary p-2 text-primary-foreground">
            <ChefHat className="h-5 w-5" />
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-lg font-bold">
              Recipe Vault
            </h2>

            <p className="text-sm text-muted-foreground">
              Your personal cookbook.
            </p>
          </div>
        </div>

        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="transition hover:text-primary">
            Home
          </Link>

          <Link href="/create" className="transition hover:text-primary">
            Create Recipe
          </Link>
        </nav>

        <p className="flex items-center gap-2 text-sm text-muted-foreground">
         
        </p>
      </div>
    </footer>
  );
}
