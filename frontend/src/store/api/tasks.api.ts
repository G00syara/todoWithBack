import { TaskCreate, Tasks, TasksCategories, TasksUpdate } from '../../types/index';
import { api } from './api';

export const tasksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createTask: builder.mutation<null, TaskCreate>({
      query: (task) => ({
        body: task,
        url: '/task',
        method: 'POST',
      }),
      invalidatesTags: ['Tasks'],
    }),
    deleteTask: builder.mutation<null, Tasks>({
      query: (task) => ({
        body: task,
        url: `/task/${task.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tasks'],
    }),
    updateTask: builder.mutation<null, TasksUpdate>({
      query: (task) => ({
        body: task,
        url: `/task/${task.id}`,
        method: 'PUT',
      }),
      invalidatesTags: ['Tasks'],
    }),
    addCategoryToTask: builder.mutation<null, TasksCategories>({
      query: ({ task, categoryId }) => ({
        body: task,
        url: `/task/${task.id}/categories/${categoryId}`,
        method: 'POST',
      }),
      invalidatesTags: ['Tasks'],
    }),
    deleteCategoryFromTask: builder.mutation<null, TasksCategories>({
      query: ({ task, categoryId }) => ({
        body: task,
        url: `/task/${task.id}/categories/${categoryId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tasks'],
    }),
  }),
});

export const {
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
  useAddCategoryToTaskMutation,
  useDeleteCategoryFromTaskMutation,
} = tasksApi;
