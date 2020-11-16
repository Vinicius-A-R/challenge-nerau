import React from 'react';
import styled from 'styled-components';

import img1 from '../../assets/img/payment-1.png';
import img2 from '../../assets/img/payment-2.png';
import img3 from '../../assets/img/payment-3.png';
import img4 from '../../assets/img/payment-4.png';
import img5 from '../../assets/img/payment-5.png';
import img6 from '../../assets/img/payment-6.png';
import img7 from '../../assets/img/payment-7.png';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  grid-gap: 12px;

  img {
    width: 57px;
    height: 37px;
  }
`;

function Payments() {
  return (
    <Container>
      <img src={img1} alt="visa" />
      <img src={img2} alt="boleto" />
      <img src={img3} alt="elo" />
      <img src={img4} alt="hipercard" />
      <img src={img5} alt="mastercard" />
      <img src={img6} alt="hiper" />
      <img src={img7} alt="american express" />
    </Container>
  );
}

export default Payments;
