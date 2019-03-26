import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';

import store from './store';

import App from './components/App';
import ErrorBoundary from './components/error-boundary';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={ store }>
    <ErrorBoundary>
      <Router>
        <App />
      </Router>
    </ErrorBoundary>
  </Provider>
  , document.getElementById('root'));

serviceWorker.register();
