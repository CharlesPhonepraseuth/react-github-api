// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

const C = ({ value, handleChange }) => {
  return (
    <form>
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

C.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default C;
