import React from 'react';

import img1 from '../../assets/img/empresa-1.png';
import img2 from '../../assets/img/empresa-2.png';
import img3 from '../../assets/img/empresa-3.png';

import { ReactComponent as Icon1 } from '../../assets/icons/iconcompany-icon-1.svg';
import { ReactComponent as Icon2 } from '../../assets/icons/iconcompany-icon-2.svg';
import { ReactComponent as Icon3 } from '../../assets/icons/iconcompany-icon-3.svg';

import Card from './Card';

import { MdKeyboardArrowRight } from 'react-icons/md/';
import { Container, Header, Cards } from './styles';

function SectionCompany() {
  return (
    <Container>
      <Header>
        <h1>Nascemos de um sonho, para fazer a diferença no mundo</h1>

        <span>
          Descubra como tudo começou e entenda por que a Logo Ipsum faz a
          diferença no mundo. Há muitos sabores para se deliciar.
        </span>

        <button type="button">
          <MdKeyboardArrowRight />
          <span>Conheça a Logo Ipsum</span>
        </button>
      </Header>

      <Cards>
        <Card>
          <img src={img1} alt="logoipsum" />
          <Icon1 />
          <span>
            Logo Ipsum Transforma: projetos que fazem bem, bem mais feliz.
          </span>
        </Card>
        <Card>
          <img src={img2} alt="logoipsum" />
          <Icon2 />
          <span>
            Logo Ipsum Transforma: projetos que fazem bem, bem mais feliz.
          </span>
        </Card>
        <Card>
          <img src={img3} alt="logoipsum" />
          <Icon3 />
          <span>
            Logo Ipsum Transforma: projetos que fazem bem, bem mais feliz.
          </span>
        </Card>
      </Cards>
    </Container>
  );
}

export default SectionCompany;
