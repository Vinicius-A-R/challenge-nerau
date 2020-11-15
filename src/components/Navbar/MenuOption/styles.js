import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 112px;
  left: 0;

  display: ${({ active }) => (active ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 259px;
  padding: 24px 16px 40px;

  border-top: 2px solid #dfe0ee;
  background-color: #fff;

  > a {
    color: #606395;
    font-size: 14px;
    font-weight: 700;
    text-decoration: underline;
  }
`;

export const Products = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  margin-top: 12px;
`;
