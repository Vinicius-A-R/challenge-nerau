import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    width: 120px;
    height: 80px;

    cursor: pointer;
  }
`;

export const NavDesk = styled.div`
  display: flex;
`;
