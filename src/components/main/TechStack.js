import React from 'react';
import { createUseStyles } from 'react-jss';
import ModalOverlay from '../common/ModalOverlay';
import Icon from '../common/Icon';

const Item = ({stack}) => {
  return stack.map((item, i) =>
    <li key={i}><Icon name={item.icon}/> {item.title}</li>
  );
};

const TechStack = ({data}) => {
  const classes = useStyles();

  const listStack = data.map((item, i) =>
    <div className={classes.column} key={i}>
      <h2 className={classes.title}>{item.title}</h2>
      <ul className={classes.list}>
        <Item stack={item.stack} />
      </ul>
    </div>
  );

  return (
    <ModalOverlay title='Tech Stack' showButton={true} buttonType='secondary' buttonAnimationType='slide-in-left'>
      <div className={`${classes.listing} v-animation v-animation--zoom-in`}>
        {listStack}
      </div>
    </ModalOverlay>
  );
};

const useStyles = createUseStyles(theme => ({
  listing: {
    display: 'flex',
    flexWrap: 'wrap',
    lineHeight: theme.goldenRatio,
    color: theme.colors.tertiary
  },
  column: {
    flexBasis: '100%',
    paddingTop: `${theme.indent * 2 }rem`
  },
  title: {
    padding: `${theme.indent * 2 }rem 0 0`,
    fontSize: '2.4rem',
    borderTop: `.1rem solid ${theme.colors.primary}`
  },
  list: {
    padding: `${theme.indent * 2 }rem 0 0`,
    fontFamily: theme.font.family.secondary
  },
  [`@media (min-width: ${theme.breakpoints.medium})`]: {
    column: {
      flexBasis: '50%',
      paddingRight: `${theme.indent * 2 }rem`,
      paddingLeft: `${theme.indent * 2 }rem`,
    }
  },
  [`@media (min-width: ${theme.breakpoints.large})`]: {
    listing: {
      marginTop: `-${theme.indent * 2 }rem`,
      marginRight: `-${theme.indent * 2 }rem`,
      marginLeft: `-${theme.indent * 2 }rem`,
      width: '92rem'
    },
    column: {
      flexBasis: '33.3%'
    }
  },
}));


export default TechStack;
