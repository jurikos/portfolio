import React from 'react';
import { createUseStyles } from 'react-jss';

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header} data-role='banner'>
      <a href='/portfolio' className={classes.logo}>
        <svg viewBox='0 0 254 254' xmlns='http://www.w3.org/2000/svg'>
          <g>
            <ellipse className={classes.svg} ry='126' rx='126' id='svg_1' cy='126.75' cx='126.75'
                     strokeWidth='2' fill='none'/>
            <ellipse className={classes.svg} ry='55' rx='55' id='svg_7' cy='127' cx='127' strokeWidth='2'
                     fill='none'/>
            <line className={classes.svg} strokeLinecap='null' strokeLinejoin='null' id='svg_8' y2='127'
                  x2='229.559739' y1='127' x1='24.440262' strokeWidth='2' fill='none'/>
          </g>
        </svg>
      </a>
    </header>
  );
};

const useStyles = createUseStyles(theme => ({
  header: {
    flexBasis: '100%'
  },
  logo: {
    display: 'none',
    margin: 'auto',
    width: '16rem',
    color: theme.color2,
    animation: '$rollIn 1s both',
    '&:hover svg': {
      strokeWidth: 2,
      strokeDasharray: 3319,
      strokeDashoffset: 3319,
      animationName: '$draw',
      animationDuration: '5s',
      animationIterationCount: 'infinite',
      animationFillMode: 'forwards',
      animationTimingFunction: 'linear'
    }
  },
  [`@media (min-width: ${theme.breakpoints.medium})`]: {
    logo: {
      display: 'block',
      width: '32rem',
    }
  },
  '@keyframes rollIn': {
    'from': {
      opacity: 0,
      transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)'
    },
    'to': {
      opacity: 1,
      transform: 'translate3d(0, 0, 0)'
    }
  },
  '@keyframes draw': {
    '90%': {
      strokeDashoffset: 0,
      strokeWidth: 2
    },
    '100': {
      strokeWidth: 2
    }
  }
}));

export default Header;
