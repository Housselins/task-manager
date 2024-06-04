import { ActionsInsideBarProps } from "@/lib/interfaces";
import { Button } from "@nextui-org/react";
import { FC } from "react";

/**
 * ActionsInsideBar
 * Funcion encargada de mostrarnos las acciones disponibles dentro de un modulo
 * @interface ActionsInsideBarProps
 * @returns
 */
export const ActionsInsideBar: FC<ActionsInsideBarProps> = ({
  action,
  className,
}) => {
  return (
    <div className="flex flex-wrap flex-row bg-principal-200 w-full h-full justify-around">
      <div className="flex flex-wrap flex-row gap-2 self-center">
        {action &&
          action.map((action, index) => {
            return (
              <Button
                key={index}
                className={`flex text-principal-0 bg-principal-550 p-4 rounded-[calc(15px)] justify-self-center self-center ${className}`}
                onClick={action.function}
              >
                {action.label}
              </Button>
            );
          })}
      </div>
      <div className="flex flex-wrap flex-col self-center"></div>
    </div>
  );
};
