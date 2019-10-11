import React, { useEffect } from 'react';
import { createUseStyles} from 'react-jss';
import { getIsTouch } from '../helper/is-touch';
import VideoBackground from './VideoBackground';
import LayoutContainer from './common/layout/Container';
import Header from './Header';
import Main from './Main';
import { reset } from '../styles/reset';

const App = () => {
  useEffect(() => {
    getIsTouch() ? document.body.classList.add('is-touch') :  document.body.classList.add('is-not-touch');
  },[]);
  useStyles();

  return (
    <>
      <VideoBackground />
      <LayoutContainer>
        <Header />
        <Main />
      </LayoutContainer>
    </>
  );
}

const useStyles = createUseStyles({
  '@global': reset
});

export default App;
