import styled from 'styled-components';

import bgImg from '../../assets/img/bg-instagram.png';

export const Container = styled.section`
  position: relative;

  display: flex;
  flex-direction: row;

  width: 100%;
  height: 320px;
  max-width: 1200px;
  margin: 100px auto;

  background: url(${bgImg}) no-repeat;
`;

export const Description = styled.div`
  width: 100%;
  height: 100%;
  max-width: 400px;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */

  svg {
    color: #b0008e;
    font-size: 40px;
  }

  h2 {
    color: #606395;
    font-size: 38px;
    font-weight: 700;
    line-height: 45px;
    margin: 32px 0 16px;
  }

  span {
    color: #e31c79;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.1em;
  }
`;

export const Carousel = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  overflow-x: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 0;
  }

  img {
    width: 288px;
    height: 288px;
    margin-right: 24px;
  }
`;

export const ButtonArrow = styled.button.attrs({
  type: 'button',
})`
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  color: #fff;
  font-size: 18px;
  border-radius: 50%;
  background-color: #e31c79;

  &:hover {
    filter: brightness(90%);
  }
`;
