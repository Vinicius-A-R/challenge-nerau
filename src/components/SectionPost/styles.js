import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;

  width: 100%;
  height: 546px;
  max-width: 1200px;

  margin: 0 auto;
  padding-left: 64px;

  overflow-x: hidden;

  background: rgba(70, 152, 202, 1);
  background: linear-gradient(
    90deg,
    rgba(49, 124, 170, 1) 55%,
    rgba(0, 0, 0, 0) 45%
  );
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 394px;

  h1 {
    max-width: 340px;

    color: var(--color-third);
    font-size: 38px;
    line-height: 45px;
  }

  span {
    color: #fff;
    padding: 24px 0 32px;
  }

  button {
    max-width: 176px;
    letter-spacing: 0.15em;
  }
`;

export const Posts = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;

  overflow-x: scroll;
  overflow-y: hidden;

  width: 100%;
  margin-left: 32px;

  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
`;

export const ButtonArrowRight = styled.button.attrs({
  type: 'button',
})`
  z-index: 999;

  position: absolute;
  right: 0;
  top: 95%;
  transform: translateY(-95%);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  margin-right: 8px;

  border-radius: 50%;
  background-color: var(--color-secondary);

  svg {
    color: #fff;
    font-size: 20px;
  }

  &:hover {
    filter: brightness(90%);
  }
`;

export const ButtonArrowLeft = styled.button.attrs({
  type: 'button',
})`
  z-index: 999;

  position: absolute;
  right: 0;
  top: 80%;
  transform: translateY(-80%);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  margin-right: 8px;

  border-radius: 50%;
  background-color: var(--color-secondary);

  svg {
    color: #fff;
    font-size: 20px;
  }

  &:hover {
    filter: brightness(90%);
  }
`;

export const Overlay = styled.div`
  position: absolute;

  width: 10%;
  height: 100%;

  top: 0;
  right: 0;

  background: rgb(255, 255, 255);
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 1) 5%,
    rgba(0, 0, 0, 0) 90%
  );
`;
