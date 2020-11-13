import React from 'react';

import img from '../../assets/img/fiber-1.svg';

import Button from '../Button';

import { Container, Description } from './styles';

function SectionProductOne() {
  return (
    <Container>
      <img src={img} alt="sou+ fibras" />

      <Description>
        <h1>Precisa do sabor de alimentos naturais feitos com amor?</h1>

        <span>
          Alimentos naturais feitos com carinho, sabor e qualidade. Tudo para
          dar a energia que você precisa para o seu dia.
        </span>

        <Button bgColor={`var(--color-tertiary)`} color="#fff">
          COMPRAR AGORA
        </Button>
      </Description>
    </Container>
  );
}

export default SectionProductOne;
