import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../../assets/logo-nerau.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 32px 0;
  background-color: #002053;
`;

function SectionThree() {
  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>
    </Container>
  );
}

export default SectionThree;
