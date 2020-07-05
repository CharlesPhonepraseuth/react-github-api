// == Import npm
import React from 'react';

// == Import
import './styles.css';
import Header from 'src/components/Header';
import SearchBar from 'src/components/SearchBar';
import Results from 'src/components/Results';

// == Composant
const App = () => {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <Results />
    </div>
  );
};

// == Export
export default App;
