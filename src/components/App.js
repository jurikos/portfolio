import React, { useEffect } from 'react';
import { getIsTouch } from '../helper/is-touch';
import { JssProvider, ThemeProvider } from 'react-jss';
import VideoBackground from './VideoBackground';
import Header from './Header';
import Main from './Main';
import { theme } from '../styles/theme.js';
import '../styles/styles.scss';

const App = () => {
  useEffect(() => {
    getIsTouch() ? document.body.classList.add('is-touch') :  document.body.classList.add('is-not-touch');
  },[]);

  return (
    <JssProvider id={{minify: true}}>
      <ThemeProvider theme={theme}>
        <VideoBackground />
        <div className='l-container'>
          <Header />
          <Main />
        </div>
      </ThemeProvider>
    </JssProvider>
  );
}

export default App;
