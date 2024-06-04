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
    <div className="flex py-5 px-5 w-full h-full">
      <div className="flex flex-wrap bg-principal-30 flex-col justify-center flex-1 w-full h-full text-center rounded-xl">
        <CustomText
          className="text-principal-500 font-semibold text-xl align-top mb-10"
          textType="subtitle"
          text="Crear Tarea"
        />
        <div className="w-full">
          <TaskForm />
        </div>
      </div>
    </div>
  );
}
