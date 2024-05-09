// Packages
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

// Contexts
import { GlobalContextProvider } from 'contexts/globalContext';

// Routes
import { Router } from 'router';

// Styles
import { GlobalStyle } from 'styles/global';
import { defaultTheme } from 'styles/theme/default';
import 'react-toastify/dist/ReactToastify.css';

const App = (): ReactElement => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <GlobalContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </GlobalContextProvider>

      <ToastContainer position="top-center" />
    </ThemeProvider>
  );
};

export default App;
