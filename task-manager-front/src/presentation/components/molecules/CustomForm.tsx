import { FormProps } from "@/lib/interfaces";
import { FC, useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { CustomButton } from "../atoms/buttons/CustomButton";
import { USECASES_TYPES } from "@/infraestructure/ioc/containers/usecases/usecases.types";
import { appContainer } from "@/infraestructure/ioc/inversify.config";
import CreateTaskersUseCase from "@/domain/usecases/tasker/createTasker.use.case";
import { Tasker } from "@/domain/models/Tasker";
import { useSession } from "next-auth/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface IFormInputs {
  name: string;
  email: string;
  password: string;
}

export const CustomForm: FC<FormProps> = ({}) => {
  const session = useSession();
  const initialValues: IFormInputs = {
    email: session.data?.user?.email ?? "",
    name: session.data?.user?.name ?? "",
    password: "",
  };

  const createTaskerUseCase = appContainer.get<CreateTaskersUseCase>(
    USECASES_TYPES._CreateTaskersUseCase
  );
  
  const createTasker = async (values: Tasker) => {
    const tasker: Tasker = {
      name: values.name,
      email: values.email,
      password: values.password.toString(),
      active: true,
    };
    const createTransaction = await createTaskerUseCase.execute({ tasker });
    // console.log(createTransaction);
  };

  const { handleSubmit, control, reset } = useForm<IFormInputs>({
    defaultValues: initialValues,
  });

  const onSubmit: SubmitHandler<IFormInputs> = createTasker;

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap w-full px-5 justify-center">
        <div className="flex flex-col w-full gap-3">
          <div className="flex w-[calc(100%)] flex-row justify-center">
            <Controller
              name="email"
              control={control}
              defaultValue={initialValues.name}
              rules={{ required: true }}
              render={({ field }) => (
                <>
                  <label className="">
                    <p className="text-principal-200 font-semibold">Email:</p>
                  </label>
                  <input
                    className={
                      "border-1 outline-1 bg-principal-50 outline-principal-500"
                    }
                    {...field}
                  />
                </>
              )}
            />
          </div>
          <div className="flex w-[calc(100%)] flex-row justify-center">
            <Controller
              name="name"
              control={control}
              defaultValue={initialValues.name}
              rules={{ required: true }}
              render={({ field }) => (
                <>
                  <label className="">
                    <p className="text-principal-200 font-semibold">Name:</p>
                  </label>
                  <input
                    className={
                      "border-1 outline-1 bg-principal-50 outline-principal-500"
                    }
                    disabled={false}
                    {...field}
                  />
                </>
              )}
            />
          </div>
          <div className="flex w-[calc(100%)] flex-row justify-center">
            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <>
                  <label className="">
                    <p className="text-principal-200 font-semibold">
                      Password:
                    </p>
                  </label>
                  <input
                    className={
                      "border-1 outline-1 bg-principal-50 outline-principal-500"
                    }
                    type="password"
                    {...field}
                  />
                </>
              )}
            />
          </div>
          <CustomButton
            onClick={handleSubmit(onSubmit)}
            label="Crear Tasker"
            buttonType="primary"
            className=""
          />
        </div>
      </div>
    </form>
  );
};
