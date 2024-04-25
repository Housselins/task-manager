"use client";

import { useSession } from "next-auth/react";
import Login from "./components/Login/Login";
import { NavBarVertical } from "@/presentation/components/organism/NavBarVertical";
import { NavBar } from "@/presentation/components/organism/NavBar";

export default function Loginlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = useSession();
  return (
    <div className="w-full h-full">
      {session.data?.user ? (
        <>
          <NavBarVertical>
            <NavBar />
            {children}
          </NavBarVertical>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}
