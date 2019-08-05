import React, { useEffect } from 'react';
import {getIsTouch} from '../helper/is-touch';
import VideoBackground from './VideoBackground';
import Header from './Header';
import Main from './Main';
import '../styles/global.scss';

const App = () => {
  useEffect(() => {
    getIsTouch() ? document.body.classList.add('is-touch') :  document.body.classList.add('is-not-touch');
  },[]);

  return (
    <>
      <VideoBackground />
      <div className='l-container'>
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
