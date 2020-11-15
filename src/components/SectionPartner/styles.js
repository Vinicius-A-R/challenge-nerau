import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 24px 0;

  margin: 0 auto;
  background-color: #f2f2ee;
  fill: solid;
`;

export const Description = styled.div`
  max-width: 422px;
  margin-right: 150px;

  h2 {
    color: var(--color-secondary);
    font-size: 38px;
    font-weight: 700;
    line-height: 45px;

    margin-bottom: 16px;
  }

  span {
    color: #6a6a57;
    font-size: 16px;
  }

  button {
    margin-top: 32px;
  }
`;
