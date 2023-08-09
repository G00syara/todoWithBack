import { Tasks } from '../../types/index';
import { NewsAction, NewsActionTypes, NewsState } from '../../types/testtype';

const initialState: NewsState = {
  tasks: [],
  loading: false,
  error: null,
};

export const newsReducer = (state = initialState, action: NewsAction): NewsState => {
  switch (action.type) {
    case NewsActionTypes.FETCH_NEWS:
      return { loading: true, error: null, tasks: initialState.tasks };
    case NewsActionTypes.FETCH_NEWS_SUCCESS:
      return { loading: false, error: null, tasks: action.payload };
    case NewsActionTypes.FETCH_NEWS_ERROR:
      return { loading: false, error: action.payload, tasks: initialState.tasks };
    default:
      return { loading: false, error: null, tasks: initialState.tasks };
  }
};
