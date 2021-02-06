import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/global.scss';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SignIn from './pages/SignIn';
import { store, persistor } from './store';

console.log(
  `Print custom variable, must have REACT_APP_ preffix: ${process.env.REACT_APP_ADRIANO}`,
  process.env,
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SignIn />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
