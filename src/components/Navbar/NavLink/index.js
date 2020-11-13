import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  color: #fff;
  padding: 12px 16px;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid #222;
  }
`;

export default function NavLink({ label, route }) {
  return <Container to={route}>{label}</Container>;
}
