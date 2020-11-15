import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;

  overflow-x: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
`;

function Carousel({ children }) {
  return <Container id="athletes-carousel">{children}</Container>;
}

export default Carousel;
