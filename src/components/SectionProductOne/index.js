import React from 'react';

// import img from '../../assets/img/fiber-1.svg';
import { ReactComponent as Img } from '../../assets/img/fiber-1.svg';

import Button from '../Button';

import { Container, Image, Description } from './styles';

function SectionProductOne() {
  return (
    <Container>
      <Image>
        {/* <img src={img} alt="sou+ fibras" /> */}
        <Img />
      </Image>

      <Description>
        <h1>Precisa do sabor de alimentos naturais feitos com amor?</h1>

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
