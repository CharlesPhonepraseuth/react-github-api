// == Import npm
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

// == Import
import './styles.css';
import Header from 'src/components/Header';
import SearchBar from 'src/components/SearchBar';
import Results from 'src/components/Results';

import githubLogo from 'src/assets/images/logo-github.png';
import { GITHUB_API_URL } from 'src/utils/api';
import { reposReceived, updateQuery, fetchRepos } from 'src/store/actions';

// == Composant
const App = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query);
  const loading = useSelector((state) => state.loading);
  const message = useSelector((state) => state.message);
  const repos = useSelector((state) => state.repos);

  const fetchRepository = () => {
    axios.get(GITHUB_API_URL + query)
      .then((response) => {
        dispatch(reposReceived(response.data.items, response.data.total_count.toString()));
      });
  };

  const handleChange = (evt) => {
    dispatch(updateQuery(evt.target.value));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(fetchRepos());
    fetchRepository();
  };

  useEffect(fetchRepository, []);

  return (
    <div className="app">
      <Header logo={githubLogo} />
      <SearchBar
        loading={loading}
        value={query}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        message={message}
      />
      <Results
        loading={loading}
        results={repos}
      />
    </div>
  );
};

// == Export
export default App;
