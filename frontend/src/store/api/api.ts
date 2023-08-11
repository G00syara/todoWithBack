import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Tasks } from '../../types/index';

const API_URL = 'http://localhost:8080/api';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Tasks'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getTasks: builder.query<Tasks, string>({
      query: (url) => `/${url}`,
      providesTags: () => [
        {
          type: 'Tasks',
        },
      ],
    }),
  }),
});

export const { useGetTasksQuery } = api;
