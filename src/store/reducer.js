import { cleanRepos, DEFAULT_QUERY } from 'src/utils/api';
import { actions } from './actions';

const initialState = {
  repos: [],
  loading: false,
  query: DEFAULT_QUERY,
  message: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actions.UPDATE_QUERY: {
      return { ...state, query: action.payload };
    }
    case actions.FETCH_REPOS: {
      return { ...state, loading: true };
    }
    case actions.REPOS_RECEIVED: {
      return {
        ...state,
        repos: cleanRepos(action.repos),
        loading: false,
        message: action.message,
      };
    }
    default: {
      return state;
    }
  }
};
