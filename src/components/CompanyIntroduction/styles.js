import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 389px;

  .logo {
    width: 184px;
    height: 124px;

    margin: 0 auto;
  }
`;

export const Description = styled.span`
  margin: 32px 0 24px;

  color: #fff;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  a {
    color: var(--color-primary-light);
    margin-top: 16px;
    font-size: 12px;
    letter-spacing: 0.1em;
    text-align: center;

    &:hover {
      filter: brightness(140%);
    }
  }
`;

export const Copyright = styled.span`
  color: #8aa6d5;
  font-size: 12px;
  text-align: center;
  line-height: 16px;
`;
