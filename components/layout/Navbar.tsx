"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChefHat, Plus, LogOut } from "lucide-react";

import ThemeToggle from "@/components/common/ThemeToggle";
import { useAuth } from "@/context/AuthContext";

const navItems = [
  { href: "/", label: "Dashboard" },
  { href: "/recipes", label: "Browse" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { user, loading, signOut, isAdmin } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-3xl bg-white/85 px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:bg-slate-950/80 dark:text-white"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100 text-orange-700 shadow-sm shadow-orange-200/40 transition-transform duration-200 group-hover:-translate-y-0.5">
            <ChefHat size={24} aria-hidden="true" />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-base font-bold">Recipe Vault</span>
            <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground">Curated collection</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-3xl border border-border/80 bg-card/90 px-2 py-2 shadow-sm shadow-slate-200/30 backdrop-blur-md dark:bg-slate-950/80 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${active ? "bg-primary text-primary-foreground shadow-sm shadow-orange-300/30" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
              >
                {item.label}
              </Link>
            );
          })}
          {isAdmin && (
            <Link
              href="/create"
              className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${pathname === "/create" ? "bg-primary text-primary-foreground shadow-sm shadow-orange-300/30" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
            >
              Create
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          {loading ? null : user ? (
            <div className="hidden items-center gap-3 rounded-3xl border border-border/80 bg-card/90 px-4 py-3 shadow-sm shadow-slate-200/30 backdrop-blur-md lg:flex">
              <img
                src={user.photoURL ?? "/avatar-placeholder.svg"}
                alt={user.displayName ?? user.email ?? "User avatar"}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">
                  {user.displayName ?? user.email}
                </p>
                <p className="text-xs text-muted-foreground">
                  {isAdmin ? "Admin" : "Member"}
                </p>
              </div>
              <button
                type="button"
                onClick={() => signOut()}
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border/80 bg-muted text-foreground transition hover:bg-muted/80"
                aria-label="Sign out"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="inline-flex items-center rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-sm shadow-orange-300/20 transition hover:-translate-y-0.5 hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
