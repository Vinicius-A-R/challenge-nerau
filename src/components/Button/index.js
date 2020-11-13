import React from 'react';

import { Container } from './styles';

export default function Button({ children, bgColor, border, color }) {
  return (
    <Container bgColor={bgColor} border={border} color={color}>
      {children}
    </Container>
  );
}
