import React, { useMemo, PureComponent, useState } from 'react';
import MyButton from '../UI/button/MyButton';
import { Tasks } from '../../types/index';
import { TodoItemCategories, TodoItemCurrentCategory, TodoItemNameCheckbox, TodoItemWrapper } from './TodoItem.styled';

interface taskItemProps {
  task: Tasks;
}

const taskItem: React.FC<taskItemProps> = ({ task }) => {
  return (
    <TodoItemWrapper>
      <TodoItemNameCheckbox>
        <input type="checkbox" checked={task.tasks_checked} />
        <div>
          {task.id + ' '}
          {task.task_name}
        </div>
      </TodoItemNameCheckbox>

      <TodoItemCategories>
        <MyButton>+</MyButton>
        {task.categories.length > 0 ? (
          task.categories.map((item2: any) => (
            <TodoItemCurrentCategory style={{ backgroundColor: 'green' }}>
              {item2.categories_name}
            </TodoItemCurrentCategory>
          ))
        ) : (
          //Это убрать оставить пустое место
          <div style={{ backgroundColor: 'red', padding: '2px' }}> Нету нихуя </div>
        )}
      </TodoItemCategories>
    </TodoItemWrapper>
  );
};

export default React.memo(taskItem);
