import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/global.scss';
import SignIn from "./pages/SignIn";
import {Provider} from 'react-redux';
import {store, persistor} from "./store";
import { PersistGate } from 'redux-persist/integration/react'
import Routes from "./routes";

console.log(
  `Print custom variable, must have REACT_APP_ preffix: ${process.env.REACT_APP_ADRIANO}`,
  process.env,
);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <Routes />
          </PersistGate>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

