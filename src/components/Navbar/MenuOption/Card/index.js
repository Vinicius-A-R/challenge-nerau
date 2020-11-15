import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled(Link)`
  display: flex;
  flex-direction: column;

  max-width: 109px;
  margin-right: 16px;
  margin-top: 12px;

  img {
    height: 109px;
    border: 1px solid #ffd073;
    background-color: #edebec;
  }

  span {
    color: #6a6a57;
    margin-top: 12px;
    text-align: center;
    text-decoration: none;
  }
`;

function Card({ image, title }) {
  return (
    <Container to={`/products/${title.toLowerCase()}`}>
      <img src={image} alt={title} />

      <span>{title}</span>
    </Container>
  );
}

export default Card;
