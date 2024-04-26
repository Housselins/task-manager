import { FormProps } from "@/lib/interfaces";
import { FC, useState } from "react";
import { CustomButton } from "../atoms/buttons/CustomButton";
import { USECASES_TYPES } from "@/infraestructure/ioc/containers/usecases/usecases.types";
import { appContainer } from "@/infraestructure/ioc/inversify.config";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Task } from "@/domain/models/Task";
import { CustomSelect } from "../atoms/select";
import { TASK_STATUS } from "@/lib/utils/Constants";
import { TextSearchInput } from "../atoms/input/TextSearchInput";
import CreateTaskUseCase from "@/domain/usecases/task/createTask.use.case";

interface Option {
  value: string;
  label: string;
}
interface IFormInputs extends Task {
  statusSelected: Option | undefined;
  taskerSelected: Option | undefined;
}

export const TaskForm: FC<FormProps> = ({}) => {
  const initialValues: IFormInputs = {
    name: "",
    description: "",
    statusSelected: { label: "Estado", value: "0" },
    taskerSelected: { label: "", value: "0" },
  };
  const [options, setOptions] = useState<Option[]>(
    Object.entries(TASK_STATUS).map(([key, value]) => ({
      value: key,
      label: value,
    }))
  );

  const createTaskUseCase = appContainer.get<CreateTaskUseCase>(
    USECASES_TYPES._CreateTaskUseCase
  );
  
  const { handleSubmit, control, reset } = useForm<IFormInputs>({
    defaultValues: initialValues,
  });

  const createTask = async (values: IFormInputs) => {
    const taskData: Task = {
      name: values.name,
      description: values.description,
      active: true,
    };
    if (values.statusSelected?.value) {
      taskData.statusId = parseInt(values.statusSelected?.value);
    }
    const createTransaction = await createTaskUseCase.execute({ task: taskData });
    
    console.log(createTransaction);
    
    if(createTransaction) {
      reset();
    }
    
  };


  const onSubmit: SubmitHandler<IFormInputs> = createTask;

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap w-full px-5 justify-center">
        <div className="flex flex-col w-full gap-3">
          <div className="flex w-[calc(100%)] flex-row justify-center">
            <Controller
              name="name"
              control={control}
              defaultValue={initialValues.name}
              rules={{ required: true }}
              render={({ field }) => (
                <>
                  <label className="w-[calc(200px)]">
                    <p className="text-principal-200 font-semibold text-left">
                      Nombre de la tarea:
                    </p>
                  </label>
                  <div className="flex flex-wrap w-[240px]">
                    <TextSearchInput className="w-full" {...field} />
                  </div>
                </>
              )}
            />
          </div>
          <div className="flex w-[calc(100%)] flex-row justify-center">
            <Controller
              name="description"
              control={control}
              defaultValue={initialValues.description}
              rules={{ required: true }}
              render={({ field }) => (
                <>
                  <label className="w-[calc(200px)]">
                    <p className="text-principal-200 font-semibold text-left">
                      Descripcion:
                    </p>
                  </label>
                  <div className="flex flex-wrap w-[240px]">
                    <TextSearchInput className="w-full" {...field} />
                  </div>
                </>
              )}
            />
          </div>
          <div className="flex w-[calc(100%)] flex-row justify-center">
            <Controller
              name="statusSelected"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <div className="flex flex-row ">
                  <label className="w-[calc(200px)]">
                    <p className="text-principal-200 font-semibold text-left">
                      Estado de la tarea:
                    </p>
                  </label>
                  <CustomSelect
                    className="mt-0 text-xs w-[calc(250px)]"
                    options={options}
                    setValue={field.onChange}
                    value={field.value}
                    onChange={(option) => field.onChange(option)}
                  />
                </div>
              )}
            />
          </div>
          <CustomButton
            onClick={handleSubmit(onSubmit)}
            label="Crear Tarea"
            buttonType="primary"
            className=""
          />
        </div>
      </div>
    </form>
  );
};
