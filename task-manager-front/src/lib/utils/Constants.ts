export const TASK_STATUS_PENDING_CODE = 1;
export const TASK_STATUS_APPROVED_CODE = 2;
export const TASK_STATUS_IN_PROGRESS_CODE = 3;

export const TASK_STATUS: { [key: string]: string } = {
  [TASK_STATUS_PENDING_CODE]: "Pendiente",
  [TASK_STATUS_IN_PROGRESS_CODE]: "En progreso",
  [TASK_STATUS_APPROVED_CODE]: "Finalizada",
};
