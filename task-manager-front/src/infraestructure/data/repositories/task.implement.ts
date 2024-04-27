import "reflect-metadata";
import { NETWORK_TYPES } from "../../ioc/containers/network/network.types";
import { AxiosResponse, isAxiosError, type AxiosInstance } from "axios";
import { inject, injectable } from "inversify";
import { Tasker } from "@/domain/models/Tasker";
import { ITaskRepository } from "@/domain/repositories/task.repository";
import { Task } from "@/domain/models/Task";

/**
 * Class TaskRepositoryImplement
 * Implementacion de los repositorio de los task
 */
@injectable()
export default class TaskRepositoryImplement implements ITaskRepository {
  private axiosInstance: AxiosInstance;

  constructor(
    @inject(NETWORK_TYPES._TaskCoreAxiosInstance)
    TaskCoreAxiosInstance: AxiosInstance
  ) {
    this.axiosInstance = TaskCoreAxiosInstance;
  }

  /**
   * findAllTask
   * funcion para encontrar todas las tasks
   */
  findAllTask(): Promise<Task[] | undefined> {
    return this.axiosInstance
      .get("/tasks")
      .then((response: AxiosResponse<Task[]>) => response.data)
      .catch((error: any) => {
        if (isAxiosError(error)) {
          throw new Error(error.message);
        } else {
          throw new Error("Failed to fetch tasks");
        }
      });
  }

  /**
   * createTask
   * funcion para crera la task
   */
  createTask(task: Task): Promise<Task | undefined> {
    return this.axiosInstance
      .post("/tasks", task)
      .then((response: AxiosResponse<Task>) => response.data)
      .catch((error: any) => {
        if (isAxiosError(error)) {
          throw new Error(error.message);
        } else {
          throw new Error("Failed to create task");
        }
      });
  }
}
