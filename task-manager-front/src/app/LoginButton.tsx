"use client";
import { signIn } from "next-auth/react";

export default function LoginGoogleButton() {
  return <button className="bg-principal-0 rounded-[calc(8px)]" onClick={() => signIn("google")}>Google Login</button>;
}
