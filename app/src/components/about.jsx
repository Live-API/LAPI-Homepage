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
      <Grid centered padded id='About'>
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
              github='https://github.com/melissjs/'
              linkedin='https://www.linkedin.com/in/melissjs/'
            />
          </Grid.Column>
          <Grid.Column>
            <Bio
              image='https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg'
              name='Penn Wu'
              description='Ping pong warrior'
              github='https://github.com/pennwu1/'
              linkedin='https://www.linkedin.com/in/pennwu/'
            />
          </Grid.Column>
          <Grid.Column>
            <Bio
              image='https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg'
              name='Brett Beekley'
              description='Engineer, scientist, homebrewer'
              github='https://www.github.com/beekley/'
              linkedin='https://www.linkedin.com/in/brettbeekley/'
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default About;
