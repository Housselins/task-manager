import { ContainerModule, interfaces } from "inversify";
import { USECASES_TYPES } from "./usecases.types";
import FindAllTaskersUseCase from "@/domain/usecases/tasker/findAllTasker.use.case";
import CreateTaskersUseCase from "@/domain/usecases/tasker/createTasker.use.case";
import CreateTaskUseCase from "@/domain/usecases/task/createTask.use.case";
import FindAllTaskUseCase from "@/domain/usecases/task/findAllTask.use.case";

export const usecasesModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<FindAllTaskersUseCase>(USECASES_TYPES._FindAllTaskersUseCase).to(
    FindAllTaskersUseCase
  );
  bind<CreateTaskersUseCase>(USECASES_TYPES._CreateTaskersUseCase).to(
    CreateTaskersUseCase
  );
  bind<CreateTaskUseCase>(USECASES_TYPES._CreateTaskUseCase).to(
    CreateTaskUseCase
  );
  bind<FindAllTaskUseCase>(USECASES_TYPES._FindAllTaskUseCase).to(
    FindAllTaskUseCase
  );
});
