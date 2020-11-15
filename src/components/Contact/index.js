import React from 'react';

import { BiPhone } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import { Container, Links } from './styles';

function Contact() {
  return (
    <Container>
      <h3>CONTATO</h3>

      <Links>
        <BiPhone style={{ color: `${'var(--color-primary-light)'}` }} />
        <div>
          <a href="tel:+5531999999999">(XX) 9 9999-9999</a>
          <a href="tel:+5531999999999">(XX) 9 9999-9999</a>
        </div>
      </Links>

      <Links>
        <FiMail style={{ color: `${'var(--color-primary-light)'}` }} />
        <a href="mailto:ecommerce@logoipsum.com.br">
          ecommerce@logoipsum.com.br
        </a>
      </Links>

      <Links className="callus">
        <a href="/callus">Fale Conosco</a>
      </Links>
    </Container>
  );
}

export default Contact;
