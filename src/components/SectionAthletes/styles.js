import styled, { css } from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 100px;

  @media screen and (max-width: 768px) {
    padding: 0 16px;
    margin-bottom: 50px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 24px;

  h2 {
    color: var(--color-fourth);
    font-size: 38px;
    font-weight: 700;
    text-align: center;
    line-height: 45px;
  }

  span {
    max-width: 700px;
    margin-top: 16px;

    color: #6a6a57;
    font-size: 16px;
    text-align: center;
    line-height: 26px;
    letter-spacing: 0.03em;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 32px;
    }
  }
`;

export const Tags = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-gap: 6px;

  max-width: 100%;
  margin-bottom: 32px;
`;

export const Tag = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 164px;
  height: 34px;

  color: var(--color-fourth);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  border-radius: 30px;
  border: 1px solid var(--color-fourth);

  cursor: pointer;

  svg {
    margin-right: 12px;
  }

  svg path {
    fill: var(--color-fourth);
  }

  ${({ active }) =>
    active &&
    css`
      color: #fff;
      background-color: var(--color-fourth);

      svg path {
        fill: #fff;
      }
    `}

  @media screen and (max-width: 768px) {
    max-width: 120px;
    padding: 8px 8px;

    font-size: 10px;

    svg {
      height: 16px;
      margin-right: 8px;
    }
  }
`;

export const Slider = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
`;

export const ButtonArrow = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  color: #fff;
  font-size: 24px;
  border-radius: 50%;
  background-color: var(--color-fourth);

  &:nth-of-type(1) {
    position: absolute;
    left: -20px;
    top: 42%;
    transform: translateY(-42%);
  }

  &:nth-of-type(2) {
    position: absolute;
    right: -20px;
    top: 42%;
    transform: translateY(-42%);
  }
`;

export const NotFound = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 354px;

  color: #222;
  font-size: 48px;
  font-weight: 700;

  text-align: center;
  text-transform: uppercase;

  transition: all 0.3s ease-in-out;
`;
