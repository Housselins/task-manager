import { ContainerModule, interfaces } from "inversify";
import { NETWORK_TYPES } from "./network.types";
import { AxiosInstance } from "axios";
import TaskCoreAxiosInstance from "@/infraestructure/network/instances/taskCoreAxiosIntance";

export const networkModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<AxiosInstance>(NETWORK_TYPES._TaskCoreAxiosInstance).toConstantValue(
    TaskCoreAxiosInstance
  );
});
