import React, { Component } from 'react';
import { render } from 'react-dom';
import { Grid, Container, Header, Button, Divider } from 'semantic-ui-react';
import Code from './code.jsx';

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = { activeItem: 'home' }
    this.handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state;
    const chromeExtensionUrl = 'https://chrome.google.com/webstore/detail/liveapi/okbjjnhfifjpggnjkjopeidfaciphkdf';
    const gettingStartedUrl = 'https://medium.com/@brett.beekley/using-liveapi-part-1-installation-ba1aa13bc73b';

    return (
      <Grid padded centered divided id='Installation'>
        <Grid.Row color='black'>
          <Header size='huge' inverted>Installation</Header>
          <p>{'LiveAPI is a developer tool to turn any website\u2019s public data into an API in a few minutes. LiveAPI has two parts: a Chrome Extension to select data to extract and a user-hostable server that extracts data and serves up the user-created API endpoints.'}</p>
        </Grid.Row>
        <Grid.Row  columns={2} color='black'>
          <Grid.Column width={7}>
            <Container textAlign='center'>
              <Header inverted>{'Server'}</Header>
              <p>{'The LiveAPI server extracts data from the target website and can be installed in one shell command:'}</p>
              <Code content='sudo curl -s https://raw.githubusercontent.com/Live-API/LAPI-Server/master/bin/pull.sh | bash -s'/>
            </Container>
          </Grid.Column>
          <Grid.Column width={1}><Divider inverted vertical></Divider></Grid.Column>
          <Grid.Column width={7}>
            <Container textAlign='center'>
              <Header inverted>{'Chrome Extension'}</Header>
              <p>{'The LiveAPI Chrome Extension provides an interface for selecting data from a webpage to extract, and can be installed from the Chrome Store:'}</p>
              <Button content='Download Chrome Extension' icon='chrome' size='huge' onClick={() => location.href=chromeExtensionUrl}></Button>
            </Container>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row color='black'>
          <Button content='Getting Started Guide' size='huge' onClick={() => location.href=gettingStartedUrl}></Button>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Content;
