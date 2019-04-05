import React from 'react';

import Icon from '../../Icon';

const Item = (props) => {
  return Object.entries(props.data).map((item) =>
    <li key={item}><Icon name={item[1].icon}/> {item[1].title}</li>
  );
};

export default Item;
