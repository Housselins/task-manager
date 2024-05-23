import { TaskCardProps } from "@/lib/interfaces";
import { FC } from "react";
import { formatDate } from "@/lib/utils/dateFormat";

/**
 * TaskCard
 * Tarjeta para la visualizacion de tareas
 * @param
 * @returns
 */
export const TaskCard: FC<TaskCardProps> = ({ task, tasker }) => {
  
  return (
    <div className="bg-principal-10 w-60 h-32 rounded-2xl shadow-md">
      <div className="grid grid-rows-3 w-full h-full">
        {/* cuerpo superior */}
        <div className="bg-principal-20 grid row-span-2 grid-cols-2 rounded-t-2xl py-4">
          <div className="self-start w-full bg-principal-210 rounded-r-full">
            <p className="text-lg text-principal-0">{task?.name}</p>
          </div>
          <div className="self-end grid grid-cols-5 gap-1 px-4">
            <p className="text-xs col-span-4 self-center justify-self-end">
              {task?.status?.name}
            </p>
            <div className="col-span-1 self-center p-1  bg-principal-210 w-1 h-1 rounded-full" />
          </div>
        </div>
        {/* cuerpo inferior */}
        <div className="grid row-span-1 grid-cols-5 w-full h-full">
          <p className="col-span-2 self-center justify-self-end text-sm">
            {task?.createdAt ? formatDate(task?.createdAt) : ""}
          </p>
          <p className="col-span-1 self-center text-lg">-</p>
          <p className="col-span-2 self-center justify-self-start text-sm">
            {task?.endAt ? formatDate(task?.endAt) : ""}
          </p>
        </div>
      </div>
    </div>
  );
};
