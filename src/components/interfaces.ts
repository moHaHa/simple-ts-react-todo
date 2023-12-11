/**
 * Status
 */
export type TaskStatusType = "todo" | "in-progress" | "done";

/**
 * Task
 */
export interface ITask {
  id: number;
  name: string;
  age?: number;
  status: TaskStatusType;
}

export type TaskListType = ITask[];
