import { ContainerModule, interfaces } from "inversify";
import { REPOSITORY_TYPES } from "./repository.types";
import { ITaskerRepository } from "@/domain/repositories/tasker.repository";
import TaskerRepositoryImplement from "@/infraestructure/data/repositories/tasker.implement";

export const repositoryModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<ITaskerRepository>(REPOSITORY_TYPES._TaskerRepository).to(
    TaskerRepositoryImplement
  );
});
