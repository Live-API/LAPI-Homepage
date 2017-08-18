import React, { Component } from 'react';
import { render } from 'react-dom';
import Menubar from './Menubar.jsx';
import Content from './content.jsx';
import Features from './features.jsx';
import About from './about.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Menubar />
        <Features />
        <Content />
        <About />
      </div>
    );
  }
}

export default App;
