import styled from 'styled-components';

export const Container = styled.button.attrs({
  type: `${(type) => (type ? `${type}` : 'button')}`,
})`
  height: 48px;
  padding: 0 24px;
  margin: 0 16px;

  color: ${({ color }) => (color ? `${color}` : 'var(--color-primary-light)')};
  font-weight: 700;

  border: 2px solid ${({ border }) => (border ? `${border}` : 'transparent')};
  border-radius: 24px;
  background-color: ${({ bgColor }) => (bgColor ? `${bgColor}` : '#fff')};

  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
