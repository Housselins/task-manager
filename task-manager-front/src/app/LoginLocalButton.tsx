"use client";
import FindAllTaskersUseCase from "@/domain/usecases/tasker/findAllTasker.use.case";
import { USECASES_TYPES } from "@/infraestructure/ioc/containers/usecases/usecases.types";
import { appContainer } from "@/infraestructure/ioc/inversify.config";
import { signIn } from "next-auth/react";
import { FC } from "react";

/**
 * LoginGoogleButton
 * Vista LoginGoogleButton
 */
type ILoginLocalButton = {
  onClick: () => void;
};
export const LoginLocalButton: FC<ILoginLocalButton> = ({onClick}) => {
  return (
    <div
      className="flex w-3/4 bg-principal-0 rounded-[calc(8px)]"
      onClick={onClick}
    >
      Local Login
    </div>
  );
}
