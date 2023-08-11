import React, { FormEvent, useState } from 'react';
import { useCreateTaskMutation } from '../../store/api/tasks.api';
import { TodoAddButton, TodoAddInput, TodoAddPanelWrapper } from './TodoAddPanel.styled';

const TodoAddPanel = () => {
  const [task, setTask] = useState({
    task_name: '',
  });

  const [createTask] = useCreateTaskMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (task.task_name === '') {
      e.preventDefault();
    } else {
      e.preventDefault();
      createTask(task);
      setTask({
        task_name: '',
      });
    }
  };

  return (
    <TodoAddPanelWrapper onSubmit={handleSubmit}>
      <TodoAddInput
        autoComplete="off"
        type="text"
        placeholder="New Task..."
        value={task.task_name.trimStart()}
        onChange={(e: any) => setTask({ ...task, task_name: e.target.value })}
      ></TodoAddInput>
      <TodoAddButton type="submit">+</TodoAddButton>
    </TodoAddPanelWrapper>
  );
};

export default TodoAddPanel;
