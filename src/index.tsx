import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/global.scss';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { store, persistor, StoreState } from './store';
import Routes from './routes';

console.log(
  `Print custom variable, must have REACT_APP_ preffix: ${process.env.REACT_APP_ADRIANO}`,
  process.env,
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
