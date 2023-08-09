import React, { useState } from 'react';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useAppDispatch, useTypeSelector } from '../../hooks/useTypeSelector';
import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { getAllTasks } from '../../store/action/API';
import { Tasks } from '../../types/index';
import TodoItem from '../TodoItem/TodoItem';

const TodoList: React.FC = () => {
  const { tasks, loading } = useTypeSelector((state) => state.tasks);
  // const { isLoadingGroups } = useTypeSelector((state) => state.todoGroups);
  const dispatch = useAppDispatch();

  tasks.sort((a, b) => (a.id > b.id ? 1 : -1));

  const tasksItems = useMemo(() => tasks.map((item: Tasks) => <TodoItem key={item.id} task={item} />), [tasks]);

  useEffect(() => {
    dispatch(getAllTasks());
  }, []);

  return <>{tasksItems}</>;
};

//

export default TodoList;
