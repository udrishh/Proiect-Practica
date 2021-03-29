import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TitleText from './TitleText';
import reportWebVitals from './reportWebVitals';
import BackgroundGrain from './BackgroundGrain';

ReactDOM.render(
  <React.StrictMode>
    <BackgroundGrain></BackgroundGrain>
    <TitleText />
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
