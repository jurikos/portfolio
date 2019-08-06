import React from 'react';
import ModalOverlay from '../common/ModalOverlay';
import Icon from '../common/Icon';

const ContactMe = ({email, linkedIn}) => {
  return (
    <ModalOverlay title='Contact Me' showButton={true} buttonType='secondary' buttonAnimationType='slide-in-right'>
      <ul className='c-contacts v-animation v-animation--zoom-in'>
        <li className='c-contacts__item'>
          <a className='c-contacts__link js-antispam-link' href={`mailto:${email}`}>
            <Icon name='envelope' />
            {email}
          </a>
        </li>
        <li className='c-contacts__item'>
          <a className='c-contacts__link' href={`https://www.${linkedIn}`} rel='noopener noreferrer'
             target='_blank'>
            <Icon name='linkedin' />
            {linkedIn}
          </a>
        </li>
      </ul>
    </ModalOverlay>
  );
};

export default ContactMe;
