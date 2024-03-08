"use client";

import { useSession } from "next-auth/react";
import Login from "./components/Login/Login";

export default function Loginlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = useSession();
  return <div className="w-full h-full">{session.data?.user ? <>{children}</> : <Login />}</div>;
}
