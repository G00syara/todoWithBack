export interface Categories {
  id: number;
  categories_name: string;
}
export interface Tasks {
  [x: string]: any;
  id: number;
  tasks_name: string;
  tasks_checked: boolean;
  categories: Categories[];
}

export interface TasksCategories {
  task: Tasks;
  categoryId: number;
}

export interface TaskCreate extends Pick<Tasks, 'task_name'> {}
