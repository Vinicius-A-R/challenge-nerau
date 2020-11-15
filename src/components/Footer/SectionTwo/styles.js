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
      margin-right: 24px;
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
`;

export const Sustainable = styled.div`
  margin-top: 64px;

  h3 {
    color: #f8f9fa;
    font-size: 14px;
    letter-spacing: 0.15em;
    margin-bottom: 24px;
  }
`;
