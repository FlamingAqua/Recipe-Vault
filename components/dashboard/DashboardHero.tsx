"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChefHat, Sparkles } from "lucide-react";

export default function DashboardHero() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative overflow-hidden rounded-[2rem] border border-[#d97042]/30 bg-gradient-to-br from-[#7f2f18] via-[#b54e26] to-[#d97539] px-6 py-10 text-white shadow-xl shadow-orange-950/15 sm:px-10 sm:py-12"
    >
      <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-amber-200/20 blur-3xl" />
      <div className="absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-rose-200/15 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-sm font-medium backdrop-blur-md">
            <Sparkles size={16} aria-hidden="true" />
            <span>{greeting}, Chef</span>
          </div>

          <h1 className="max-w-2xl font-[family-name:var(--font-playfair)] text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Ready to cook something amazing?
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-orange-50/90 sm:text-lg">
            Capture the dishes worth repeating, keep them beautifully organized,
            and return to them whenever inspiration strikes.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/create"
              className="inline-flex h-11 items-center rounded-xl bg-white px-5 text-sm font-semibold text-[#8c351b] shadow-lg shadow-orange-950/15 transition hover:-translate-y-0.5 hover:bg-orange-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#ad4824]"
            >
              Add a recipe <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/recipes"
              className="inline-flex h-11 items-center rounded-xl border border-white/25 bg-white/10 px-5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Browse recipes
            </Link>
          </div>
        </div>

        <motion.div
          animate={{ rotate: [0, -4, 3, -4, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="hidden lg:flex lg:pr-8"
        >
          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-9 backdrop-blur-md shadow-2xl shadow-orange-950/20">
            <ChefHat size={104} strokeWidth={1.25} aria-hidden="true" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
