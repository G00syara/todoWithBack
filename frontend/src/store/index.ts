import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { api } from './api/api';

export const rootReducer = combineReducers({ [api.reducerPath]: api.reducer });

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
