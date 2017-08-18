import React, { Component } from 'react';
import { render } from 'react-dom';
import { Card, Header, Image } from 'semantic-ui-react';

const Feature = (props) => {
  return (
    <Card centered className='feature'>
      <Card.Content>
        <Card.Header>{props.header}</Card.Header>
        <Card.Description>{props.description}</Card.Description>
      </Card.Content>
    </Card>
  )
}

export default Feature;
