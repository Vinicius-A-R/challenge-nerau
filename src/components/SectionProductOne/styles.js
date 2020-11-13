import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-height: 740px;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 50%;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  flex: 0.75;

  h1 {
    max-width: 500px;
    margin-bottom: 24px;

    color: var(--color-tertiary);
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
    max-width: 50%;
    letter-spacing: 0.1em;
  }
`;
