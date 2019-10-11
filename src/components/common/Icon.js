import React from 'react';
import { createUseStyles } from 'react-jss';

const files = require.context('!svg-sprite-loader!../../images/svg', false, /.*\.svg$/);
files.keys().forEach(files);

const Icon = ({name, modifier = '', modifierExtra = ''}) => {
  const classes = useStyles();

  return (
    <svg className={`${classes.icon} ${modifier} ${modifierExtra}`}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

const size = 1.6;
const useStyles = createUseStyles(theme => ({
  icon: {
    position: 'relative',
    top: `-${size / 4}rem`,
    display: 'inline-block',
    verticalAlign: 'middle',
    height: `${size}rem`,
    width: `${size}rem`,
    fill: 'currentColor',
  },
  svg: {
    maxWidth: '100%',
    maxHeight: '100%'
  }
}));

export default Icon;
