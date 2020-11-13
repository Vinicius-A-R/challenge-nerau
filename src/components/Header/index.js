import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import Navbar from '../Navbar';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <Logo />

      <Navbar />
    </Container>
  );
}

export default Header;
