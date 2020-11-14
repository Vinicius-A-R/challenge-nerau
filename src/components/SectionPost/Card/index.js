import React from 'react';

import { Container, Description } from './styles';

function Card({ title, description, image }) {
  return (
    <Container>
      <img src={image} alt={title} />

      <Description>
        <h2>{title}</h2>

        <span>{description}</span>

        <button>Continue lendo</button>
      </Description>
    </Container>
  );
}

export default Card;
