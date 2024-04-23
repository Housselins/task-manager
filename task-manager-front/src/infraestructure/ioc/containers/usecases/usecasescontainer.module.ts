import { ContainerModule, interfaces } from "inversify";
import { USECASES_TYPES } from "./usecases.types";
import FindAllTaskersUseCase from "@/domain/usecases/tasker/findAllTasker.use.case";
import CreateTaskersUseCase from "@/domain/usecases/tasker/createTasker.use.case";

export const usecasesModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<FindAllTaskersUseCase>(USECASES_TYPES._FindAllTaskersUseCase).to(
    FindAllTaskersUseCase
  );
  bind<CreateTaskersUseCase>(USECASES_TYPES._CreateTaskersUseCase).to(
    CreateTaskersUseCase
  );
});
