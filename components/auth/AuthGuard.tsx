"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Loading from "@/components/common/Loading";
import { useAuth } from "@/context/AuthContext";

type Props = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: Props) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, router, user]);

  if (loading) {
    return <Loading text="Checking authentication..." />;
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
}
