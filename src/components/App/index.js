// == Import npm
import React from 'react';

// == Import
import './styles.css';
import Header from 'src/components/Header';
import SearchBar from 'src/components/SearchBar';
import Results from 'src/components/Results';

import githubLogo from 'src/assets/images/logo-github.png';

// == Composant
const App = () => {
  return (
    <div className="app">
      <Header logo={githubLogo} />
      <SearchBar />
      <Results />
    </div>
  );
};

// == Export
export default App;
