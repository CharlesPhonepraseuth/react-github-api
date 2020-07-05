// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Segment, Input as SemanticUiInput } from 'semantic-ui-react';

const C = ({ value, handleChange }) => {
  return (
    <Segment>
      <Form>
        <Form.Field>
          <SemanticUiInput
            icon="search"
            iconPosition="left"
            type="text"
            placeholder="Recherche..."
            value={value}
            onChange={handleChange}
          />
        </Form.Field>
      </Form>
    </Segment>
  );
};

C.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default C;
