import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vmax;
  max-width: 415px;
  max-height: 404px;

  background-color: #fff;

  svg {
    position: absolute;
    bottom: 30px;
    left: 20px;
  }

  span {
    padding: 20px 20px 16px 158px;

    color: #6a6a57;
    font-size: 16px;
    line-height: 26px;
  }

  @media screen and (max-width: 768px) {
    align-items: center;

    height: 100%;
    max-width: calc(50% - 16px);

    margin: 0 8px 16px;

    img {
      width: 100%;
    }

    svg {
      width: 64px;
      top: 50%;
      transform: translateY(-50%);
    }

    span {
      padding: 24px 16px;
      text-align: center;
    }
  }
`;
