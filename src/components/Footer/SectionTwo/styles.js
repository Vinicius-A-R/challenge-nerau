import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  background-color: #012665;
`;

export const Content = styled.div`
  margin: 0 auto;
  padding: 72px 0 32px;
  max-width: 1200px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 32px 0 32px;
  }
`;

export const BlockThree = styled.div`
  width: 100%;
  padding: 0 16px;
`;

export const SocialMedia = styled.div`
  h3 {
    color: #f8f9fa;
    font-size: 14px;
    letter-spacing: 0.15em;
  }

  div {
    margin-top: 16px;

    svg {
      color: #56ccf2;
      font-size: 24px;
      margin: 0 8px;
    }
  }

  @media screen and (max-width: 768px) {
    div {
      display: flex;
      justify-content: center;
      width: 100%;

      svg {
        font-size: 32px;
      }
    }

    h3 {
      text-align: center;
    }
  }
`;

export const Pay = styled.div`
  max-width: 272px;
  margin-top: 32px;

  h3 {
    color: #f8f9fa;
    font-size: 14px;
    letter-spacing: 0.15em;
    margin-bottom: 24px;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;

    h3 {
      text-align: center;
    }
  }
`;

export const Sustainable = styled.div`
  margin-top: 64px;

  h3 {
    color: #f8f9fa;
    font-size: 14px;
    letter-spacing: 0.15em;
    margin-bottom: 24px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 32px;

    h3 {
      text-align: center;
    }
  }
`;
