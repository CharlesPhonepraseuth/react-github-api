// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

const C = ({ results }) => {
  const resultsJSX = results.map((result) => {
    return <li key={result.id}>{result.full_name}</li>;
  });

  return (
    <ul>{resultsJSX}</ul>
  );
};

C.propTypes = {
  results: PropTypes.array.isRequired,
};

export default C;
