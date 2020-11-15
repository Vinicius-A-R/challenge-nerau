import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 288px;
  margin-right: 16px;

  img {
    width: 288px;
    height: 288px;
  }

  h3 {
    color: var(--color-fourth);
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;

    margin: 12px 0;
  }

  span {
    text-align: center;
  }
`;

function Card({ image, title, text }) {
  return (
    <Container>
      <img src={image} alt={title} />

      <h3>{title}</h3>

      <span>{text}</span>
    </Container>
  );
}

export default Card;
