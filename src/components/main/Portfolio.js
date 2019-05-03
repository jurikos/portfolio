import React from 'react';

import ModalOverlay from '../ModalOverlay';
import Icon from '../Icon';

const Portfolio = (props) => {
  const items = props.data.map((item) =>
    <li key={item} className='c-portfolio__item'>
      <h3 className='c-portfolio__title'>{item.title}</h3>
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a className='c-portfolio__link' href={item.url} target='_blank'>
        <span>{item.url.replace(/^https?:\/\//,'')}</span>
      </a>
      <h4 className='c-portfolio__sub-title'>Summary</h4>
      <p className='c-portfolio__description' dangerouslySetInnerHTML={{ __html: item.summary }} />
      <h4 className='c-portfolio__sub-title'>Technology used</h4>
      <div className='c-portfolio__tech-stack'>
        {item.technology.map((item) => <Icon name={item} />)}
      </div>
    </li>
  );

  return (
    <ModalOverlay title='Portfolio' showButton={true} buttonAnimationType='slide-in-right'>
      <ul className='c-portfolio'>
        {items}
      </ul>
    </ModalOverlay>
  );
};

export default Portfolio;
