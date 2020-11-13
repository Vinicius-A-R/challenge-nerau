import React from 'react';

import NavLink from './NavLink';
import Button from '../Button';

import { Container, NavDesk } from './styles';

function Navbar() {
  return (
    <Container>
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
