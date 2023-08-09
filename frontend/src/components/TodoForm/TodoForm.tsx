import React from 'react';
import TodoList from '../TodoList/TodoList';
import MyButton from '../UI/button/MyButton';
import { TodoFormWrapper } from './TodoForm.styled';

const TodoForm = () => {
  return (
    <TodoFormWrapper>
      <TodoList />
    </TodoFormWrapper>
  );
};

export default TodoForm;
