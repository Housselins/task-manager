"use client";
import { ActionsInsideBarProps, NavActionsProps } from "@/lib/interfaces";
import { ActionsInsideBar } from "@/presentation/components/organism/ActionsInsideBar";
import { useRouter } from "next/navigation";

/**
 * RootLayout
 * Funcion cobertura para renderizar modulo tareas
 */
export default function TaskRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const actionsData: NavActionsProps[] = [
    {
      label: <p>Crear Tarea</p>,
      function: () => {
        router.push("/task/create");
      },
    },
    {
      label: <p>Ver Tareas</p>,
      function: () => {
        router.push("/task/view");
      },
    },
  ];
  const actionsNavBarData: ActionsInsideBarProps = {
    action: actionsData,
  };
  return (
    <div className="w-full h-full">
      <div className="h-[calc(10%)]">
        <ActionsInsideBar {...actionsNavBarData} />
      </div>
      <div className="h-[calc(90%)]">{children}</div>
    </div>
  );
}
