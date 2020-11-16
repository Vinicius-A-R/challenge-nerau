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

  @media screen and (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const Description = styled.span`
  margin: 32px 0 24px;

  color: #fff;
  font-size: 12px;
  line-height: 16px;
  text-align: center;

  @media screen and (max-width: 768px) {
    margin: 16px 0;
  }
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

  @media screen and (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;

    a {
      width: 50%;
      margin: 0;
      padding: 16px;

      font-size: 10px;
      text-align: left;
    }
  }
`;

export const Copyright = styled.span`
  color: #8aa6d5;
  font-size: 12px;
  text-align: center;
  line-height: 16px;
`;
