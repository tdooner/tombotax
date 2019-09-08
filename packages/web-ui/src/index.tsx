import './index.css';

import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import * as serviceWorker from './serviceWorker';
import store from './stores/form';

store.subscribe(() => console.log('updated state: ', store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App
      basename={process.env.NODE_ENV === 'production' ? '/tombotax/' : ''}
    />
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
