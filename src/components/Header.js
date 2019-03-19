import React from 'react';

const Header = () => {
  return (
    <header className='l-header' data-role='banner'>
      <div className='c-logo v-animation v-animation--roll-in'>
        <svg viewBox='0 0 254 254' xmlns='http://www.w3.org/2000/svg'>
          <g>
            <ellipse className='c-logo__ellipse' ry='126' rx='126' id='svg_1' cy='126.75' cx='126.75'
                     strokeWidth='2' fill='none'/>
            <ellipse className='c-logo__ellipse' ry='55' rx='55' id='svg_7' cy='127' cx='127' strokeWidth='2'
                     fill='none'/>
            <line className='c-logo__line' strokeLinecap='null' strokeLinejoin='null' id='svg_8' y2='127'
                  x2='229.559739' y1='127' x1='24.440262' strokeWidth='2' fill='none'/>
          </g>
        </svg>
      </div>
    </header>
  );
};

export default Header;
