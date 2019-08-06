import React from 'react';
import ModalOverlay from '../common/ModalOverlay';
import Icon from '../common/Icon';

const Item = ({stack}) => {
  return stack.map((item, i) =>
    <li key={i}><Icon name={item.icon}/> {item.title}</li>
  );
};

const TechStack = ({data}) => {
  const listStack = data.map((item, i) =>
    <div className='c-listing__col' key={i}>
      <h2 className='c-listing__heading'>{item.title}</h2>
      <ul className='c-listing__list'>
        <Item stack={item.stack} />
      </ul>
    </div>
  )

  return (
    <ModalOverlay title='Tech Stack' showButton={true} buttonType='secondary' buttonAnimationType='slide-in-left'>
      <div className='c-listing v-animation v-animation--zoom-in'>
        {listStack}
      </div>
    </ModalOverlay>
  );
};

export default TechStack;
