import "reflect-metadata";
import { NETWORK_TYPES } from "../../ioc/containers/network/network.types";
import { AxiosResponse, isAxiosError, type AxiosInstance } from "axios";
import { inject, injectable } from "inversify";
import { ITaskerRepository } from "@/domain/repositories/tasker.repository";
import { Tasker } from "@/domain/models/Tasker";

/**
 * Class TaskerRepositoryImplement
 * Implementacion de los repositorio de los taskers
 */
@injectable()
export default class TaskerRepositoryImplement implements ITaskerRepository {
  private axiosInstance: AxiosInstance;

  constructor(
    @inject(NETWORK_TYPES._TaskCoreAxiosInstance)
    TaskCoreAxiosInstance: AxiosInstance
  ) {
    this.axiosInstance = TaskCoreAxiosInstance;
  }

  /**
   * findAllTasker
   * Funcion para encontrar a todos los tasker
   * 
   */
  async findAllTasker(): Promise<Tasker[] | undefined> {
    try {
      const config = {
        headers: {
          // Authorization: "Bearer " + accessToken,
        },
      };
      let url = `tasker`;

      // DEBUG URL
      // console.log(url);

      const getTaskers: AxiosResponse<Tasker[] | undefined> =
        await this.axiosInstance.get(url, config);

      // DEBUG URL
      // console.log(getAttachment);

      if (getTaskers && getTaskers.status >= 200 && getTaskers.status < 299) {
        return getTaskers.data;
      } else {
        // Si la respuesta no es exitosa, lanza un error general
        throw new Error(
          "attachment/filedId  message: Respuesta no exitosa del servidor"
        );
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error);
        // handleAxiosError(error, "requests/findAll/");
      } else {
        throw error;
      }
    }
  }


  /**
   * createTasker
   * Funcion para crear al tasker
   * 
   */
  async createTasker(tasker: Tasker): Promise<Tasker | undefined> {
    try {
      const config = {
        headers: {
          // Authorization: "Bearer " + accessToken,
        },
      };
      let url = `tasker`;

      // DEBUG URL
      // console.log(url);

      const getTaskers: AxiosResponse<Tasker | undefined> =
        await this.axiosInstance.post(url, tasker, config);

      // DEBUG URL
      // console.log(getAttachment);

      if (getTaskers && getTaskers.status >= 200 && getTaskers.status < 299) {
        return getTaskers.data;
      } else {
        // Si la respuesta no es exitosa, lanza un error general
        throw new Error(
          "attachment/filedId  message: Respuesta no exitosa del servidor"
        );
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error);
        // handleAxiosError(error, "requests/findAll/");
      } else {
        throw error;
      }
    }
  }
}
