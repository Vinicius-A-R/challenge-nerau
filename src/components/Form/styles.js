import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  max-width: 100%;

  button {
    letter-spacing: 0.2em;
  }

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px 16px;

    margin-top: 24px;

    button {
      grid-column: span 2;
      justify-self: center;

      max-width: 60%;
    }
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;

  label {
    margin-bottom: 16px;

    color: #e9ecef;
    font-size: 12px;
    letter-spacing: 0.1em;
  }

  input {
    width: 255px;
    height: 48px;
    padding: 0 16px;

    color: #e9ecef;
    border: 1px solid #e9ecef;
    background-color: #03257e;

    &::placeholder {
      color: #e9ecef;
    }
  }

  @media screen and (max-width: 768px) {
    margin: 0;

    input {
      width: 100%;
    }

    label {
      display: none;
    }
  }
`;
