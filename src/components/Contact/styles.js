import styled from 'styled-components';

export const Container = styled.div`
  h3 {
    color: #fff;
    font-size: 14px;
    letter-spacing: 0.2em;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      margin-bottom: 12px;
    }
  }

  svg {
    font-size: 20px;
    margin-right: 12px;
  }

  a {
    color: var(--color-primary-light);
  }

  @media screen and (max-width: 768px) {
    margin: 0;
    margin-top: 12px;

    div {
      flex-direction: row;

      a {
        margin: 0 8px;
      }
    }

    a {
      margin: 0 8px;
    }

    svg {
      margin: 0;
    }
  }
`;
