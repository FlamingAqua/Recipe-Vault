"use client";

import { ReactNode } from "react";

import Navbar from "@/components/layout/Navbar";

type Props = {
  children: ReactNode;
  sidebar?: ReactNode;
};

export default function DashboardLayout({
  children,
  sidebar,
}: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-8 xl:grid-cols-[1fr_340px]">
          <section className="space-y-8">
            {children}
          </section>

          {sidebar && (
            <aside className="space-y-8">
              {sidebar}
            </aside>
          )}
        </div>
      </main>
    </div>
  );
}