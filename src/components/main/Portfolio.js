import React from 'react';
import { createUseStyles } from 'react-jss';
import ModalOverlay from '../common/ModalOverlay';
import Icon from '../common/Icon';

const Portfolio = ({data}) => {
  const classes = useStyles();

  const items = data.map((item, i) =>
    <li key={i} className={classes.item}>
      <h3 className={classes.title}>{item.title}</h3>
      <a className={classes.link} href={item.url} target='_blank' rel='noopener noreferrer'>
        <span className={classes.linkText}>{item.url.replace(/^https?:\/\//,'')}</span>
      </a>
      <h4 className={classes.subTitle}>Summary</h4>
      <p className={classes.description} dangerouslySetInnerHTML={{ __html: item.summary }} />
      <h4 className='c-portfolio__sub-title'>Technology used</h4>
      <div className='c-portfolio__tech-stack'>
        {item.technology.map((item, i) => <Icon key={i} name={item} modifier={classes.icon} />)}
      </div>
    </li>
  );

  return (
    <ModalOverlay title='Portfolio' showButton={true} buttonAnimationType='slide-in-up'>
      <ul className={classes.portfolio}>
        {items}
      </ul>
    </ModalOverlay>
  );
};

const useStyles = createUseStyles(theme => ({
  portfolio: {
    color: theme.colors.tertiary,
    lineHeight: theme.goldenRatio
  },
  item: {
    margin: `${theme.indent * 2}rem 0 0`,
    padding: `${theme.indent * 2}rem 0 0`,
    borderTop: `.1rem solid ${theme.colors.primary}`
  },
  title: {
    fontSize: '2.4rem',
    textTransform: 'uppercase'
  },
  link: {
    display: 'block',
  },
  linkText: {
    display: 'inline-block',
    borderBottom: `.1rem solid ${theme.colors.tertiary}`
  },
  subTitle: {
    margin: `${theme.indent * 2}rem 0 0`,
  },
  description: {
    margin: `${theme.indent}rem 0 0`,
  },
  icon: {
    top: 0,
    margin: `${theme.indent}rem ${theme.indent}rem 0 0`,
    width: '2.4rem',
    height: '2.4rem'
  },
}));

export default Portfolio;
