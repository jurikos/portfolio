import React from 'react';

import ModalOverlay from '../ModalOverlay';
import Icon from '../Icon';

const ContactMe = (props) => {
  return (
    <ModalOverlay title='Contact Me' showButton={true} buttonAnimationType='slide-in-right'>
      <ul className='c-contacts v-animation v-animation--zoom-in'>
        <li className='c-contacts__item'>
          <a className='c-contacts__link js-antispam-link' href={`mailto:${props.data.email}`}>
            <Icon name='envelope' />
            {props.data.email}
          </a>
        </li>
        <li className='c-contacts__item'>
          <a className='c-contacts__link' href={`https://www.${props.data.linkedIn}`} rel='noopener noreferrer'
             target='_blank'>
            <Icon name='linkedin' />
            {props.data.linkedIn}
          </a>
        </li>
      </ul>
    </ModalOverlay>
  );
};

export default ContactMe;
