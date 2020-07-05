// == Import npm
import React, {useState, useEffect } from 'react';
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
  const [repos, setRepos] = useState([]);

  const fetchRepos = () => {
    axios
      .get(GITHUB_API_URL + DEFAULT_QUERY)
      .then((response) => {
        setRepos(cleanRepos(response.data.items));
      });
  };

  useEffect(fetchRepos, []);

  return (
    <div className="app">
      <Header logo={githubLogo} />
      <SearchBar value="javascript" handleChange={() => {}} />
      <Results results={repos} />
    </div>
  );
};

// == Export
export default App;
