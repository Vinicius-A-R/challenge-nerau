import React from 'react';
import styled from 'styled-components';

import img1 from '../../assets/img/sustainable-1.png';
import img2 from '../../assets/img/sustainable-2.png';
import img3 from '../../assets/img/sustainable-3.png';
import img4 from '../../assets/img/sustainable-4.png';
import img5 from '../../assets/img/sustainable-5.png';
import img6 from '../../assets/img/sustainable-6.png';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px 24px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

function Sustainability() {
  return (
    <Container>
      <img src={img1} alt="organico brasil" />
      <img src={img2} alt="sb" />
      <img src={img3} alt="eureciclo" />
      <img src={img4} alt="ibd" />
      <img src={img5} alt="usda organic" />
      <img src={img6} alt="reviews verdadeiros" />
    </Container>
  );
}

export default Sustainability;
