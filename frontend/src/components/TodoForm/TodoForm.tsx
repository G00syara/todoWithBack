import React from 'react';
import TodoAddPanel from '../TodoAddPanel/TodoAddPanel';
import TodoList from '../TodoList/TodoList';
import { TodoFormWrapper } from './TodoForm.styled';

const TodoForm = () => {
  return (
    <>
      <TodoAddPanel />
      <TodoFormWrapper>
        <TodoList />
      </TodoFormWrapper>
    </>
  );
};

export default TodoForm;
