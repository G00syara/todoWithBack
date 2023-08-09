export default 1;
// import { useAppDispatch, useTypeSelector } from '../hooks/useTypeSelector.js';
// import { useEffect, useMemo } from 'react';
// import { fetchTasks } from '../store/reducer/taskReducer';
// import { Tasks } from '../types/index.js';
// import TodoItem from './TodoItem.js';

// const TodoList = () => {
//   const { tasks, isLoadingTodoList } = useTypeSelector((state) => state.task);
//   // const { isLoadingGroups } = useTypeSelector((state) => state.todoGroups);
//   const dispatch = useAppDispatch();

//   // const todoItems = useMemo(() => tasks.map((item: Tasks) => <div key={item.id} task={item} />), [tasks]);

//   useEffect(() => {
//     dispatch(fetchTasks());
//   }, []);

//   return tasks;
// };

// export default TodoList;
