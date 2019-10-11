import React, { useState } from 'react';
import Modal from 'react-modal';
import c from 'color';
import { createUseStyles } from 'react-jss';

Modal.setAppElement('#root');

const ModalOverlay = ({title, showButton, buttonType, buttonAnimationType, children}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const classes = useStyles();

  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      padding: '2.4rem',
      maxWidth: '80%',
      maxHeight: '90%',
      transform: 'translate(-50%, -50%)'
    }
  };

  return (
    <>
      {showButton &&
        <button onClick={() => setModalIsOpen(!modalIsOpen)}
                className={`${classes.button} ${buttonType === 'secondary' ? classes.buttonSecondary : classes.buttonPrimary} ${classes.animation} ${classes.animationSlideInLeft}`}>
          <span className={classes.buttonInner}>{title}</span>
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
  button: {
    '-webkit-appearance': 'none',
    position: 'relative',
    margin: `${theme.indent * 2}rem 0 0`,
    padding: `${theme.indent * 2}rem ${theme.indent * 4}rem`,
    display: 'block',
    width: '100%',
    flexBasis: '100%',
    cursor: 'pointer',
    fontWeight: theme.font.weight.bold,
    fontSize: theme.font.size.primary,
    textAlign: 'center',
    textTransform: 'uppercase',
    border: '.2rem solid transparent',
    borderRadius: '.3rem',
    transition: theme.transitionDuration,
    overflow: 'hidden',
  },
  buttonPrimary: {
    background: theme.colors.primary,
    borderColor: theme.colors.primary,
    color: theme.colors.tertiary,
    '&:hover': {
      '.is-not-touch &': {
        background: c(theme.colors.primary).lighten(.3).hex(),
        borderColor: c(theme.colors.primary).lighten(.3).hex()
      }
    }
  },
  buttonSecondary: {
    borderColor: theme.colors.secondary,
    '&:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: 0,
      background: theme.colors.secondary,
      zIndex: -1,
      transition: 'all .1s',
    },
    '&:hover': {
      '.is-not-touch &': {
        color: theme.colors.tertiary,
        '&:after': {
          height: '100%'
        }
      }
    }
  },
  animation: {
    animationDuration: '1s',
    animationFillMode: 'both'
  },
  animationSlideInUp: {
    animationName: '$slideInUp'
  },
  animationSlideInRight: {
    animationName: '$slideInRight'
  },
  animationSlideInLeft: {
    animationName: '$slideInLeft'
  },
  [`@media (min-width: ${theme.breakpoints.medium})`]: {
    button: {
      margin: `${theme.indent * 2}rem ${theme.indent * 2}rem 0 ${theme.indent * 2}rem`,
      width: 'auto',
      flexBasis: 'auto'
    }
  },
  '@keyframes fadeIn': {
    'from': {
      opacity: 0
    },
    'to': {
      opacity: 1
    }
  },
  '@keyframes slideInUp': {
    'from': {
      transform: 'translate3d(0, 100%, 0)',
      visibility: 'visible'
    },
    'to': {
      transform: 'translate3d(0, 0, 0)',
    }
  },
  '@keyframes slideInRight': {
    'from': {
      transform: 'translate3d(100%, 0, 0)',
      visibility: 'visible'
    },
    'to': {
      transform: 'translate3d(0, 0, 0)'
    }
  },
  '@keyframes slideInLeft': {
    'from': {
      transform: 'translate3d(-100%, 0, 0)',
      visibility: 'visible'
    },
    'to': {
      transform: 'translate3d(0, 0, 0)'
    }
  }
}));

export default ModalOverlay;
