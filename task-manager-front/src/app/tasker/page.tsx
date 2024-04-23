"use client";
import { Tasker } from "@/domain/models/Tasker";
import CreateTaskersUseCase from "@/domain/usecases/tasker/createTasker.use.case";
import { USECASES_TYPES } from "@/infraestructure/ioc/containers/usecases/usecases.types";
import { appContainer } from "@/infraestructure/ioc/inversify.config";
import { signOut, useSession } from "next-auth/react";

function HomePage() {
  const session = useSession();
  const createTaskerUseCase = appContainer.get<CreateTaskersUseCase>(
    USECASES_TYPES._CreateTaskersUseCase
  );
  console.log(session.data);
  const createTasker = async () => {
    const tasker: Tasker = {
      name: session?.data?.user?.name ?? "",
      email: session?.data?.user?.email ?? "",
      password: "123",
      active: true,
    };
    const createTransaction = await createTaskerUseCase.execute({ tasker });
    console.log(createTransaction);
    
  };

  return (
    <>
      <div className="flex flex-wrap flex-row bg-gray-800 w-full h-[calc(100px)] justify-around">
        <div className="flex flex-wrap flex-col self-center">
          <div className="flex">
            <span className="text-white">{`${session?.data?.user?.name}`}</span>
          </div>
          <div className="flex">
            <span className="text-white">{`${session?.data?.user?.email}`}</span>
          </div>
        </div>
        <div className="flex flex-wrap flex-col self-center">
          <button
            className="flex text-white bg-blue-600 p-4 rounded-[calc(15px)] justify-self-center self-center"
            onClick={() => createTasker()}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
