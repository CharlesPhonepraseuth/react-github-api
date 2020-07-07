// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Segment, Input as SemanticUiInput } from 'semantic-ui-react';

const C = ({
  loading,
  value,
  handleChange,
  handleSubmit,
  message,
}) => {
  return (
    <Segment>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <SemanticUiInput
            loading={loading}
            icon="search"
            iconPosition="left"
            type="text"
            placeholder="Recherche..."
            value={value}
            onChange={handleChange}
          />
        </Form.Field>
      </Form>
      <Segment
        loading={loading}
      >
        {message} repositories trouvés !
      </Segment>
    </Segment>
  );
};

C.propTypes = {
  loading: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default C;
