// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

// == Import
import Repository from 'src/components/Repository';

const C = ({ results }) => {
  const resultsJSX = results.map((result) => {
    return <Repository key={result.id} {...result} />;
  });

  return (
    <Card.Group itemsPerRow={3} stackable>{resultsJSX}</Card.Group>
  );
};

C.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default C;
