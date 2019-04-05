import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    overflow              : 'auto',
    maxWidth              : '80%',
    maxHeight             : '90%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

class ModalOverlay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: this.props.settings.isOpen
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  }

  render() {
    return (
      <React.Fragment>
        { this.props.settings.button &&
          <button onClick={this.toggleModal} className={this.props.settings.button.className}>
            {this.props.settings.button.text}
          </button>
        }
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.toggleModal}
          style={customStyles}
          contentLabel='Tech Stack'
          overlayClassName='c-overlay v-animation v-animation--fade-in'
        >
          <button className='c-overlay__button' onClick={this.toggleModal}>
            <span className='c-overlay__close js-overlay-close' />
          </button>
          {this.props.children}
        </Modal>
      </React.Fragment>
    );
  }
}

export default ModalOverlay;
