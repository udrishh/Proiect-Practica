import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TitleText from './TitleText';
import reportWebVitals from './reportWebVitals';
import AboutTitle from './AboutTitle';
import About from './About';
import CustomizedTimeline from './Timeline';
import { Typography } from '@material-ui/core';
import DiscreteSlider1 from './skillSlide1';
import DiscreteSlider2 from './skillSlide2';
import DiscreteSlider3 from './skillSlide3';
import DiscreteSlider4 from './skillSlide4';
import DiscreteSlider5 from './skillSlide5';

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
        <center><img alt="" src="https://media1.tenor.com/images/cc9f101192bcf54c7db2d9470094eeb1/tenor.gif?itemid=18110512" height='200' width='350'></img> </center>
        </td>
        <td><CustomizedTimeline/></td>
        <td width='10%'>margin</td>
      </tr>
      <tr>
        <td width='10%'>margin</td>
        <td>
          <Typography variant='h2'><center><font face='florencesans_shadedregular'>My skills and competencies</font></center></Typography><br/><br/>
          <Typography variant='h'>
            <center>
              <font face='florencesansregular'>
                C++ 
                <DiscreteSlider4/>
                C 
                <DiscreteSlider4/>
                C# 
                <DiscreteSlider3/>
                Java 
                <DiscreteSlider3/>
                PL/SQL 
                <DiscreteSlider4/>
                Object-Oriented Programming 
                <DiscreteSlider4/>
                HTML 
                <DiscreteSlider3/>
                CSS 
                <DiscreteSlider2/>
                JavaScript 
                <DiscreteSlider1/>
                Teamwork
                <DiscreteSlider5/>
                Organisational Skills 
                <DiscreteSlider5/>
                Communication Skills
                <DiscreteSlider4/>
                Deadlines
                <DiscreteSlider4/>
                Leadership
                <DiscreteSlider4/>
                Adobe Photoshop
                <DiscreteSlider4/>
              </font>
            </center>
          </Typography><br/>
        </td>
        <td>
        <center><img alt="" src="https://media.giphy.com/media/hrRJ41JB2zlgZiYcCw/giphy.gif"></img><br/>Actual footage of me coding this website.</center>
        </td>
        <td width='10%'>margin</td>
      </tr>
    </table>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
