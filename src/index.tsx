import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './components/app/App';
import { browserHistory } from './history';

function loadApp() {
  const isProd = process.env.NODE_ENV === 'production';
  return !isProd
    ? ReactDOM.render(
      <Router history={browserHistory}>
        <App />
      </Router>,
      document.getElementById('app')
    )
    : ReactDOM.hydrate(
      <Router history={browserHistory}>
        <App />
      </Router>,
      document.getElementById('app')
    );
}

loadApp();
