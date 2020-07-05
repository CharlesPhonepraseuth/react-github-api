// == Import npm
import React, { useState, useEffect, useReducer } from 'react';
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
  const [query, setQuery] = useState(DEFAULT_QUERY);

  const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case 'FETCH_REPOS': {
        return {
          ...state,
          loading: true,
        };
      }
      case 'UPDATE_REPOS': {
        return {
          ...state,
          repos: cleanRepos(action.payload),
          loading: false,
        };
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    repos: [],
    loading: false,
  });

  const fetchRepos = () => {
    axios
      .get(GITHUB_API_URL + query)
      .then((response) => {
        dispatch({ type: 'UPDATE_REPOS', payload: response.data.items });
      });
  };

  const handleChange = (evt) => {
    setQuery(evt.target.value);
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
        value={query}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
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
