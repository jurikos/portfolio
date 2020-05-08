import React from 'react';
import ReactDOM from 'react-dom';
import { JssProvider, ThemeProvider } from 'react-jss';
import App from './components/App';
import theme from './styles/theme';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <JssProvider id={{ minify: true }}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </JssProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
