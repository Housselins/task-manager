"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

/**
 * LoginGoogleButton
 * Vista LoginGoogleButton
 */
export default function SignUpLocalButton() {
  const router = useRouter();
  return <div className="flex w-3/4 bg-principal-0 rounded-[calc(8px)]" onClick={() => router.push('tasker') }>Sign Up</div>;
}
