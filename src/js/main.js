/**
 * Main entry point, connect app to the store and include all scss
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import buildStore from './store/Store';

require('../css/main.scss');

const store = buildStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));
