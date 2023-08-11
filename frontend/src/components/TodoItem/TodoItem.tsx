import React, { useState, useEffect, useCallback } from 'react';
import MyButton from '../UI/button/MyButton';
import { Categories, Tasks, TasksCategories } from '../../types/index';
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
  TodoItemCategoriesList,
  TodoItemCategoriesListWrapper,
  TodoItemId,
  TodoItemBetweenWrapperContainer,
} from './TodoItem.styled';

interface taskItemProps {
  categories: Categories;
  task: Tasks;
  remove: (task: Tasks) => void;
  update: (task: Tasks) => void;
  addCategory: (task: TasksCategories) => void;
  deleteCategory: (task: TasksCategories) => void;
}

const TaskItem: React.FC<taskItemProps> = ({ task, update, remove, addCategory, deleteCategory, categories }) => {
  console.log(task.id + ' Rendered');

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [taskName, setTaskName] = useState<string>('');
  const [isShowCategories, setIsShowCategories] = useState<boolean>(false);
  const [categoriesTaskId, setCategoriesTaskId] = useState<number[]>([]);

  const takeCategoriesId = useCallback(() => {
    task.categories.map((item: any) => {
      categoriesTaskId.push(item.id);
    });
  }, [task, categories, categoriesTaskId]);

  useEffect(() => {
    takeCategoriesId();
    console.log('useffect working ' + task.id);
  }, []);

  //Удалить task
  const handleDelete = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      remove(task);
    },
    [task],
  );
  //Обновить Таск
  const handleUpdate = useCallback(
    (e: React.FormEvent<HTMLFormElement> | any) => {
      //Для обновления названия Taska
      if (taskName) {
        const task_name = taskName;
        update({ ...task, task_name });
        setIsEdit(false);
        setTaskName('');
        //Для обновления checked Taska
      } else {
        update({ ...task, task_checked: !task.task_checked });
      }
    },
    [taskName, task],
  );

  //кнопка cancel
  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      setIsEdit(false);
      setTaskName('');
    },
    [task],
  );
  //Добавляет категорию по нажатию на неё
  const handleAddCategory = useCallback(
    (e: number) => {
      const categoryId = e;
      categoriesTaskId.push(e);
      addCategory({ task, categoryId });
      setIsShowCategories(false);
    },
    [task],
  );

  //Показывает 'dropdawn' с категориями
  const handleShowCategories = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsShowCategories((x) => !x);
    e.preventDefault();
  };

  //По нажатию на категорию удаляет её у Таска
  const handleDeleteCategory = (e: number) => {
    const categoryId = e;
    const index = categoriesTaskId.indexOf(e);
    categoriesTaskId.splice(index, 1);
    deleteCategory({ task, categoryId });
  };

  return (
    <TodoItemWrapper>
      <TodoItemBetweenWrapperContainer>
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
              <MyButton type="submit">Edit</MyButton>
              <MyButton onClick={handleCancel}>Cancel</MyButton>
            </TodoItemFormEdit>
          ) : (
            <TodoItemNameCheckbox
              style={{
                textDecoration: task.task_checked ? 'line-through' : 'none',
              }}
            >
              <TodoItemInput
                type="checkbox"
                key={task.id}
                checked={task.task_checked}
                onClick={handleUpdate}
                onChange={() => {}}
              />
              <TodoItemId>{task.id}</TodoItemId>
              {task.task_name}
            </TodoItemNameCheckbox>
          )}
        </TodoItemContainer>
        <TodoItemCategoryWrapper>
          <TodoItemAddCategoryToTodoButton key={task.id} onClick={handleShowCategories}>
            📝
          </TodoItemAddCategoryToTodoButton>
          {isShowCategories ? (
            <TodoItemCategoriesListWrapper>
              {categories.data.map((item: Categories) => (
                <>
                  {categoriesTaskId.includes(item.id) ? (
                    ''
                  ) : (
                    <TodoItemCategoriesList key={item.id} onClick={() => handleAddCategory(item.id)}>
                      {item.categories_name}
                    </TodoItemCategoriesList>
                  )}
                </>
              ))}
            </TodoItemCategoriesListWrapper>
          ) : task.categories.length > 0 ? (
            task.categories.map((item2: any) => (
              <TodoItemCurrentCategory key={item2.id} onClick={() => handleDeleteCategory(item2.id)}>
                {item2.categories_name}
              </TodoItemCurrentCategory>
            ))
          ) : (
            ''
          )}
        </TodoItemCategoryWrapper>
      </TodoItemBetweenWrapperContainer>
      <TodoItemButtons>
        <MyButton onClick={handleDelete}>Del</MyButton>
        {!isEdit ? <MyButton onClick={() => setIsEdit(true)}>Edit</MyButton> : ''}
      </TodoItemButtons>
    </TodoItemWrapper>
  );
};

export default React.memo(TaskItem, (x, y) => {
  if (x.task === y.task) return true;

  return false;
});
