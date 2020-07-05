// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Segment } from 'semantic-ui-react';

// == Import
import './styles.scss';
import Repository from 'src/components/Repository';

const C = ({ loading, results }) => {
  const resultsJSX = results.map((result) => {
    return <Repository key={result.id} {...result} />;
  });

  return (
    <Segment loading={loading} className="repos-results">
      <Card.Group itemsPerRow={3} stackable>{resultsJSX}</Card.Group>
    </Segment>
  );
};

C.propTypes = {
  loading: PropTypes.bool.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default C;
