import React from 'react';
import { createUseStyles } from 'react-jss';

const Button = ({handler}) => {
  const classes = useStyles();

  return (
    <button onClick={handler}>

    </button>
  );
};

const useStyles = createUseStyles(theme => ({
}));


export default Button;
