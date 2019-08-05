import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ModalOverlay = ({title, showButton, buttonType, buttonAnimationType, children}) => {
  const modalStyles = {
    content : {
      top : '50%',
      left : '50%',
      right : 'auto',
      bottom : 'auto',
      marginRight : '-50%',
      padding : '2.4rem',
      maxWidth : '80%',
      maxHeight : '90%',
      transform : 'translate(-50%, -50%)'
    }
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      { showButton &&
        <button onClick={() => setModalIsOpen(!modalIsOpen)}
                className={`c-button c-button--${buttonType ? buttonType : 'primary'} v-animation v-animation--${buttonAnimationType}`}>
          {title}
        </button>
      }
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(!modalIsOpen)}
        style={modalStyles}
        contentLabel={title}
        overlayClassName='c-overlay v-animation v-animation--fade-in'>
        {children}
      </Modal>
    </>
  );
}

export default ModalOverlay;
