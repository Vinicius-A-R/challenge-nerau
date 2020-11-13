import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo-large.svg';
import img from '../../assets/img/sport-1.png';

import Button from '../Button';

import { FaPlay } from 'react-icons/fa';
import { Container, Description, Text, Sport, Play, Image } from './styles';

function SectionSport() {
  return (
    <Container>
      <Description>
        <h1>
          Energia que <br /> nutre o esporte.
        </h1>

        <Text>
          <span>
            Quando você coloca suas granolas e alimentos favoritos na sacola,
            tenha certeza de que o seu pedido está ajudando a fazer acontecer
            algum projeto no esporte.
          </span>
          <span>
            Nos nossos mais de 20 anos de história, apoiamos grupos esportivos e
            atletas de várias modalidades: triathlon, mountain bike, ciclismo,
            corrida, jiu-jitsu, canoagem, stand up paddle, judô e corrida de
            aventura, por exemplo.
          </span>
          <span>
            É assim que a Logo Ipsum nutre o esporte com toda a energia que ele
            merece. Fazemos questão de estar presentes sempre. E lembre-se: você
            é parte importante dessa saudável relação.
          </span>
        </Text>

        <Button bgColor={`var(--color-secondary)`} color="#fff">
          SAIBA MAIS
        </Button>
      </Description>

      <Sport>
        <Play>
          <FaPlay />
        </Play>

        <Image>
          <img src={img} alt="logo ipsum" />
          <Logo className="logo" />
          <div className="overlay"></div>
        </Image>
      </Sport>
    </Container>
  );
}

export default SectionSport;
