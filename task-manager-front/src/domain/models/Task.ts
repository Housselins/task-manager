import { Tasker } from "./Tasker";
import { TaskStatus } from "./TaskStatus";

/**
 * Task
 * params: id? - number - id de la task
 *         name - string - nombre de la task
 *         description - string - descripcion de la task
 *         status? - TaskStatus - estado de la task
 *         statusId? - number - id de estado de la task
 *         tasker? - Tasker - id del tasker
 *         taskerId? - number - id del tasker
 *         endAt? - string - fecha fin de la task
 *         active - boolean - task activa
 *         createdAt - string - fecha de creacion de la task
 *         updatedAt - string - fecha de actualizacion de la task
 */
export interface Task {
  id?: number;
  name: string;
  description?: string;
  status?: TaskStatus;
  statusId?: number;
  tasker?: Tasker;
  taskerId?: number;
  endAt?: string;
  active?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
