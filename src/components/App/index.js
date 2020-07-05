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
  const cleanData = fakeData.items.map((repo) => {
    return {
      id: repo.id,
      image: repo.owner.avatar_url,
      title: repo.name,
      orga: repo.owner.login,
      description: repo.description || 'No description provided...',
      private: repo.private,
    };
  });

  return (
    <div className="app">
      <Header logo={githubLogo} />
      <SearchBar value="javascript" handleChange={() => {}} />
      <Results results={cleanData} />
    </div>
  );
};

// == Export
export default App;
