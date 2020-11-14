import React from 'react';

import img1 from '../../assets/img/instagram-1.png';
import img2 from '../../assets/img/instagram-2.png';
import img3 from '../../assets/img/instagram-3.png';

import { FaInstagram } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { Container, Description, Carousel, ButtonArrow } from './styles';

function SectionInstagram() {
  const scroll = () => {
    let scroll = document.getElementById('instagram-carousel');

    scroll.scrollLeft += 288;

    if (scroll.scrollLeft + scroll.offsetWidth >= scroll.scrollWidth) {
      scroll.scrollTo(0, 0);
    }
  };

  return (
    <Container>
      <Description>
        <FaInstagram />
        <h2>O que faz bem mais feliz é feito pra compartilhar.</h2>

        <span>#logoipsum</span>
      </Description>

      <Carousel id="instagram-carousel">
        <img src={img1} alt="logo ipsum instagram" />
        <img src={img2} alt="logo ipsum instagram" />
        <img src={img3} alt="logo ipsum instagram" />
        <img src={img1} alt="logo ipsum instagram" />
        <img src={img2} alt="logo ipsum instagram" />
        <img src={img3} alt="logo ipsum instagram" />
      </Carousel>
      <ButtonArrow onClick={scroll}>
        <MdKeyboardArrowRight />
      </ButtonArrow>
    </Container>
  );
}

export default SectionInstagram;
