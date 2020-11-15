import React, { useState } from 'react';

import { ReactComponent as Icon1 } from '../../assets/icons/athlete-2.svg';
import { ReactComponent as Icon2 } from '../../assets/icons/team.svg';
import { ReactComponent as Icon3 } from '../../assets/icons/hand.svg';

import img1 from '../../assets/img/athletes-1.png';
import img2 from '../../assets/img/athletes-2.png';
import img3 from '../../assets/img/athletes-3.png';
import img4 from '../../assets/img/athletes-4.png';

import Carousel from './Carousel';
import Card from './Card';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import {
  Container,
  Description,
  Tags,
  Tag,
  Slider,
  ButtonArrow,
  NotFound,
} from './styles';

function SectionAthletes() {
  const [active, setActive] = useState({
    tag1: true,
    tag2: false,
    tag3: false,
  });

  const scroll = (arrow) => {
    const scroll = document.getElementById('athletes-carousel');

    if (arrow === 'right') {
      scroll.scrollLeft += 288 + 24;
    }

    if (arrow === 'left') {
      scroll.scrollLeft -= 288 + 24;
    }
  };

  return (
    <Container>
      <Description>
        <h2>
          Logo Ipsum <br /> transforma o esporte.
        </h2>

        <span>
          Ao longo da nossa história, apoiamos atletas e grupos esportivos de
          diversas modalidades. Queremos estar presentes sempre.
        </span>
      </Description>

      <Tags>
        <Tag
          active={active.tag1}
          onClick={() => setActive({ tag1: true, tag2: false, tag3: false })}
        >
          <Icon1 style={{ color: 'var(--color-fourth)' }} /> ATLETAS
        </Tag>
        <Tag
          active={active.tag2}
          onClick={() => setActive({ tag1: false, tag2: true, tag3: false })}
        >
          <Icon2 /> EQUIPES
        </Tag>
        <Tag
          active={active.tag3}
          onClick={() => setActive({ tag1: false, tag2: false, tag3: true })}
        >
          <Icon3 /> PARCEIROS
        </Tag>
      </Tags>

      <Slider>
        {active.tag1 && (
          <>
            <ButtonArrow onClick={() => scroll('left')}>
              <MdKeyboardArrowLeft />
            </ButtonArrow>

            <Carousel>
              <Card image={img1} title="José Batista" text="Atletismo" />
              <Card image={img2} title="Kleber Amaral" text="Atletismo" />
              <Card image={img3} title="Issac Ferraz" text="Trail Running" />
              <Card image={img4} title="Jucelino Oliveira" text="Atletismo" />
              <Card image={img1} title="José Batista" text="Atletismo" />
              <Card image={img2} title="Kleber Amaral" text="Atletismo" />
              <Card image={img3} title="Issac Ferraz" text="Trail Running" />
              <Card image={img4} title="Jucelino Oliveira" text="Atletismo" />
            </Carousel>

            <ButtonArrow onClick={() => scroll('right')}>
              <MdKeyboardArrowRight />
            </ButtonArrow>
          </>
        )}

        {active.tag2 && <NotFound>Não Encontrado</NotFound>}

        {active.tag3 && <NotFound>Não Encontrado</NotFound>}
      </Slider>
    </Container>
  );
}

export default SectionAthletes;
