import styled from 'styled-components';

import cover from '../../assets/img/capa.png';

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 765px;
  max-height: 765px;

  background: url(${cover});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  z-index: 99;

  background: linear-gradient(
    180deg,
    #050626 0%,
    rgba(2, 2, 15, 0.381395) 21.83%,
    rgba(0, 1, 4, 0.0988803) 45.62%,
    rgba(0, 0, 0, 0) 57.12%
  );
`;

export const Filter = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  background: #0c225e;
  opacity: 0.58;
`;
