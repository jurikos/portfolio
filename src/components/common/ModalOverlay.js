import React, { useState } from 'react';
import Modal from 'react-modal';
import { createUseStyles } from 'react-jss';

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
  const classes = useStyles();

  return (
    <>
      { showButton &&
        <button onClick={() => setModalIsOpen(!modalIsOpen)}
                className={`c-button c-button--${buttonType ? buttonType : 'primary'} v-animation v-animation--${buttonAnimationType}`}>
          <span className='c-button__inner'>{title}</span>
        </button>
      }
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(!modalIsOpen)}
        style={modalStyles}
        contentLabel={title}
        overlayClassName={classes.overlay}>
        {children}
      </Modal>
    </>
  );
};

const useStyles = createUseStyles(theme => ({
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, .8)',
    zIndex: 9999,
    animation: `$fadeIn .5s both`
  },
  '@keyframes fadeIn': {
    'from': {
      opacity: 0
    },
    'to': {
      opacity: 1
    }
  },
}));

export default ModalOverlay;
