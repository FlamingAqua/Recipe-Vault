"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Loading from "@/components/common/Loading";
import { useAuth } from "@/context/AuthContext";

type Props = {
  children: React.ReactNode;
};

export default function AdminGuard({ children }: Props) {
  const { user, loading, isAdmin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.replace("/login");
      } else if (!isAdmin) {
        router.replace("/");
      }
    }
  }, [isAdmin, loading, router, user]);

  if (loading) {
    return <Loading text="Checking admin access..." />;
  }

  if (!user || !isAdmin) {
    return null;
  }

  return <>{children}</>;
}
