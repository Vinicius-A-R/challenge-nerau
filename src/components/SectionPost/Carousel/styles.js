import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;

  overflow-x: scroll;
  scroll-behavior: smooth;

  width: 100%;
  margin-left: 32px;

  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;
