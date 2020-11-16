import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.nav`
  z-index: 9999;
  position: relative;

  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ active }) => (active ? '#FFF' : 'transparent')};

  a {
    color: ${({ active }) => (active ? '#222 !important' : '#fff')};

    &:hover {
      color: var(--color-secondary) !important;
    }
  }

  .logo {
    width: 120px;
    height: 80px;

    cursor: pointer;
  }
`;

export const NavDesk = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  height: 100%;

  button {
    margin-left: 24px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMobile = styled.div`
  z-index: 999;

  position: absolute;
  top: 16px;
  right: 16px;

  display: none;
  align-items: center;
  justify-content: center;

  width: 64px;
  height: 64px;

  border-radius: 50%;
  background-color: var(--color-primary-dark);

  svg {
    color: #fff;
    font-size: 32px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  padding: 12px 16px;

  &:hover {
    color: var(--color-secondary);
  }
`;
