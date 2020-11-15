import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Mountain } from '../../../assets/icons/mountain.svg';

import Form from '../../Form';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 180px;

  background-color: #03257e;

  span {
    max-width: 341px;
    margin-right: 72px;

    color: #fff;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
  }

  .mountain {
    position: absolute;
    top: 16px;
    left: 0;

    width: 464px;
    height: 231px;
  }
`;

function SectionOne() {
  return (
    <Container>
      <Mountain className="mountain" />

      <span>
        Quer receber receitas, dicas e <br /> promoções? Vem com a gente. ;)
      </span>

      <Form />
    </Container>
  );
}

export default SectionOne;
