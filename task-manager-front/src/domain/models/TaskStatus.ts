/**
 * TaskStatus
 * Interfaz para taskStatus
 * params: id - number - id del status task
 *         name - string - nombre del status task
 *         description? - string - descripcion del status task
 *         active? - boolean - estado del status task
 *         createdAt? - string - fecha creacion del status task
 *         updatedAt? - string - fecha actualizacion del status task
 */
export interface TaskStatus {
  id: number;
  name: string;
  description?: string;
  active?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
