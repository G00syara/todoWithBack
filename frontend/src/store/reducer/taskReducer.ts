export default 1;
// Посмотреть про такой вариант решения, скорее всего сделать, как делал обычно

// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { getAllTasks } from '../action/API';
// import { Tasks } from '../../types/index.js';

// const taskslice = createSlice({
//   name: 'taskslice',
//   initialState,
//   reducers: {
//     setIsLoadingTodo(state, action: PayloadAction<boolean>) {
//       state.isLoadingTodo = action.payload;
//     },
//   },
// });
// export const fetchTasks = createAsyncThunk('getTasks', async (_, thinkApi) => {
//   const response = await getAllTasks();
//   console.log(response);

//   if (response instanceof Error) {
//     return thinkApi.rejectWithValue(response.message);
//   }
//   return response;
// });

// export const { setIsLoadingTodo } = taskslice.actions;
// export default taskslice.reducer;
