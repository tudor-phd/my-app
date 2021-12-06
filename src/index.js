import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from "./navigation/navigation"
import reportWebVitals from './reportWebVitals';
// import Player from './components/sound/sound'
// import sound from './components/sound/mrrobot.mp3'

ReactDOM.render(
  <React.StrictMode>
    <Navigation/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
