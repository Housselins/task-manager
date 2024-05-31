import { FC } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { NavBar } from "./NavBar";
import { useAppSelector } from "@/presentation/store";

/**
 * NavBarVertical
 * Componente lateral izquierdo para las funciones del aplicativo
 * @params  children: React.ReactNode
 * @returns 
 */
export const NavBarVertical = ({ children }: { children: React.ReactNode }) => {
  const session = useSession();
  const user = useAppSelector((state) => state.config.taskerLogged);

  return (
    <div className="w-full flex flex-wrap h-full">
      {/* Este es el menu vertical */}
      <div className="flex flex-wrap flex-row bg-principal-210 w-[calc(20%)] w-max-[calc(400px)] h-full justify-around rounded-br-2xl">
        <ul className="h-full pt-36">
          <li>
            <Link href={"task"} className="text-principal-0 font-semibold">Tareas</Link>
          </li>
          <li>
            <Link href={"tasker"} className="text-principal-0 font-semibold">Registrar Usuario</Link>
          </li>
        </ul>
      </div>
      {/* Aqui se renderizan las pantallas */}
      <div className="flex flex-wrap flex-col w-[calc(80%)] h-screen">
        <div className="flex h-[calc(10%)]">
          <NavBar />
        </div>
        <div className="flex h-[calc(90%)]">{children}</div>
      </div>
    </div>
  );
};
