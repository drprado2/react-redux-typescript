import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/global.scss';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Routes from './routes';
import { store, StoreState } from './store';

console.log(
  `Print custom variable, must have REACT_APP_ preffix: ${process.env.REACT_APP_ADRIANO}`,
  process.env,
);

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <Router>
      <Routes />
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
