import { Tasker } from "./Tasker";
import { TaskStatus } from "./TaskStatus";

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
