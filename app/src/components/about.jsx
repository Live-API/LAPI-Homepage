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
            <Header size='huge'>About</Header>
            <p>{'Successful apps are built on data. As developers, we don\u2019t always have access to the data that would help make our app successful. While the internet is a nearly-bottomless source of public data in the form of websites, that data is not always structured or available programmatically through an API. Time spent building an extraction algorithm and server is time not spent building your app.'}</p>
            <p>{'We\u2019re developing LiveAPI because we needed to solve this for our own apps. We\u2019d love to hear about your use cases and feedback.'}</p>
          </Container>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Container>
            <Header size='huge'>Contributors</Header>
            <p>{'Access to live data is powerful, but not all public data has an API for easy structured distribution. We are building LiveAPI because we want data to be free. If you are interesting in contributing, submit an issue or pull request on Github or reach out to the team directly.'}</p>
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
              image='/static/img/pw.png'
              name='Penn Wu'
              description='Ping pong warrior'
              github='https://github.com/pennwu1/'
              linkedin='https://www.linkedin.com/in/pennwu/'
            />
          </Grid.Column>
          <Grid.Column>
            <Bio
              image='/static/img/bb.jpg'
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
