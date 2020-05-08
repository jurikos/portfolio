import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  loading: {
    margin: `${theme.indent * 2}rem auto`,
    borderRadius: '50%',
    width: `${theme.indent * 4}rem`,
    height: `${theme.indent * 4}rem`,
    border: '.2rem solid rgba(0, 0, 0, .1)',
    borderTop: `.2rem solid ${theme.colors.primary}`,
    animation: '$rotating 1s infinite linear',
  },
  '@keyframes rotating': {
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (<div className={classes.loading} />);
};

export default Loading;
