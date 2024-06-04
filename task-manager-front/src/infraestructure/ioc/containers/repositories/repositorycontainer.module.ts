import { ContainerModule, interfaces } from "inversify";
import { REPOSITORY_TYPES } from "./repository.types";
import { ITaskerRepository } from "@/domain/repositories/tasker.repository";
import TaskerRepositoryImplement from "@/infraestructure/data/repositories/tasker.implement";
import { ITaskRepository } from "@/domain/repositories/task.repository";
import TaskRepositoryImplement from "@/infraestructure/data/repositories/task.implement";

export const repositoryModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<ITaskerRepository>(REPOSITORY_TYPES._TaskerRepository).to(
    TaskerRepositoryImplement
  );
  bind<ITaskRepository>(REPOSITORY_TYPES._TaskRepository).to(
    TaskRepositoryImplement
  );
});
