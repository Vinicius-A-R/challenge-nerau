import React from 'react';

import Button from '../Button';

import { Container } from './styles';

function Reseller() {
  return (
    <Container>
      <h3>Produtos saudáveis com o melhor sabor: felicidade.</h3>

      <span>
        Além de deixarem seus clientes felizes, os sabores da Logo Ipsum têm
        tudo para te ajudar a vender mais.
      </span>

      <Button bgColor="#56CCF2" color="#03257E">
        SEJA UM REVENDEDOR
      </Button>
    </Container>
  );
}

export default Reseller;
