import { cleanRepos, DEFAULT_QUERY } from 'src/utils/api';

const initialState = {
  repos: [],
  loading: false,
  query: DEFAULT_QUERY,
  message: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'UPDATE_QUERY': {
      return { ...state, query: action.payload };
    }
    case 'FETCH_REPOS': {
      return { ...state, loading: true };
    }
    case 'REPOS_RECEIVED': {
      return {
        ...state,
        repos: cleanRepos(action.payload.repos),
        loading: false,
        message: action.payload.message,
      };
    }
    default: {
      return state;
    }
  }
};
