import React, { Component } from 'react';

import VideoBackground from './VideoBackground';
import Header from './Header';
import Main from './Main';

import '../styles/global.scss';

class App extends Component {
  static isTouch() {
    return (('ontouchstart' in window)
      || (navigator.MaxTouchPoints > 0)
      || (navigator.msMaxTouchPoints > 0));
  }

  componentDidMount() {
    if (App.isTouch()) {
      document.body.classList.add('is-touch');
    } else {
      document.body.classList.add('is-not-touch');
    }
  }

  render() {
    return (
      <React.Fragment>
        <VideoBackground />
        <div className='l-container'>
          <Header />
          <Main />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
