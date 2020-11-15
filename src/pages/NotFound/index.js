import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
  width: 100%;
  height: calc(100vh - 942px);

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-size: 48px;
  font-weight: 700;
  background-color: #222;
`;

function NotFound() {
  return <Container>Página Não Encontrada</Container>;
}

export default NotFound;
