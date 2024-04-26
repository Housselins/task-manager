import { Task } from "@/domain/models/Task";
import { type ITaskRepository } from "@/domain/repositories/task.repository";
import { REPOSITORY_TYPES } from "@/infraestructure/ioc/containers/repositories/repository.types";
import { inject, injectable } from "inversify";

@injectable()
export default class CreateTaskUseCase {
  private taskRepository: ITaskRepository;

  constructor(
    @inject(REPOSITORY_TYPES._TaskRepository)
    taskRepository: ITaskRepository
  ) {
    this.taskRepository = taskRepository;
  }

  async execute({ task }: { task: Task }): Promise<Task | undefined> {
    const createTask: Task | undefined = await this.taskRepository
      .createTask(task)
      .catch((error) => error);
    if (!createTask) {
      return createTask;
    }

    return createTask;
  }
}
