import axios from 'axios';
import { Dispatch } from 'redux';
import { Tasks } from '../../types/index.js';
import { TasksAction, TasksActionTypes } from '../reducerTypes/testtype';

const serverUrl = 'http://localhost:8080/api';

// export const getAllTasks = async (): Promise<Tasks[] | Error> => {
//   try {
//     const response = await axios.get<Tasks[]>(`${serverUrl}/task`);
//     return response.data;
//   } catch (e) {
//     throw new Error('Something went wrong');
//   }
// };

export const getAllTasks = () => {
  return async (dispatch: Dispatch<TasksAction>) => {
    try {
      dispatch({ type: TasksActionTypes.FETCH_TASKS });
      const response = await axios.get<Tasks>(`${serverUrl}/task`);
      dispatch({ type: TasksActionTypes.FETCH_TASKS_SUCCESS, payload: response.data.data });
    } catch (e) {
      throw new Error('Something went wrong');
    }
  };
};

export const deleteTask = async (id: Tasks['id']): Promise<Tasks | Error> => {
  try {
    const response = await axios.delete(`${serverUrl}/task/${id}`);
    return response.data;
  } catch (e) {
    throw new Error('Something went wrong');
  }
};
