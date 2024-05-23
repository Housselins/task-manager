import { Task } from "@/domain/models/Task";
import { type ITaskRepository } from "@/domain/repositories/task.repository";
import { REPOSITORY_TYPES } from "@/infraestructure/ioc/containers/repositories/repository.types";
import { inject, injectable } from "inversify";

/**
 * class ListTaskUseCase
 * Caso de uso para el listado de tasks
 */
@injectable()
export default class FindAllTaskUseCase {
  private taskRepository: ITaskRepository;

  constructor(
    @inject(REPOSITORY_TYPES._TaskRepository)
    taskRepository: ITaskRepository
  ) {
    this.taskRepository = taskRepository;
  }

  async execute(): Promise<Task[] | undefined> {
    const listTask: Task[] | undefined = await this.taskRepository
      .findAllTask()
      .catch((error) => error);
    if (!listTask) {
      return listTask;
    }

    return listTask;
  }
}
