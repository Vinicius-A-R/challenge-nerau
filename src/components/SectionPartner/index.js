import React from 'react';

import Button from '../../components/Button';

import img1 from '../../assets/img/partner.png';

import { Container, Description } from './styles';

function SectionPartner() {
  return (
    <Container>
      <Description>
        <h2>Seja nosso parceiro</h2>

        <span>
          Produtos saudáveis com o melhor sabor: Felicidade. Além de deixarem
          seus clientes felizes, os sabores da Logo Ipsum têm tudo para te
          ajudar a vender mais.
        </span>

        <Button color={`var(--color-secondary)`}>QUERO REVENDER</Button>
      </Description>

      <img src={img1} alt="logo ipsum" />
    </Container>
  );
}

export default SectionPartner;
