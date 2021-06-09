import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, StyledEngineProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './theme';

ReactDOM.render(
  // TODO v5: remove once migration to emotion is completed
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <Provider store={store}>
          <CssBaseline />
          <App />
        </Provider>
      </React.StrictMode>
    </ThemeProvider>
  </StyledEngineProvider>,
  document.querySelector('#root')
);
