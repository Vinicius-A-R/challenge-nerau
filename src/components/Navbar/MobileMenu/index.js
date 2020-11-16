import React from 'react';
import { Link } from 'react-router-dom';

import { useMenu } from '../../../context/Menu';

import SelectLanguage from '../../SelectLanguage';
import Button from '../../Button';

import { Container } from './styles';

function MobileMenu({ show }) {
  const { active, setActive } = useMenu();

  return (
    <Container show={show} onClick={() => setActive(!active)}>
      <SelectLanguage />

      <Link to={'/products'} label="Nossos Produtos" route="#">
        Nossos Produtos
      </Link>
      <Link to={'/company'}>Logo Ipsum Transforma</Link>
      <Link to={'/location'}>Onde Encontrar</Link>

      <Button border={'var(--color-primary-light)'}>COMPRAR AGORA</Button>
    </Container>
  );
}

export default MobileMenu;
