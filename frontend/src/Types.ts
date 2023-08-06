/// <reference types="react-scripts" />

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export type TodoNew = {
  id: number;
  task_name: string;
  task_checked: boolean;
  groups?: number[];
};
