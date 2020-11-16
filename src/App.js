import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import { Header, Footer } from './components';

import ScrollToTop from './components/ScrollToTop';

import GlobalStyles from './styles/global';

import MenuProvider from './context/Menu';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <MenuProvider>
        <Header />
      </MenuProvider>
      <Routes />
      <Footer />

      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
