import { theme } from './theme';

export const reset = {
  '@-ms-viewport': {
    width: 'device-width'
  },
  '*': {
    boxSizing: 'inherit',
    '&:before': {
      boxSizing: 'inherit'
    },
    '&:after': {
      boxSizing: 'inherit'
    },
    '&:focus': {
      outline: 'none'
    },
  },
  '::selection': {
    background: theme.colors.primary,
    color: theme.colors.secondary
  },
  '::-moz-focus-inner': {
    padding: 0,
    border: 0
  },
  html: {
    boxSizing: 'border-box',
    '-ms-overflow-style': 'scrollbar',
    '-ms-text-size-adjust': '100%',
    '-webkit-text-size-adjust': '100%',
    fontSize: '62.5%',
    lineHeight: 1.15
  },
  body: {
    margin: 0,
    fontFamily: theme.font.family.primary,
    fontWeight: theme.font.weight.normal,
    fontSize: theme.font.size.primary,
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    backgroundColor: theme.colors.tertiary,
    color: theme.colors.secondary,
    lineHeight: 1,
    overflowX: 'hidden',
    display: 'flex',
    alignItems: 'center',
    flexBasis: '100%',
    minHeight: '100vh',
  },
  'h1, h2, h3, h4': {
    margin: 0,
  },
  'h1, h2': {
    fontWeight: theme.font.weight.bold
  },
  'p, ul': {
    margin: 0,
  },
  'ul': {
    padding: 0,
    listStyleType: 'none'
  },
  'a, button': {
    color: 'inherit',
    cursor: 'pointer',
    transition: theme.transitionDuration
  },
  a: {
    textDecoration: 'none'
  },
  button: {
    overflow: 'visible',
    font: 'inherit',
    color: 'inherit',
    '-webkit-font-smoothing': 'inherit',
    letterSpacing: 'inherit',
    background: 'none'
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
    border: 0
  },
  svg: {
    margin: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    fill: 'currentColor',
    stroke: 'currentColor',
    '&:not(:root)': {
      overflow: 'hidden'
    }
  },
  use: {
    pointerEvents: 'none'
  },
  '#root': {
    flexBasis: '100%'
  }
};
