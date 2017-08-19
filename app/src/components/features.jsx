import React, { Component } from 'react';
import { render } from 'react-dom';
import { Grid, Card, Header, Image } from 'semantic-ui-react';
import Feature from './feature.jsx';

class Features extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid centered padded id='Features' >
        <Grid.Row columns={1}>
          <Grid.Column width={12}>
            <Card centered fluid>
              <Image src='/static/img/screenshot.png' />
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3}>
          <Grid.Column>
            <Feature
              header='Intuitive'
              description='Create an API from data on any website in a few clicks through a simple Chrome Extension'
            />
          </Grid.Column>
          <Grid.Column>
            <Feature
              header='Reliable'
              description='By extracting target data once and caching on the LiveAPI server, API call rates are only limited by your hardware'
            />
          </Grid.Column>
          <Grid.Column>
            <Feature
              header='Easy'
              description='Set up the LiveAPI server in one command and create a custom API without writing any code'
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Features;
