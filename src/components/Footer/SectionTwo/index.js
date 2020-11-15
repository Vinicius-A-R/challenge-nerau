import React from 'react';
import { Link } from 'react-router-dom';

import CompanyIntroduction from '../../CompanyIntroduction';
import Contact from '../../Contact';
import Reseller from '../../Reseller';
import Payments from '../../Payments';
import Sustainability from '../../Sustainability';

import { FaFacebookSquare, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Container, Content, SocialMedia, Pay, Sustainable } from './styles';

function SectionTwo() {
  return (
    <Container>
      <Content>
        <CompanyIntroduction />

        <div>
          <Contact />
          <Reseller />
        </div>

        <div>
          <SocialMedia>
            <h3>ACOMPANHE:</h3>

            <div>
              <Link to="/">
                <FaFacebookSquare />
              </Link>
              <Link to="/">
                <FaInstagram />
              </Link>
              <Link to="/">
                <FaYoutube />
              </Link>
            </div>
          </SocialMedia>

          <Pay>
            <h3>FORMAS DE PAGAMENTO:</h3>

            <Payments />
          </Pay>

          <Sustainable>
            <h3>SUSTENTABILIDADE:</h3>

            <Sustainability />
          </Sustainable>
        </div>
      </Content>
    </Container>
  );
}

export default SectionTwo;
