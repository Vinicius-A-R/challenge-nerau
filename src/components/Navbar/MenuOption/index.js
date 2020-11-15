import React from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../../assets/img/product-1.png';
import img2 from '../../../assets/img/product-2.png';
import img3 from '../../../assets/img/product-3.png';
import img4 from '../../../assets/img/product-4.png';
import img5 from '../../../assets/img/product-5.png';
import img6 from '../../../assets/img/product-6.png';
import img7 from '../../../assets/img/product-7.png';
import img8 from '../../../assets/img/product-8.png';
import img9 from '../../../assets/img/product-9.png';
import img10 from '../../../assets/img/product-10.png';

import Card from './Card';

import { Container, Products } from './styles';

function MenuOption({ products }) {
  return (
    <Container active={products}>
      <Link to="/products">Ver todos os produtos</Link>

      {products && (
        <Products>
          <Card image={img1} title="Granolas" />
          <Card image={img2} title="Granolas" />
          <Card image={img3} title="Granolas" />
          <Card image={img4} title="Granolas" />
          <Card image={img5} title="Granolas" />
          <Card image={img6} title="Granolas" />
          <Card image={img7} title="Granolas" />
          <Card image={img8} title="Granolas" />
          <Card image={img9} title="Granolas" />
          <Card image={img10} title="Granolas" />
        </Products>
      )}
    </Container>
  );
}

export default MenuOption;
