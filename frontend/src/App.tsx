import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import './css/app.css';
import { useAppDispatch, useTypeSelector } from './hooks/useTypeSelector';
import { useEffect, useMemo } from 'react';
import { fetchTasks } from './store/reducer/taskReducer';
import { useDispatch } from 'react-redux';
import { getAllTasks } from './store/action/API';
import { createAsyncThunk } from '@reduxjs/toolkit';

const App: React.FC = () => {
  const { tasks, loading } = useTypeSelector((state) => state.tasks);
  // const { isLoadingGroups } = useTypeSelector((state) => state.todoGroups);
  const dispatch = useAppDispatch();

  const [tasks2, setTasks2] = useState<any[]>([]);
  // const todoItems = useMemo(() => tasks.map((item: any) => <div key={item.id} task={item} />), [tasks]);

  useEffect(() => {
    dispatch(getAllTasks());
  }, []);

  console.log(tasks);
  console.log(tasks2);

  return (
    <>
      {tasks.map((item: any) => (
        <div>
          <div>{item.id}</div>
          <div>{item.task_name}</div>
          <div>
            {item.categories.map((item2: any) => (
              <div style={{ backgroundColor: 'green' }}>{item2.categories_name}</div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

//

export default App;
