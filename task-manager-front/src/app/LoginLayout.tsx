"use client";

import { useSession } from "next-auth/react";
import Login from "./components/Login/Login";
import { NavBarVertical } from "@/presentation/components/organism/NavBarVertical";
import { NavBar } from "@/presentation/components/organism/NavBar";
import { usePathname } from "next/navigation";
import { CustomText } from "@/presentation/components/atoms/text/CustomText";
import { CustomForm } from "@/presentation/components/molecules/CustomForm";
import { CustomButton } from "@/presentation/components/atoms/buttons/CustomButton";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/presentation/store";

/**
 * Loginlayout
 * Vista Loginlayout
 */
export default function Loginlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const user = useAppSelector((state) => state.config.taskerLogged);
  
  return (
    <div className="w-full h-full">
      {session.data?.user || user ? (
        <>
          <NavBarVertical>{children}</NavBarVertical>
        </>
      ) : pathName == "/tasker" ? (
        <>
          <div className="flex py-5 px-5 w-full h-full">
            <div className="flex flex-wrap bg-principal-30 flex-col justify-center flex-1 w-full h-full text-center rounded-xl">
              <CustomText
                className="text-principal-500 font-semibold text-xl align-top mb-10"
                textType="subtitle"
                text="Crear Usuario"
              />
              <div className="w-full">
                <CustomForm />
                <div className="mt-8">
                  <CustomButton
                    label="Inicio"
                    buttonType="secondary"
                    onClick={() => {
                      router.push("/");
                    }}
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}
