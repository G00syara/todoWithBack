import React, { useState } from 'react';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useAppDispatch, useTypeSelector } from '../../hooks/useTypeSelector';
import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Tasks, TasksCategories } from '../../types/index';
import TodoItem from '../TodoItem/TodoItem';
import { useGetTasksQuery } from '../../store/api/api';
import {
  useAddCategoryToTaskMutation,
  useDeleteCategoryFromTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from '../../store/api/tasks.api';
import Loader from '../UI/loader/Loader';

const TodoList: React.FC = () => {
  const { data: tasks, error, isLoading } = useGetTasksQuery<Tasks>('task');

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
        ? tasks.data?.map((item: Tasks) => (
            <TodoItem
              remove={handleDelete}
              update={handleUpdate}
              addCategory={handleAddCategory}
              deleteCategory={handleDeleteCategory}
              key={item.id}
              task={item}
            />
          ))
        : 'Something went wrong',
    [tasks],
  );

  console.log(tasksItems);

  if (isLoading === true) {
    return <Loader />;
  }

  return <>{tasksItems}</>;
};

//

export default TodoList;
