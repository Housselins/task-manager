"use client";
import { CustomForm } from "@/presentation/components/molecules/CustomForm";
import { NavBar } from "@/presentation/components/organism/NavBar";
import { signOut, useSession } from "next-auth/react";

export default function TaskerPage() {
  const session = useSession();

  return (
    <div className="py-5 bg-principal-550">
      <CustomForm />
    </div>
  );
}
