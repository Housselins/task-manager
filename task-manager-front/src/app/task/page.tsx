"use client";
import { TaskForm } from "@/presentation/components/molecules/TaskForm";
import { useSession } from "next-auth/react";

export default function TaskerPage() {
  const session = useSession();

  return (
    <div className="py-5 bg-principal-550">
      <TaskForm />
    </div>
  );
}
