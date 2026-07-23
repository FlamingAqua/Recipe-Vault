import Link from "next/link";
import { ChefHat } from "lucide-react";

import GoogleLoginButton from "@/components/auth/GoogleLoginButton";
import GuestGuard from "@/components/auth/GuestGuard";

export default function LoginPage() {
  return (
    <GuestGuard>
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(251,146,60,0.14),transparent_36%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-4xl items-center justify-center">
          <div className="w-full rounded-[2rem] border border-white/70 bg-white/80 p-10 shadow-2xl shadow-slate-900/10 backdrop-blur-xl transition duration-300 sm:p-14">
            <div className="mb-10 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-orange-100 text-orange-700 shadow-sm shadow-orange-200/50">
                <ChefHat size={28} />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Welcome back to Recipe Vault
              </h1>
              <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
                Sign in with Google to unlock your recipes and manage your collection.
              </p>
            </div>

            <div className="space-y-6">
              <GoogleLoginButton />

              <div className="rounded-3xl border border-border/80 bg-slate-50 p-5 text-center text-sm text-slate-600">
                Any authenticated user can browse recipes. Only the admin can create, edit, and delete recipes.
              </div>
            </div>

            <p className="mt-10 text-center text-sm text-muted-foreground">
              Don&apos;t have a Google account? Use your Google account to continue.
            </p>
          </div>
        </div>
      </div>
    </GuestGuard>
  );
}
