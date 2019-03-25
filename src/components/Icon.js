import React from 'react';

const files = require.context('!svg-sprite-loader!../images/svg', false, /.*\.svg$/);
files.keys().forEach(files);

const Icon = ({name, modifier}) => (
  <svg className={`c-icon c-icon--${name} ${(modifier ? 'c-icon--' + modifier : '')}`}>
    <use xlinkHref={`#${name}`}></use>
  </svg>
);

export default Icon;
