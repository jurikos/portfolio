import React from 'react';

import ModalOverlay from '../ModalOverlay';
import Icon from '../Icon';

const modalSettings = {
  isOpen: false,
  button: {
    className: 'c-button c-button--primary v-animation v-animation--slide-in-right',
    text: 'Contact Me'
  }
}

const ContactMe = (contact) => {
  return (
    <ModalOverlay settings={modalSettings}>
      <ul className='c-contacts v-animation v-animation--zoom-in'>
        <li className='c-contacts__item'>
          <a className='c-contacts__link js-antispam-link' href={`mailto:${contact.data.email}`}>
            <Icon name='envelope' />
            {contact.data.email}
          </a>
        </li>
        <li className='c-contacts__item'>
          <a className='c-contacts__link' href={`https://www.${contact.data.linkedIn}`} rel='noopener noreferrer'
             target='_blank'>
            <Icon name='linkedin' />
            {contact.data.linkedIn}
          </a>
        </li>
      </ul>
    </ModalOverlay>
  );
};

export default ContactMe;
