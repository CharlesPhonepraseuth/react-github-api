// == Import npm
import React from 'react';

// == Import
import './styles.css';
import Header from 'src/components/Header';
import SearchBar from 'src/components/SearchBar';
import Results from 'src/components/Results';

import githubLogo from 'src/assets/images/logo-github.png';
import fakeData from 'src/data/repos';

// == Composant
const App = () => {
  return (
    <div className="app">
      <Header logo={githubLogo} />
      <SearchBar value="javascript" handleChange={() => {}} />
      <Results results={fakeData.items} />
    </div>
  );
};

// == Export
export default App;
