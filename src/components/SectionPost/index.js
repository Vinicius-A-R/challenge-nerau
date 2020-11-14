import React, { useState } from 'react';

import Button from '../Button';
import Carousel from './Carousel';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import {
  Container,
  Description,
  ButtonArrowRight,
  ButtonArrowLeft,
  Overlay,
  Posts,
} from './styles';

function SectionPost() {
  const [right, setRight] = useState(0);
  const [left, setLeft] = useState(false);

  return (
    <Container>
      <Description>
        <h1>É a sua vez de fazer bem + feliz!</h1>

        <span>
          Os melhores sabores se misturam em várias publicações imperdíveis. Já
          conferiu? Fique por dentro de tudo que fazemos: acompanhe projetos que
          apoiamos, dicas, receitas e muito mais!
        </span>

        <Button bgColor={`var(--color-tertiary)`} color="#fff">
          FIQUE LIGADO
        </Button>
      </Description>

      <Posts>
        <ButtonArrowLeft onClick={() => setLeft((prev) => ++prev)}>
          <MdKeyboardArrowLeft />
        </ButtonArrowLeft>

        <Carousel btnRight={right} btnLeft={left} />

        <Overlay />

        <ButtonArrowRight onClick={() => setRight((prev) => ++prev)}>
          <MdKeyboardArrowRight />
        </ButtonArrowRight>
      </Posts>
    </Container>
  );
}

export default SectionPost;
