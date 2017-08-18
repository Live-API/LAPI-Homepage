import React from 'react';
import { render } from 'react-dom';
import { Segment } from 'semantic-ui-react';

const Code = (props) => {
  const style = {
    fontFamily: 'monospace',
    color: 'black'
  }
  return (
    <Segment style={style}>
      {props.content}
    </Segment>
  )
}

export default Code;
