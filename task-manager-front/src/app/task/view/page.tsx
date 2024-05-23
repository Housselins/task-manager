"use client";
import { Task } from "@/domain/models/Task";
import FindAllTaskUseCase from "@/domain/usecases/task/findAllTask.use.case";
import { USECASES_TYPES } from "@/infraestructure/ioc/containers/usecases/usecases.types";
import { appContainer } from "@/infraestructure/ioc/inversify.config";
import { TaskCardProps } from "@/lib/interfaces";
import { TaskCard } from "@/presentation/components/molecules/TaskCard";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

/**
 * TaskerPage
 * vista donde se encuentra el formulario para crear la task
 */
export default function TaskerPage() {
  const session = useSession();

  const [tasksData, setTaskData] = useState<Task[]>();

  const findAll = appContainer.get<FindAllTaskUseCase>(
    USECASES_TYPES._FindAllTaskUseCase
  );

  const getData = () => {
    findAll.execute().then((data) => {
      console.log(data);
      setTaskData(data);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex py-5 px-5 w-full h-full">
      <div className="flex flex-wrap bg-principal-30 flex-col justify-center flex-1 w-full h-full text-center rounded-xl">
        <div className="self-center grid grid-cols-3 gap-3 grid-flow-row">
          {tasksData &&
            tasksData.map((task) => (
              <div className="col-span-1">
                <TaskCard task={task} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
