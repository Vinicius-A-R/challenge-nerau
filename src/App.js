import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import { Header, Footer } from './components';

import GlobalStyles from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
