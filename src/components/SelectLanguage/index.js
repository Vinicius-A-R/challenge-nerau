import React from 'react';
import styled from 'styled-components';

const Container = styled.select`
  position: relative;

  width: 72px;
  padding: 12px 12px;
  margin-left: 24px;

  color: ${({ active }) => (active ? '#222' : '#fff')};
  font-weight: 700;
  border: 1px solid ${({ active }) => (active ? '#222' : '#e9ecef')};
  background-color: transparent;

  cursor: pointer;

  &::after {
    content: '';
    background-color: #777;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }

  option {
    color: #222;
  }
`;

function SelectLanguage({ active }) {
  return (
    <Container name="language" id="language" active={active}>
      <option value="BR">BR</option>
      <option value="EN">EN</option>
    </Container>
  );
}

export default SelectLanguage;
