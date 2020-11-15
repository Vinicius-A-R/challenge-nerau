import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  padding: 12px 16px;

  &:hover {
    color: var(--color-secondary);
  }
`;

export default function NavLink({ label, route }) {
  return <Container to={route || '/'}> {label}</Container>;
}
