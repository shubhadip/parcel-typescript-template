import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './components/app/App';
import { browserHistory } from './history';

ReactDOM.render(
    <Router history={browserHistory}>
      <App />
    </Router>,
    document.getElementById('app')
  )