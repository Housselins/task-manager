/**
 * Tasker
 * Interface para los tasker
 * params: id? - number - id del tasker
 *         name - string - nombre del tasker 
 *         email - string - email del tasker
 *         active? - boolean - activo el tasker
 *         createdAt? - string - fecha de creacion del tasker
 *         updateAt? - string - actuializacion del tasker
 *         password - string - contraseña del tasker
 */
export interface Tasker {
  id?: number;
  name: string;
  email: string;
  active?: boolean;
  createdAt?: string;
  updatedAt?: string;
  password: string;
}
