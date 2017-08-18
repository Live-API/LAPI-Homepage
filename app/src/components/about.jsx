import React, { Component } from 'react';
import { render } from 'react-dom';
import { Grid, Header, Image, Container } from 'semantic-ui-react';
import Bio from './bio.jsx';

class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid centered padded id='about'>
        <Grid.Row columns={1}>
          <Container>
            <Header size='huge'>Contributors</Header>
            <p>{'We\'re building LiveAPI because we want data to be free'}</p>
          </Container>
        </Grid.Row>
        <Grid.Row columns={3}>
          <Grid.Column>
            <Bio
              image='https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg'
              name='Melissa Schwartz'
            />
          </Grid.Column>
          <Grid.Column>
            <Bio
              image='https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg'
              name='Penn Wu'
              description='Ping pong warrior'
            />
          </Grid.Column>
          <Grid.Column>
            <Bio
              image='https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg'
              name='Brett Beekley'
              description='Engineer, scientist, homebrewer'
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default About;
