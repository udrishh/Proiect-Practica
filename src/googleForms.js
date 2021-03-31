import { Typography } from '@material-ui/core';

function GoogleForms() {
  return (
    <div className="GoogleForms">
    <Typography variant='h4'><font face='florencesans_shadedregular'>Give me some feedback!</font></Typography><br/>
      <Typography variant='h6'><font face='florencesansregular'>
          Do you have any new ideas for my website<br/>
          or any TV series recommendations?<br/>
          Write me a quick message!
          </font></Typography><br/><br/>
          <iframe title="GoogleForms" src="https://docs.google.com/forms/d/e/1FAIpQLSfesXSHpsL5xtVMwnBxSvIwkQt6w-PYGsLWSnc5BmgqGI94nA/viewform?embedded=true" width="640" height="600" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
  );
}

export default GoogleForms;
