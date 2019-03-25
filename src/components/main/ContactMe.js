import React, { Component } from 'react';
import Modal from 'react-modal';

import Icon from '../Icon';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    overflow              : 'visible',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

class ContactMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.openModal}
                className='c-button c-button--primary v-animation v-animation--slide-in-right'>
          Contact Me
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel='Contact Me'
          overlayClassName='c-overlay v-animation v-animation--fade-in'
        >
          <button className='c-overlay__button' onClick={this.closeModal}>
            <span className='c-overlay__close js-overlay-close' />
          </button>
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
        </Modal>
      </React.Fragment>
    );
  }
}

export default ContactMe;
