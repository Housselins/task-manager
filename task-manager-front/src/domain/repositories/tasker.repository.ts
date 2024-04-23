import { Tasker } from "../models/Tasker";

export interface ITaskerRepository {
  findAllTasker(): Promise<Tasker[] | undefined>;
  createTasker(tasker: Tasker): Promise<Tasker | undefined>;
}
