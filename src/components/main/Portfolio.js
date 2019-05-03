import React from 'react';

import ModalOverlay from '../ModalOverlay';
import Icon from '../Icon';

const Portfolio = (props) => {
  return (
    <ModalOverlay title='Portfolio' showButton={true} buttonAnimationType='slide-in-right'>
      <ul className='c-portfolio'>
        <li className='c-portfolio__item'>
          <h3 className='c-portfolio__title'>Logistar Group Corporate Website</h3>
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a className='c-portfolio__link' href='https://www.logistar.ee' target='_blank'>
            <span>www.logistar.ee</span>
          </a>
          <h4 className='c-portfolio__sub-title'>Summary</h4>
          <p className='c-portfolio__description'>
            Corporate website built with headless CMS approach using React as frontend and WordPress as a backend.
            It also uses react-snap static pre-renderer for SEO purposes.
          </p>
          <h4 className='c-portfolio__sub-title'>Technology used</h4>
          <div className='c-portfolio__tech-stack'>
            <Icon name='wordpress'/>
            <Icon name='php'/>
            <Icon name='webpack'/>
            <Icon name='react'/>
            <Icon name='html5'/>
            <Icon name='sass'/>
          </div>
        </li>
        <li className='c-portfolio__item'>
          <h3 className='c-portfolio__title'>HellyHansen eCommerce Website</h3>
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a className='c-portfolio__link' href='https://www.hellyhansen.com' target='_blank'>
            <span>www.hellyhansen.com</span>
          </a>
          <h4 className='c-portfolio__sub-title'>Summary</h4>
          <p className='c-portfolio__description'>
            eCommerce website for famous clothing brand built on Magento 2 platform.
          </p>
          <h4 className='c-portfolio__sub-title'>Technology used</h4>
          <div className='c-portfolio__tech-stack'>
            <Icon name='magento'/>
            <Icon name='php'/>
            <Icon name='grunt'/>
            <Icon name='jquery'/>
            <Icon name='html5'/>
            <Icon name='less'/>
          </div>
        </li>
        <li className='c-portfolio__item'>
          <h3 className='c-portfolio__title'>Kaubamaja eCommerce Website</h3>
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a className='c-portfolio__link' href='https://www.kaubamaja.ee' target='_blank'>
            <span>www.kaubamaja.ee</span>
          </a>
          <h4 className='c-portfolio__sub-title'>Summary</h4>
          <p className='c-portfolio__description'>
            eCommerce website for Estonia's oldest &amp; largest department store built on Magento 1 platform.
          </p>
          <h4 className='c-portfolio__sub-title'>Technology used</h4>
          <div className='c-portfolio__tech-stack'>
            <Icon name='magento'/>
            <Icon name='php'/>
            <Icon name='gulp'/>
            <Icon name='jquery'/>
            <Icon name='html5'/>
            <Icon name='sass'/>
          </div>
        </li>
        <li className='c-portfolio__item'>
          <h3 className='c-portfolio__title'>Selver eCommerce Website</h3>
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a className='c-portfolio__link' href='https://www.kaubamaja.ee' target='_blank'>
            <span>www.selver.ee</span>
          </a>
          <h4 className='c-portfolio__sub-title'>Summary</h4>
          <p className='c-portfolio__description'>
            eCommerce website for Estonia's largest super and hypermarkets chain built on Magento 1 platform.
          </p>
          <h4 className='c-portfolio__sub-title'>Technology used</h4>
          <div className='c-portfolio__tech-stack'>
            <Icon name='magento'/>
            <Icon name='php'/>
            <Icon name='gulp'/>
            <Icon name='jquery'/>
            <Icon name='html5'/>
            <Icon name='sass'/>
          </div>
        </li>
      </ul>
    </ModalOverlay>
  );
};

export default Portfolio;
