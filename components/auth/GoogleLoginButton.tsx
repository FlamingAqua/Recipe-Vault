"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

export default function GoogleLoginButton() {
  const { signInWithGoogle } = useAuth();
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    try {
      setLoading(true);
      await signInWithGoogle();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button onClick={handleLogin} className="w-full rounded-xl" disabled={loading}>
      <FcGoogle className="mr-2 h-5 w-5" />
      {loading ? "Signing in..." : "Continue with Google"}
    </Button>
  );
}
