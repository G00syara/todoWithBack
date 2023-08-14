import React, { FormEvent, useState } from 'react';
import { useCreateCategoriesMutation } from '../../store/api/api';
import { useCreateTaskMutation } from '../../store/api/tasks.api';
import { PanelWrapper, TodoAddButton, TodoAddInput, TodoAddPanelWrapper } from './TodoAddPanel.styled';

const TodoAddPanel = () => {
  const [task, setTask] = useState({
    task_name: '',
  });
  const [category, setCategory] = useState({
    categories_name: '',
  });

  const [createTask, {}] = useCreateTaskMutation();
  const [createCategory, {}] = useCreateCategoriesMutation();

  const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
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

  const handleAddCategory = (e: FormEvent<HTMLFormElement>) => {
    if (category.categories_name === '') {
      e.preventDefault();
    } else {
      createCategory(category);
      setCategory({
        categories_name: '',
      });
    }
  };

  return (
    <PanelWrapper>
      <TodoAddPanelWrapper onSubmit={handleAddTodo}>
        <TodoAddInput
          autoComplete="off"
          type="text"
          placeholder="New Task..."
          value={task.task_name.trimStart()}
          onChange={(e: any) => setTask({ ...task, task_name: e.target.value })}
        ></TodoAddInput>
        <TodoAddButton type="submit">+</TodoAddButton>
      </TodoAddPanelWrapper>
      <TodoAddPanelWrapper onSubmit={handleAddCategory}>
        <TodoAddInput
          autoComplete="off"
          type="text"
          placeholder="New Category..."
          value={category.categories_name.trimStart()}
          onChange={(e: any) => setCategory({ ...category, categories_name: e.target.value })}
        ></TodoAddInput>
        <TodoAddButton type="submit">+</TodoAddButton>
      </TodoAddPanelWrapper>
    </PanelWrapper>
  );
};

export default TodoAddPanel;
