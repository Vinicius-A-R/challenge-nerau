import React from 'react';

import Button from '../Button';

import { Container, Input } from './styles';

function Form() {
  return (
    <Container>
      <Input>
        <label htmlFor="email">E-MAIL</label>
        <input type="email" name="email" placeholder="Seu e-mail" />
      </Input>

      <Input>
        <label htmlFor="name">E-MAIL</label>
        <input type="text" name="name" placeholder="Seu nome" />
      </Input>

      <Button color="var(--color-primary-dark)">RECEBA NOVIDADES</Button>
    </Container>
  );
}

export default Form;
