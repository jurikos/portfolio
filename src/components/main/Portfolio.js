import React from 'react';
import ModalOverlay from '../common/ModalOverlay';
import Icon from '../common/Icon';

const Portfolio = ({data}) => {
  const items = data.map((item, i) =>
    <li key={i} className='c-portfolio__item'>
      <h3 className='c-portfolio__title'>{item.title}</h3>
      <a className='c-portfolio__link' href={item.url} target='_blank' rel='noopener noreferrer'>
        <span>{item.url.replace(/^https?:\/\//,'')}</span>
      </a>
      <h4 className='c-portfolio__sub-title'>Summary</h4>
      <p className='c-portfolio__description' dangerouslySetInnerHTML={{ __html: item.summary }} />
      <h4 className='c-portfolio__sub-title'>Technology used</h4>
      <div className='c-portfolio__tech-stack'>
        {item.technology.map((item, i) => <Icon key={i} name={item} />)}
      </div>
    </li>
  );

  return (
    <ModalOverlay title='Portfolio' showButton={true} buttonAnimationType='slide-in-up'>
      <ul className='c-portfolio'>
        {items}
      </ul>
    </ModalOverlay>
  );
};

export default Portfolio;
