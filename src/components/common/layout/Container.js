import React from 'react';
import { createUseStyles } from 'react-jss';

const LayoutContainer = ({children}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {children}
    </div>
  );
};

const useStyles = createUseStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    padding: `${theme.indent * 2}rem`
  },
  [`@media (min-width: ${theme.breakpoints.large})`]: {
    container: {
      margin: 'auto',
      padding: `${theme.indent * 4}rem`,
      maxWidth: `${theme.layout.min}`
    }
  },
  [`@media (min-width: ${theme.breakpoints.huge})`]: {
    container: {
      maxWidth: `${theme.layout.max}`
    }
  }
}));

export default LayoutContainer;
