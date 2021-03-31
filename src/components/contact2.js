import { Typography } from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function Contact2() {
    return (
      <div className="Contact2">
        <Typography variant='h4'><font face='florencesansregular'>Email me at:</font></Typography><br/>
        <Typography variant='h7'><font face='florencesansregular'>    <MailOutlineIcon/>  udris.bogdan9@gmail.com</font></Typography><br/>
        <Typography variant='h4'><font face='florencesansregular'>Follow me on instagram:</font></Typography><br/>
        <Typography variant='h7'><font face='florencesansregular'>    <InstagramIcon/>  <a href="https://www.instagram.com/udrishh/">@udrishh</a></font></Typography><br/>
        
      </div>
    );
  }
  
  export default Contact2;