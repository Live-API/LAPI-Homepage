import React from 'react';
import { render } from 'react-dom';
import App from './components/app.jsx'

// const randomGradient = () => {
//   return 'background: #FFAFBD; background: -webkit-linear-gradient(to right, #ffc3a0, #FFAFBD);background: linear-gradient(to right, #ffc3a0, #FFAFBD);'
// }
// document.getElementById('root').setAttribute('style', randomGradient());

render(
  (<App />),
  document.getElementById('root')
);
