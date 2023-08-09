import { combineReducers, configureStore } from '@reduxjs/toolkit';
import taskSlice from './reducer/taskReducer';
import thunk from 'redux-thunk';
import { enableMapSet } from 'immer';
import { newsReducer } from './reducer/testReducer';

// enableMapSet();
// export const store = configureStore({
//   reducer: {
//     task: taskSlice,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([thunkMiddleware]),
// });

export const rootReducer = combineReducers({ tasks: newsReducer });

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({ reducer: rootReducer, middleware: [thunk] });

export type AppDispatch = typeof store.dispatch;
