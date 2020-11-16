import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;

  overflow: hidden;

  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 255) 55%,
    rgba(0, 0, 0, 0) 45%
  );
`;

export const Description = styled.div`
  padding: 56px 0 40px 56px;
  width: 100vmax;
  max-width: 580px;

  h1 {
    margin-bottom: 56px;

    font-size: 38px;
    line-height: 45px;
    color: var(--color-secondary);
  }

  button {
    margin-top: 32px;
    letter-spacing: 0.15em;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;

  max-width: 422px;

  color: #4f4f40;
  font-size: 1rem;
  line-height: 26px;
  letter-spacing: 0.03em;

  & * + span {
    margin-top: 1rem;
  }
`;

export const Sport = styled.div`
  position: relative;

  width: 100%;

  img {
    filter: brightness(90%);
  }
`;

export const Play = styled.button.attrs({
  type: 'button',
})`
  z-index: 999;

  position: absolute;
  left: -55px;
  top: 50%;
  transform: translateY(-50%);

  width: 100px;
  height: 100px;
  border-radius: 50%;

  box-shadow: 0px 0px 12px 1px #424242;
  background-color: var(--color-secondary);

  svg {
    color: #fff;
    font-size: 18px;
  }

  &:hover {
    background-color: var(--color-secondary-dark);
  }
`;

export const Image = styled.div`
  img {
    filter: brightness(85%);
  }

  svg {
    position: absolute;
    left: 32px;
    top: 50px;

    height: 380px;
  }
`;
