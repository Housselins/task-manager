import { Tasker } from "@/domain/models/Tasker";
import { type ITaskerRepository } from "@/domain/repositories/tasker.repository";
import { REPOSITORY_TYPES } from "@/infraestructure/ioc/containers/repositories/repository.types";
import { inject, injectable } from "inversify";

@injectable()
export default class CreateTaskersUseCase {
  private taskerRepository: ITaskerRepository;

  constructor(
    @inject(REPOSITORY_TYPES._TaskerRepository)
    taskerRepository: ITaskerRepository
  ) {
    this.taskerRepository = taskerRepository;
  }

  async execute({ tasker }: { tasker: Tasker }): Promise<Tasker | undefined> {
    const createTasker: Tasker | undefined = await this.taskerRepository
      .createTasker(tasker)
      .catch((error) => error);
    if (!createTasker) {
      return createTasker;
    }

    return createTasker;
  }
}
