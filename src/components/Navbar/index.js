import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';
import SelectLanguage from '../SelectLanguage';

import MenuOption from './MenuOption';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { Container, NavDesk, NavLink } from './styles';

function Navbar() {
  const [show, setShow] = useState({
    products: false,
  });

  const showMenu = (menu) => {
    if (menu === 'products') {
      setShow({ ...show, products: !show.products });
    }
  };

  return (
    <Container active={show.products}>
      <Link to="/" className="logo">
        <Logo />
      </Link>

      <NavDesk active={show.products}>
        <NavLink
          to={'#'}
          label="Nossos Produtos"
          route="#"
          onClick={() => showMenu('products')}
        >
          Nossos Produtos
        </NavLink>
        <NavLink to={'/company'}>Logo Ipsum Transforma</NavLink>
        <NavLink to={'/location'}>Onde Encontrar</NavLink>

        <Button border={'var(--color-primary-light)'}>COMPRAR AGORA</Button>

        <SelectLanguage active={show.products} />
      </NavDesk>

      <MenuOption products={show.products} />
    </Container>
  );
}

export default Navbar;
