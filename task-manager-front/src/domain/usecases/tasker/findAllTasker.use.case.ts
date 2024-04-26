import { Tasker } from "@/domain/models/Tasker";
import { type ITaskerRepository } from "@/domain/repositories/tasker.repository";
import { REPOSITORY_TYPES } from "@/infraestructure/ioc/containers/repositories/repository.types";
import { inject, injectable } from "inversify";

@injectable()
export default class FindAllTaskersUseCase {
  private taskerRepository: ITaskerRepository;

  constructor(
    @inject(REPOSITORY_TYPES._TaskerRepository)
    taskerRepository: ITaskerRepository
  ) {
    this.taskerRepository = taskerRepository;
  }

  async execute(
    token?: string,
    filedId?: string
  ): Promise<Tasker[] | undefined> {
    if (!token) return;
    const tasker: Tasker[] | undefined = await this.taskerRepository
      .findAllTasker()
      .catch((error) => error);
    if (!tasker) {
      return tasker;
    }

    return tasker;
  }
}
