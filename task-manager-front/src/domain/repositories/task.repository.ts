import { Task } from "../models/Task";

export interface ITaskRepository {
  findAllTask(): Promise<Task[] | undefined>;
  createTask(task: Task): Promise<Task | undefined>;
}
