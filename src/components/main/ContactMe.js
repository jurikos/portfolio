import React, { Component } from 'react';

import ModalOverlay from '../ModalOverlay';
import Icon from '../Icon';

const modalSettings = {
  isOpen: false,
  button: {
    className: 'c-button c-button--primary v-animation v-animation--slide-in-right',
    text: 'Contact Me',
  }
}

class ContactMe extends Component {
  render() {
    return (
        <ModalOverlay settings={modalSettings}>
          <ul className='c-contacts v-animation v-animation--zoom-in'>
            <li className='c-contacts__item'>
              <a className='c-contacts__link js-antispam-link' href='mailto:juri.kostjunin@gmail.com'>
                <Icon name='envelope' />
                juri.kostjunin@gmail.com
              </a>
            </li>
            <li className='c-contacts__item'>
              <a className='c-contacts__link' href='https://www.linkedin.com/in/jurikos/' rel='noopener noreferrer'
                 target='_blank'>
                <Icon name='linkedin' />
                linkedin.com/in/jurikos
              </a>
            </li>
          </ul>
        </ModalOverlay>
    );
  }
}

export default ContactMe;
