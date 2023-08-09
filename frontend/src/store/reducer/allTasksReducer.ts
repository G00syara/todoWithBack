import { Tasks } from '../../types/index';
import { TasksAction, TasksState, TasksActionTypes } from '../reducerTypes/testtype';

const initialState: TasksState = {
  tasks: [],
  loading: false,
  error: null,
};

export const newsReducer = (state = initialState, action: TasksAction): TasksState => {
  switch (action.type) {
    case TasksActionTypes.FETCH_TASKS:
      return { loading: true, error: null, tasks: initialState.tasks };
    case TasksActionTypes.FETCH_TASKS_SUCCESS:
      return { loading: false, error: null, tasks: action.payload };
    case TasksActionTypes.FETCH_TASKS_ERROR:
      return { loading: false, error: action.payload, tasks: initialState.tasks };
    default:
      return { loading: false, error: null, tasks: initialState.tasks };
  }
};
