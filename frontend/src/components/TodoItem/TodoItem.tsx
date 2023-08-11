import React, { useState } from 'react';
import MyButton from '../UI/button/MyButton';
import { Tasks, TasksCategories } from '../../types/index';
import {
  TodoItemButtons,
  TodoItemCategoryWrapper,
  TodoItemCurrentCategory,
  TodoItemNameCheckbox,
  TodoItemWrapper,
  TodoItemAddCategoryToTodoButton,
  TodoItemInput,
  TodoItemContainer,
  TodoItemFormEdit,
  TodoItemInputEdit,
} from './TodoItem.styled';

interface taskItemProps {
  task: Tasks;
  remove: (task: Tasks) => void;
  update: (task: Tasks) => void;
  addCategory: (task: TasksCategories) => void;
  deleteCategory: (task: TasksCategories) => void;
}

const TaskItem: React.FC<taskItemProps> = ({ task, update, remove, addCategory, deleteCategory }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [taskName, setTaskName] = useState<string>('');

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    remove(task);
  };
  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const task_name = taskName;

    if (task_name === '') {
      update({ ...task });
      setIsEdit(false);
      setTaskName('');
    } else {
      update({ ...task, task_name });
      setIsEdit(false);
      setTaskName('');
    }
  };
  const handleAddCategory = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const categoryId = Number(prompt());
    addCategory({ task, categoryId });
  };
  const handleDeleteCategory = (e: number) => {
    const categoryId = e;
    deleteCategory({ task, categoryId });
  };

  return (
    <TodoItemWrapper>
      <div>
        <TodoItemContainer>
          {isEdit ? (
            <TodoItemFormEdit onSubmit={handleUpdate}>
              <TodoItemInputEdit
                autoComplete="off"
                type="text"
                placeholder={task.task_name}
                value={taskName.trimStart()}
                onChange={(e: any) => setTaskName(e.target.value)}
              ></TodoItemInputEdit>
            </TodoItemFormEdit>
          ) : (
            <TodoItemNameCheckbox>
              <TodoItemInput type="checkbox" checked={task.task_checked} />
              {task.id + ' '}
              {task.task_name}
            </TodoItemNameCheckbox>
          )}
        </TodoItemContainer>
        <TodoItemCategoryWrapper>
          <TodoItemAddCategoryToTodoButton onClick={handleAddCategory}>📝</TodoItemAddCategoryToTodoButton>
          {task.categories.length > 0
            ? task.categories.map((item2: any) => (
                <TodoItemCurrentCategory onClick={() => handleDeleteCategory(item2.id)}>
                  {item2.categories_name}
                </TodoItemCurrentCategory>
              ))
            : ''}
        </TodoItemCategoryWrapper>
      </div>

      <TodoItemButtons>
        <MyButton onClick={handleDelete}>Del</MyButton>
        <MyButton onClick={() => setIsEdit(true)}>Edit</MyButton>
      </TodoItemButtons>
    </TodoItemWrapper>
  );
};

export default React.memo(TaskItem);
