import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllTasks } from '../action/API';
import { Tasks } from '../../types/index.js';

interface IState {
  tasks: Tasks[];
  changedTodo: Tasks;
  currentTodo: Tasks;
  //   todoNewParams: AtLeastOne<UpdateTodoParameters>;
  isLoadingTodoList: boolean;
  isLoadingTodo: boolean;
  isFetched: boolean;
  isChangesRequested: boolean;
  todoItemError: string;
  todoListError: string;
}

const initialState: IState = {
  tasks: [],
  changedTodo: {
    id: -1,
    tasks_name: '',
    tasks_checked: false,
    categories: [],
  },
  currentTodo: {
    id: -1,
    tasks_name: '',
    tasks_checked: false,
    categories: [],
  },
  //   todoNewParams: {},
  isLoadingTodoList: false,
  isLoadingTodo: false,
  isFetched: false,
  isChangesRequested: false,
  todoItemError: '',
  todoListError: '',
};

const taskslice = createSlice({
  name: 'taskslice',
  initialState,
  reducers: {
    setIsLoadingTodo(state, action: PayloadAction<boolean>) {
      state.isLoadingTodo = action.payload;
    },
  },
});
export const fetchTasks = createAsyncThunk('getTasks', async (_, thinkApi) => {
  const response = await getAllTasks();
  console.log(response);

  if (response instanceof Error) {
    return thinkApi.rejectWithValue(response.message);
  }
  return response;
});

export const { setIsLoadingTodo } = taskslice.actions;
export default taskslice.reducer;
