import React from 'react';

import ModalOverlay from '../ModalOverlay';
import Item from './tech-stack/Item';

const TechStack = (props) => {
  return (
    <ModalOverlay title='Tech Stack' showButton={true} buttonType='secondary' buttonAnimationType='slide-in-left'>
      <div className='c-listing v-animation v-animation--zoom-in'>
        <div className='c-listing__col'>
          <h2 className='c-listing__heading'>Javascript</h2>
          <ul className='c-listing__list'>
            <Item data={props.data.javascript} />
          </ul>
        </div>
        <div className='c-listing__col'>
          <h2 className='c-listing__heading'>Frontend</h2>
          <ul className='c-listing__list'>
            <Item data={props.data.frontend} />
          </ul>
        </div>
        <div className='c-listing__col'>
          <h2 className='c-listing__heading'>CMS / Backend</h2>
          <ul className='c-listing__list'>
            <Item data={props.data.backend} />
          </ul>
        </div>
        <div className='c-listing__col'>
          <h2 className='c-listing__heading'>Builders</h2>
          <ul className='c-listing__list'>
            <Item data={props.data.builders} />
          </ul>
        </div>
        <div className='c-listing__col'>
          <h2 className='c-listing__heading'>Version Control</h2>
          <ul className='c-listing__list'>
            <Item data={props.data.versionControl} />
          </ul>
        </div>
        <div className='c-listing__col'>
          <h2 className='c-listing__heading'>UX / UI</h2>
          <ul className='c-listing__list'>
            <Item data={props.data.ux} />
          </ul>
        </div>
        <div className='c-listing__col'>
          <h2 className='c-listing__heading'>Optimisation</h2>
          <ul className='c-listing__list'>
            <Item data={props.data.optimisation} />
          </ul>
        </div>
        <div className='c-listing__col'>
          <h2 className='c-listing__heading'>Methodologies</h2>
          <ul className='c-listing__list'>
            <Item data={props.data.methodologies} />
          </ul>
        </div>
        <div className='c-listing__col'>
          <h2 className='c-listing__heading'>PM Tools</h2>
          <ul className='c-listing__list'>
            <Item data={props.data.pm} />
          </ul>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default TechStack;
