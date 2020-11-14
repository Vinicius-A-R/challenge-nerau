import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vmax;
  max-height: 421px;
  max-width: 288px;
  margin-right: 24px;

  background-color: #fff;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;

  height: 100%;
  max-height: 234px;
  padding: 20px 16px;

  h2 {
    color: var(--color-primary);
    font-size: 18px;
    font-weight: 700;
    line-height: 23px;
  }

  span {
    margin: 16px 0;

    color: #6a6a57;
    font-size: 14px;
    line-height: 22px;
  }

  button {
    width: 135px;
    height: 35px;

    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0.1em;

    border: 1px solid #e0e0e0;

    transition: all 0.3s ease-out;
    /* transform: scale(0.9); */

    &:hover {
      color: var(--color-tertiary);
      border: 1px solid var(--color-tertiary);
    }
  }
`;
