import styled from 'styled-components';

export const Container = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  margin-bottom: 100px;
  max-height: 720px;

  background: rgb(50, 134, 195);
  background: linear-gradient(
    180deg,
    rgba(50, 134, 195, 1) 50%,
    rgba(0, 0, 0, 0) 50%
  );
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 16px;

  h1 {
    color: #fff;
    font-size: 3rem;
    max-width: 607px;
  }

  span {
    font-size: 1rem;
    max-width: 238px;
  }

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 182px;
    height: 158px;
    padding: 0 48px;

    border-radius: 8px;
    background-color: #2e7bb2;

    svg {
      color: #6cadd5;
      font-size: 40px;
    }

    span {
      color: #fff;
      font-size: 16px;
      /* font-weight: 700; */
      line-height: 26px;
    }
  }
`;

export const Cards = styled.div`
  display: flex;

  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
`;
