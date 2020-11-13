import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vmax;
  max-height: 404px;
  max-width: 415px;
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
`;
