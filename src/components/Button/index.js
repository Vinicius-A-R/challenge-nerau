import React from 'react';

import { Container } from './styles';

export default function Button({ children, bgColor, border }) {
  return (
    <Container bgColor={bgColor} border={border}>
      {children}
    </Container>
  );
}
