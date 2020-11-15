import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  button {
    letter-spacing: 0.2em;
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
`;
