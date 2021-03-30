import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TitleText from './TitleText';
import reportWebVitals from './reportWebVitals';
import AboutTitle from './AboutTitle';
import About from './About';
import CustomizedTimeline from './Timeline';


ReactDOM.render(
  <React.StrictMode>
    <table id='pageFormat'>
      <tr>
        <td width='10%'>margin</td>
        <td colspan='2'><TitleText /><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></td>
        <td width='10%'>margin</td>
      </tr>
      
      <tr>
        <td width='10%'>margin</td>
        <td ><AboutTitle/><br/><About/><br/>
        <center><iframe title="Catgif" src="https://giphy.com/embed/GeimqsH0TLDt4tScGw" width="192" height="128" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><a href="https://giphy.com/gifs/vibes-vibing-vibin-GeimqsH0TLDt4tScGw"><font color="black">.</font></a></center>
        </td>
        <td><CustomizedTimeline/></td>
        <td width='10%'>margin</td>
      </tr>
      <tr>
        <td width='10%'>margin</td>
        <td colspan='2'>github</td>
        <td width='10%'>margin</td>
      </tr>
    </table>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
