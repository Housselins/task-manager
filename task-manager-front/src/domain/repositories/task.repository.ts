import { Task } from "../models/Task";

/**
 * ITaskRepository
 * Repositorio de la interfaz para task
 */
export interface ITaskRepository {
  findAllTask(): Promise<Task[] | undefined>;
  createTask(task: Task): Promise<Task | undefined>;
}
