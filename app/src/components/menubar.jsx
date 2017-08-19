import React, { Component } from 'react';
import { render } from 'react-dom';
import { Segment, Menu, Header, Button, Link } from 'semantic-ui-react';

class Menubar extends Component {
  constructor(props) {
    super(props)
    this.state = { activeItem: 'home' }
    this.handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name });
      location.href='#'+name;
    }
  }

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted id='menubar' >
        <Menu inverted pointing secondary size='large'>
          <Menu.Item header>LiveAPI</Menu.Item>
          <Menu.Item name='Features' active={activeItem === 'Features'} onClick={this.handleItemClick} />
          <Menu.Item name='Installation' active={activeItem === 'Installation'} onClick={this.handleItemClick} />
          <Menu.Item name='About' active={activeItem === 'About'} onClick={this.handleItemClick} />
          <Menu.Item name='github' icon='github' position='right' link onClick={() => location.href='https://github.com/live-api/'} />
        </Menu>
      </Segment>
    )
  }
}

export default Menubar;
