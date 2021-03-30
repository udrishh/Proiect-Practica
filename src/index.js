import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TitleText from './TitleText';
import reportWebVitals from './reportWebVitals';
import AboutTitle from './AboutTitle';
import About from './About';


ReactDOM.render(
  <React.StrictMode>
    <table id='pageFormat'>
      <tr>
        <td width='10%'>margin</td>
        <td colspan='2'><TitleText /></td>
        <td width='10%'>margin</td>
      </tr>
      <tr>
        <td width='10%'>margin</td>
        <td colspan='2'><AboutTitle/></td>
        <td width='10%'>margin</td>
      </tr>
      <tr>
        <td width='10%'>margin</td>
        <td ><About/></td>
        <td>empty</td>
        <td width='10%'>margin</td>
      </tr>
      <tr>
        <td width='10%'>margin</td>
        <td >empty</td>
        <td>empty</td>
        <td width='10%'>margin</td>
      </tr>
    </table>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
