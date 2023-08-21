export interface Categories {
  [x: string]: any;
  id: number;
  categories_name: string;
}
export interface Tasks {
  //VS Code предложил такой фикс, проблемы ('Уже не помню какой 0_0')
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

export interface TasksUpdate {
  id: number;
  tasks_name?: string;
  tasks_checked?: boolean;
}

export interface TaskCreate extends Pick<Tasks, 'task_name'> {}

export interface CategoryCreate extends Pick<Categories, 'categories_name'> {}
