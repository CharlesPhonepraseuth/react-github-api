// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

const C = ({ logo }) => {
  return (
    <div>
      <img alt="Logo github" src={logo} />
    </div>
  );
};

C.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default C;
