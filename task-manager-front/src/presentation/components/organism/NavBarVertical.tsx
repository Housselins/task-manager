import { FC } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export const NavBarVertical = ({ children }: { children: React.ReactNode }) => {
  const session = useSession();
  return (
    <div className="w-full flex flex-wrap h-full">
      {/* Este es el menu vertical */}
      <div className="flex flex-wrap flex-row bg-principal-210 w-[calc(20%)] w-max-[calc(400px)] h-full justify-around">
        <ul>
          <li><Link href={"task"}>Crear Tarea</Link></li>
          <li><Link href={"tasker"}>Registrar Usuario</Link></li>
        </ul>
      </div>
      {/* Aqui se renderizan las pantallas */}
      <div className="w-[calc(80%)]">{children}</div>
    </div>
  );
};
