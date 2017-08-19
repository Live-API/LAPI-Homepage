import React, { Component } from 'react';
import { render } from 'react-dom';
import { Card, Header, Image, Button } from 'semantic-ui-react';

const Bio = (props) => {
  return (
    <Card centered className='feature'>
      <Image src={props.image}/>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <p>{props.description}</p>
        <Button circular icon='github' content='Github' onClick={() => location.href=props.github}></Button>
        <Button circular icon='linkedin' content='LinkedIn' onClick={() => location.href=props.linkedin}></Button>
      </Card.Content>
    </Card>
  )
}

export default Bio;
