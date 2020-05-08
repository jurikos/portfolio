import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import ModalOverlay from '../common/ModalOverlay';
import Icon from '../common/Icon';

const useStyles = createUseStyles((theme) => ({
  list: {
    borderTop: `.1rem solid ${theme.colors.primary}`,
    animation: '$zoomIn .5s both',
  },
  link: {
    display: 'block',
    padding: `${theme.indent * 2}rem 0`,
    borderBottom: `.1rem solid ${theme.colors.primary}`,
    color: theme.colors.tertiary,
    whiteSpace: 'nowrap',
    '&:hover svg': {
      '.is-not-touch &': {
        color: theme.colors.primary,
      },
    },
  },
  icon: {
    top: '-.2rem',
    marginRight: `${theme.indent * 2}rem`,
    width: '2.4rem',
    height: '2.4rem',
    transition: theme.transitionDuration,
    '&:hover': {
      color: theme.colors.primary,
    },
  },
  iconLinkedIn: {
    top: `-${theme.indent / 2}rem`,
  },
  '@keyframes zoomIn': {
    from: {
      opacity: 0,
      transform: 'scale3d(.3, .3, .3)',
    },
    '50%': {
      opacity: 1,
    },
  },
}));

const ContactMe = ({ email, linkedIn }) => {
  const classes = useStyles();

  return (
    <ModalOverlay title="Contact Me" showButton buttonType="secondary" buttonAnimationType="slide-in-right">
      <ul className={classes.list}>
        <li>
          <a className={classes.link} href={`mailto:${email}`}>
            <Icon name="envelope" modifier={classes.icon} />
            {email}
          </a>
        </li>
        <li>
          <a className={classes.link} href={`https://www.${linkedIn}`} rel="noopener noreferrer" target="_blank">
            <Icon name="linkedin" modifier={classes.icon} modifierExtra={classes.iconLinkedIn} />
            {linkedIn}
          </a>
        </li>
      </ul>
    </ModalOverlay>
  );
};

ContactMe.propTypes = {
  email: PropTypes.string.isRequired,
  linkedIn: PropTypes.string.isRequired,
};

export default ContactMe;
