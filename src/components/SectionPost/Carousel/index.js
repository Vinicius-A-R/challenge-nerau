import React, { useState, useEffect } from 'react';

import img1 from '../../../assets/img/post-1.png';
import img2 from '../../../assets/img/post-2.png';
import img3 from '../../../assets/img/post-3.png';

import Card from '../Card';

import { Container } from './styles';

function Carousel({ btnRight, btnLeft }) {
  const [right, setRight] = useState(0);
  const [left, setLeft] = useState(0);

  useEffect(() => {
    scrollCarousel();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [btnRight, btnLeft]);

  const scrollCarousel = () => {
    let scroll = document.getElementById('post-carousel');

    if (btnRight > right) {
      scroll.scrollLeft += 288 + 24;
      setRight((prev) => ++prev);
    }

    if (btnLeft > left) {
      scroll.scrollLeft -= 288 + 24;
      setLeft((prev) => ++prev);
    }
  };

  return (
    <Container id="post-carousel">
      <Card
        title="Alimentos funcionais: três opções para incluir na dieta
"
        description="A busca pela boa alimentação é importante como um sinônimo de saúde."
        image={img1}
      />
      <Card
        title="Projeto de Alfabetização da Logo Ipsum na Fazenda Alegria"
        description="É com esse pensamento e engajados no espírito de transformação..."
        image={img2}
      />
      <Card
        title="Pasta de Amendoim: Origem e Benefícios"
        description="Relembrando os doces de Festa Junina, as pastas de amendoim têm feito..."
        image={img3}
      />
      <Card
        title="Alimentos funcionais: três opções para incluir na dieta
"
        description="A busca pela boa alimentação é importante como um sinônimo de saúde."
        image={img1}
      />
      <Card
        title="Projeto de Alfabetização da Logo Ipsum na Fazenda Alegria"
        description="É com esse pensamento e engajados no espírito de transformação..."
        image={img2}
      />
      <Card
        title="Pasta de Amendoim: Origem e Benefícios"
        description="Relembrando os doces de Festa Junina, as pastas de amendoim têm feito..."
        image={img3}
      />
    </Container>
  );
}

export default Carousel;
