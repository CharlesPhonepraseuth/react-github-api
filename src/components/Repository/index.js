// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

// == Import
import './styles.css';

const C = ({ image, title, orga, description }) => {
  return (
    <Card className="card">
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{orga}</span>
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

C.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  orga: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default C;
