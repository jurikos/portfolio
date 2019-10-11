import React from 'react';
import { createUseStyles } from 'react-jss';
import { useCacheContent } from '../hooks/cache-content';
import Loading from './common/Loading';
import TechStack from './main/TechStack';
import Portfolio from './main/Portfolio';
import ContactMe from './main/ContactMe';

const Main = () => {
  const classes = useStyles();
  const content = useCacheContent();

  return (
    <main className={classes.main} data-role='main'>
      <div className={classes.content}>
        {content ?
          <>
            <h1 className={classes.heading} dangerouslySetInnerHTML={{ __html: content.title }} />
            <article className={classes.text} dangerouslySetInnerHTML={{ __html: content.summary }} />
            <div className={classes.cta}>
              <TechStack data={content.techStack} />
              <Portfolio data={content.portfolio} />
              <ContactMe email={content.contact.email} linkedIn={content.contact.linkedIn} />
            </div>
          </>
          : <Loading />}
      </div>
    </main>
  );
}

const useStyles = createUseStyles(theme => ({
  main: {
    flexBasis: '100%'
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    lineHeight: theme.goldenRatio
  },
  heading: {
    flexBasis: '100%',
    position: 'relative',
    padding: 0,
    textAlign: 'center',
    fontSize: '5rem',
    lineHeight: 1.2,
    backgroundSize: '100%',
    backgroundImage: `linear-gradient(45deg,${theme.colors.secondary} 0%, ${theme.colors.secondary} 35%, ${theme.colors.primary} 66%, ${theme.colors.primary} 100%)`,
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    animation: '$slideInDown 1s both',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: `-${theme.indent * 2}rem`,
      left: '50%',
      width: '20%',
      marginLeft: '-10%',
      height: '.6rem',
      background: theme.colors.primary,
      borderRadius: '.2rem'
    }
  },
  text: {
    flexBasis: '100%',
    order: 2,
    margin: 'auto',
    padding: `${theme.indent * 4}rem 0 0`,
    animation: '$fadeInUp 1s both',
  },
  cta: {
    flexBasis: '100%',
    order: 1,
    padding: `${theme.indent * 4}rem 0 0`,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  [`@media (min-width: ${theme.breakpoints.medium})`]: {
    heading: {
      padding: `${theme.indent * 4}rem 0 ${theme.indent * 2}rem`,
      fontSize: '8rem',
      '&:after': {
        bottom: 0
      }
    },
    text: {
      order: 1
    },
    cta: {
      order: 2
    }
  },
  [`@media (min-width: ${theme.breakpoints.large})`]: {
    heading: {
      fontSize: '12rem',
      '&:after': {
        height: '1.2rem',
        borderRadius: '.6rem'
      }
    },
    text: {
      flexBasis: '70%'
    }
  },
  [`@media (min-width: ${theme.breakpoints.huge})`]: {
    text: {
      flexBasis: '50%'
    }
  },
  '@keyframes slideInDown': {
    'from': {
      transform: 'translate3d(0, -100%, 0)',
      visibility: 'visible'
    },
    'to': {
      transform: 'translate3d(0, 0, 0)',
    }
  },
  '@keyframes fadeInUp': {
    'from': {
      opacity: 0,
      transform: 'translate3d(0, 100%, 0)'
    },
    'to': {
      opacity: 1,
      transform: 'translate3d(0, 0, 0)'
    }
  }
}));

export default Main;
