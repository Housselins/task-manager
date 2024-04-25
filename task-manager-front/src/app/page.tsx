"use client";
import { NavBar } from "@/presentation/components/organism/NavBar";
import { signOut, useSession } from "next-auth/react";

function HomePage() {
  const session = useSession();
  console.log(session.data);

  return <></>;
}

export default HomePage;
