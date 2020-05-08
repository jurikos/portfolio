import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const files = require.context('!svg-sprite-loader!../../images/svg', false, /.*\.svg$/);
files.keys().forEach(files);

const size = 1.6;
const useStyles = createUseStyles(() => ({
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
    maxHeight: '100%',
  },
}));

const Icon = ({ name, modifier = '', modifierExtra = '' }) => {
  const classes = useStyles();

  return (
    <svg className={`${classes.icon} ${modifier} ${modifierExtra}`}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  modifier: PropTypes.string,
  modifierExtra: PropTypes.string,
};

Icon.defaultProps = {
  modifier: '',
  modifierExtra: '',
};

export default Icon;
