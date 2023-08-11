import React from 'react';
import { useMemo } from 'react';
import { Categories, Tasks, TasksCategories } from '../../types/index';
import TodoItem from '../TodoItem/TodoItem';
import { useGetTasksQuery, useGetCategoriesQuery } from '../../store/api/api';
import {
  useAddCategoryToTaskMutation,
  useDeleteCategoryFromTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from '../../store/api/tasks.api';
import Loader from '../UI/loader/Loader';

const TodoList: React.FC = () => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery<Categories>('categories');
  const { data: tasks, error: errorTask, isLoading: isLoadingTask } = useGetTasksQuery<Tasks>('task');

  const [deleteTask, {}] = useDeleteTaskMutation();
  const [updateTask, {}] = useUpdateTaskMutation();
  const [addCategoryToTask, {}] = useAddCategoryToTaskMutation();
  const [deleteCategoryFromTask, {}] = useDeleteCategoryFromTaskMutation();

  const handleDelete = (tasks: Tasks) => {
    deleteTask(tasks);
  };

  const handleUpdate = (tasks: Tasks) => {
    updateTask(tasks);
  };
  const handleAddCategory = (tasks: TasksCategories) => {
    addCategoryToTask(tasks);
  };
  const handleDeleteCategory = (tasks: TasksCategories) => {
    deleteCategoryFromTask(tasks);
  };

  const tasksItems = useMemo(
    () =>
      tasks
        ? tasks.data.map((item: Tasks) => (
            <TodoItem
              remove={handleDelete}
              update={handleUpdate}
              addCategory={handleAddCategory}
              deleteCategory={handleDeleteCategory}
              key={item.id}
              categories={categories}
              task={item}
            />
          ))
        : 'Something went wrong',
    [tasks],
  );
  if (isLoadingTask && isLoading) {
    return <Loader />;
  }

  return <>{tasksItems}</>;
};

export default TodoList;
