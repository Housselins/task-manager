import { Tasker } from "../models/Tasker";

/**
 * ITaskerRepository
 * Repositorio de la interfaz para tasker
 */
export interface ITaskerRepository {
  findAllTasker(tasker: Tasker): Promise<Tasker | undefined>;
  createTasker(tasker: Tasker): Promise<Tasker | undefined>;
}
