import React from 'react';

import img1 from '../../assets/img/fiber-1.png';

import Button from '../Button';

import { Container, Image, Description } from './styles';

function SectionProductOne() {
  return (
    <Container>
      <Image>
        <img src={img1} alt="sou+ fibras" />
      </Image>

      <Description>
        <h1>
          Precisa do sabor de <br /> alimentos naturais feitos com amor?
        </h1>

        <span>
          Alimentos naturais feitos com carinho, sabor e qualidade. Tudo para
          dar a energia que você precisa para o seu dia.
        </span>

        <Button bgColor={`var(--color-third)`} color="#fff">
          COMPRAR AGORA
        </Button>
      </Description>
    </Container>
  );
}

export default SectionProductOne;
