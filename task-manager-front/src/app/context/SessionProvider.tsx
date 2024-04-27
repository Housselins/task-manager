"use client";
import { SessionProvider as Provider } from "next-auth/react";

/**
 * SessionProvider
 * funcion encargada para la session
 */
export function SessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider>{children}</Provider>;
}
