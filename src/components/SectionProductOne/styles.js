import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-height: 740px;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.div`
  max-width: 60%;
  overflow: hidden;

  img {
    position: relative;
    left: -220px;
  }

  svg {
    position: relative;
    left: -20%;
    transform: translateX(-20%);
    max-height: 600px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    max-width: 450px;
    margin-bottom: 24px;

    color: var(--color-third);
    font-size: 32px;
    line-height: 45px;
  }

  span {
    color: #6a6a57;
    max-width: 500px;
    line-height: 26px;
    margin-bottom: 32px;
  }

  button {
    max-width: 40%;
    letter-spacing: 0.1em;
  }
`;
