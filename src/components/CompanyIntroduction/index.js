import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { Container, Description, Links, Copyright } from './styles';

function CompanyIntroduction() {
  return (
    <Container>
      <Logo className="logo" />

      <Description>
        A Logo Ipsum está sempre preocupada com a boa qualidade de ingredientes
        nutritivos e com sabor agradável. Tudo para produzir e levar até você
        refeições naturalmente deliciosas, repletas de energia nutritiva e muito
        amor. Que tal energizar todos os momentos do seu dia com o que há de
        melhor?
      </Description>

      <Links>
        <Link to="/help">Ajuda</Link>
        <Link to="/products">Nossos Produtos</Link>
        <Link to="/subscribe">Clube de assinaturas</Link>
        <Link to="/subscribe">Onde Encontrar</Link>
        <Link to="/subscribe">Fique Ligado</Link>
        <Link to="/subscribe">Faça parte da familia</Link>
      </Links>

      <Copyright>
        ALIMENTOS LOGO IPSUM LTDA - CNPJ: 00.000.000/0002-24 <br /> © Todos os
        direitos reservados
      </Copyright>
    </Container>
  );
}

export default CompanyIntroduction;
