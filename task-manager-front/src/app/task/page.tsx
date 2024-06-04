"use client";
import { ActionsInsideBarProps, NavActionsProps } from "@/lib/interfaces";
import { CustomText } from "@/presentation/components/atoms/text/CustomText";
import { TaskForm } from "@/presentation/components/molecules/TaskForm";
import { ActionsInsideBar } from "@/presentation/components/organism/ActionsInsideBar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

/**
 * TaskerPage
 * vista donde se encuentra el formulario para crear la task
 */
export default function TaskerPage() {
  const session = useSession();
  return (
    <></>
  );
}
