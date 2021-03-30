import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={100}
        marks
        min={0}
        max={500}
        disabled
        value={100}
      />
    </div>
  );
}
