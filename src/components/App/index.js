// == Import npm
import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

// == Import
import './styles.css';
import Header from 'src/components/Header';
import SearchBar from 'src/components/SearchBar';
import Results from 'src/components/Results';

import githubLogo from 'src/assets/images/logo-github.png';
import { cleanRepos } from 'src/utils/api';

const GITHUB_API_URL = 'https://api.github.com/search/repositories?q=';
const DEFAULT_QUERY = 'javascript';

// == Composant
const App = () => {
  const reducer = (state, action) => {
    // eslint-disable-next-line default-case
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
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    repos: [],
    loading: false,
    query: DEFAULT_QUERY,
    message: '',
  });

  const fetchRepos = () => {
    axios
      .get(GITHUB_API_URL + state.query)
      .then((response) => {
        dispatch({
          type: 'REPOS_RECEIVED',
          payload: {
            repos: response.data.items,
            message: response.data.total_count,
          },
        });
      });
  };

  const handleChange = (evt) => {
    dispatch({ type: 'UPDATE_QUERY', payload: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({ type: 'FETCH_REPOS' });
    fetchRepos();
  };

  useEffect(fetchRepos, []);

  return (
    <div className="app">
      <Header logo={githubLogo} />
      <SearchBar
        loading={state.loading}
        value={state.query}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        message={state.message}
      />
      <Results
        loading={state.loading}
        results={state.repos}
      />
    </div>
  );
};

// == Export
export default App;
