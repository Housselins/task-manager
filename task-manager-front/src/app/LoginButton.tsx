"use client";
import { signIn } from "next-auth/react";

/**
 * LoginGoogleButton
 * Vista LoginGoogleButton
 */
export default function LoginGoogleButton() {
  return <div className="flex w-3/4 bg-principal-0 rounded-[calc(8px)]" onClick={() => signIn("google")}>Google Login</div>;
}
