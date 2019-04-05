import React, { Component } from 'react';
import Modal from 'react-modal';

const modalStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    padding               : '2.4rem',
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
      modalIsOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  }

  render() {
    return (
      <React.Fragment>
        { this.props.buttonType &&
          <button onClick={this.toggleModal}
                  className={`c-button c-button--${this.props.buttonType} v-animation v-animation--${this.props.buttonAnimationType}`}>
            {this.props.title}
          </button>
        }
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.toggleModal}
          style={modalStyles}
          contentLabel={this.props.title}
          overlayClassName='c-overlay v-animation v-animation--fade-in'>
          <button className='c-overlay__button' onClick={this.toggleModal}>
            <span className='c-overlay__close' />
          </button>
          {this.props.children}
        </Modal>
      </React.Fragment>
    );
  }
}

export default ModalOverlay;
