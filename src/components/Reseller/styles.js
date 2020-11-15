import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 394px;
  margin-top: 24px;
  padding: 24px 32px;
  border: 2px solid #56ccf2;

  h3 {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.03em;

    max-width: 249px;
  }

  > span {
    width: 340px;
    padding: 12px 0 24px;

    color: #8aa6d5;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.08em;
  }

  button {
    max-width: 247px;
    letter-spacing: 0.1em;
  }
`;
