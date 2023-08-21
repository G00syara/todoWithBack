import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Categories, Tasks } from '../../types/index';

const API_URL = 'http://localhost:8080/api';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Tasks', 'Categories'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getTasks: builder.query<Tasks, string>({
      query: (url) => `/task`,
      providesTags: () => [
        {
          type: 'Tasks',
        },
      ],
    }),
    getCategories: builder.query<Categories, string>({
      query: (url) => `/categories`,
      providesTags: () => [
        {
          type: 'Categories',
        },
      ],
    }),
  }),
});

export const { useGetTasksQuery } = api;
export const { useGetCategoriesQuery } = api;
