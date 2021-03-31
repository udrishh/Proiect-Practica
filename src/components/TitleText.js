import './TitleText.css';
import { Typography } from '@material-ui/core';

function TitleText() {
  return (
    <div className="TitleText">
      <center>
        <Typography variant ='h1'><font face='florencesans_shadeditalic'>Bogdan Udris</font></Typography>
        <Typography variant ='h5'><font face='florencesansregular'>Student @CSIE</font></Typography>
      </center>
      
    </div>
  );
}

export default TitleText;
