import styled from 'styled-components';

export const Container = styled.div`
  z-index: 99;

  position: absolute;
  top: 0;
  left: 0;

  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-end;

  width: 100%;
  height: 100vh;
  padding: 104px 24px 0;

  background-color: var(--color-primary-dark);

  a {
    font-size: 24px;
    font-weight: 700;
    margin-top: 24px;
  }

  button {
    width: 60%;
    height: 56px;
    margin-top: 24px;

    font-size: 18px;
  }
`;
