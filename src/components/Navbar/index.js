import React from 'react';
import { Link } from 'react-router-dom';

import NavLink from './NavLink';
import Button from '../Button';

import { ReactComponent as Logo } from '../../assets/logo.svg';
// import logo from '../../assets/logo.png';

import { Container, NavDesk } from './styles';

function Navbar() {
  return (
    <Container>
      <Link to="/" className="logo">
        <Logo />
        {/* <img src={logo} alt="logoipsum" /> */}
      </Link>

      <NavDesk>
        <NavLink label="Nossos Produtos" route="/products" />
        <NavLink label="Logo Ipsum Transforma" route="/" />
        <NavLink label="Onde Encontrar" route="/" />
        <Button border={'var(--color-primary-light)'}>COMPRAR AGORA</Button>
      </NavDesk>
    </Container>
  );
}

export default Navbar;
